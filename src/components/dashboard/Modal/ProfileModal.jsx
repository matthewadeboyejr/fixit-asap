import { Link } from "react-router-dom";
import {
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiCloseFill,
} from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import SignoutButton from "../../Buttons/SignoutButton";
import useOpenModalContext from "../../../hooks/useOpenModalContext";
import { IoPerson } from "react-icons/io5";
import useProfileContext from "../../../hooks/useProfileContext";
import ChangePassword from "../../Modal/ChangePassword";
import AnimationConfig from "../../animation/AnimationConfig";
import { useEffect } from "react";

const ProfileModal = () => {
  const {
    setOpenProfile,
    openProfile,
    setOpenChangePassword,
    openChangePassword,
  } = useOpenModalContext();
  const { profileData } = useProfileContext();

  const fName = profileData?.user?.first_name;
  const lName = profileData?.user?.last_name;

  useEffect(() => {
    if (openChangePassword) {
      setOpenChangePassword(false);
    }
  }, [openChangePassword, setOpenChangePassword]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={`${
          openProfile ? `flex` : `hidden`
        }  bg-black/40 flex fixed inset-0 h-screen  md:items-center items-end justify-center  z-50`}
      />
      <AnimatePresence>
        {openProfile && (
          <div className="flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              {...AnimationConfig}
              className="bg-white p-5 md:rounded-md rounded-t-md md:w-96 w-full"
            >
              <div className="flex items-center justify-between border-b pb-7 gap-10">
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <p className="flex items-center justify-center w-14 h-14 bg-primary/5 text-2xl rounded-full">
                      <IoPerson />
                    </p>

                    <p className="flex flex-col ">
                      <span className="text-sm font-semibold">
                        {fName + " " + lName}
                      </span>
                      <span>Service user</span>
                    </p>
                  </div>
                </section>
                <p
                  onClick={() => setOpenProfile(!openProfile)}
                  className="bg-primary/20 p-1 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity "
                >
                  <RiCloseFill />
                </p>
              </div>
              <motion.ul
                {...AnimationConfig}
                className="flex flex-col gap-7 pt-5  "
              >
                <li>
                  <Link to={"/profile"} className="flex items-center gap-3  ">
                    <span className="text-primary text-xl">
                      <RiAccountCircleLine />
                    </span>
                    <span className="text-sm ">My Profile</span>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setOpenChangePassword(true);
                  }}
                  className="flex items-center gap-3  "
                >
                  <span className="text-primary text-xl">
                    <RiLockPasswordLine />
                  </span>
                  <span className="text-sm">Change Password</span>
                </li>

                <SignoutButton />
              </motion.ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ChangePassword />
    </>
  );
};

export default ProfileModal;
