import { useState } from "react";
import Baghistory from "../home/Baghistory";
import Feehistory from "../home/FeeHistory";
import useUser from "../../global/jotai";

const HomeSceen = () => {
  const [state] = useUser();
  console.log(typeof state);
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(true);

  const onToggle = () => {
    setToggle1(false);
    setToggle(true);
  };
  const onToggle1 = () => {
    setToggle1(true);
    setToggle(false);
  };

  return (
    <div className="w-full h-screen ">
      <div className="mt-10 flex justify-center w-full">
        <button
          className={`
          px-10 py-4 bg-[${
            toggle1 ? "darkorange" : "white"
          }] rounded-[30px] mx-2 border-[1px] border-[#000]
          border-[${toggle1 ? "" : "1px"}]
          text-[${toggle1 ? "blue" : "darkorange"}]

          `}
          style={{
            color: `${toggle1 ? "blue" : "green"}`,
          }}
          onClick={onToggle}
        >
          Bag History
        </button>
        <button
          className={`
          px-10 py-4 bg-[${
            toggle ? "darkorange" : "red"
          }] rounded-[30px] mx-2 border-[1px] border-[#000]
          border-[${toggle ? "" : "1px"}]
          text-[${toggle ? "red" : ""}]

          `}
          style={{
            color: `${toggle ? "blue" : "green"}`,
          }}
          onClick={onToggle1}
        >
          Fees History
        </button>
      </div>

      {toggle ? (
        <div>
          <Baghistory />
        </div>
      ) : (
        <div>
          <Feehistory />
        </div>
      )}
    </div>
  );
};

export default HomeSceen;
