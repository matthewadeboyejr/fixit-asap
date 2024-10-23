import { RiStarFill, RiStarLine } from "react-icons/ri";

export const ReviewSkeleton = (cards) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div className="flex  rounded-lg  gap-3 w-full " key={index}>
        <div className="relative h-10 w-10 rounded-full flex justify-center items-center bg-gray-300/30 animate-pulse ">
          <svg
            className="w-4 h-4  text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        <div className="flex flex-col gap-2 justify-between px-2 animate-pulse">
          <div className="rounded-full h-2 w-24 bg-gray-300"></div>
          <div className="flex gap-1 text-gray-300 animate-pulse">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarLine />
          </div>
          <p className="rounded-full h-2 w-60 bg-gray-300"></p>
          <p className="rounded-full h-2 w-60 bg-gray-300"></p>
        </div>
      </div>
    ));
};
