import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import useOpenModalContext from "../hooks/useOpenModalContext";
import GoogleMap from "../map/GoogleMap";
import useAddressContext from "../hooks/useAddressContext";

const SelectAddress = () => {
  const { openAddress, setOpenAddress } = useOpenModalContext();
  const { address } = useAddressContext();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={`${
          openAddress ? `flex` : `hidden`
        }  bg-black/70 fixed inset-0 h-screen justify-center md:items-center items-end z-30`}
      />

      <AnimatePresence>
        {openAddress && (
          <div className="flex md:items-center items-end justify-center inset-0 fixed z-50 ">
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
                className="relative"
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
                <div className="flex items-center justify-between ">
                  <h4 className="text-lg font-semibold">Select Address</h4>
                  <p
                    onClick={() => setOpenAddress(!openAddress)}
                    className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity"
                  >
                    <RiCloseFill />
                  </p>
                </div>
                <GoogleMap />
                <div className="space-y-2 absolute bottom-0  shadow-md p-4 rounded-t-md bg-white  w-full">
                  <h5 className="text-lg font-semibold">Current Location</h5>
                  <p className="opacity-50 text-sm font-light">{address}</p>
                  <button className={`btn-primary`}>
                    Select This Location
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

export default SelectAddress;
