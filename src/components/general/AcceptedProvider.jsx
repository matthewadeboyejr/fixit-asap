import React, { useEffect, useCallback, useState } from "react";
import {
  RiMapPinUserFill,
  RiChat3Line,
  RiStarFill,
  RiLoader4Line,
} from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";
import axiosInstance from "../../api/axios";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { ProviderSkeleton } from "../skeleton/ProviderSkeleton";
import useChatContext from "../../hooks/useChatContext";
import Spinner from "../util/Spinner";

// Configurable settings
const POLLING_INTERVAL = 5000; // 5 seconds
const MAX_ATTEMPTS = 10; // ~50 seconds total

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
  const [attempts, setAttempts] = useState(0);
  const [isPolling, setIsPolling] = useState(true);
  const [searchStatus, setSearchStatus] = useState(
    "Searching for providers..."
  );

  const jobID = availableService?.job_detail?.id;

  const handleAcceptedProvider = useCallback(async () => {
    if (!isPolling) return;

    const url = `/service-user/api/v1/accepted-artisan/?job_id=${jobID}`;

    try {
      setLoadingAcceptedProvider(true);
      setSearchStatus(`Searching... (Attempt ${attempts + 1}/${MAX_ATTEMPTS})`);

      const response = await axiosInstance.get(url);

      if (response) {
        setAcceptedProvider(response?.data?.data);

        if (response?.data?.data?.length > 0) {
          setIsPolling(false);
          setSearchStatus("Providers found!");
        } else if (attempts >= MAX_ATTEMPTS - 1) {
          setIsPolling(false);
          setSearchStatus("No providers available. Expanding search...");
          setOpenExplore(true);
        }
      }
    } catch (error) {
      console.error(error);
      setSearchStatus("Connection issue. Retrying...");
    } finally {
      setLoadingAcceptedProvider(false);
    }
  }, [
    jobID,
    attempts,
    isPolling,
    setLoadingAcceptedProvider,
    setAcceptedProvider,
    setOpenExplore,
  ]);

  useEffect(() => {
    // Initial call
    handleAcceptedProvider();

    const intervalId = setInterval(() => {
      if (isPolling && attempts < MAX_ATTEMPTS) {
        setAttempts((prev) => prev + 1);
        handleAcceptedProvider();
      }
    }, POLLING_INTERVAL);

    return () => clearInterval(intervalId);
  }, [handleAcceptedProvider, isPolling, attempts]);

  const handleChatInitiation = (receiverId) => {
    handleinitiateChat(receiverId);
  };

  return (
    <>
      <h2 className="py-3 border-b">
        List of Merchant interest in your request
      </h2>

      {/* Search status indicator */}
      {isPolling && (
        <div className="flex items-center gap-2 py-2 text-sm text-gray-600">
          <Spinner />
          <span>{searchStatus}</span>
        </div>
      )}

      {/*   {loadingAcceptedProvider && ProviderSkeleton(4)} */}

      {acceptedProvider?.length > 0
        ? acceptedProvider.map((provider) => {
            const receiver = provider?.receiver;
            const service = receiver?.services[0];
            return (
              <div
                key={provider.id}
                className="flex justify-between py-5 border-b"
              >
                <div className="flex gap-5 items-center">
                  <img
                    className="object-cover w-14 h-14 rounded-full"
                    src={service.image}
                    alt=""
                  />
                  <div className="space-y-1">
                    <p className="flex items-center gap-2 font-normal text-xs">
                      <span>{service.business_name}</span>
                      <span className="w-fit border border-secondary rounded-md p-1 text-center text-[10px]">
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
                      <p className="text-[10px] opacity-70">
                        {receiver?.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 h-fit">
                  <button
                    onClick={() => handleChatInitiation(receiver?.id)}
                    className="bg-secondary p-2 rounded-sm"
                  >
                    <RiChat3Line />
                  </button>
                </div>
              </div>
            );
          })
        : !loadingAcceptedProvider && (
            <p className="py-4 text-center text-gray-500">
              {searchStatus.includes("Expanding")
                ? searchStatus
                : "No providers available yet. Please wait..."}
            </p>
          )}
    </>
  );
};

export default AcceptedProvider;
