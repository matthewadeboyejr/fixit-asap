import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axios";

import useSignupContext from "../../hooks/useSignupContext";

const OtpForm = () => {
  const { userRegData } = useSignupContext();

  const otpRef = useRef();

  const [otp, setOtp] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => otpRef.current.focus());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "/account/api/v1/verify-email/";
    const email = userRegData.data.email;
    const data = { otp, email };

    console.log(data);

    try {
      setIsLoading(true);
      const response = await axiosInstance.post(url, data);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit}>
      <p
        className={
          errMsg
            ? "text-xs bg-red-50  p-3 rounded-md text-red-500"
            : "absolute left-[-9999px]"
        }
      >
        {errMsg}
      </p>
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="otp"
        type="number"
        name="otp"
        value={otp}
        onChange={(e) => {
          setOtp(e.target.value);
        }}
        ref={otpRef}
        required
      />

      <button className={`btn-primary`}>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Verify"
          )}
        </div>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Didnt recieve the Verification OTP?
        <Link to={"/login"} className="text-secondary hover:underline t">
          Resend <span className="italic  ">Again</span>
        </Link>
      </div>
    </form>
  );
};

export default OtpForm;
