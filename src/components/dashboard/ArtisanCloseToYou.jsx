//import  { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiAccountCircleLine, RiStarSFill } from "react-icons/ri";
import useArtisanContext from "../hooks/useArtisanContext";

const ArtisanCloseToYou = () => {
  const { artisanData, isLoading } = useArtisanContext();

  return (
    <section className="space-y-5">
      <div className="flex justify-between px-5">
        <h2 className=" text-sm">Artisan close to you</h2>
        <Link className="text-secondary hover:underline">view all</Link>
      </div>

      <div className="flex gap-5 overflow-x-auto ">
        {isLoading && <CardSkeleton />}
        {artisanData.map((item) => (
          <div className="space-y-5 rounded-lg bg-white p-3  ">
            <div className="relative rounded-lg overflow-hidden  md:w-80  w-64 ">
              <img
                className="object-cover min-w-full  md:h-60  "
                src={
                  item.image === null
                    ? "https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    : ""
                }
                alt=""
              />
              <div className="absolute bg-primary/20 inset-0 "></div>
              <div className="absolute inset-0 ">
                <div className="flex items-center bg-white w-12  m-3 rounded-sm justify-evenly">
                  <p>
                    <RiStarSFill className="text-teriary text-sm" />
                  </p>

                  <p className="text-xs">{"star"}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between px-2">
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-medium op">
                  {item.service_category.category}
                </h5>
                <div className=" flex  items-center gap-2 text-xs">
                  <RiAccountCircleLine className=" text-secondary " />
                  <p className="opacity-50 text-xs">
                    {item.artisan.business_name}
                  </p>
                </div>
              </div>

              <p className="font-medium text-xs text-secondary">{"distance"}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtisanCloseToYou;

export const CardSkeleton = (cards) => {
  return Array(cards)
    .fill(0)
    .map((i) => (
      <div className="space-y-5 rounded-lg bg-gray-50/70 p-3  " key={i}>
        <div className="relative h-52  mb-4 flex justify-center items-center bg-gray-300 animate-pulse md:w-80  w-64">
          {" "}
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
            <h5 className="rounded-full h-2 w-24 bg-gray-300"></h5>
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
