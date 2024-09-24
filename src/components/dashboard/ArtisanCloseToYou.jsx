import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";
import { GoPerson } from "react-icons/go";

const ArtisanCloseToYou = () => {
  const { closestArtisan, isLoading } = useArtisanContext();

  const placeHolderImg =
    "https://savvyplumbing.co.za/wp-content/uploads/2021/06/professional-plumber.jpg";

  return (
    <section className="space-y-5">
      <div className="flex justify-between px-3">
        <h2 className="text-sm font-medium">Artisan close to you</h2>
        <Link className="text-primary hover:underline text-sm">view all</Link>
      </div>

      {closestArtisan.length === 0 ? (
        <div className="text-center opacity-40 py-3">
          No artisan is closed to you
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {isLoading && <CardSkeleton cards={3} />}
          {closestArtisan.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md min-w-[250px] flex-shrink-0"
            >
              <div className="relative">
                <img
                  className="w-full h-48 rounded-t-lg object-cover"
                  src={item.image === null ? placeHolderImg : item.image}
                  alt=""
                />
                <div className="absolute top-0 left-0 m-3 p-2 flex items-center gap-2 bg-white rounded-sm">
                  <RiStarSFill className="text-teriary text-sm" />
                  <p className="text-xs">4.5</p>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-medium">
                    {item.service_category.category}
                  </h5>
                  <p className="font-medium text-xs text-secondary">1 km+</p>
                </div>
                <div className="flex items-center gap-2">
                  <GoPerson className="text-secondary" />
                  <p className="opacity-50 text-xs">
                    {item.artisan.business_name}
                  </p>
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

export const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        className="space-y-5 rounded-lg bg-gray-50/70 p-3 min-w-[250px]"
        key={index}
      >
        <div className="relative h-48 mb-4 flex justify-center items-center bg-gray-300 animate-pulse rounded-t-lg">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        <div className="flex justify-between px-2 animate-pulse">
          <div className="flex flex-col gap-2">
            <div className="rounded-full h-2 w-24 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-xs">
              <div className="rounded-full h-2 w-2 bg-gray-300"></div>
              <p className="rounded-full h-2 w-40 bg-gray-300"></p>
            </div>
          </div>

          <p className="rounded-full h-2 w-10 bg-gray-300"></p>
        </div>
      </div>
    ));
};
