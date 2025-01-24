import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignupContext from "../../hooks/useSignupContext";
import axiosInstance from "../../api/axios";
import useLoginContext from "../../hooks/useLoginContext";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";

const ResetPassForm = () => {
  const { handleResetChange, resetPassData, resetState, handleRestOtp } =
    useLoginContext();
  const emailRef = useRef();

  useEffect(() => emailRef.current.focus());
  const errRef = useRef();

  useEffect(() => errRef.current.focus(), []);
  const errMsg = resetState?.errMsg;

  const sendingOtp = resetState?.sendingOtp;

  return (
    <form onSubmit={handleRestOtp} className="w-full space-y-5">
      <Toaster />
      <p
        ref={errRef}
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
        ref={emailRef}
        placeholder="Email"
        name="email"
        type="email"
        value={resetPassData.email}
        onChange={handleResetChange}
        required
      />

      <button className={`btn-primary`} disabled={sendingOtp ? true : false}>
        <div className="flex justify-center items-center">
          {sendingOtp ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Send otp"
          )}
        </div>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Return to
        <Link to={"/login"} className="text-secondary hover:underline t">
          Log<span className="italic  ">in</span>
        </Link>
      </div>
    </form>
  );
};

export default ResetPassForm;
