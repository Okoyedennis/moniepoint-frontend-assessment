import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { DiDotnet } from "react-icons/di";
import img1 from "../asset/laptop.png";
import Animate from "./Animate";

const Banneer = () => {
  return (
    <Animate>
      <section className="snap-center transition-all duration-500 ease-in mt-[5rem]">
        <div className="flex justify-center w-full">
          <div className="flex-[.8]">
            <div className="flex items-center ml-[10rem]">
              <div className="rounded-full bg-grayPrimary h-[6rem] w-[6rem] flex items-center justify-center">
                <BsLightningChargeFill className="text-orangePrimary h-[2.5rem] w-[2.5rem]" />
              </div>
              <div className="rounded-full bg-orangePrimary h-[6rem] w-[6rem] flex items-center justify-center ml-[-2rem]">
                <DiDotnet className="text-grayPrimary h-[2.5rem] w-[2.5rem]" />
              </div>
              <h2 className="text-[6rem] space-x-[2rem]">Analytics</h2>
            </div>
            <h2 className="text-[6rem] space-x-[2rem] mt-[-1rem]">
              that <span className="text-grayPrimary2">helps</span> you
            </h2>
          </div>

          <div className="flex-[.5] ">
            <img
              src={img1}
              alt="laptop"
              className="h-[18rem] w-[30rem] object-contain mb-[5rem]"
            />
          </div>
        </div>
        <h2 className="text-[6rem] space-x-[2rem] text-center mt-[-6rem] ml-[3rem]">
          that <span className="text-grayPrimary2">shape</span> the future
        </h2>
      </section>
    </Animate>
  );
};

export default Banneer;
