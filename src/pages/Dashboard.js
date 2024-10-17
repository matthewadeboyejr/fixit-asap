import React, { useEffect } from "react";
import { IoFilterOutline, IoAdd } from "react-icons/io5";
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
import UserAddress from "../components/general/UserAddress";
import useArtisanContext from "../hooks/useArtisanContext";

const Dashboard = () => {
  const { setOpenRequest } = useOpenModalContext();
  const { handleDashData } = useArtisanContext();

  useEffect(() => {
    handleDashData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <main className="pb-20 sm:pb-5">
        <section className="space-y-5 rounded-b-3xl">
          <Header />
          <h1 className="text-2xl font-medium">How can we help you?</h1>
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
            <UserAddress color="text-primary" bg="bg-primary/10" />
          </div>
        </section>

        <section className="my-5 space-y-8 rounded-t-2xl">
          <Categories />
          <FixOfTheMonth />
          <ArtisanCloseToYou />
        </section>
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
