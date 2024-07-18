import React from "react";
import Logo from "../components/Images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoFacebook } from "react-icons/io5";
import LoginForm from "../components/forms/LoginForm";
import { GoogleLogin } from "../components/api/socialLogin";

const Login = () => {
  return (
    <section className="w-screen h-screen flex justify-center md:items-center bg-light ">
      <div className="flex flex-col items-center md:w-1/3 w-full space-y-8 py-20 px-5 md:px-14">
        <img src={Logo} className="w-36 h-auto " alt="logo" />
        <h1 className="text-2xl tracking-wider font-semibold ">
          Log<span className="italic">in to your account </span>
        </h1>
        <div className=" flex items-center justify-between border w-full md:justify-around p-4 rounded-md">
          <p className=" font-medium text-sm">Social login's </p>
          <p className=" font-medium">|</p>
          <div className="flex items-center gap-5 text-2xl">
            <FcGoogle onClick={GoogleLogin()} className="cursor-pointer" />
            <IoLogoFacebook className="text-[#1877F2]" />
            <IoLogoApple />
          </div>
        </div>
        <div className="border-b-2 w-20 border-b-secondary"></div>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
