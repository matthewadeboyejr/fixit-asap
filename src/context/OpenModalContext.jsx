import React, { createContext, useState } from "react";

const OpenModalContext = createContext({});

export const OpenModalProvider = ({ children }) => {
  const [openRequest, setOpenRequest] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const [openExpore, setOpenExplore] = useState(false);
  const [openBookingDetail, setOpenBookingDetail] = useState(false);
  const [openPreviewFile, setOpenPreviewFile] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(true);

  return (
    <OpenModalContext.Provider
      value={{
        openProfile,
        setOpenProfile,
        openRequest,
        setOpenRequest,
        openAddress,
        setOpenAddress,
        openExpore,
        setOpenExplore,
        openBookingDetail,
        setOpenBookingDetail,
        openPreviewFile,
        setOpenPreviewFile,
        openChangePassword,
        setOpenChangePassword,
        openEditProfile,
        setOpenEditProfile,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};

export default OpenModalContext;
