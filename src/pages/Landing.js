import React from "react";
import { LandingHeader } from "../components/general/Header";
import mockup from "../components/Images/mockup.png";
import HeaderPic from "../components/Images/HeaderPics2.jpg";
import { useNavigate } from "react-router-dom";
import GooglePlay from "../components/Images/GooglePlay";
import AppStore from "../components/Images/AppStore";
import { motion } from "framer-motion";
/* import { IoFilterOutline, IoAdd } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri"; */

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
            <span className="italic md:text-7xl text-5xl text-teriary ">
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
              className=" border-teriary bg-teriary p-2 rounded-full hover:bg-teriary border-b   text-sm font-normal py-3 px-10  hover:bg-transparent text-primary  transition-colors "
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
        <div className="  flex items-center justify-center  ">
          <motion.img
            initial={{
              x: 100,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            src={mockup}
            className="w-72  h-auto animate-pulse"
            alt=""
          />
        </div>
      </section>

      <section className="space-y-10 md:mx-96 mx-12 pt-10">
        <h2 className="text-center text-3xl font-semibold">
          Who can use <span className="italic text-secondary">Fixit-ASAP</span>
        </h2>
        <div className="flex gap-10  flex-col md:flex-row">
          <motion.div
            initial={{
              x: -100,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className=" bg-primary text-white  rounded-md p-7 space-y-5"
          >
            <h4 className="text-2xl">Need Tradesmen </h4>
            <p className="text-teriary">
              Find Professionals for all Needs, Find Professionals for Your
              Domestic Needs
            </p>
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="border-b border-teriary p-2 rounded-full hover:bg-teriary hover:text-primary"
            >
              explore
            </button>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className=" bg-primary text-white border rounded-md p-7 space-y-5"
          >
            <h4 className="text-2xl ">Be Tradesmen </h4>
            <p className="text-teriary">
              Have a Skill? Provide Services and Expand Your Customer Base,Join
              our platform to connect with customers in need of your expertise.
            </p>

            <button className="border-b border-teriary p-2 rounded-full hover:bg-teriary hover:text-primary">
              Join to connect
            </button>
          </motion.div>
          {/*  <div className=" bg-primary text-white border rounded-md p-7 space-y-5">
            <h4 className="font-medium">Set Your Schedule</h4>
            <p>
              Find Professionals for all Needs, Find Professionals for Your
              Domestic Needs
            </p>
          </div> */}
        </div>
      </section>
      <section className=" pt-10 bg-primary text-white my-20">
        <h2 className="text-center text-3xl font-semibold ">
          Our Wall of Love
          <span className="italic text-secondary"></span>
        </h2>
        <p className="text-center">
          Read what trademen community members are saying about Fixit-Asap
        </p>
      </section>
    </div>
  );
};

export default Landing;
