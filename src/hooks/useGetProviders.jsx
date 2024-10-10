import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const useGetProviders = (endPoint, id, postalCode, budget, description) => {
  /*  const { availableService } = useArtisanContext();
  const { postalCode } = useAddressContext(); */
  const [exporedService, setExporedService] = useState([]);
  const [loading, setLoading] = useState(false);

  /* const id = availableService?.job_detail?.job_category;
  const budget = availableService?.job_detail?.budget_range;
  const description = availableService?.job_detail?.service_description; */

  useEffect(() => {
    if (id && postalCode) {
      getProviderData();
    }
  }, [id, postalCode]);

  const getProviderData = async () => {
    setLoading(true);
    const url = `${endPoint}?category_id=${id}&postcode=${postalCode}`;
    const data = { budget, description };

    console.log(url, "url url url url");
    try {
      const response = await axiosInstance.post(url, data);

      if (response) {
        setExporedService(response?.data?.data.artisans);
        console.log(response?.data?.data, "from explore provider");
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
