import React from "react";
import { RiStarSFill, RiGroupFill, RiChat4Fill } from "react-icons/ri";
import useArtisanContext from "../../hooks/useArtisanContext";

const Summary = () => {
  const { providerDetail } = useArtisanContext();
  const customer = providerDetail?.total_customers;
  const rating = providerDetail?.overall_ratings;
  const review = providerDetail?.total_reviews;
  return (
    <section className="flex justify-around ">
      <div className="flex flex-col items-center ">
        <p className=" bg-secondary/10 text-secondary p-3 rounded-full w-fit mb-2 ">
          <RiGroupFill />
        </p>
        <p className="font-medium text-xs">{customer}</p>
        <p className="text-xs opacity-70">Customers</p>
      </div>

      <div className="flex flex-col items-center ">
        <p className=" bg-secondary/10 text-secondary p-3 rounded-full w-fit mb-2 ">
          <RiStarSFill />
        </p>
        <p className="font-medium text-xs">{rating}</p>
        <p className="text-xs opacity-70">Rating</p>
      </div>
      <div className="flex flex-col items-center ">
        <p className=" bg-secondary/10 text-secondary p-3 rounded-full w-fit mb-2 ">
          <RiChat4Fill />
        </p>
        <p className="font-medium  text-xs">{review}</p>
        <p className="text-xs opacity-70">Review</p>
      </div>
    </section>
  );
};

export default Summary;
