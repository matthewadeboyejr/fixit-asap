import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useUserRegContext from "../hooks/UseUserRegContext";

const SignUpForm = () => {
  const { setUserRegData } = useUserRegContext();
  const navigate = useNavigate();

  const errRef = useRef();
  const firstNameRef = useRef();
  const [registerData, setRegisterData] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [password2, setPassword2] = useState("");
  const [validPassword2, setValidPassword2] = useState(false);
  const [password2Focus, setPassword2Focus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => firstNameRef.current.focus(), []);
  useEffect(() => setErrMsg(""), [password, password2]);
  useEffect(() => {
    setValidPassword(password.length >= 6);
    setValidPassword2(password2 === password);
  }, [password2, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "/account/api/v1/register/?user_type=user";
    const data = {
      email: registerData.email,
      first_name: registerData.first_name,
      last_name: registerData.last_name,
      password: password,
      password2: password2,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(url, data);
      const regData = response.data;
      setUserRegData(regData);
      navigate("/otp");

      //clear form
      setRegisterData({ email: "", first_name: "", last_name: "" });
      setPassword("");
      setPassword2("");
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
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
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="First name"
        type="text"
        name="first_name"
        value={registerData.first_name}
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
        value={registerData.last_name}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Email"
        type="email"
        name="email"
        value={registerData.email}
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
        6 to 24 character
      </p>

      <div className=" bg-secondary/10 pr-5 rounded-md ">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Comfirm Password"
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
      <button
        disabled={!validPassword || !validPassword2 ? true : false}
        className={`btn-primary`}
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
