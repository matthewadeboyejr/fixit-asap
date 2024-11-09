import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { CgSpinnerTwo } from "react-icons/cg";
import axiosInstance from "../../api/axios";
import useAuthenticateContext from "../../hooks/useAuthenticateContext";

const ChangePasswordForm = () => {
  const { logout } = useAuthenticateContext();
  const [oldPassword, setOldPassword] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [password2, setPassword2] = useState("");
  const [validPassword2, setValidPassword2] = useState(false);
  const [password2Focus, setPassword2Focus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => setErrMsg(""), [password, password2]);
  useEffect(() => {
    setValidPassword(password.length >= 8);
    setValidPassword2(password2 === password);
  }, [password2, password]);

  const errRef = useRef();
  const oldPasswordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => oldPasswordRef.current.focus(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "/account/api/v1/change-password/";
    const data = {
      old_password: oldPassword,
      new_password: password,
      confirm_password: password2,
    };

    try {
      setIsLoading(true);
      const response = await axiosInstance.post(url, data);

      if (response) {
        alert("Change password Successfull");
        logout();
      }
      //clear form
      if (!response && !response === "OK") {
        setOldPassword("");
        setPassword("");
        setPassword2("");
      }
    } catch (error) {
      setErrMsg(error.response.data.old_password?.detail);
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

      <div className="flex bg-secondary/10 items-center pr-5 rounded-md ">
        <input
          ref={oldPasswordRef}
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Password"
          type="password"
          name="password"
          value={oldPassword}
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
          autoComplete="off"
          required
        />
      </div>
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
            "Change"
          )}
        </div>
      </button>
    </form>
  );
};

export default ChangePasswordForm;
