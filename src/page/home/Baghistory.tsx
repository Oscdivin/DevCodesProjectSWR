import image from "../../assets/react.svg";

const Baghistory = () => {
  return (
    <div>
      <div className="w-[100%] h-[500px] flex justify-center items-center">
        <div className="w-[50%] h-[400px] flex justify-center items-center">
          <div className="w-[400px] min-h-[100px] bg-[#f432] flex flex-col justify-center items-center rounded-[7px]">
            <div className="w-[100px] h-[130px] flex justify-center items-cente flex-col gap-3">
              <span>quantity: 71</span>
              <span>Cost 6</span>
            </div>
              <div className="w-[300px] h-[130px] flex items-center justify-center">
                <img src={image} alt="" className="w-full h-[130px] object-cover"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baghistory;