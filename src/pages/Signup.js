import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import Logo from "../components/Images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoFacebook } from "react-icons/io5";

const Signup = () => {
  return (
    <section className="w-screen min-h-screen flex justify-center md:items-center bg-light ">
      <div className="flex flex-col items-center md:w-1/3 w-full space-y-8 py-20 px-5 md:px-14">
        <img src={Logo} className="w-36 h-auto " alt="logo" />
        <h1 className="text-2xl tracking-wider font-semibold ">
          Sign<span className="italic">up to your account </span>
        </h1>
        <div className=" flex items-center justify-between border w-full md:justify-around p-4 rounded-md">
          <p className=" font-medium text-sm">Social signup's </p>
          <p className=" font-medium">|</p>
          <div className="flex items-center gap-5 text-2xl">
            <FcGoogle />
            <IoLogoFacebook className="text-[#1877F2]" />
            <IoLogoApple />
          </div>
        </div>
        <div className="border-b-2 w-20 border-b-secondary"></div>
        <SignUpForm />
      </div>
    </section>
  );
};

export default Signup;
