import { motion, AnimatePresence } from "framer-motion";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import AnimationConfig from "../animation/AnimationConfig";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import { RiCloseFill } from "react-icons/ri";

const ChangePassword = () => {
  const { openChangePassword, setOpenChangePassword } = useOpenModalContext();

  /* const handleCloseModal = () => {
    setOpenChangePassword(!openChangePassword);
  }; */

  return (
    <>
      {openChangePassword && (
        <motion.div
          {...AnimationConfig}
          className={`flex fixed inset-0 h-screen justify-center md:items-center items-end z-50`}
        />
      )}

      <AnimatePresence>
        {openChangePassword && (
          <div className=" flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              className="bg-white p-5 md:rounded-md rounded-t-md md:w-1/3 w-full"
              {...AnimationConfig}
            >
              <motion.div className="" {...AnimationConfig}>
                <div className="flex items-center justify-between border-b pb-7 gap-10">
                  <p className="text-sm font-semibold ">Change Password</p>
                  <p
                    onClick={() => setOpenChangePassword(!openChangePassword)}
                    className="bg-primary/20 p-1 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity "
                  >
                    <RiCloseFill />
                  </p>
                </div>
                <ChangePasswordForm />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChangePassword;
