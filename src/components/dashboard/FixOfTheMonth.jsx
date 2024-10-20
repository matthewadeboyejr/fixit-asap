import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import useArtisanContext from "../../hooks/useArtisanContext";
import ServiceCardSkeleton from "../skeleton/ServiceCardSkeleton";

const FixOfTheMonth = () => {
  const { fixOFTheMonth, isLoading, getProviderDetail } = useArtisanContext();

  console.log(fixOFTheMonth, "fix fix");

  return (
    <section className="space-y-10">
      <div className="flex items-center justify-between px-3">
        <h2 className="ext-lg  font-semibold border-primary ">
          Fix of the Month
        </h2>
        {/* <Link className="text-secondary/50 hover:underline text-sm font-medium">
          view all
        </Link> */}
      </div>

      <div id="fix" className="  flex gap-4 overflow-x-auto no-scrollbar pb-4">
        {isLoading && <ServiceCardSkeleton cards={7} />}
        {fixOFTheMonth.map((service) => (
          <div
            className="bg-white rounded-lg  md:shadow-none shadow-md hover:shadow-md min-w-[200px] max-w-[200px] flex-shrink-0"
            key={service.id}
            onClick={() => {
              getProviderDetail(service?.id);
            }}
          >
            <div>
              <div className="relative">
                <img
                  className="w-full h-44 object-cover rounded-2xl"
                  src={
                    service.image === null
                      ? service?.service_category.image
                      : service.image
                  }
                  alt={service.business_name}
                />
                <div className="absolute top-0 left-0 m-3 p-1 flex items-center gap-1 bg-white rounded-sm">
                  <RiStarSFill className="text-orange-400 text-sm" />
                  <p className="text-xs">{service?.overall_ratings}</p>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-medium">
                    {service.service_category?.category}
                  </h5>
                  <p className="font-medium text-xs text-secondary">1 km+</p>
                </div>
                <div className="flex items-center gap-2">
                  <GoPerson className="text-secondary" />
                  <p className="opacity-80 text-xs">{service.business_name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FixOfTheMonth;
