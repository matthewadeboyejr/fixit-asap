import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import OtpForm from "../components/forms/OtpForm";

const Otp = () => {
  return (
    <section className="w-screen min-h-screen flex justify-center md:items-center bg-light ">
      <div className="flex flex-col items-left md:w-1/3 w-full space-y-3 py-20 px-5 md:px-14">
        <div className="">
          <IoIosArrowRoundBack className="text-4xl font-black" />
          <h1 className="text-2xl tracking-wider font-semibold ">
            Verification
          </h1>
          <p className="text-sm">You will get an Otp via Email</p>
        </div>

        <div className="border-b-2 w-20 border-b-secondary "></div>
        <OtpForm />
      </div>
    </section>
  );
};

export default Otp;
