import React from "react";
import { RiMapPinUserFill } from "react-icons/ri";
import useAddressContext from "../../hooks/useAddressContext";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { CiLocationOn } from "react-icons/ci";

const UserAddress = ({ color, bg }) => {
  const { address, isLoading } = useAddressContext();
  const { setOpenAddress } = useOpenModalContext();

  const sliceAddress = address.slice(0, 25);

  return (
    <div className={`flex items-center gap-3 text-sm  ${bg} p-1 rounded-md`}>
      <p className="text-primary  text-sm font-bold">
        <CiLocationOn />
      </p>

      {isLoading ? (
        <div className="rounded-full h-3 w-60 bg-gray-300/70 animate-pulse "></div>
      ) : (
        <p className={` ${color} text-xs `}>{sliceAddress}</p>
      )}

      <button
        onClick={() => setOpenAddress(true)}
        className="text-xs text-primary underline"
      >
        Change
      </button>
    </div>
  );
};

export default UserAddress;
