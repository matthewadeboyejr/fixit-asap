import { RiStarSFill } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import useArtisanContext from "../../hooks/useArtisanContext";
import ServiceCardSkeleton from "../skeleton/ServiceCardSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const FixOfTheMonth = ({ artisans = null, searchTerm = "" }) => {
  const {
    fixOFTheMonth: contextfixOFTheMonth,
    isLoading,
    getProviderDetail,
  } = useArtisanContext();
  const fixOFTheMonth = artisans !== null ? artisans : contextfixOFTheMonth;

  if (isLoading) return <ServiceCardSkeleton cards={7} />;

  return (
    <section className="space-y-10">
      <div className="flex items-center justify-between px-3">
        <h2 className="ext-lg  font-semibold border-primary ">
          Service of the Month
        </h2>
      </div>

      {fixOFTheMonth.length === 0 && !isLoading ? (
        <div className="text-center opacity-40 py-3">
          {searchTerm.trim()
            ? `No services match "${searchTerm}"`
            : "No services of the month available"}
        </div>
      ) : (
        <div
          id="fix"
          className="  flex gap-4 overflow-x-auto no-scrollbar pb-4"
        >
          {fixOFTheMonth.map((service) => (
            <div
              className="bg-white rounded-lg    hover:shadow-md min-w-[200px] max-w-[200px] flex-shrink-0"
              key={service.id}
              onClick={() => {
                getProviderDetail(service?.id);
              }}
            >
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
              >
                <div className="relative">
                  <LazyLoadImage
                    className="w-full h-44 object-cover rounded-2xl"
                    src={service.image || service?.service_category?.image}
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
                    <p className="opacity-80 text-xs">
                      {service.business_name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FixOfTheMonth;
