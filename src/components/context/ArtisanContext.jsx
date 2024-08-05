import { createContext } from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";

const ArtisanContext = createContext({});

export const ArtisanProvider = ({ children }) => {
  const [artisanData, setArtisanData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleDashData();
  }, []);

  const handleDashData = async () => {
    setIsLoading(true);
    const url = "/service-user/api/v1/user-dashboard/";
    try {
      const response = await axiosInstance.get(url);
      setArtisanData(response.data.data.closest_artisan);
    } catch (error) {
      console.error("Error fetching dashboard data", error);
    }
    setIsLoading(false);
  };
  return (
    <ArtisanContext.Provider value={{ artisanData, isLoading }}>
      {children}
    </ArtisanContext.Provider>
  );
};

export default ArtisanContext;
