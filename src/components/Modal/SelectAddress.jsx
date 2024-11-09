import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import GoogleMap from "../map/GoogleMap";
import useAddressContext from "../../hooks/useAddressContext";
import AnimationConfig from "../animation/AnimationConfig";
import PlaceAutocompleteForm from "../forms/PlaceAutoCompleteForm";

const SelectAddress = () => {
  const { openAddress, setOpenAddress } = useOpenModalContext();
  const {
    setCurrentCoordinate,
    setPostalCode,
    setAddress,
    address,
    suggestAddress,
    suggestCordinate,
    suggestPostalCode,
    setSuggestAddress,
    setSuggestCordinate,
    setSuggestPostalCode,
  } = useAddressContext();

  const handleSelectLocation = () => {
    setCurrentCoordinate(suggestCordinate);
    setAddress(suggestAddress);
    setPostalCode(suggestPostalCode);
    setOpenAddress(!openAddress);
  };

  const handleCloseModal = () => {
    setSuggestAddress("");
    setSuggestCordinate("");
    setSuggestPostalCode("");
    setOpenAddress(!openAddress);
  };

  return (
    <>
      {openAddress && (
        <motion.div
          className={`flex bg-black/30 fixed inset-0 h-screen justify-center md:items-center items-end z-50`}
        />
      )}

      <AnimatePresence>
        {openAddress && (
          <div className=" flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              className="bg-white p-5 md:rounded-md rounded-t-md md:w-1/3 w-full  "
              {...AnimationConfig}
            >
              <motion.div className="" {...AnimationConfig}>
                <div className="flex items-center justify-between ">
                  <h4 className="text-lg font-semibold">Select Address</h4>
                  <p
                    onClick={handleCloseModal}
                    className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity"
                  >
                    <RiCloseFill />
                  </p>
                </div>
                <PlaceAutocompleteForm />
                <GoogleMap />
                <div className="space-y-2 shadow-md p-4 rounded-t-md bg-white  w-full">
                  <h5 className="text-lg font-semibold">Current Location</h5>
                  <p className=" text-sm  rounded-lg bg-teriary/20 p-3">
                    {suggestAddress || address}
                  </p>
                  <button
                    onClick={handleSelectLocation}
                    className={`btn-primary`}
                  >
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
