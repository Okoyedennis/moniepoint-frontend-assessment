import React from "react";
import img1 from "../asset/control.png";
import { FaLink } from "react-icons/fa";
import Animate from "./Animate";

const Control = () => {
  return (
    <section className="mt-[5rem]">
      <Animate>
        <h2 className="text-[6rem] space-x-[2rem] mt-[-1rem]">
          We give you full <br />
          <span className="text-grayPrimary2">control</span> over your data
        </h2>
      </Animate>
      <Animate>
        <div className="my-[1rem] flex items-center justify-center w-full">
          <img src={img1} alt="" className="h-[30rem] object-contain" />
        </div>
      </Animate>
      <Animate>
        <div className="flex items-center justify-center flex-col h-[80vh] w-full">
          <div className="bg-orangePrimary rounded-[20px] h-[6rem] w-[6rem] flex items-center justify-center shadow-md">
            <FaLink className="text-white h-[3rem] w-[3rem]" />
          </div>
          <h4 className="text-[6rem] my-[1rem]">Get Started</h4>
          <p className="text-center">
            Turn information into advantage! Start using <br /> Ramos today.
            Sign up for a free trial.
          </p>
          <div className="flex items-center justify-center gap-[1rem] my-[2rem]">
            <button className="bg-grayPrimary3 rounded-[10px] w-[10rem] py-[1rem] text-sm font-medium ">
              Request a demo
            </button>
            <button className="bg-orangePrimary rounded-[10px] w-[10rem] py-[1rem] text-sm font-medium text-white ">
              Start for free
            </button>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Control;
