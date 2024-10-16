import React from "react";
import axiosInstance from "../api/axios";

const useProfileDetails = () => {
  const [profileIsLoading, setProfileIsLoading] = useState(false);
  const [errorProfileMsg, setErrorProfileMsg] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const handleProfileData = async () => {
    setProfileIsLoading(true);
    const url = "/account/api/v1/service-user/profile/";

    try {
      const response = await axiosInstance.get(url);
      setProfileData(response?.data?.data);

      setErrorProfileMsg(null);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setErrorProfileMsg(error.message || "an error occurred");
    } finally {
      setProfileIsLoading(false);
    }
  };

  return { profileIsLoading, profileData };
};

export default useProfileDetails;
