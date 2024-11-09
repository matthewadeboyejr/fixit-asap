import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoFacebook } from "react-icons/io5";
import LoginForm from "../components/forms/LoginForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoogleLogin } from "../api/socialLogin";
import { useNavigate } from "react-router-dom";
import { PreHeader } from "../components/general/Header";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-light">
      <PreHeader />
      <section className=" flex justify-center    ">
        <div className="flex  flex-col w-full md:w-1/3 space-y-5 px-5 ">
          <div className="flex items-center gap-3 px-3">
            <IoIosArrowRoundBack
              onClick={() => navigate(-1)}
              className="text-4xl font-black text-secondary cursor-pointer hover:scale-125"
            />
            <h1 className="text-2xl tracking-wider font-semibold ">
              Sign<span className="italic">In</span>
            </h1>{" "}
          </div>

          <div className=" flex items-center justify-between border w-full md:justify-around p-4 rounded-md">
            <p className=" font-medium text-sm">Social login's </p>
            <p className=" font-medium">|</p>
            <div className="flex items-center gap-5 text-2xl">
              <FcGoogle onClick={GoogleLogin()} className="cursor-pointer" />
              <IoLogoFacebook className="text-[#1877F2] cursor-pointer" />
              <IoLogoApple className="cursor-pointer" />
            </div>
          </div>
          <div className="border-b-2 w-20 border-b-secondary mx-3"></div>
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Login;
