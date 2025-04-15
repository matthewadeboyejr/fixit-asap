import React, { useState } from "react";
import { createContext } from "react";
import axios, { baseUrl } from "../api/axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [userRegData, setUserRegData] = useState(null);

  const [registerData, setRegisterData] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [password2, setPassword2] = useState("");
  const [validPassword2, setValidPassword2] = useState(false);
  const [password2Focus, setPassword2Focus] = useState(false);

  const [checkBox, setCheckBox] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => setErrMsg(""), [password, password2]);
  useEffect(() => {
    setValidPassword(password.length >= 8);
    setValidPassword2(password2 === password);
  }, [password2, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${baseUrl}/account/api/v1/register/?user_type=user`;
    const data = {
      email: registerData.email.toLowerCase(),
      first_name: registerData.first_name,
      last_name: registerData.last_name,
      password: password,
      password2: password2,
      device_token: "web",
    };

    try {
      setIsLoading(true);
      const response = await axios.post(url, data);
      const regData = response?.data;

      if (response?.status === 200 || response?.status === 201) {
        console.log("signup responses", response);
        setUserRegData(regData);
        await toast.success(response?.data?.message || "Otp sent successfully");
        await new Promise((resolve) => setTimeout(resolve, 100));
        setIsSuccessful("false");
      } else {
        const errorMessage = "Unexpected response.";
        toast.error(errorMessage);
        setErrMsg(errorMessage);
        throw new Error(errorMessage);
      }

      //clear form
      if (!response && !response === "OK") {
        setRegisterData({ email: "", first_name: "", last_name: "" });
        setPassword("");
        setPassword2("");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Request failed";
      toast.error(errorMessage);
      setErrMsg(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userRegData) {
      setIsSuccessful(true);
    }
  }, [userRegData]);

  return (
    <SignupContext.Provider
      value={{
        handleChange,
        handleSubmit,
        setPassword,
        setPassword2,
        setPassword2Focus,
        setPasswordFocus,
        passwordFocus,
        password2Focus,
        password,
        password2,
        errMsg,
        registerData,
        validPassword,
        validPassword2,
        isLoading,
        isSuccessful,
        userRegData,
        checkBox,
        setCheckBox,
        setIsSuccessful,
        setErrMsg,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};
