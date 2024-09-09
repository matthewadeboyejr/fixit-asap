import React from "react";
import { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgSpinnerTwo } from "react-icons/cg";

import axiosInstance from "../api/axios";
import { useAuthContext } from "../hooks/useAuthContext";

const SignoutButton = () => {
  const { logout } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    const url = "/account/api/v1/logout/";
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(url);
      console.log(response);
      logout();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-3 text-end  text-red-600 bg-red-200 w-full  p-3  hover:opacity-80 rounded-md cursor-pointer "
    >
      <span className=" text-xl">
        <RiLogoutCircleLine />
      </span>
      <span className="text-sm r">
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Sign Out"
          )}
        </div>
      </span>
    </button>
  );
};

export default SignoutButton;
