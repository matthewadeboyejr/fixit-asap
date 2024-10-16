import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import useArtisanContext from "../../hooks/useArtisanContext";

const FixOfTheMonth = () => {
  const { fixOFTheMonth, isLoading } = useArtisanContext();

  const placeHolderImg =
    "https://savvyplumbing.co.za/wp-content/uploads/2021/06/professional-plumber.jpg";

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between px-3">
        <h2 className="text-sm  border-b-2 border-primary font-semibold">
          Fix of the Month
        </h2>
        <Link className="text-secondary/50 hover:underline text-sm font-medium">
          view all
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {isLoading && <CardSkeleton cards={3} />}
        {fixOFTheMonth.map((item) => (
          <div
            className="bg-white rounded-lg hover:shadow-md min-w-[200px] max-w-[200px] flex-shrink-0"
            key={item.id}
            //onClick={() => {
            // getProviderDetail(item?.receiver?.id);
            // }}
          >
            {item.receiver?.services.map((service) => (
              <div key={service.id}>
                <div className="relative">
                  <img
                    className="w-full h-28 object-cover rounded-2xl"
                    src={
                      service.image === null ? placeHolderImg : service.image
                    }
                    alt={service.service_name}
                  />
                  <div className="absolute top-0 left-0 m-3 p-1 flex items-center gap-1 bg-white rounded-sm">
                    <RiStarSFill className="text-orange-400 text-sm" />
                    <p className="text-xs">4.5</p>
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
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FixOfTheMonth;

export const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        className="space-y-5 rounded-lg bg-gray-50/70 p-3 min-w-[250px] flex-shrink-0"
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
