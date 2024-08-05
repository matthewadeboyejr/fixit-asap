import React from "react";
import useProfileContext from "../hooks/useProfileContext";

const ProfileDetails = () => {
  const { profileData } = useProfileContext();

  const fName = profileData?.user?.first_name;
  const lName = profileData?.user?.last_name;
  const email = profileData?.user.email;
  const postalCode = profileData?.post_code;
  const address = profileData?.address;

  return (
    <section className="">
      <div className="pb-14">
        <h4 className="text-xl font-semibold">{fName + " " + lName} </h4>
        <p className="text-sm opacity-50">{email} </p>
      </div>

      <p className="pb-1 opacity-50"></p>
      <h4 className="pb-5 text-sm">Personal Details</h4>

      <div className="p-5 space-y-6 bg-white ">
        <div className="flex items-center justify-between">
          <p className="opacity-60">First Name</p>
          <p className="">{fName}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-60">Last Name</p>
          <p className="">{lName}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-60">Postal Code</p>
          <p className="">{postalCode}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-60">Address</p>
          <p className="">{address}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;

export const ProfileDetailsSkeleton = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="  rounded-full h-2 w-36 bg-gray-300 animate-pulse"></p>
        <p className="rounded-full h-2 w-60 bg-gray-300 animate-pulse"></p>
      </div>

      <p className="pb-1 opacity-50"></p>
      <h4 className="rounded-full h-2 w-32 bg-gray-300 animate-pulse"></h4>

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
  );
};
