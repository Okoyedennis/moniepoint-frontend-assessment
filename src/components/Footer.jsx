import React from "react";
import img1 from "../asset/footer.png";
import img2 from "../asset/QR_code.png";
import Animate from "./Animate";

const Footer = () => {
  const menu = [
    { text: "About" },
    { text: "Why Us" },
    { text: "Platform" },
    { text: "Pricing" },
    { text: "Contacts" },
  ];

  return (
    <Animate>
      <div className="bg-blackPrimary pt-[2rem] px-[1rem] rounded-b-[2rem]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1rem]">
            {menu.map((item, index) => (
              <p className="text-grayPrimary4">{item.text}</p>
            ))}
          </div>
          <h3 className="text-white text-[40px]">hello@ramos.com</h3>
        </div>
        <hr className="my-[2rem]" />

        <div className="flex items-start justify-between ">
          <div className="flex items-center gap-[4rem]">
            <div className="">
              <h5 className="text-white font-medium text-lg">
                Warransville Heights
              </h5>
              <p className="text-grayPrimary4 font-normal text-sm my-[.3rem]">
                14418 Vineyard Drive NC
              </p>
              <p className="text-grayPrimary4 font-normal text-sm">44128</p>
            </div>
            <div className="">
              <h5 className="text-white font-medium text-lg">Saint Louis</h5>
              <p className="text-grayPrimary4 font-normal text-sm my-[.3rem]">
                1366 Penn Street
              </p>
              <p className="text-grayPrimary4 font-normal text-sm">63101</p>
            </div>
          </div>
          <div className="">
            <p className="text-grayPrimary4 font-normal text-lg">Linkedin</p>
            <p className="text-grayPrimary4 font-normal text-lg my-[1rem]">
              Instagram
            </p>
            <p className="text-grayPrimary4 font-normal text-lg">Facebook</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-[2rem]">
          <img src={img1} alt="footer" className="h-[5rem] object-contain" />
          <div className="flex items-center gap-[3rem]">
            <p className="text-grayPrimary4 font-normal">Privacy policy</p>
            <p className="text-grayPrimary4 font-normal">License agreement</p>
            <img src={img2} alt="" className="h-[5rem] object-contain" />
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default Footer;
