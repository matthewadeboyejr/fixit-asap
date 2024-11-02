import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const useGetProviders = (endPoint, id, postalCode, budget, description) => {
  const [exporedService, setExporedService] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id && postalCode) {
      getProviderData();
    }
  }, [id, postalCode]);

  const getProviderData = async () => {
    setLoading(true);
    const url = `${endPoint}?category_id=${id}&postcode=${postalCode}`;
    const data = { budget, description };

    try {
      const response = await axiosInstance.post(url, data);

      if (response) {
        setExporedService(response?.data?.data.artisans);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { exporedService, loading };
};

export default useGetProviders;
