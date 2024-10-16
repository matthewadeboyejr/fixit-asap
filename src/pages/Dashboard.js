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
import { useEffect } from "react";

const Dashboard = () => {
  const { setOpenRequest } = useOpenModalContext();
  const { handleDashData } = useArtisanContext();

  useEffect(() => {
    handleDashData();
  }, []);

  return (
    <div className="">
      <main className="  md:pb-5 pb-20">
        <section className="md:mx-10 bg-secondary md:p-10 p-5 space-y-5 rounded-b-3xl sticky top-0  z-10">
          <Header />
          {/*  <div className="text-5xl font-medium">How can we Help you?</div> */}
          <div className="flex items-center gap-1 ">
            <div className="w-full bg-white flex items-center rounded-md  p-3">
              <RiSearch2Line />
              <input
                className=" bg-transparent  w-full rounded-md placeholder:text-sm pl-3 outline-none placeholder:text-primary/50"
                placeholder="Search e.g cleaner "
                type="text"
              />
            </div>
            <div className="p-3 bg-white rounded-md">
              <IoFilterOutline className="text-xl" />
            </div>
          </div>
          <UserAddress color="text-white" />
        </section>
        <section className="mx-5 my-10 md:mx-40 space-y-5 ">
          <Categories />
          <FixOfTheMonth />
          <ArtisanCloseToYou />
        </section>
      </main>

      <motion.div
        whileHover={{ scale: 1.2, rotate: 20 }}
        onClick={() => {
          setOpenRequest(true);
        }}
        className=" hover:scale-50 max-w-lg fixed z-10 md:bottom-16 bottom-24 right-4 cursor-pointer drop-shadow-lg "
      >
        <p className="bg-secondary p-2 text-xl font-normal w-fit rounded-full hover:bg-opacity-90  transition-opacity ">
          <IoAdd />
        </p>
      </motion.div>
      <footer className="fixed md:hidden z-10  w-full max-w-lg  h-16 bottom-4 ">
        <MobileNav />
      </footer>

      <RequestServiceModal />
      <ProfileModal />
      <SelectAddress />
    </div>
  );
};

export default Dashboard;
