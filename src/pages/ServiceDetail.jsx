import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";

import { SubHeader } from "../components/general/Header";
import useArtisanContext from "../hooks/useArtisanContext";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import Service from "../components/serviceDetail/Service";
import About from "../components/serviceDetail/About";
import Review from "../components/serviceDetail/Review";
import Summary from "../components/serviceDetail/Summary";

const ServiceDetail = () => {
  const { providerDetail } = useArtisanContext();

  console.log(providerDetail, "from serdetails");

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
      <div className=" flex  min-h-screen justify-center bg-secondary/10">
        <main className="space-y-2  md:w-1/3 w-full bg-white md:rounded-2xl  md:m-10 md:p-10 p-5 ">
          <SubHeader title={"Service Details"} />
          <section className="relative rounded-lg overflow-hidden  w-full ">
            <div className="flex items-center justify-center px-5  sticky bottom-20 z-50 bg-white py-5">
              <div className="flex w-full flex-col gap-5 justify-center items-center">
                <img
                  className="object-cover w-full h-52  rounded-lg "
                  src={image}
                  alt=""
                />
                <div className="space-y-1 flex flex-col items-center justify-center">
                  <p className="flex items-center gap-2  ">
                    <span className="text-sm text-nowrap">{businesName}</span>
                    <span className=" w-fit border border-secondary rounded-md p-1 text-center text-xs">
                      {category}
                    </span>
                    <span className="text-green-700 text-xs">
                      <RiStarFill />
                    </span>
                  </p>

                  <div className="flex items-center gap-2 bg-secondary/5 w-fit p-1">
                    <p className="text-primary text-sm">
                      <CiLocationOn />
                    </p>
                    <p className="text-xs opacity-70">{address.slice(0, 30)}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Summary />

          <section className="bg-white  pb-7  ">
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
            <div className="overflow-auto"> {content[displayContent]}</div>
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
