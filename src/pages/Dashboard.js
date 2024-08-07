import React, { useState } from "react";
import { IoFilterOutline, IoAdd } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Header, { MobileNav } from "../components/general/Header";
import Categories from "../components/dashboard/Categories";
import RequestServiceModal from "../components/dashboard/Modals/RequestServiceModal";
import { motion } from "framer-motion";
import ArtisanCloseToYou from "../components/dashboard/ArtisanCloseToYou";
import { ArtisanProvider } from "../components/context/ArtisanContext";
//import useArtisanContext from "../components/hooks/useArtisanContext";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <ArtisanProvider>
      <div className="">
        <main className=" m-5 space-y-7 md:pb-5 pb-20">
          <section className="drop-shadow-lg bg-secondary md:p-10 p-5 space-y-10 rounded-md sticky top-0 z-10">
            <Header />
            <div className="flex items-center gap-1 ">
              <div className="w-full bg-white flex items-center rounded-md px-4 p-2.5">
                <RiSearch2Line />
                <input
                  className=" bg-transparent  w-full rounded-md placeholder:text-sm pl-3 outline-none placeholder:text-primary"
                  placeholder="Search e.g cleaner "
                  type="text"
                />
              </div>
              <div className="p-2.5 bg-white rounded-md">
                <IoFilterOutline className="text-xl" />
              </div>
            </div>
          </section>
          <Categories />
          <ArtisanCloseToYou />
        </main>

        <motion.div
          whileHover={{ scale: 1.2, rotate: 20 }}
          onClick={() => {
            setOpen(true);
          }}
          className=" hover:scale-50 max-w-lg fixed z-10 md:bottom-16 bottom-24 right-4 cursor-pointer drop-shadow-lg "
        >
          <p className="bg-secondary p-3  text-2xl w-fit rounded-full hover:bg-opacity-90  transition-opacity ">
            <IoAdd />
          </p>
        </motion.div>
        <footer className="fixed md:hidden z-10  w-full max-w-lg  h-16 bottom-4 ">
          <MobileNav />
        </footer>

        <RequestServiceModal
          open={open}
          close={() => {
            setOpen(false);
          }}
        />
      </div>
    </ArtisanProvider>
  );
};

export default Dashboard;
