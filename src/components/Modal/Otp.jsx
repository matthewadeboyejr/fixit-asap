import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import OtpForm from "../forms/OtpForm";
import { PreHeader } from "../general/Header";
import useSignupContext from "../../hooks/useSignupContext";

const Otp = () => {
  const { userRegData, setIsSuccessful } = useSignupContext();

  const welcomeMessage = userRegData.message;
  return (
    <div className="fixed inset-0  w-screen min-h-screen  bg-light ">
      <PreHeader />
      <section className="flex flex-1 items-center justify-center">
        <div className="flex flex-col w-full max-w-md space-y-5 py-5 px-4 sm:px-8 lg:px-14">
          <div className="  ">
            <IoIosArrowRoundBack
              onClick={() => setIsSuccessful(false)}
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
