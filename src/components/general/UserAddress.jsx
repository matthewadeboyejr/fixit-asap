import React from "react";
import useAddressContext from "../../hooks/useAddressContext";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { FaLocationPin } from "react-icons/fa6";

const UserAddress = ({ color, bg, iconColor }) => {
  const { address, isLoading } = useAddressContext();
  const { setOpenAddress } = useOpenModalContext();

  const sliceAddress = address.slice(0, 20);

  return (
    <div className={`flex items-center gap-3 text-sm  ${bg} p-1 rounded-md`}>
      <p className={`${iconColor}  text-sm font-bold`}>
        <FaLocationPin />
      </p>

      {isLoading ? (
        <div className="rounded-full h-3 w-60 bg-gray-300/70 animate-pulse "></div>
      ) : (
        <div className="flex items-center gap-3">
          <p
            onClick={() => setOpenAddress(true)}
            className={` ${color} text-sm font-medium `}
          >
            {sliceAddress}
          </p>
          <button
            onClick={() => setOpenAddress(true)}
            className="text-xs text-primary underline"
          >
            Change
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
