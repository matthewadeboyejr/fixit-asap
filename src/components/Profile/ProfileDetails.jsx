import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import SignoutButton from "../Buttons/SignoutButton";
import useLoginContext from "../../hooks/useLoginContext";
import { IoPerson } from "react-icons/io5";
import useProfileContext from "../../hooks/useProfileContext";

const ProfileDetails = () => {
  const { handleProfileData, profileData } = useProfileContext();

  const fName = profileData?.user?.first_name;
  const lName = profileData?.user?.last_name;
  const email = profileData?.user?.email;
  const phone = profileData?.phone;
  const postalCode = profileData?.post_code;
  const address = profileData?.address;

  return (
    <div className="space-y-7">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <p className="flex items-center justify-center w-14 h-14 bg-primary/5 text-2xl rounded-full">
            <IoPerson />
          </p>

          <p className="flex flex-col ">
            <span className="text-sm font-semibold">{fName + " " + lName}</span>
            <span>Service user</span>
          </p>
        </div>
        <button className="border px-3 py-2 cursor-pointer  font-semibold rounded-lg">
          Edit Profile
        </button>
      </section>

      <section className=" bg-primary/5 p-2 space-y-5 rounded-lg">
        <div className=" space-y-2   ">
          <h4 className="opacity-70 text-sm">First Name</h4>
          <p className="text-sm font-semibold">{fName}</p>
        </div>
        <div className=" space-y-2   ">
          <h4 className="opacity-70 text-sm">Last Name</h4>
          <p className="text-sm font-semibold">{lName}</p>
        </div>
        <div className=" space-y-2   ">
          <h4 className="opacity-70 text-sm">Phone number</h4>
          <p className="text-sm font-semibold">{phone}</p>
        </div>
        <div className=" space-y-2   ">
          <h4 className="opacity-70 text-sm">Email</h4>
          <p className="text-sm font-semibold">{email}</p>
        </div>
        <div className=" space-y-2   ">
          <h4 className="opacity-70 text-sm">Postal Code</h4>
          <p className="text-sm font-semibold">{postalCode}</p>
        </div>
        <div className=" space-y-2   ">
          <h4 className="opacity-70 text-sm">Full Address</h4>
          <p className="text-sm font-semibold">{address}</p>
        </div>
      </section>
    </div>
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
