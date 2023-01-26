import React from "react";

// import images
import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] ">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[800px] block ">
        The value that holds us true to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center ">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] ">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={logo1} alt="" className="w-[70%] " />
            </div>
            <span className="font-bold text-textColor text-[18px] ">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautify simple are at the heart of everything we
            do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem] ">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={logo2} alt="" className="w-[70%] " />
            </div>
            <span className="font-bold text-textColor text-[18px] ">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautify simple are at the heart of everything we
            do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem] ">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={logo3} alt="" className="w-[70%] " />
            </div>
            <span className="font-bold text-textColor text-[18px] ">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautify simple are at the heart of everything we
            do.
          </p>
        </div>
      </div>
      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px] ">
        <div>
          <h1 className="text-blueColor text-[30px]  font-bold">
            Ready to switch a Career{" "}
          </h1>
          <h2 className="text-gray-600 text-[25px]  font-bold ">
            Lets get started!{" "}
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
