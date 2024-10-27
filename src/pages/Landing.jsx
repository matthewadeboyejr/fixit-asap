import React from "react";
import { LandingHeader } from "../components/general/Header";
import mockup from "../Images/mockup.png";
import HeaderPic from "../Images/HeaderPics2.jpg";
import { useNavigate } from "react-router-dom";
import GooglePlay from "../Images/GooglePlay";
import AppStore from "../Images/AppStore";
import { motion } from "framer-motion";
import Footer from "../components/general/Footer";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen ">
      <section className=" pt-5">
        <LandingHeader />
      </section>

      <section className="grid md:grid-cols-2 justify-items-center pt-5">
        <div className="  font-medium  space-y-5 flex flex-col justify-center  md:p-20 p-10">
          <h1 className="flex flex-col md:text-left text-center  ">
            <span className="md:text-3xl text-xl">Reliable Tradesmen,</span>
            <span className="italic md:text-7xl text-5xl text-secondary ">
              Anytime You Need
            </span>
          </h1>
          <p className="text-sm font-normal md:w-1/2 md:text-left text-center opacity-70 ">
            Connecting you with trusted artisans for all your household and
            environmental fixes ASAP
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className=" border-primary bg-teriary p-2 rounded-full hover:bg-teriary border-b-4   text-sm font-normal py-3 px-10  hover:bg-transparent text-primary  transition-colors "
            >
              Explore services
            </button>
          </div>
        </div>

        <div className="">
          <img
            src={HeaderPic}
            className="w-full h-full "
            alt="A happy client and a trademan happy"
          />
          {/* <img src={mockup} className="w-2/3  h-auto " /> */}
        </div>
      </section>

      <section className="bg-light space-y-10 p-10">
        <h2 className="text-center text-3xl font-semibold">
          Stop wasting time -
          <span className="italic text-secondary">book a tradesmen Asap</span>
        </h2>
        <div className=" flex items-center justify-center space-x-5  ">
          <GooglePlay />
          <AppStore />
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            initial={{
              x: 100,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            src={mockup}
            className="w-72  h-auto "
            alt=""
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
