import React from "react";
import Navbar from "../components/Navbar";
import Banneer from "../components/Banneer";
import Strategy from "../components/Strategy";
import MaxEfficiency from "../components/MaxEfficiency";
import Control from "../components/Control";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="app_container font-poppins">
      <Navbar />
      <Banneer />
      <Strategy />
      <MaxEfficiency />
      <Control />
      <Footer />
    </div>
  );
};

export default HomePage;
