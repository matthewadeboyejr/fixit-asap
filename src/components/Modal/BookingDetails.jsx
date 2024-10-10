import { motion, AnimatePresence } from "framer-motion";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiCloseFill, RiStarFill } from "react-icons/ri";
import GoogleMap from "../map/GoogleMap";
import useBookingContext from "../../hooks/useBookingContext";
import { ProviderSkeleton } from "../general/ProviderSkeleton";

const BookingDetails = () => {
  const { openBookingDetail, setOpenBookingDetail } = useOpenModalContext();
  const navigate = useNavigate();

  const { bookingDetail } = useBookingContext();

  console.log(bookingDetail, "helllo hello hello ");

  const artisanName = bookingDetail?.artisan_name;
  const date = bookingDetail?.appointment_date;
  const time = bookingDetail?.appointment_time;
  const customerName = bookingDetail?.customer_name;
  const customerAddress = bookingDetail?.customer_address;
  const description = bookingDetail?.service_description;
  const image = bookingDetail?.service_image;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={`${
          openBookingDetail ? `flex` : `hidden`
        }  bg-black/70 fixed inset-0 h-screen justify-center md:items-center items-end z-50`}
      />

      <div
        className={` md:items-center items-end justify-center inset-0 fixed z-50 ${
          openBookingDetail ? "flex" : "hidden"
        }`}
      >
        <motion.div
          className="bg-white p-5 md:rounded-md rounded-t-md md:w-1/4 w-full z-50 "
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
          <div className="flex items-center justify-between border-b pb-5 ">
            <h4 className="text-lg font-semibold">Booking Details</h4>
            <p
              onClick={() => setOpenBookingDetail(!openBookingDetail)}
              className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity"
            >
              <RiCloseFill />
            </p>
          </div>

          <div className="space-y-2 mt-5">
            <p className="text-lg">Customer Details</p>
            <p className="grid grid-cols-2">
              <span className="opacity-50">Name</span>
              <span className="">{customerName}</span>
            </p>
            <p className="grid grid-cols-2">
              <span className="opacity-50">Address</span>
              <span className="">{customerAddress}</span>
            </p>
          </div>
          <div className="space-y-2 mt-5">
            <p className="text-lg">Service Details</p>
            <p className="grid grid-cols-2">
              <span className="opacity-50">Artisan Name</span>
              <span className="">{artisanName}</span>
            </p>
            <p className="grid grid-cols-2">
              <span className="opacity-50">Appointment Date</span>
              <span className="">{date}</span>
            </p>
            <p className="grid grid-cols-2">
              <span className="opacity-50">Appointment Time</span>
              <span className="">{time}</span>
            </p>
          </div>
          <div className="space-y-2 mt-5">
            <p className="text-lg">Description</p>
            <p className="flex items-center justify-between bg-secondary/10 p-2 rounded-lg">
              <span className=" text-left">{description}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BookingDetails;
