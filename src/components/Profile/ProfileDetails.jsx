import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import SignoutButton from "../Buttons/SignoutButton";

const ProfileDetails = () => {
  const [profileIsLoading, setProfileIsLoading] = useState(false);
  const [errorProfileMsg, setErrorProfileMsg] = useState(null);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    handleProfileData();
  }, []);

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

  const fName = profileData?.user?.first_name;
  const lName = profileData?.user?.last_name;
  const email = profileData?.user.email;
  const postalCode = profileData?.post_code;
  const address = profileData?.address;

  return (
    <section className="">
      <div className=" bg-white p-5 border-b">
        <h4 className="text-xl font-semibold">{fName + " " + lName} </h4>
        <p className="text-sm opacity-50">{email} </p>
      </div>

      <div className="p-5 space-y-6 bg-white ">
        <h4 className="p-5 text-sm border-b">Personal Details</h4>
        <div className="flex  flex-col ">
          <p className="opacity-60">First Name</p>
          <p className="">{fName}</p>
        </div>
        <div className="flex  flex-col">
          <p className="opacity-60">Last Name</p>
          <p className="">{lName}</p>
        </div>
        <div className="flex  flex-col">
          <p className="opacity-60">Postal Code</p>
          <p className="">{postalCode}</p>
        </div>
        <div className="flex  flex-col">
          <p className="opacity-60">Address</p>
          <p className="">{address}</p>
        </div>
      </div>
      {/*  <div className="">
        <SignoutButton />
      </div> */}
    </section>
  );
};

export default ProfileDetails;

export const ProfileDetailsSkeleton = () => {
  return (
    <>
      <section className="space-y-5">
        <div className="space-y-2">
          <p className="  rounded-full h-2 w-36 bg-gray-300 animate-pulse"></p>
          <p className="rounded-full h-2 w-60 bg-gray-300 animate-pulse"></p>
        </div>

        <p className="pb-1 opacity-50"></p>
        <div className="rounded-full h-2 w-32 bg-gray-300 animate-pulse"></div>

        <div className="p-5 space-y-8 bg-white ">
          <div className="flex items-center justify-between">
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
            <p className="rounded-full h-2 w-24 bg-gray-300 animate-pulse"></p>
          </div>
        </div>
      </section>
      <section className="">
        <SignoutButton />
      </section>
    </>
  );
};
