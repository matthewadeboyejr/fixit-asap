import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoFacebook } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PreHeader } from "../components/general/Header";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-light w-screen min-h-screen ">
      <PreHeader />

      <section className=" flex justify-center md:items-center ">
        <div className="flex flex-col  md:w-1/3 w-full space-y-5 py-5 px-5 md:px-14">
          <div className="flex items-center gap-3 px-3">
            <IoIosArrowRoundBack
              onClick={() => navigate(-1)}
              className="text-4xl font-black text-secondary cursor-pointer hover:scale-125"
            />
            <h1 className="text-2xl tracking-wider font-semibold ">
              Sign<span className="italic">up</span>
            </h1>{" "}
          </div>

          <div className=" flex items-center justify-between border w-full md:justify-around p-4 rounded-md">
            <p className=" font-medium text-sm">Social signup's </p>
            <p className=" font-medium">|</p>
            <div className="flex items-center gap-5 text-2xl">
              <FcGoogle className="cursor-pointer" />
              <IoLogoFacebook className="text-[#1877F2] cursor-pointer" />
              <IoLogoApple className="cursor-pointer" />
            </div>
          </div>
          <div className="border-b-2 w-20 border-b-secondary mx-3"></div>
          <SignUpForm />
        </div>
      </section>
    </div>
  );
};

export default Signup;
