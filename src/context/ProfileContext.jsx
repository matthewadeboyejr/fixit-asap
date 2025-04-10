import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [profileAddress, setProfileAddress] = useState("");
  const [ProfilePostalCode, setProfilePostalCode] = useState(null);
  const [profileCoordinate, setProfileCoordinate] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    handleProfileData();
  }, []);

  const handleProfileData = async () => {
    setIsLoading(true);
    const url = "/account/api/v1/service-user/profile/";

    try {
      const response = await axiosInstance.get(url);
      if (response) {
        setProfileData(response?.data?.data);
        setProfileAddress(response?.data?.data?.address);
        setProfilePostalCode(response?.data?.data?.post_code);
        setProfileCoordinate({
          lat: response?.data?.data?.latitude,
          lng: response?.data?.data?.longitude,
        });
        setErrorMsg(null);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setErrorMsg(error.message || "an error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profileData,
        handleProfileData,
        isLoading,
        errorMsg,
        profileAddress,
        setProfileAddress,
        ProfilePostalCode,
        setProfilePostalCode,
        profileCoordinate,
        setProfileCoordinate,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
