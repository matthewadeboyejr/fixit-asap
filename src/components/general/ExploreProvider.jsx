import { RiMapPinUserFill } from "react-icons/ri";
import { RiChat3Line, RiStarFill } from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";
import useAddressContext from "../../hooks/useAddressContext";
import { ProviderSkeleton } from "../skeleton/ProviderSkeleton";
import useGetProviders from "../../hooks/useGetProviders";

const ExploreProvider = () => {
  const { postalCode } = useAddressContext();
  const { availableService } = useArtisanContext();

  const id = availableService?.job_detail?.job_category;
  const budget = availableService?.job_detail?.budget_range;
  const description = availableService?.job_detail?.service_description;
  const endPoint = "/service-user/api/v1/exploremore-service/";

  const { exporedService, loading } = useGetProviders(
    endPoint,
    id,
    postalCode,
    budget,
    description
  );

  return (
    <>
      {loading && ProviderSkeleton(4)}
      {exporedService?.map((provider) => (
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
                  {provider?.service_category?.category}
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
                  {provider?.artisan?.address.slice(0, 20) + "..."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-1 h-fit">
            <button className="bg-secondary p-2 rounded-sm ">
              <RiChat3Line />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExploreProvider;
