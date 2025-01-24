"use client";

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link } from "react-router-dom";
import Otp from "../Modal/Otp";
import useSignupContext from "../../hooks/useSignupContext";
import { Toaster } from "react-hot-toast";

const SignUpForm = () => {
  const {
    handleChange,
    handleSubmit,
    setPassword,
    setPassword2,
    passwordFocus,
    password2Focus,
    setPassword2Focus,
    setPasswordFocus,
    password,
    password2,
    errMsg,
    registerData,
    validPassword,
    validPassword2,
    isLoading,
    isSuccessful,
    checkBox,
    setCheckBox,
  } = useSignupContext();
  const errRef = useRef();
  const firstNameRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => firstNameRef.current.focus(), []);

  return isSuccessful ? (
    <>
      <Otp />
    </>
  ) : (
    <form className="w-full space-y-5" onSubmit={handleSubmit}>
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
      <Toaster />
      <div className="grid grid-cols-2 gap-4">
        <input
          className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
          placeholder="First name"
          type="text"
          name="first_name"
          value={registerData?.first_name}
          onChange={handleChange}
          ref={firstNameRef}
          autoComplete="off"
          required
        />
        <input
          className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
          placeholder="Last name"
          type="text"
          name="last_name"
          value={registerData?.last_name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </div>

      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Email"
        type="email"
        name="email"
        value={registerData?.email}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <div className="flex bg-secondary/10 items-center pr-5 rounded-md ">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          aria-describedby="passwordNote"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
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

      <p
        id="passwordNote"
        className={
          passwordFocus && !validPassword
            ? "text-xs bg-red-50  p-3 rounded-md text-red-500"
            : "absolute left-[-9999px]"
        }
      >
        8 to 24 character
      </p>

      <div className=" bg-secondary/10 pr-5 rounded-md ">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Confirm Password"
          type="password"
          name="password2"
          value={password2}
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          aria-describedby="password2Note"
          onFocus={() => setPassword2Focus(true)}
          onBlur={() => setPassword2Focus(false)}
          autoComplete="off"
          required
        />
      </div>
      <p
        id="passwordNote"
        className={
          password2Focus && !validPassword2
            ? "text-xs bg-red-50  p-3 rounded-md text-red-500"
            : "absolute left-[-9999px]"
        }
      >
        Must match the first password input field.
      </p>

      <div className="flex items-start">
        <input
          id="link-checkbox"
          type="checkbox"
          checked={checkBox}
          onChange={(e) => setCheckBox(e.target.checked)}
          className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-secondary focus:ring-2"
          required
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium space-x-1 text-primary dark:text-gray-300"
        >
          <span>I agree with the</span>
          <Link to="/privacy" className="text-secondary hover:underline">
            Privacy Policy
          </Link>
          <span> and</span>
          <Link to="/terms" className="text-secondary hover:underline">
            terms and conditions
          </Link>
        </label>
      </div>
      <button
        disabled={!validPassword || !validPassword2 || !checkBox}
        className={`btn-primary ${
          !validPassword || !validPassword2 || !checkBox
            ? "opacity-50 cursor-not-allowed hover:opacity-50"
            : ""
        }`}
      >
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Sign up"
          )}
        </div>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Have an account?
        <Link to={"/login"} className="text-secondary hover:underline t">
          Sign<span className="italic  ">in</span>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
