import React from "react";
import LoginForm from "../components/forms/LoginForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoogleSignupButton } from "../api/socialLogin";
import { useNavigate } from "react-router-dom";
import { PreHeader } from "../components/general/Header";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-light flex flex-col justify-center">
      <PreHeader />
      <section className=" flex  items-center  justify-center flex-1 ">
        <div className="flex  flex-col w-full md:w-[450px] space-y-5 px-5  ">
          <div className="flex items-center gap-3 px-3">
            <IoIosArrowRoundBack
              onClick={() => navigate(-1)}
              className="text-4xl font-black text-secondary cursor-pointer hover:scale-125"
            />
            <h1 className="text-2xl tracking-wider font-semibold ">
              Sign<span className="italic">In</span>
            </h1>{" "}
          </div>

          <GoogleSignupButton action="login" />

          <div className="w-full border-b-secondary text-center font-medium text-sm opacity-65">
            Or sign in with email
          </div>
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Login;
