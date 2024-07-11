import React from "react";
import { LandingHeader } from "../components/general/Header";
import mockup from "../components/Images/mockup.png";
import HeaderPic from "../components/Images/smiling-crossing-hands-young-african-american-builder-uniform-isolated-blue-background.jpg";
import PlayStore from "../components/Images/googleplay.png";
import AppStore from "../components/Images/appstore.png";
import { useNavigate } from "react-router-dom";
/* import { IoFilterOutline, IoAdd } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri"; */

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen">
      <section className=" pt-5">
        <LandingHeader />
      </section>

      <section className="grid md:grid-cols-2 justify-items-center pt-5">
        <div className="  font-medium  space-y-5 flex flex-col justify-center  md:p-20 p-10">
          <h1 className="flex flex-col md:text-left text-center  ">
            <span className="md:text-3xl text-xl">
              Securing reliable tradesmen{" "}
            </span>
            <span className="italic md:text-7xl text-5xl"> easy and fast</span>
          </h1>
          <p className="text-sm font-normal md:w-1/2 md:text-left text-center opacity-70 ">
            Find home service providers and/or become a provider to provide
            services to clients in need of your services. Download the wrkman
            app to get started!
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="bg-primary text-white  text-sm font-normal py-3 px-10 rounded-sm hover:bg-transparent hover:text-primary border border-primary transition-colors animate-pulse"
            >
              Explore service
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center  ">
          <img
            src={HeaderPic}
            className="w-fit h-auto "
            alt="headers picture"
          />
          {/* <img src={mockup} className="w-2/3  h-auto " /> */}
        </div>
      </section>

      <section className="bg-light space-y-10 p-10">
        <h2 className="text-center text-3xl font-semibold">
          Stop wasting time -
          <span className="italic">book a tradesmen Asap</span>
        </h2>
        <div className=" flex items-center justify-center space-x-5  ">
          <img
            src={PlayStore}
            className=" max-w-36  md:max-w-44 "
            alt="download on playstore"
          />
          <img
            src={AppStore}
            className="max-w-36 md:max-w-44"
            alt="download on appstore"
          />
        </div>
        <div className="  flex items-center justify-center  ">
          <img
            src={mockup}
            className="w-72  h-auto animate-pulse"
            alt="mockup of mobile app"
          />
        </div>
      </section>
      <h2 className="text-center text-3xl font-semibold">
        Who can use - <span className="italic">Fixit-ASAP</span>
      </h2>

      <div></div>
      <section></section>
    </div>
  );
};

export default Landing;
