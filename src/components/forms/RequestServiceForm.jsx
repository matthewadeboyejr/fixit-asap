import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { IoChevronDown } from "react-icons/io5";
import { MdCurrencyPound } from "react-icons/md";
import useAddressContext from "../../hooks/useAddressContext";
import useArtisanContext from "../../hooks/useArtisanContext";
import { CgSpinnerTwo } from "react-icons/cg";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import useOpenModalContext from "../../hooks/useOpenModalContext";

const RequestServiceForm = () => {
  const [category, setCategory] = useState([]);
  const [openList, setOpenList] = useState(false);
  const [budget, setBudget] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    name: "",
  });
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const { postalCode } = useAddressContext();
  const { setAvailableService } = useArtisanContext();

  const { setOpenRequest } = useOpenModalContext();

  const navigate = useNavigate();

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
      setIsLoading(true);
      const response = await axiosInstance.post(url, data);
      if (response) {
        setAvailableService(response.data?.data);
      }
      navigate("/available-providers");
      if (navigate) {
        setOpenRequest(false);
      } else {
        setIsLoading(false);
      }
      setBudget("");
      setSelectionRange({
        id: null,
        name: "",
      });
      setDescription("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-5 py-5 relative" onSubmit={handleSubmit}>
      <div className="bg-secondary/10 flex items-center  rounded-md ">
        <div className="bg-secondary py-6 flex items-center px-2 rounded-l-md text-white">
          <MdCurrencyPound />
        </div>

        <input
          className="p-5 bg-transparent w-full placeholder:text-sm pl-5 outline-none placeholder:text-primary"
          placeholder="Budget(Optional)"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <div className="relative ">
        <div className="bg-secondary/10 flex items-center  rounded-md  pr-3">
          <input
            className="p-5 bg-transparent w-full placeholder:text-sm pl-5 outline-none placeholder:text-primary"
            onClick={() => setOpenList(!openList)}
            placeholder="Category"
            type="text"
            value={selectedCategory.name}
            //onChange={(e) => SetSelectedCategory(e.target.value)}
            readOnly
          />
          <IoChevronDown className={`${openList ? `rotate-180` : ``} `} />
        </div>
        {openList && (
          <ul
            className={`absolute z-10 bg-white max-h-60 overflow-y-auto text-sm  w-full  shadow-md rounded-md`}
          >
            {Array.isArray(category) &&
              category.map((list) => (
                <li
                  className="p-3  hover:bg-primary/10 w-full"
                  key={list.id}
                  onClick={() => handleCategorySelect(list.id, list.category)}
                >
                  {list.category}
                </li>
              ))}
          </ul>
        )}
      </div>
      <textarea
        className="w-full p-5 bg-secondary/10 rounded-md"
        placeholder="Service Description "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className={`btn-primary`} disabled={isLoading ? true : false}>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Post Request"
          )}
        </div>
      </button>
    </form>
  );
};

export default RequestServiceForm;
