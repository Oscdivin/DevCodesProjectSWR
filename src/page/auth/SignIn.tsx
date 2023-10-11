import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { singinStudent } from "../../api/userAPI"
import useUser from "../../global/jotai";

const Signin = () => {
  const   [state, setState] = useUser();
  console.log(state)
  // const navigate= useNavigate();
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  })
  const onHandleSubmit = handleSubmit(async (data:any) => {
    console.log("handle sumbit",data)
    singinStudent(data).then(()=>{
      setState("/")
      // navigate("/")
    })
  })
  return (
    <div>
      
  <div className="w-[100%] h-screen  flex 
  justify-center items-center bg-blue-700">
<div className="h-[45vh] w-[70%] flex justify-center">
<form action="" className="flex flex-col
 bg-[#3f3f3f4f] w-[40%] gap-5 items-center flex-wrap
  rounded-[7px]" 
  onSubmit={onHandleSubmit}
  >
<center className="flex justify-center items-center h-[70px] flex-col text-[#ffff]">
<h1>Login</h1>
<span>Please Login</span>
</center>


  <input type="text" className="w-[80%] px-[10px] rounded-[10px] h-[34px] text-[#ffff] outline-none bg-transparent border-[#ffff] border-[1px]" placeholder="Email"
   {...register("email")}
   />
  <input type="password" className="w-[80%] px-[10px] rounded-[10px] text-[#ffff] h-[34px] outline-none bg-transparent border-[#ffff] border-[1px]" placeholder="Password"
   {...register("password")}
   />


<div className="h-[70px]  flex  justify-center items-center gap-4">
<Link to="/user">
<button className="py-[15px] px-[25px] bg-[#3f3f3f4f] rounded-[7px] text-[#fff]" type="submit">
  Login
</button>
            
              </Link>

<Link to="/register">
<button className="py-[15px] px-[25px] bg-[#3f3f3f4f] rounded-[7px] text-[#fff]" type="submit">
Register
</button>
            
              </Link>
</div>


</form>
</div>
  </div>
    </div>
  )
}

export default Signin
