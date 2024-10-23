import React, { memo } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import useChatContext from "../../hooks/useChatContext";
import { FaCircle } from "react-icons/fa";

const ChatHeader = memo(() => {
  const { contactDetail, handleBackToContacts } = useChatContext();

  const serviceImage = contactDetail?.receiver?.services[0]?.image;
  const businessName = contactDetail?.receiver?.business_name;
  const isOnline = contactDetail?.receiver?.user?.online_status?.is_online;
  return (
    <section className="flex items-center gap-5 my-4 px-5">
      <button
        className="bg-white text-primary p-2 rounded-sm md:hidden"
        onClick={handleBackToContacts}
      >
        <RiArrowLeftLine />
      </button>
      <div className="flex items-center gap-5">
        <img
          className="w-10 h-10 rounded-full"
          src={serviceImage}
          alt={businessName}
        />
        <div className="flex flex-col">
          <p className="text-sm font-normal">{businessName}</p>
          <p className="flex items-center gap-2">
            <span className=" text-xs">{isOnline ? "Online" : "Offline"}</span>
            <FaCircle
              className={`text-[10px] ${
                isOnline ? "text-green-600" : "text-gray-400"
              }`}
            />
          </p>
        </div>
      </div>
    </section>
  );
});

export default ChatHeader;
