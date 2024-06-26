import React, { useState } from "react";
import { IoFilterOutline, IoAdd } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Header, { MobileNav } from "../components/general/Header";
import Categories from "../components/dashboard/Categories";
import {
  FixOfDay,
  CloseToYou,
  FeaturedServices,
} from "../components/dashboard/Cards";
import RequestServiceModal from "../components/dashboard/Modals/RequestServiceModal";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <main className=" m-5 space-y-7 md:pb-5 pb-20">
        <section className="bg-secondary md:p-10 p-5 space-y-10 rounded-md ">
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
        <FixOfDay />
        <CloseToYou />
        <FeaturedServices />
      </main>

      <div
        onClick={() => {
          setOpen(true);
        }}
        className=" max-w-lg fixed z-10 md:bottom-16 bottom-24 right-4 cursor-pointer "
      >
        <p className="bg-secondary p-3  text-2xl w-fit rounded-full hover:bg-opacity-90  transition-opacity ">
          <IoAdd />
        </p>
      </div>
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
  );
};

export default Dashboard;
