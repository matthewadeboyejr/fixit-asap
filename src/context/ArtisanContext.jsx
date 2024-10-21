import { createContext } from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

const ArtisanContext = createContext({});

export const ArtisanProvider = ({ children }) => {
  const [closestArtisan, setClosestArtisan] = useState([]);
  const [fixOFTheMonth, setFixOFTheMonth] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [availableService, setAvailableService] = useState({});
  const [acceptedProvider, setAcceptedProvider] = useState(null);
  const [loadingAcceptedProvider, setLoadingAcceptedProvider] = useState(false);
  const [contactList, setContactList] = useState({});
  const [requestInput, setRequestInput] = useState({});
  const [providerDetail, setProviderDetail] = useState({});
  const [loadingProviderDetails, setLoadingProviderDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    handleContactList();
  }, []);

  const navigate = useNavigate();

  const getByCategory = async (categoryId) => {
    const url = `/service-user/api/v1/get-services-by-category/?category_id=${categoryId}`;
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        navigate("/selected-category");
        setSelectedCategory(response?.data?.results);
      }
    } catch (error) {}
    /* 
    if (selectedCategory) {
      navigate("/selected-category");
    } */
  };

  const getProviderDetail = async (serviceID) => {
    setLoadingProviderDetails(true);
    const url = `/service-user/api/v1/service-details/?service_id=${serviceID}`;
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        navigate("/service-detail");
        setProviderDetail(response?.data?.data);
      }
      setLoadingProviderDetails(false);
    } catch (error) {
    } finally {
      setLoadingProviderDetails(false);
    }
  };

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
      setClosestArtisan(response?.data?.data?.closest_artisan);
      setFixOFTheMonth(response?.data?.data?.fix_of_month);
      setCategory(response?.data?.data?.feature_category);
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
        category,
        isLoading,
        availableService,
        setAvailableService,
        loadingAcceptedProvider,
        setLoadingAcceptedProvider,
        acceptedProvider,
        setAcceptedProvider,
        contactList,
        setContactList,
        requestInput,
        setRequestInput,
        providerDetail,
        setProviderDetail,
        getProviderDetail,
        handleDashData,
        selectedCategory,
        setSelectedCategory,
        getByCategory,
        loadingProviderDetails,
        setLoadingProviderDetails,
      }}
    >
      {children}
    </ArtisanContext.Provider>
  );
};

export default ArtisanContext;
