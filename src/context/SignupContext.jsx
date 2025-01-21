import React, { useState } from "react";
import { createContext } from "react";
import axios from "../api/axios";
import { useEffect } from "react";

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
  const [isSuccessful, setIsSuccessfull] = useState(false);

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

    const url =
      "https://artisanapi-48408c1be722.herokuapp.com/account/api/v1/register/?user_type=user";
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
      setUserRegData(regData);

      //navigate("/otp");

      //clear form
      if (!response && !response === "OK") {
        setRegisterData({ email: "", first_name: "", last_name: "" });
        setPassword("");
        setPassword2("");
      }
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (userRegData) {
      setIsSuccessfull(true);
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
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};
