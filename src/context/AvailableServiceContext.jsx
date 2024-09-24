import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axiosInstance from "../api/axios";
import useAddressContext from "../hooks/useAddressContext";

const AvailableServiceContext = createContext({});

export const AvailableServiceProvider = () => {
  const [category, setCategory] = useState([]);
  const [openList, setOpenList] = useState(false);
  const [budget, setBudget] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    name: "",
  });
  const [description, setDescription] = useState("");
  const { postalCode } = useAddressContext();

  useEffect(() => {
    handleCategories();
  }, []);

  const handleCategories = async () => {
    const url = "/artisan/api/v1/service-category/";
    const response = await axiosInstance.get(url);
    setCategory(response.data.data || []);
  };

  const handleCategorySelect = (categoryId, categoryName) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
    setOpenList(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `/service-user/api/v1/available-service/?category_id=${selectedCategory.id}&postcode=${postalCode}`;
    const data = { budget, description };

    try {
      const response = await axiosInstance.post(url, data);
      console.log(response?.data?.data?.artisans);
    } catch (error) {
      console.error(error);
    }
  };

  <AvailableServiceContext.Provider
    value={{
      handleSubmit,
      budget,
      setBudget,
      setOpenList,
      openList,
      selectedCategory,
      category,
      handleCategorySelect,
      description,
      setDescription,
    }}
  ></AvailableServiceContext.Provider>;
};

export default AvailableServiceContext;
