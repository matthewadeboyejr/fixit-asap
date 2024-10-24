import React, { useState, useMemo } from "react";
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
  const businesName = providerDetail?.artisan?.business_name;
  const category = providerDetail?.service_category?.category;
  const address = providerDetail?.artisan?.address || "";
  const image = providerDetail?.image;
  const contactId = providerDetail?.artisan?.id;

  const navigate = useNavigate();

  // Memoized title and content to prevent unnecessary re-renders
  const titles = useMemo(() => ["Services", "About", "Reviews"], []);
  const contents = useMemo(() => [<Service />, <About />, <Review />], []);

  const [displayContent, setDisplayContent] = useState(0);

  const handleTabClick = (index) => setDisplayContent(index);

  return (
    <div className="flex min-h-screen justify-center bg-secondary/10 px-4 md:px-0">
      <main className="relative space-y-4 md:space-y-2 lg:space-y-6 w-full md:w-2/3 lg:w-1/3 bg-white rounded-lg md:m-8 lg:m-10 md:p-8 lg:p-10 p-5">
        <SubHeader title="Service Details" />

        <section className="relative rounded-lg overflow-hidden w-full">
          <div className="flex items-center justify-center px-5 sticky bottom-20 z-50 bg-white py-5">
            <div className="flex w-full flex-col gap-4 md:gap-5 justify-center items-center">
              <img
                className="object-cover w-full h-48 md:h-52 lg:h-60 rounded-lg"
                src={image}
                alt="Service"
              />
              <div className="space-y-2 flex flex-col items-center justify-center text-center">
                <p className="flex items-center gap-2">
                  <span className="text-sm md:text-base lg:text-lg">
                    {businesName}
                  </span>
                  <span className="w-fit border border-secondary rounded-md p-1 text-center text-xs md:text-sm">
                    {category}
                  </span>
                  <span className="text-green-700 text-xs md:text-sm">
                    <RiStarFill />
                  </span>
                </p>

                <div className="flex items-center gap-2 bg-secondary/5 w-fit p-1 rounded-md">
                  <CiLocationOn className="text-primary text-sm md:text-base" />
                  <p className="text-xs md:text-sm opacity-70">
                    {address.slice(0, 30)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Summary />

        <section className="bg-white pb-7 relative">
          <ul className="flex justify-evenly text-sm md:text-base lg:text-lg border-b rounded-lg sticky top-0 p-3 md:p-5 bg-white z-50">
            {titles.map((title, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  displayContent === index ? "border-b-4 border-secondary" : ""
                } px-2 md:px-4`}
                onClick={() => handleTabClick(index)}
              >
                {title}
              </li>
            ))}
          </ul>
          <div className="overflow-auto max-h-[60vh] md:max-h-[70vh]">
            {contents[displayContent]}
          </div>

          {/* Chat Button for larger screens */}
          {contactId && (
            <motion.div
              onClick={() => navigate("/chat", { state: { contactId } })}
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="hidden lg:block absolute bottom-6 right-6 z-10 cursor-pointer drop-shadow-lg"
            >
              <p className="bg-secondary p-3 text-2xl w-fit rounded-full hover:bg-opacity-90 transition-opacity">
                <IoChatbubbleEllipsesSharp />
              </p>
            </motion.div>
          )}
        </section>
      </main>

      {/* Chat Button for smaller screens */}
      {contactId && (
        <motion.div
          onClick={() => navigate("/chat", { state: { contactId } })}
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="lg:hidden fixed z-10 bottom-20 right-4 cursor-pointer drop-shadow-lg"
        >
          <p className="bg-secondary p-3 text-2xl w-fit rounded-full hover:bg-opacity-90 transition-opacity">
            <IoChatbubbleEllipsesSharp />
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceDetail;
