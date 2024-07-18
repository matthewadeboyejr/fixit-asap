//import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { UseAuthContext } from "../hooks/UseAuthContext";

const LoginForm = () => {
  const errRef = useRef();
  const navigate = useNavigate();
  const { login } = UseAuthContext();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => errRef.current.focus(), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "/account/api/v1/login/?login_type=user";
    const data = { username: loginData.email, password: loginData.password };

    try {
      setIsLoading(true);
      const response = await axios.post(url, data);
      const token = response?.data?.data?.token;
      localStorage.setItem("token", token);

      login();
      navigate("/address", { replace: true });
      setIsLoading(false);

      setLoginData({ email: "", password: "" });
    } catch (error) {
      setErrMsg(error.response?.data?.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
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
        value={loginData.email}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <div className="flex bg-secondary/10 items-center pr-5 rounded-md">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={loginData.password}
          onChange={handleChange}
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
      <div className="flex justify-end opacity-85 hover:underline font-medium pb-3 text-sm">
        <Link to={"/reset-password"} className="">
          Forget Password
        </Link>
      </div>
      <button className={`btn-primary`} disabled={isLoading ? true : false}>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
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
