import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PreHeader } from "../components/general/Header";
import { GoogleSignupButton } from "../api/socialLogin";
import { Toaster } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-light flex flex-col justify-center">
      <Toaster />
      <PreHeader />

      <section className=" flex  flex-1 items-center justify-center md:items-center ">
        <div className="flex flex-col  md:w-1/3 w-full space-y-5 py-5 px-5 md:px-14">
          <div className="flex items-center gap-3 px-3">
            <IoIosArrowRoundBack
              onClick={() => navigate(-1)}
              className="text-4xl font-black text-secondary cursor-pointer hover:scale-125"
            />
            <h1 className="text-2xl tracking-wider font-semibold ">
              Sign<span className="italic">up</span>
            </h1>
          </div>
          <GoogleSignupButton action="signup" />
          <div className="w-full border-b-secondary text-center font-medium text-sm opacity-65">
            Or sign up with email
          </div>
          <SignUpForm />
        </div>
      </section>
    </div>
  );
};

export default Signup;
