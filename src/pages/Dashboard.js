import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Header, { MobileNav } from "../components/general/Header";
import Categories from "../components/dashboard/Categories";
import {
  FixOfDay,
  CloseToYou,
  FeaturedServices,
} from "../components/dashboard/Cards";

const Dashboard = () => {
  return (
    <div className="">
      <main className="md:m-20 m-5 space-y-7 pb-20">
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
      <footer className="fixed md:hidden z-50  w-full max-w-lg  h-16 bottom-4 ">
        <MobileNav />
      </footer>
    </div>
  );
};

export default Dashboard;
