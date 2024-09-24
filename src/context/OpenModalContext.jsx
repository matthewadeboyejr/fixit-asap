import React, { createContext, useState } from "react";

const OpenModalContext = createContext({});

export const OpenModalProvider = ({ children }) => {
  const [openRequest, setOpenRequest] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);

  return (
    <OpenModalContext.Provider
      value={{
        openProfile,
        setOpenProfile,
        openRequest,
        setOpenRequest,
        openAddress,
        setOpenAddress,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};

export default OpenModalContext;
