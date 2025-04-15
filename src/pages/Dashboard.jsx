import React, { useCallback, useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Header, { MobileNav } from "../components/general/Header";
import Categories from "../components/dashboard/Categories";
import { motion } from "framer-motion";
import ArtisanCloseToYou from "../components/dashboard/ArtisanCloseToYou";
import FixOfTheMonth from "../components/dashboard/FixOfTheMonth";
import useOpenModalContext from "../hooks/useOpenModalContext";
import useArtisanContext from "../hooks/useArtisanContext";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import useProfileContext from "../hooks/useProfileContext";
import DriverSteps from "../components/general/DriverObj";
import ProfileModal from "../components/dashboard/Modal/ProfileModal";
import RequestServiceModal from "../components/dashboard/Modal/RequestServiceModal";
import AllCategoryModal from "../components/dashboard/Modal/AllCategoryModal";
import { debounce } from "lodash";
import LoadingSpinner from "../components/animation/LoadingSpinner";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setOpenRequest } = useOpenModalContext();
  const {
    handleDashData,
    isLoading,
    closestArtisan,
    fixOFTheMonth,
    category,
    loadingProviderDetails,
    gettingByCategory,
  } = useArtisanContext();
  const { handleProfileData, profileData } = useProfileContext();

  const fetchDashboardData = useCallback(() => {
    if (!closestArtisan && !fixOFTheMonth && !category) {
      handleDashData();
    } else if (
      [closestArtisan, fixOFTheMonth, category].every(
        (item) => Array.isArray(item) && item.length === 0
      )
    ) {
      handleDashData();
    }
  }, [closestArtisan, fixOFTheMonth, category, handleDashData]);

  const fetchProfileData = useCallback(() => {
    if (!profileData) {
      handleProfileData();
    }
  }, [profileData, handleProfileData]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  const driverObj = driver({
    showProgress: true,
    steps: DriverSteps,
  });

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");

    if (!isLoading && !hasSeenTutorial) {
      driverObj.drive();
      localStorage.setItem("hasSeenTutorial", "true");
    }
  }, [isLoading, driverObj]);

  /* filters */
  const filteredArtisans = closestArtisan?.filter((artisan) => {
    if (!searchTerm) return true;

    const businessName = artisan?.business_name?.toLowerCase() || "";
    const categoryName =
      artisan?.service_category?.category?.toLowerCase() || "";
    const description = artisan?.description?.toLowerCase() || "";
    const searchTermLower = searchTerm.toLowerCase();

    return (
      businessName.includes(searchTermLower) ||
      categoryName.includes(searchTermLower) ||
      description.includes(searchTermLower)
    );
  });

  const filteredFixOfTheMonth = fixOFTheMonth?.filter((artisan) => {
    if (!searchTerm) return true;

    const businessName = artisan?.business_name?.toLowerCase() || "";
    const categoryName =
      artisan?.service_category?.category?.toLowerCase() || "";
    const description = artisan?.description?.toLowerCase() || "";
    const searchTermLower = searchTerm.toLowerCase();

    return (
      businessName.includes(searchTermLower) ||
      categoryName.includes(searchTermLower) ||
      description.includes(searchTermLower)
    );
  });

  const handleSearch = debounce((term) => {
    setSearchTerm(term);
  }, 300);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-secondary/5 h-screen">
      <main className="pb-20 sm:pb-5">
        <section className="space-y-5 rounded-b-3xl sticky top-0 z-20 bg-secondary p-5">
          <Header />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-grow">
              <div className="w-full border bg-white flex items-center rounded-md p-2">
                <RiSearch2Line className="text-gray-400" />
                <input
                  className="bg-transparent w-full rounded-md placeholder:text-sm pl-3 outline-none placeholder:text-primary/50"
                  placeholder="Search e.g cleaner"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-5 space-y-8 rounded-t-2xl">
          <Categories />
          <FixOfTheMonth
            artisans={filteredFixOfTheMonth}
            searchTerm={searchTerm}
          />
          <ArtisanCloseToYou
            artisans={filteredArtisans}
            searchTerm={searchTerm}
          />
        </section>

        {/* Loading Spinner */}
        {(loadingProviderDetails || gettingByCategory) && <LoadingSpinner />}
      </main>

      {/* Floating Action Button */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        onClick={() => setOpenRequest(true)}
        className="fixed z-10 bottom-24 sm:bottom-16 right-4 cursor-pointer"
      >
        <button className="bg-secondary p-3 text-xl font-normal rounded-full hover:bg-opacity-90 transition-opacity shadow-lg">
          <IoAdd />
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      <footer className="fixed sm:hidden z-10 w-full left-0 right-0 h-16 bottom-0">
        <div className="max-w-7xl mx-auto px-4">
          <MobileNav />
        </div>
      </footer>

      {/* Modals */}
      <RequestServiceModal />
      <ProfileModal />
      <AllCategoryModal />
    </div>
  );
};

export default Dashboard;
