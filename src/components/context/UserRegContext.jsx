import React, { useState } from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const UserRegContext = createContext();

export const UserRegProvider = ({ children }) => {
  const [userRegData, setUserRegData] = useState(null);
  const [regIsSuccessfull, setRegIsSuccessfull] = useState(false);

  const handlOtp = () => {
    return regIsSuccessfull ? (
      <Navigate to="/Otp" />
    ) : (
      <Navigate to="/signup" />
    );
  };
  return (
    <UserRegContext.Provider
      value={{
        userRegData,
        setUserRegData,
        handlOtp,
        setRegIsSuccessfull,
      }}
    >
      {children}
    </UserRegContext.Provider>
  );
};
