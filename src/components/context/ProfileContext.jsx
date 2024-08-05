import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import Dashboard from "../../pages/Dashboard";

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    handleProfileData();
  }, []);

  const handleProfileData = async () => {
    setIsLoading(true);
    const url = "/account/api/v1/service-user/profile/";

    try {
      const response = await axiosInstance.get(url);
      const data = response?.data?.data;
      setProfileData(data);
      setErrorMsg(null);
      console.log("response", profileData);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setErrorMsg(error.message || "an error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profileData, handleProfileData, isLoading, errorMsg }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
