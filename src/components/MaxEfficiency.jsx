import React from "react";
import { MdOutlineMonitorHeart } from "react-icons/md";
import Marquee from "react-fast-marquee";
import img1 from "../asset/appview.png";
import Animate from "./Animate";

const MaxEfficiency = () => {
  return (
    <section className="mt-[5rem]">
      <Animate>
        <h2 className="text-[6rem] space-x-[2rem] mt-[-1rem]">
          Maximize <span className="text-grayPrimary2">efficiency</span>
        </h2>
        <h2 className="text-[6rem] space-x-[2rem] mt-[-1rem]">
          with our intuitive
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="rounded-full bg-grayPrimary h-[7rem] w-[7rem] flex items-center justify-center mr-[-1rem] z-50">
              <MdOutlineMonitorHeart className="text-orangePrimary h-[2.5rem] w-[2.5rem]" />
            </div>
            <div className="rounded-full bg-yellowPrimary h-[7rem] w-[7rem] flex items-center justify-center flex-col">
              <h5 className="font-medium">45%</h5>
              <p className="text-[10px] text-center">
                System grow <br />
                faster
              </p>
            </div>
          </div>
          <div className="w-[40rem] bg-yellowPrimary h-[7rem] text-[5rem] rounded-[50px] px-[1rem] ">
            <Marquee autoFill>
              <p className="mr-[.5rem]">analytics service</p>
            </Marquee>
          </div>
        </div>
        <hr className="my-[3rem]" />
        <div className="flex items-center justify-between">
          <div className="flex-[.8]">
            <p className="font-normal">
              Explore traffic sources. page behaviour, conversions and more to
              gain deeep insight <br />
              into your audience. With us, your business doesn't just adopt - it
              envolves
            </p>
          </div>
          <div className="flex-[.2] flex items-center justify-end w-full gap-[1rem]">
            <button className="bg-grayPrimary3 rounded-[10px] w-[15rem] py-[1rem] text-sm font-medium ">
              Request a demo
            </button>
            <button className="bg-orangePrimary rounded-[10px] w-[15rem] py-[1rem] text-sm font-medium text-white ">
              Start for free
            </button>
          </div>
        </div>
      </Animate>
      <Animate>
        <div className="mt-[5rem]">
          <img src={img1} alt="" className="object-contain" />
        </div>
      </Animate>
    </section>
  );
};

export default MaxEfficiency;
