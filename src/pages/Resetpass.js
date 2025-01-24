import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PreHeader } from "../components/general/Header";
import ConfirmResetOtp from "../components/forms/ConfirmResetOtp";
import useLoginContext from "../hooks/useLoginContext";
import ResetPassForm from "../components/forms/ResetPassForm";

const ResetPass = () => {
  const { resetState, resetPassData, updateResetState } = useLoginContext();
  const navigate = useNavigate();
  const otpSent = resetState?.otpSent;

  const handleChangeEmail = () => {
    updateResetState({ otpSent: false });
  };
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
              Reset<span className="italic">Password</span>
            </h1>
          </div>
          <div className="border-b-2 w-20 border-b-secondary mx-3"></div>
          {otpSent ? (
            <p className="text-sm">
              Otp was sent to
              <span className="font-semibold">
                {" " + resetPassData?.email + " "}
              </span>
              <span
                onClick={handleChangeEmail}
                className="font-semibold text-secondary hover:underline cursor-pointer"
              >
                Change{" "}
              </span>
            </p>
          ) : (
            <p>Kindly Enter your email for the otp </p>
          )}
          {otpSent ? <ConfirmResetOtp /> : <ResetPassForm />}
        </div>
      </section>
    </div>
  );
};

export default ResetPass;
