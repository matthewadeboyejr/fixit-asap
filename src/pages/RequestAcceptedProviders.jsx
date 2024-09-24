import React from "react";
import ProvidersLocationMap from "../components/map/ProvidersLocationMap";
import { SubHeader } from "../components/general/Header";
import { useNavigate } from "react-router-dom";
import useArtisanContext from "../hooks/useArtisanContext";

const RequestAcceptedProviders = () => {
  const navigate = useNavigate();
  const { availableService } = useArtisanContext();
  return (
    <main className="w-screen h-screen flex  flex-col md:items-center   ">
      <div className="relative p-5 md:w-1/3 bg-white rounded-md shadow-md h-full ">
        <div className=" absolute top-0 right-0 w-full p-5 z-50 bg-white">
          <SubHeader title={"Searching for Providers"} />
          <p className="ml-12 text-xs   ">
            Sending your request to providers around
          </p>
        </div>
        <div className="">
          <ProvidersLocationMap />
        </div>
        <div className=" absolute bottom-0 right-0 p-5 bg-white w-full flex justify-around items-center">
          <div className="border-4 animate-pulse items-center justify-center font-medium text-xl flex w-14 h-14 rounded-full">
            {availableService.length}
          </div>
          <p className="flex flex-col ">
            <span className="font-medium text-sm">Service provider</span>
            <span className="opacity-50 text-xs">
              Have accepted your request
            </span>
          </p>

          <div>
            <button
              onClick={() => navigate("/view-requested-providers")}
              className="btn-primary"
            >
              view
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestAcceptedProviders;
