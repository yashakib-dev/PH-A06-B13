import React from "react";
import circleImg from "../../assets/circle.png";
import playImg from "../../assets/Play.png";
import heroImg from "../../assets/banner.png";
const Hero = () => {
  return (
    <>
      <div className=" hero-container container md:w-full w-[90%] mx-auto mt-16 min-h-160 md:flex justify-between items-center ">
        <div className=" md:w-200 w-[90%] mx-auto space-y-7 mb-4">
          <span className="flex items-center gap-1 bg-[#E1E7FF] rounded-full px-4 py-1 w-fit">
            <img src={circleImg} alt="" />
            <h3 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </h3>
          </span>
          <p className="md:text-7xl text-4xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </p>
          <p className="text-[#627382] md:text-lg text-sm">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.Explore
            Products
          </p>

          <div className="flex gap-4">
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold text-[#FFFFFF]">
              Explore Products
            </button>
            <button className="btn rounded-full  bg-transparent border-[#4F39F6]">
              <div className="flex items-center gap-2 ">
                <img src={playImg} alt="" />
                <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Watch Demo
                </p>
              </div>
            </button>
          </div>
        </div>

        <div>
          <img className="md:w-120 w-80 mx-auto" src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
