import { useEffect } from "react";
import { RiMapPinUserFill } from "react-icons/ri";
import { RiChat3Line, RiStarFill, RiInfoI } from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";

const AvailableProvider = () => {
  const { availableService } = useArtisanContext();

  return (
    <>
      {availableService.map((provider) => (
        <div className="flex justify-between py-5 border-b">
          <div className="flex gap-5 items-center">
            <img
              className="object-cover w-14 h-14  rounded-full "
              src={provider?.image}
              alt=""
            />
            <div className="space-y-1">
              <div>
                <p className="text-xs w-fit border border-secondary rounded-md p-1 text-center">
                  {provider.service_category?.category}
                </p>
              </div>
              <p className="flex items-center gap-2 font-medium text-xs ">
                <span>{provider?.artisan?.business_name}</span>
                <span className="text-green-700">
                  <RiStarFill />
                </span>
              </p>
              <div className="flex items-center gap-2">
                <p className="text-teriary text-lg">
                  <RiMapPinUserFill />
                </p>
                <p className="text-xs opacity-50">
                  {provider?.artisan?.address.slice(0, 10) + "..."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-1 h-fit">
            <button className=" bg-secondary/20 p-2 rounded-sm">
              <RiInfoI />
            </button>
            <button className="bg-secondary p-2 rounded-sm ">
              <RiChat3Line />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AvailableProvider;

export const ProviderSkeleton = (cards) => {
  return Array(cards)
    .fill(0)
    .map((index) => (
      <div
        className="flex items-center rounded-lg bg-gray-50/70   "
        key={index}
      >
        <div className="relative h-10 w-10 rounded-full flex justify-center items-center bg-gray-300 animate-pulse ">
          <svg
            className="w-5 h-5  text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        <div className="flex  justify-between px-2 animate-pulse">
          <div className="flex flex-col gap-2">
            <div className="rounded-full h-2 w-24 bg-gray-300"></div>
            <div className=" flex  items-center gap-2 text-xs">
              <div className="rounded-full h-2 w-2 bg-gray-300"></div>
              <p className="rounded-full h-2 w-40 bg-gray-300"></p>
            </div>
          </div>

          <p className="rounded-full h-2 w-10 bg-gray-300"></p>
        </div>
      </div>
    ));
};
