import React, { useState } from "react";
import {
  RiStarSFill,
  RiStarFill,
  RiGroupFill,
  RiPoliceBadgeFill,
  RiChat4Fill,
  RiMapPinUserFill,
  RiStarLine,
} from "react-icons/ri";

import { SubHeader } from "../components/general/Header";
import useArtisanContext from "../hooks/useArtisanContext";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { providerDetail } = useArtisanContext();

  console.log(providerDetail, "from serdetails");

  const customer = providerDetail?.total_customers;
  const rating = providerDetail?.overall_ratings;
  const review = providerDetail?.total_reviews;
  const businesName = providerDetail?.artisan?.business_name;
  const category = providerDetail?.service_category?.category;
  const address = providerDetail?.artisan?.address;
  const image = providerDetail?.image;
  const contactId = providerDetail?.artisan?.id;

  const navigate = useNavigate();

  const title = {
    0: "Services",
    1: "About",
    2: "Reviews",
  };

  const content = {
    0: <Service />,
    1: <About />,
    2: <Review />,
  };

  const [displayContent, setDisplayConstent] = useState(0);

  const handleAboutClick = () => {
    setDisplayConstent(0);
  };

  const handleWorkClick = () => {
    setDisplayConstent(1);
  };

  const handleReviewClick = () => {
    setDisplayConstent(2);
  };

  const handleChatInitiation = () => {
    if (contactId) {
      navigate("/chat", { state: { contactId } });
    }
  };

  return (
    <>
      <div className=" flex justify-center bg-white/50">
        <main className="space-y-10 m-5 md:w-1/3 w-full ">
          <SubHeader title={"Service provider"} />
          <section className="relative rounded-lg overflow-hidden  w-full ">
            <div className="flex items-center justify-between px-5  sticky bottom-20 z-50 bg-white py-5">
              <div className="flex gap-5 items-center">
                <img
                  className="object-cover w-14 h-14  rounded-full "
                  src={image}
                  alt=""
                />
                <div className="space-y-1">
                  <p className="flex items-center gap-2 font-semibold ">
                    <span>{businesName}</span>
                    <span className=" w-fit border border-secondary rounded-md p-1 text-center text-xs">
                      {category}
                    </span>
                    <span className="text-green-700">
                      <RiStarFill />
                    </span>
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="text-primary text-lg">
                      <RiMapPinUserFill />
                    </p>
                    <p className="text-sm opacity-50">{address}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-between ">
            <div className="flex flex-col items-center ">
              <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
                <RiGroupFill />
              </p>
              <p className="font-semibold text-xs">{customer}</p>
              <p className="text-xs opacity-50">Customers</p>
            </div>
            <div className="flex flex-col items-center ">
              <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
                <RiPoliceBadgeFill />
              </p>
              <p className="font-semibold text-xs">Trusted</p>
              <p className="text-xs opacity-50">Badge</p>
            </div>
            <div className="flex flex-col items-center ">
              <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
                <RiStarSFill />
              </p>
              <p className="font-semibold text-xs">{rating}</p>
              <p className="text-xs opacity-50">Rating</p>
            </div>
            <div className="flex flex-col items-center ">
              <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
                <RiChat4Fill />
              </p>
              <p className="font-semibold text-xs">{review}</p>
              <p className="text-xs opacity-50">Review</p>
            </div>
          </section>

          <section className="bg-white space-y-10 pb-7  ">
            <ul className=" flex justify-evenly text-sm border-b rounded-lg sticky top-0 p-5 bg-white z-50 ">
              <li
                className="border-b-4 border-secondary cursor-pointer"
                onClick={handleAboutClick}
              >
                {title[0]}
              </li>
              <li className="cursor-pointer" onClick={handleWorkClick}>
                {title[1]}
              </li>
              <li className="cursor-pointer" onClick={handleReviewClick}>
                {title[2]}
              </li>
            </ul>
            <div className="px-5 overflow-auto"> {content[displayContent]}</div>
          </section>
        </main>

        <motion.div
          onClick={() => handleChatInitiation()}
          whileHover={{ scale: 1.2, rotate: 20 }}
          className=" flex max-w-lg fixed z-10 bottom-24 right-4 cursor-pointer drop-shadow-lg "
        >
          <p className="bg-secondary p-3  text-2xl w-fit rounded-full hover:bg-opacity-90  transition-opacity ">
            <IoChatbubbleEllipsesSharp />
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceDetail;

const Service = () => {
  return <div className="space-y-3 "></div>;
};
const About = () => {
  const { providerDetail } = useArtisanContext();

  const about = providerDetail?.artisan?.business_detail;

  return (
    <div className="space-y-3">
      <div className="p-5 bg-secondary/10 ">{about}</div>
    </div>
  );
};

const Review = () => {
  const { providerDetail } = useArtisanContext();
  const rating = providerDetail?.overall_ratings || 0;
  const review = providerDetail?.total_reviews || 0;

  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        i <= rating ? (
          <RiStarFill key={i} className="text-orange-400" />
        ) : (
          <RiStarLine key={i} className="text-orange-400" />
        )
      );
    }

    return stars;
  };

  return (
    <div className="space-y-5 ">
      <section>
        <h4 className=" font-medium opacity-50 text-center">Overall rating</h4>
        <div className="flex flex-col gap-2 items-center border-b py-5">
          <p className="text-4xl font-semibold">{rating}</p>
          <p className="flex items-center  text-orange-400 text-2xl gap-1 ">
            {renderStars()}
          </p>
          <p className=" text-sm opacity-50">{`based on ${review} reviews`}</p>
        </div>
      </section>

      <section className="space-y-4 ">
        <div className="flex gap-5 py-3 ">
          <img
            className="object-cover w-14 h-14  rounded-full "
            src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="space-y-3">
            <h4 className=" font-medium opacity-50 ">John Doe</h4>
            <p className="flex items-center text-orange-400 text-sm gap-1 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </p>
            <p>
              Excellent service and also keep to time, i will recommed them to
              anyone
            </p>
            <p className="text-xs opacity-50">
              <span>London</span>/<span>1/2/23</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
