import { motion, AnimatePresence } from "framer-motion";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ExploreOption = () => {
  const { openExpore } = useOpenModalContext();
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={`${
          openExpore ? `flex` : `hidden`
        }  bg-black/70 fixed inset-0 h-screen justify-center md:items-center items-end z-30`}
      />

      <AnimatePresence>
        {openExpore && (
          <div className=" flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              className="bg-white p-5 md:rounded-md rounded-t-md md:w-1/4 w-full  "
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
            >
              <motion.div
                className=" flex flex-col items-center justify-center space-y-5 py-16"
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
              >
                <div className="bg-teriary/15 text-3xl   text-teriary h-16 w-16 rounded-full flex items-center justify-center ">
                  <IoInformationCircleOutline />
                </div>
                <p className="text-xl text-center w-2/3">
                  No available artisans nearby to accept your request at the
                  moment.
                </p>
                <p className="text-sm opacity-50 text-center">
                  Explore other artisan offering same service
                </p>
                <div className="space-y-4  p-4 w-full  ">
                  <button
                    onClick={() => navigate("/explore-providers")}
                    className={`btn-primary`}
                  >
                    Explore
                  </button>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className={`btn-primary bg-white border border-primary text-primary`}
                  >
                    Back
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExploreOption;
