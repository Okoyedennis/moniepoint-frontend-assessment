import React from "react";
import { TbBrandDatabricks } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import img1 from "../asset/graph.png";
import Animate from "./Animate";

const Strategy = () => {
  return (
    <div className="snap-center h-[100vh] transition-all duration-500 ease-in bg-grayPrimary3 rounded-[5rem] mt-[5rem] px-[5rem] py-[7rem]">
      <Animate>
        <div className="flex items-center justify-between">
          <h4 className="text-[40px] font-medium">
            Your key to strategic <br />
            success through analytics
          </h4>
          <h6 className="text-[20px] font-normal mr-[1rem]">
            Reeady for exciting, instantaneous <br /> all-accessible insights in
            real time
          </h6>
        </div>
      </Animate>

      <Animate>
        <div className="flex items-center gap-[1rem] mt-[4rem]">
          <div className="flex items-start border border-borderPrimary bg-white gap-[1rem] rounded-[1rem] h-[28rem] pt-[3rem] pl-[3rem] flex-[.6] shadow-lg">
            <div className="">
              <button className="bg-yellowPrimary text-sm rounded-[1rem] py-[1rem] px-[1rem] font-medium shadow-md">
                Setting up reports
              </button>
              <h3 className="font-normal text-[25px] mt-[4rem]">
                Fast and easy access <br /> to analytics
              </h3>
              <p className="mt-[2rem] text-grayPrimary4">
                One platform is a comprehensive <br />
                system to solution that will be the <br />
                first step towards digitalization of your business!
              </p>
            </div>
            <div className="rounded-tl-[1rem] border-t border-l p-[1rem] h-auto">
              <p className="text-lg font-normal">Sales statistic</p>
              <div className="flex items-center mt-[1rem] gap-[1rem]">
                <div className="flex items-center gap-[.5rem]">
                  <div className="rounded-full bg-orangePrimary h-[3.5rem] w-[3.5rem] flex items-center justify-center">
                    <TbBrandDatabricks className="text-white h-[1rem] w-[1rem]" />
                  </div>
                  <div className="">
                    <h5 className="text-grayPrimary5">Total profit</h5>
                    <h3 className="text-[25px] font-normal">$ 264,2k</h3>
                  </div>
                  <div className="rounded-[.5rem] bg-grayPrimary6 p-[1rem] w-auto">
                    <p className="font-normal text-sm">Visitors</p>
                    <div className="w-[6rem] h-[3px] bg-grayPrimary7 my-[.7rem]">
                      <div className="w-[2rem] bg-greenPrimary1 h-[3px]" />
                    </div>
                    <div className="flex items-start gap-[.5rem]">
                      <h4 className="text-[25px]">56k</h4>
                      <div className="rounded-full bg-greenPrimary1 h-[1.5rem] w-[1.5rem] flex items-center justify-center">
                        <FaArrowUp className="text-white h-[.8rem] w-[.8rem]" />
                      </div>
                      <p className="text-greenPrimary1 text-sm">+14%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[2rem]">
                <img src={img1} alt="graph" className="w-[20rem]" />
              </div>
            </div>
          </div>
          <div className="bg-blackPrimary rounded-[1rem] h-[28rem] w-full flex-[.4] shadow-lg">
            <div className="flex justify-center items-center flex-col w-full h-full">
              <div className="flex justify-center items-center  gap-[.5rem]">
                <div className="border border-borderPrimary2 rounded-[2rem] flex items-center flex-col justify-center w-[12rem] h-[13rem] gap-[2rem]">
                  <TbBrandDatabricks className="text-yellowPrimary h-[2rem] w-[2rem]" />
                  <div className="flex items-center">
                    <img
                      src="https://img.freepik.com/free-photo/waist-up-portrait-casually-dressed-young-mixed-race-female-with-curly-hair-smiling-cheerfully-during-audition-role-tv-series-feeling-excited-big-nervous-trying-impress-director_273609-1249.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais"
                      className="rounded-full border-2 border-blackPrimary bg-grayPrimary h-[3rem] w-[3rem] object-contain"
                      alt=""
                    />
                    <img
                      src="https://t3.ftcdn.net/jpg/04/17/85/08/360_F_417850826_ZQ98ggEKoZcqFjfLSgmBwYPHu1Tc4MGU.jpg"
                      className="rounded-full border-2 border-blackPrimary bg-grayPrimary h-[3rem] w-[3rem] object-contain ml-[-1rem]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border border-borderPrimary2 rounded-[2rem] flex items-center flex-col justify-center w-[12rem] h-[13rem] gap-[1rem] px-[1rem]">
                  <p className="text-white text-left font-normal self-start">
                    Transactions
                  </p>
                  <div className="flex items-center justify-end w-full gap-[.3rem]">
                    <div className="rounded-full bg-greenPrimary1 h-[1.5rem] w-[1.5rem] flex items-center justify-center">
                      <FaArrowUp className="text-white h-[.8rem] w-[.8rem]" />
                    </div>
                    <p className="text-greenPrimary1 text-xs">+14%</p>
                  </div>
                  <h4 className="text-white text-[45px] self-start">43K</h4>
                </div>
              </div>
              <h3 className="text-white my-[2rem] font-normal text-[25px]">
                Widget control
              </h3>
              <p className="text-grayPrimary5 text-center">
                Reports provide a comprehensive overview <br /> of important
                aspects of web analytics
              </p>
            </div>
          </div>
        </div>
      </Animate>

      <div className="flex items-end justify-center w-full gap-[.5rem] mt-[5rem]">
        <div className="flex items-center">
          <h5 className="font-medium text-xl">
            Up to <span className="text-[7rem]">45%</span>
          </h5>
        </div>
        <div className="">
          <p className="font-normal leading-[28px]">
            Increase your analytics efficiency by up to 45%. Unique <br />
            algorithms provide insights from data, reduce time for analysis{" "}
            <br /> and save time for making important, informed decisions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
