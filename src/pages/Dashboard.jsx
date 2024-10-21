import React, { useCallback, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Header, { MobileNav } from "../components/general/Header";
import Categories from "../components/dashboard/Categories";
import { motion } from "framer-motion";
import ArtisanCloseToYou from "../components/dashboard/ArtisanCloseToYou";
import ProfileModal from "../components/dashboard/Modals/ProfileModal";
import FixOfTheMonth from "../components/dashboard/FixOfTheMonth";
import useOpenModalContext from "../hooks/useOpenModalContext";
import SelectAddress from "../components/Modal/SelectAddress";
import RequestServiceModal from "../components/dashboard/Modals/RequestServiceModal";
import useArtisanContext from "../hooks/useArtisanContext";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import useProfileContext from "../hooks/useProfileContext";
import { CgSpinnerTwo } from "react-icons/cg";

const Dashboard = () => {
  const { setOpenRequest } = useOpenModalContext();
  const {
    handleDashData,
    isLoading,
    closestArtisan,
    fixOFTheMonth,
    category,
    loadingProviderDetails,
  } = useArtisanContext();
  const { handleProfileData, profileData } = useProfileContext();

  useEffect(() => {
    if (!closestArtisan && !fixOFTheMonth && !category) {
      handleDashData();
    } else if (
      Array.isArray(closestArtisan) &&
      closestArtisan.length === 0 &&
      Array.isArray(fixOFTheMonth) &&
      fixOFTheMonth.length === 0 &&
      Array.isArray(category) &&
      category.length === 0
    ) {
      handleDashData();
    }
  }, [closestArtisan, fixOFTheMonth, category]);

  useEffect(() => {
    if (!profileData) {
      handleProfileData();
    }
  }, [profileData]);

  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#address",
        popover: {
          title: "Confirm/Change Address",
          description:
            "Fixit-Asap will automatically detect your location, but you can change it by clicking on the address.",
          side: "right",
          align: "start",
        },
      },

      {
        element: "#nav",
        popover: {
          title: "Navigation Bar",
          description:
            "In the navigation bar, you can view your active or upcoming bookings by clicking the 'Booking' tab, check conversations with artisans via the 'Chats' tab, and access your profile through the 'Profile' tab",
          side: "right",
          align: "start",
        },
      },
      {
        element: "#notification",
        popover: {
          title: "Get Notifications",
          description:
            "Click here to view all your notifications and activities on Fixit-Asap",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#category",
        popover: {
          title: "Categories",
          description:
            "You can browse artisans by category—just click on any category you prefer.",
          side: "right",
          align: "start",
        },
      },
      {
        element: "#fix",
        popover: {
          title: "Fixed Of the month",
          description:
            "This is a special service with carefully selected artisans for you each month.Click on any to get more details.",
          side: "right",
          align: "start",
        },
      },
      {
        element: "#recommended",
        popover: {
          title: "Artisans close to you",
          description:
            "These are services from artisans near your location. Click on any to get more details.",
          side: "right",
          align: "start",
        },
      },
      {
        popover: {
          title: "Happy Fixing ",
          description:
            "And that's it! Go ahead and start booking services from your favorite artisans ASAP.",
        },
      },
    ],
  });

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");

    if (!isLoading && !hasSeenTutorial) {
      driverObj.drive();
      localStorage.setItem("hasSeenTutorial", "true");
    }
  }, [isLoading]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <main className="pb-20 sm:pb-5">
        <section className="space-y-5 rounded-b-3xl sticky top-0 bg-secondary p-5">
          <Header />
          {/* <h1 className="text-2xl font-medium text-teriary">
            How can we help you?
          </h1> */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-grow">
              <div className="w-full border bg-white flex items-center rounded-md p-2">
                <RiSearch2Line className="text-gray-400" />
                <input
                  className="bg-transparent w-full rounded-md placeholder:text-sm pl-3 outline-none placeholder:text-primary/50"
                  placeholder="Search e.g cleaner"
                  type="text"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-5 space-y-8 rounded-t-2xl">
          <Categories />
          <FixOfTheMonth />
          <ArtisanCloseToYou />
        </section>

        <div
          className={`${
            loadingProviderDetails ? "fixed" : "hidden"
          } flex items-center justify-center  z-20 inset-0 bg-black/50 h-screen`}
        >
          <CgSpinnerTwo className="text-secondary animate-spin text-4xl" />
        </div>
      </main>

      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        onClick={() => setOpenRequest(true)}
        className="fixed z-10 bottom-24 sm:bottom-16 right-4 cursor-pointer"
      >
        <button className="bg-secondary p-3 text-xl font-normal rounded-full hover:bg-opacity-90 transition-opacity shadow-lg">
          <IoAdd />
        </button>
      </motion.div>

      <footer className="fixed sm:hidden z-10 w-full left-0 right-0 h-16 bottom-0">
        <div className="max-w-7xl mx-auto px-4">
          <MobileNav />
        </div>
      </footer>

      <RequestServiceModal />
      <ProfileModal />
      <SelectAddress />
    </div>
  );
};

export default Dashboard;
