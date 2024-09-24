import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import OtpForm from "../forms/OtpForm";
import { useNavigate } from "react-router-dom";
import { PreHeader } from "../general/Header";
import useSignupContext from "../../hooks/useSignupContext";

const Otp = () => {
  const { userRegData } = useSignupContext();

  const navigate = useNavigate();

  const welcomeMessage = userRegData.message;
  return (
    <div className="fixed inset-0  w-screen min-h-screen  bg-light ">
      <PreHeader />
      <section className=" flex justify-center md:items-center">
        <div className="flex flex-col items-left md:w-1/3 w-full space-y-3 py-20 px-5 md:px-14">
          <div className="  ">
            <IoIosArrowRoundBack
              onClick={() => navigate("/signup")}
              className="text-4xl font-black text-secondary cursor-pointer hover:scale-125"
            />
            <h1 className="text-2xl tracking-wider font-semibold ">
              Verification
            </h1>
            <p className="text-sm">{welcomeMessage}</p>
          </div>

          <div className="border-b-2 w-20 border-b-secondary "></div>
          <OtpForm />
        </div>
      </section>
    </div>
  );
};

export default Otp;
