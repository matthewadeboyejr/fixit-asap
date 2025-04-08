//import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import useLoginContext from "../../hooks/useLoginContext";
import Icon from "../../Images/Icon-spin.png";

const LoginForm = () => {
  const { errMsg, loginData, handleChange, isLoading, handleSubmit } =
    useLoginContext();

  const errRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => errRef.current.focus(), []);

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
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
        placeholder="Email"
        type="email"
        name="email"
        value={loginData?.email}
        onChange={handleChange}
        autoComplete="on"
        required
      />

      <div className="flex bg-secondary/10 items-center pr-5 rounded-md">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={loginData?.password}
          onChange={handleChange}
          autoComplete="on"
          required
        />
        <div
          className="hover:cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </div>
      </div>
      <div className="flex justify-end opacity-85 hover:underline font-medium pb-3 text-sm">
        <Link to={"/reset-password"} className="">
          Forget Password
        </Link>
      </div>
      <button className={`btn-primary`} disabled={isLoading ? true : false}>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <img
              src={Icon}
              alt="icon spinner"
              className="animate-spin w-5 h-5"
            />
          ) : (
            "Log in"
          )}
        </div>
      </button>

      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Dont have an account?
        <Link to={"/signup"} className="text-secondary hover:underline t">
          Sign<span className="italic  ">up</span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

//<CgSpinnerTwo className="animate-spin text-2xl" />
