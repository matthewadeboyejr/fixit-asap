import React from "react";
import { RiMapPinUserFill } from "react-icons/ri";
import useAddressContext from "../../hooks/useAddressContext";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationPin } from "react-icons/fa6";

const UserAddress = ({ color, bg }) => {
  const { address, isLoading } = useAddressContext();
  const { setOpenAddress } = useOpenModalContext();

  const sliceAddress = address.slice(0, 25);

  return (
    <div className={`flex items-center gap-3 text-sm  ${bg} p-1 rounded-md`}>
      <p className="text-teriary  text-sm font-bold">
        <FaLocationPin />
      </p>

      {isLoading ? (
        <div className="rounded-full h-3 w-60 bg-gray-300/70 animate-pulse "></div>
      ) : (
        <p
          onClick={() => setOpenAddress(true)}
          className={` ${color} text-sm font-medium `}
        >
          {sliceAddress}
        </p>
      )}

      {/* <button
        onClick={() => setOpenAddress(true)}
        className="text-xs text-primary underline"
      >
        Change
      </button> */}
    </div>
  );
};

export default UserAddress;
