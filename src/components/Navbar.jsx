import React from "react";
import { FaLink } from "react-icons/fa";

const Navbar = () => {
  const menu = [
    { text: "Dashboard" },
    { text: "Reports" },
    { text: "Documents" },
    { text: "History" },
    { text: "Settings" },
  ];
  return (
    <nav className="rounded-[20px] h-[70px] flex items-center justify-between px-[1rem] bg-black mt-[1rem] text-white">
      <div className="flex items-center gap-[.3rem]">
        <FaLink />
        <h3 className="font-bold">ramos</h3>
      </div>
      <div className="flex items-center gap-[1rem] font-normal text-sm bg-navBg rounded-[20px] px-[2rem] py-[1rem]">
        {menu.map((item) => (
          <h5>{item.text}</h5>
        ))}
      </div>
      <div className="font-normal text-sm bg-white rounded-[20px] px-[2rem] py-[1rem] text-navBg">
        <h5>Sign Up</h5>
      </div>
    </nav>
  );
};

export default Navbar;
