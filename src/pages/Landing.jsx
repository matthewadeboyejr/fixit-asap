import React from "react";
import { LandingHeader } from "../components/general/Header";
import artisansApp from "../Images/artisansApp.png";
import usersApp from "../Images/usersApp.png";
import HeaderPic from "../Images/HeaderPics2.jpg";
import { useNavigate } from "react-router-dom";
import GooglePlay from "../Images/GooglePlay";
import AppStore from "../Images/AppStore";
import { motion } from "framer-motion";
import Footer from "../components/general/Footer";
import { CiGlobe } from "react-icons/ci";
import Faq from "../components/landing/Faq";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen overflow-x-hidden">
      <section className=" pt-5">
        <LandingHeader />
      </section>

      <header className="bg-light space-y-10 md:pt-20 pt-10 h-[48rem] overflow-y-clip px-8">
        <div>
          <motion.h1
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
            className="text-center md:text-6xl text-3xl font-bold flex flex-col"
          >
            <span>Your One-Stop Solution</span>
            <span className="itali text-secondary">for Expert Services</span>
          </motion.h1>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2, stiffnes: 1000, velocity: -100 }}
            className=" text-primary text-center py-4 text-lg font-medium"
          >
            Need a professional service provider? Or are you a skilled service
            provider looking to connect?
          </motion.p>
        </div>

        <div className=" flex md:flex-row flex-col  w-full items-center justify-center space-x-5 space-y-5 md:space-y-0   ">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="flex  items-center gap-2 bg-teriary hover:scale-110 font-medium text-primary hover:bg-opacity-90 transition-all duration-700 p-2 rounded-md"
          >
            <CiGlobe />
            Book on the Web
          </button>
          <div className="flex space-x-5">
            <GooglePlay />
            <AppStore />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            initial={{
              x: 100,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
            src={usersApp}
            className="w-72  h-auto "
            alt=""
          />
        </div>
      </header>
      <section className=" space-y-10 p-10  md:px-64 py-32">
        <div>
          <p className="  flex justify-center text-primary text-center my-4  font-medium opacity-60 ">
            <span className="bg-gray-200 rounded-full w-fit p-2 text-xs font-semibold">
              Service user
            </span>
          </p>
          <motion.h2
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-4xl  font-semibold flex flex-col"
          >
            <span>Service providers on Your Schedule </span>
            <span>Quick Responses, On Your Time </span>
          </motion.h2>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2, stiffnes: 1000, velocity: -100 }}
            className=" text-primary text-center py-4 text-lg font-medium "
          >
            No more waiting days for a response! Our service providers are ready
            to match your timing, ensuring you get the help you need when you
            need it. Reliable, prompt, and professional—your convenience is
            their priority.
          </motion.p>
        </div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className=" flex md:flex-row flex-col  w-full items-center justify-center space-x-5 space-y-5 md:space-y-0   "
        >
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="flex rounded-full items-center gap-2 bg-teriary font-medium text-primary hover:bg-opacity-90 transition-all duration-700  py-3 px-10 "
          >
            Register as a User
          </button>
        </motion.div>
      </section>
      <section className="grid md:grid-cols-2 justify-items-center pt-5">
        <div className="bg-primary  font-medium  space-y-5 flex flex-col justify-center w-full  md:p-20 p-10">
          <motion.h2
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
            className="flex flex-col md:text-left text-center  "
          >
            <span className="md:text-3xl text-xl text-white">
              Reliable Service provider,
            </span>
            <span className="italic md:text-4xl text-2xl text-secondary ">
              Showcase Your Skills & Grow Your Business
            </span>
          </motion.h2>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2, stiffnes: 1000, velocity: -100 }}
            className="text-sm font-normal  md:text-left text-center opacity-780 text-white "
          >
            Take control of your schedule! Connect with clients, Choose jobs
            that fit your availability and work when it suits you best.
          </motion.p>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 3, stiffnes: 1000, velocity: -100 }}
            className="flex justify-center md:justify-start"
          >
            <button
              onClick={() => {
                navigate("/login");
              }}
              className=" border-primary bg-teriary p-2 rounded-full hover:scale-110 border-b-4 font-medium  py-3 px-10   text-primary  transition-transform duration-300 "
            >
              Register as service provider
            </button>
          </motion.div>
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
      <section className="bg-light shadow-lg rounded-t-lg space-y-10 px-10 pt-32 md:mx-64 md:mt-32  mx-10 mt-10 ">
        <div>
          <p className="  flex justify-center text-primary text-center my-4  font-medium opacity-60 ">
            <span className="bg-gray-200 rounded-full w-fit p-2 text-xs font-semibold">
              service providers
            </span>
          </p>
          <h2 className="text-center md:text-4xl text-2xl  font-semibold flex flex-col">
            <span className="text-secondary">Set Your Own Rates </span>
            <span>Your skills, your value, your rules. </span>
          </h2>
          <p className=" text-primary text-center py-4 md:text-lg text-sm  font-medium  ">
            You're in control! Decide how much to charge for your services
            without any interference from us.
          </p>
        </div>
        <div className=" flex md:flex-row flex-col  w-full items-center justify-center space-x-5 space-y-5 md:space-y-0   ">
          <button
            //onClick={() => {
            //navigate("/signup");
            //}}
            className="flex rounded-full items-center gap-2 bg-teriary font-medium text-primary hover:bg-opacity-90 hover:scale-110 transition-all duration-300  py-3 px-10 "
          >
            Download App
          </button>
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
            src={artisansApp}
            className="w-72 h-auto shadow-lg shadow-primary/20"
            alt=""
          />
        </div>
      </section>
      <Faq />
      <section className=" space-y-10 p-10  md:px-64 py-32">
        <div>
          <p className=" text-primary text-center py-4 text-lg font-medium opacity-60">
            Newsletter
          </p>
          <h2 className="text-center text-3xl  font-semibold flex flex-col text-secondary ">
            <span> Stay in the Loop with Service Rendering </span>
          </h2>
          <p className=" text-primary text-center py-4 text-sm font-medium ">
            Stay informed with tips, updates, and exclusive features for both
            service users and service providers.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-5">
          <input
            placeholder="First Name "
            className="rounded-full border p-4 w-full border-secondary placeholder:text-sm"
          />
          <input
            placeholder="Email "
            className="rounded-full border p-4 w-full border-secondary placeholder:text-sm"
          />
        </div>
        <div className="flex md:flex-row flex-col  w-full items-center justify-center space-x-5 space-y-5 md:space-y-0   ">
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="flex w-full md:w-fit justify-center rounded-full items-center gap-2 bg-teriary font-medium text-primary hover:bg-opacity-90 hover:scale-110 transition-all duration-300 py-3 px-10 "
          >
            Join our Newsletter
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
