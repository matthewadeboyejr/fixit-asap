import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";
import { GoPerson } from "react-icons/go";
import ServiceCardSkeleton from "../skeleton/ServiceCardSkeleton";

const ArtisanCloseToYou = () => {
  const { closestArtisan, isLoading, getProviderDetail } = useArtisanContext();

  return (
    <section className="space-y-10">
      <div className="flex  items-center justify-between px-3">
        <h2 className="text-sm   border-primary font-medium">Recommended</h2>
        <Link className="text-secondary/60 hover:underline text-sm font-medium">
          view all
        </Link>
      </div>

      {closestArtisan.length === 0 ? (
        <div className="text-center opacity-40 py-3">
          No artisan is closed to you
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {isLoading && <ServiceCardSkeleton cards={7} />}
          {closestArtisan.map((item) => (
            <div
              key={item?.id}
              onClick={() => {
                getProviderDetail(item?.id);
              }}
              className="bg-white rounded-lg  md:shadow-none shadow-md hover:shadow-md min-w-[300px] max-w-[300px]  flex-shrink-0"
            >
              <div className="relative">
                <img
                  className="w-full h-48 rounded-2xl object-cover"
                  src={
                    item.image === null
                      ? item?.service_category.image
                      : item.image
                  }
                  alt=""
                />
                <div className="absolute top-0 left-0 m-3 p-1 flex items-center gap-1 bg-white rounded-sm">
                  <RiStarSFill className="text-orange-400 text-sm" />
                  <p className="text-xs">{item?.overall_ratings}</p>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-medium">
                    {item?.service_category?.category}
                  </h5>
                  <p className="font-medium text-xs text-secondary">1 km+</p>
                </div>
                <div className="flex items-center gap-2">
                  <GoPerson className="text-secondary" />
                  <p className="opacity-80 text-xs">{item?.business_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ArtisanCloseToYou;
