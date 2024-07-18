import { Link, useNavigate } from "react-router-dom";
import { CgSpinnerTwo } from "react-icons/cg";
import {
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiCloseFill,
  RiLogoutCircleLine,
} from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { UseAuthContext } from "../../hooks/UseAuthContext";
//import useRegContext from "../../hooks/useUserRegContext";

const ProfileModal = ({ openProfile, closeProfile }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = UseAuthContext;

  const handleSignOut = async () => {
    const url = "/account/api/v1/logout/";
    try {
      setIsLoading(true);
      const response = await axios.post(url);
      console.log(response);
      localStorage.removeItem("token");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {" "}
        {openProfile && (
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 z-50 rounded-t-md md:rounded-md w-fit h-fit top-20 right-5 m-auto fixed  drop-shadow-lg"
          >
            <div className="flex items-center justify-between border-b pb-7 gap-10">
              <div className="flex items-center space-x-5">
                <img
                  className="object-cover w-10 h-10  rounded-full "
                  src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div>
                  <h4 className="text-sm font-medium">John Doe</h4>
                  <p className="text-xs opacity-50">Service user</p>
                </div>
              </div>
              <p
                onClick={closeProfile}
                className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity "
              >
                <RiCloseFill />
              </p>
            </div>
            <motion.div
              initial={{
                x: 50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-7 pt-5  "
            >
              <Link className="flex items-center gap-3  ">
                <span className="text-teriary text-xl">
                  <RiAccountCircleLine />
                </span>
                <span className="text-sm">Edit profile</span>
              </Link>
              <Link className="flex items-center gap-3  ">
                <span className="text-teriary text-xl">
                  <RiLockPasswordLine />
                </span>
                <span className="text-sm">Security</span>
              </Link>

              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 text-end  text-red-600 bg-red-200 flex-1 p-3 mb-10 hover:opacity-80 rounded-md cursor-pointer "
              >
                <span className=" text-xl">
                  <RiLogoutCircleLine />
                </span>
                <span className="text-sm r">
                  <div className="flex justify-center items-center">
                    {isLoading ? (
                      <CgSpinnerTwo className="animate-spin text-2xl" />
                    ) : (
                      "Sign Out"
                    )}
                  </div>
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileModal;
