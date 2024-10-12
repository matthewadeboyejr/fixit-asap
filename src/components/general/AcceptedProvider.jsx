import React, { useEffect, useCallback } from "react";
import {
  RiMapPinUserFill,
  RiChat3Line,
  RiStarFill,
  RiInfoI,
} from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";
import axiosInstance from "../../api/axios";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { ProviderSkeleton } from "./ProviderSkeleton";
import useChatContext from "../../hooks/useChatContext";

const AcceptedProvider = () => {
  const {
    availableService,
    acceptedProvider,
    setAcceptedProvider,
    loadingAcceptedProvider,
    setLoadingAcceptedProvider,
  } = useArtisanContext();

  const { setOpenExplore } = useOpenModalContext();
  const { handleinitiateChat } = useChatContext();

  const jobID = availableService?.job_detail?.id;

  const handleAcceptedProvider = useCallback(async () => {
    const url = `/service-user/api/v1/accepted-artisan/?job_id=${jobID}`;

    try {
      setLoadingAcceptedProvider(true);
      const response = await axiosInstance.get(url);

      if (response) {
        setAcceptedProvider(response.data?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingAcceptedProvider(false);
    }
  }, [jobID, setLoadingAcceptedProvider, setAcceptedProvider]);

  useEffect(() => {
    handleAcceptedProvider();
  }, [handleAcceptedProvider]);

  useEffect(() => {
    if (acceptedProvider?.length === 0) {
      setOpenExplore(true);
    }
  }, [acceptedProvider, setOpenExplore]);

  const handleChatInitiation = (receiverId) => {
    handleinitiateChat(receiverId);
  };

  return (
    <>
      <h2 className="py-3 border-b">
        List of Merchant interest in your request
      </h2>
      {loadingAcceptedProvider && ProviderSkeleton(4)}
      {acceptedProvider?.map((provider) => {
        const receiver = provider?.receiver;
        const service = receiver?.services[0];
        return (
          <div key={provider.id} className="flex justify-between py-5 border-b">
            <div className="flex gap-5 items-center">
              <img
                className="object-cover w-14 h-14 rounded-full"
                src={service.image}
                alt=""
              />
              <div className="space-y-1">
                <p className="flex items-center gap-2 font-normal text-xs">
                  <span>{service.business_name}</span>

                  <span className=" w-fit border border-secondary rounded-md p-1 text-center text-[10px]">
                    {service.service_category.category}
                  </span>

                  <span className="text-green-700">
                    <RiStarFill />
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-primary text-lg">
                    <RiMapPinUserFill />
                  </p>
                  <p className="text-[10px] opacity-70">{receiver?.address}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-1 h-fit">
              <button className="bg-secondary/20 p-2 rounded-sm">
                <RiInfoI />
              </button>
              <button
                onClick={() => handleChatInitiation(receiver?.id)}
                className="bg-secondary p-2 rounded-sm"
              >
                <RiChat3Line />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AcceptedProvider;
