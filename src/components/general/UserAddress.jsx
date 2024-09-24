import React from "react";
import { RiMapPinUserFill } from "react-icons/ri";
import useAddressContext from "../../hooks/useAddressContext";
import useOpenModalContext from "../../hooks/useOpenModalContext";

const UserAddress = () => {
  const { address, isLoading } = useAddressContext();
  const { setOpenAddress } = useOpenModalContext();

  const sliceAddress = address.slice(0, 25);

  return (
    <div className="flex items-center gap-3 text-sm">
      <p className="text-teriary text-lg">
        <RiMapPinUserFill />
      </p>

      {isLoading ? (
        <div className="rounded-full h-3 w-60 bg-gray-300/70 animate-pulse "></div>
      ) : (
        <p className=" font-semibold">{sliceAddress}</p>
      )}

      <button
        onClick={() => setOpenAddress(true)}
        className="font-medium text-teriary"
      >
        Change
      </button>
    </div>
  );
};

export default UserAddress;
