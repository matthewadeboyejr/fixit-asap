import { motion, AnimatePresence } from "framer-motion";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import AnimationConfig from "../animation/AnimationConfig";
import { RiCloseFill } from "react-icons/ri";
import EditProfileForm from "../forms/EditProfileForm";

const EditProfile = () => {
  const { openEditProfile, setOpenEditProfile } = useOpenModalContext();

  /* const handleCloseModal = () => {
    setOpenChangePassword(!openChangePassword);
  }; */

  return (
    <>
      {openEditProfile && (
        <motion.div
          {...AnimationConfig}
          className={` bg-primary/70 fixed inset-0  h-screen justify-center md:items-center items-end z-50`}
        />
      )}

      <AnimatePresence>
        {openEditProfile && (
          <div className="flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              className="bg-white p-5 md:rounded-md rounded-t-md md:w-1/4 w-full"
              {...AnimationConfig}
            >
              <motion.div className="" {...AnimationConfig}>
                <div className="flex items-center justify-between border-b pb-7 gap-10">
                  <p className="text-sm font-semibold ">Edit Profile</p>
                  <p
                    onClick={() => setOpenEditProfile(!openEditProfile)}
                    className="bg-primary/20 p-1 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity "
                  >
                    <RiCloseFill />
                  </p>
                </div>
                <EditProfileForm />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EditProfile;
