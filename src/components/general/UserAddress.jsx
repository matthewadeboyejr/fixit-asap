import React from "react";
import useAddressContext from "../../hooks/useAddressContext";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { MdLocationPin } from "react-icons/md";

const UserAddress = ({ color, bg, iconColor }) => {
  const { address, isLoading } = useAddressContext();
  const { setOpenAddress } = useOpenModalContext();

  const sliceAddress = address.slice(0, 20);

  return (
    <div className={`flex items-center gap-3 text-sm  ${bg} p-1 rounded-md`}>
      <p className={`${iconColor}  text-sm font-bold`}>
        <MdLocationPin />
      </p>

      {isLoading ? (
        <div className="rounded-full h-3 w-60 bg-gray-300/70 animate-pulse "></div>
      ) : (
        <div className="flex items-center gap-3">
          <p
            onClick={() => setOpenAddress(true)}
            className={` ${color} text-xs font-medium `}
          >
            {sliceAddress}
          </p>
          <button
            onClick={() => setOpenAddress(true)}
            className="text-xs font-medium  text-primary hover:underline"
          >
            Change
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
