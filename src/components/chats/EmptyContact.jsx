import React from "react";
import { GoPerson } from "react-icons/go";
import useOpenModalContext from "../../hooks/useOpenModalContext";

const EmptyContact = () => {
  const { setOpenRequest } = useOpenModalContext();
  return (
    <div className="flex flex-col h-full items-center justify-center gap-5">
      <p className="flex flex-col items-center gap-4 animate-pulse">
        <span className="bg-teriary/50 p-3 text-2xl rounded-full">
          <GoPerson />
        </span>
        <span className="text-xs">You don't have any initiated chat</span>
      </p>
      <button
        onClick={() => setOpenRequest(true)}
        className="bg-primary p-3 rounded-md text-secondary text-xs"
      >
        Request Artisan
      </button>
    </div>
  );
};

export default EmptyContact;
