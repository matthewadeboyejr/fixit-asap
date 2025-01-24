import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignupContext from "../../hooks/useSignupContext";
import axiosInstance from "../../api/axios";
import useLoginContext from "../../hooks/useLoginContext";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ConfirmResetOtp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const {
    handleResetChange,
    resetPassData,
    resetState,
    handleConfirmResetOtp,
    handleRestOtp,
  } = useLoginContext();

  const confirmingOtp = resetState?.confirmingOtp;
  const sendingOtp = resetState?.sendingOtp;
  const errRef = useRef();

  useEffect(() => errRef.current.focus(), []);
  const errMsg = resetState?.confirmErrMsg;

  return (
    <form onSubmit={handleConfirmResetOtp} className="w-full space-y-5">
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

      <div className="flex bg-secondary/10 items-center pr-5 rounded-md">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="otp"
          type={showOtp ? "text" : "password"}
          name="otp"
          value={resetPassData.otp}
          onChange={handleResetChange}
          autoComplete="off"
          required
        />
        <div
          className="hover:cursor-pointer"
          onClick={() => setShowOtp(!showOtp)}
        >
          {showOtp ? <FiEyeOff /> : <FiEye />}
        </div>
      </div>
      <div className="flex bg-secondary/10 items-center pr-5 rounded-md">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="New password"
          type={showPassword ? "text" : "password"}
          name="new_password"
          value={resetPassData?.new_password}
          onChange={handleResetChange}
          autoComplete="off"
          required
        />
        <div
          className="hover:cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </div>
      </div>

      <button
        className={`btn-primary`}
        type="submit"
        disabled={confirmingOtp ? true : false}
      >
        <div className="flex justify-center items-center">
          {confirmingOtp ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Confirm Reset"
          )}
        </div>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Didnt recieve Otp
        <button
          type="button"
          onClick={handleRestOtp}
          className="text-secondary hover:underline t"
        >
          <div className="flex justify-center items-center">
            {sendingOtp ? (
              <CgSpinnerTwo className="animate-spin text-2xl" />
            ) : (
              " Resend Otp"
            )}
          </div>
        </button>
      </div>
    </form>
  );
};

export default ConfirmResetOtp;
