import { createContext } from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";

const ArtisanContext = createContext({});

export const ArtisanProvider = ({ children }) => {
  const [closestArtisan, setClosestArtisan] = useState([]);
  const [fixOFTheMonth, setFixOFTheMonth] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [availableService, setAvailableService] = useState({});
  const [acceptedProvider, setAcceptedProvider] = useState(null);
  const [loadingAcceptedProvider, setLoadingAcceptedProvider] = useState(false);
  const [startedConv, setStartedConv] = useState({});
  const [contactList, setContactList] = useState({});

  const [requestInput, setRequestInput] = useState({});

  useEffect(() => {
    handleDashData();
  }, []);

  useEffect(() => {
    handleContactList();
  }, []);

  const handleContactList = async () => {
    const url = "/service-user/api/v1/service-conversation/";

    try {
      const response = await axiosInstance.get(url);
      if (response) {
        setContactList(response?.data?.data);
      }
    } catch (error) {}
  };

  const handleDashData = async () => {
    setIsLoading(true);
    const url = "/service-user/api/v1/user-dashboard/";
    try {
      const response = await axiosInstance.get(url);
      setClosestArtisan(response.data.data.closest_artisan);
      setFixOFTheMonth(response.data.data.fix_of_month);
      setCategory(response.data.data.feature_category);
    } catch (error) {
      console.error("Error fetching dashboard data", error);
    }
    setIsLoading(false);
  };
  return (
    <ArtisanContext.Provider
      value={{
        closestArtisan,
        fixOFTheMonth,
        isLoading,
        availableService,
        setAvailableService,
        category,
        loadingAcceptedProvider,
        setLoadingAcceptedProvider,
        acceptedProvider,
        setAcceptedProvider,
        startedConv,
        setStartedConv,
        contactList,
        setContactList,
        requestInput,
        setRequestInput,
      }}
    >
      {children}
    </ArtisanContext.Provider>
  );
};

export default ArtisanContext;
