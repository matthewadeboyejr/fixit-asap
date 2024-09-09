import { Link } from "react-router-dom";
import {
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiCloseFill,
} from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import SignoutButton from "../../Buttons/SignoutButton";
import useOpenModalContext from "../../hooks/useOpenModalContext";

const ProfileModal = () => {
  const { setOpenProfile, openProfile } = useOpenModalContext();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={`${
          openProfile ? `flex` : `hidden`
        }  bg-black/70 flex fixed inset-0 h-screen  md:items-center items-end justify-center  z-50`}
      />
      <AnimatePresence>
        {openProfile && (
          <div className="flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-5 md:rounded-md rounded-t-md md:w-fit w-full"
            >
              <div className="flex items-center justify-between border-b pb-7 gap-10">
                <div className="flex items-center space-x-5">
                  {/*  <img
                  className="object-cover w-10 h-10  rounded-full "
                  src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                /> */}
                  <div>
                    <h4 className="text-sm font-medium">My Account</h4>
                    <p className="text-xs  opacity-50">Active service user</p>
                  </div>
                </div>
                <p
                  onClick={() => setOpenProfile(!openProfile)}
                  className="bg-primary/20 p-1 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity "
                >
                  <RiCloseFill />
                </p>
              </div>
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-7 pt-5  "
              >
                <Link to={"/profile"} className="flex items-center gap-3  ">
                  <span className="text-teriary text-xl">
                    <RiAccountCircleLine />
                  </span>
                  <span className="text-sm ">Edit Profile</span>
                </Link>
                <Link className="flex items-center gap-3  ">
                  <span className="text-teriary text-xl">
                    <RiLockPasswordLine />
                  </span>
                  <span className="text-sm">Change Password</span>
                </Link>

                <SignoutButton />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileModal;
