import { RiStarSFill } from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";
import { GoPerson } from "react-icons/go";
import ServiceCardSkeleton from "../skeleton/ServiceCardSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const ArtisanCloseToYou = ({ artisans = null, searchTerm = "" }) => {
  const {
    closestArtisan: contextClosestArtisan,
    isLoading,
    getProviderDetail,
  } = useArtisanContext();
  const closestArtisan = artisans !== null ? artisans : contextClosestArtisan;

  const imgHolder =
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  if (isLoading) return <ServiceCardSkeleton cards={7} />;

  return (
    <section className="space-y-10">
      <div className="flex  items-center justify-between px-3">
        <h2 className="text-lg  font-semibold  border-primary">Recommended</h2>
      </div>

      {closestArtisan.length === 0 && !isLoading ? (
        <div className="text-center opacity-40 py-3">
          {searchTerm.trim()
            ? `No providers match "${searchTerm}"`
            : "No providers nearby"}
        </div>
      ) : (
        <div
          id="recommended"
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4"
        >
          {closestArtisan.map((item, index) => (
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
              key={item?.id || index}
              onClick={() => {
                getProviderDetail(item?.id);
              }}
              className="bg-white rounded-lg  hover:shadow-md min-w-[300px] max-w-[300px]  flex-shrink-0"
            >
              <div className="relative">
                <LazyLoadImage
                  className="w-full h-48 rounded-2xl object-cover"
                  src={
                    item?.image || item?.service_category?.image || imgHolder
                  }
                  alt="Service Image"
                />

                <div className="absolute top-0 left-0 m-3 p-1 flex items-center gap-1 bg-white rounded-sm">
                  <RiStarSFill className="text-orange-400 text-sm" />
                  <p className="text-xs">{item?.overall_ratings || 0}</p>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-medium">
                    {item?.service_category?.category || "Service"}
                  </h5>
                  <p className="font-medium text-xs text-secondary">
                    About 1km
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <GoPerson className="text-secondary" />
                  <p className="opacity-80 text-xs">
                    {item?.business_name || "Business name"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ArtisanCloseToYou;
