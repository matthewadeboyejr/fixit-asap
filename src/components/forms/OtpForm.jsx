import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import useSignupContext from "../../hooks/useSignupContext";
import toast from "react-hot-toast";
import Icon from "../../Images/Icon-spin.png";

const OtpForm = () => {
  const { userRegData, handleSubmit, isLoading } = useSignupContext();
  const otpRef = useRef();
  const [otp, setOtp] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => otpRef.current.focus());

  const navigate = useNavigate();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    const url = "/account/api/v1/verify-email/";
    const email = userRegData.data.email;
    const data = { otp, email };

    try {
      setLoading(true);
      const response = await axiosInstance.post(url, data);
      if (response?.status === 200 || response?.status === 20) {
        toast.success("Otp Successfull");
        await new Promise((resolve) => setTimeout(resolve, 100));
        navigate("/login");
      }
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <form className="w-full space-y-5" onSubmit={handleOtpSubmit}>
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

      <button type="submit" className={`btn-primary`}>
        <div className="flex justify-center items-center">
          {loading ? (
            <img src={Icon} alt="icon spinner" className="animate-spin w-3" />
          ) : (
            "Verify"
          )}
        </div>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Didnt recieve the Verification OTP?
        <button
          type="button"
          onClick={handleSubmit}
          className="text-secondary hover:underline t"
        >
          {isLoading ? (
            <img src={Icon} alt="icon spinner" className="animate-spin w-3" />
          ) : (
            "Resend Otp"
          )}
        </button>
      </div>
    </form>
  );
};

export default OtpForm;
