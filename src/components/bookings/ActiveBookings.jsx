import React, { useState } from "react";
import useBookingContext from "../../hooks/useBookingContext";
import { useParams } from "react-router-dom";
import { IoCalendarClearOutline, IoPerson } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { MdOutlineNavigateNext } from "react-icons/md";
import ActiveServiceSkeleton from "../skeleton/ActiveServiceSkeleton";
import useArtisanContext from "../../hooks/useArtisanContext";

const ActiveBookings = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const { bookings, loading } = useBookingContext();
  const { getProviderDetail } = useArtisanContext();

  return (
    <section className="">
      <h4 className="pb-5 text-sm">Active services</h4>
      {loading && <ActiveServiceSkeleton card={2} />}
      {bookings?.map((booking) => (
        <div
          key={booking?.id}
          className={` ${
            booking?.booking_status
              ? "border-r-yellow-500"
              : "border-r-gray-500"
          } border  rounded-lg flex flex-col border-r-4  justify-between px-5  bg-white space-y-6 py-6`}
        >
          <section className=" flex flex-col md:flex-row gap-5  md:items-start  ">
            <div className="space-y-5">
              <div className="flex gap-5  items-center">
                <img
                  className="object-cover w-10 h-10  rounded-md "
                  src={booking?.service_image}
                  alt=""
                />

                <p className="text-sm">
                  Fixit session with{" "}
                  <span
                    onClick={() => {
                      getProviderDetail(booking?.receiver);
                    }}
                    className="text-secondary font-semibold cursor-pointer hover:opacity-75"
                  >
                    {booking?.artisan_name}
                  </span>
                </p>
              </div>
              <div className="gap-2 flex flex-col md:items-center md:flex-row">
                <p className="flex items-center gap-2 ">
                  <span className="text-lg">
                    <IoCalendarClearOutline />
                  </span>
                  <span className="text-xs">{booking?.appointment_date}</span>
                </p>
                <p className="flex items-center gap-2 ">
                  <span className="text-lg opacity-60">
                    <RiTimeLine />
                  </span>
                  <span className="text-xs">{booking?.appointment_time}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setOpenDetail(!openDetail);
              }}
              className="flex items-center pt-2 gap-3 md:pl-20"
            >
              <span className="opacity-50">Details</span>
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </section>
          {openDetail && (
            <section className={`space-y-7 border-t  pt-10 `}>
              <div className=" space-y-3   ">
                <h4 className="opacity-70 text-sm">Category</h4>
                <div className="flex gap-3">
                  <p className="text-sm flex flex-col">
                    <span className=" font-semibold">
                      {booking?.service_category?.category}
                    </span>
                  </p>
                </div>
              </div>
              <div className=" space-y-3  ">
                <h4 className="opacity-70 text-sm">Customer Name</h4>
                <div className="flex  items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/5 text-xs rounded-full">
                    <IoPerson />
                  </div>

                  <p className="text-sm font-semibold">
                    {booking?.customer_name}
                  </p>
                </div>
              </div>
              <div className=" space-y-3   ">
                <h4 className="opacity-70 text-sm">Customer Address</h4>

                <p className="text-sm font-semibold">
                  {booking?.customer_address}
                </p>
              </div>
              <div className=" space-y-2   ">
                <h4 className="opacity-70 text-sm">Service Description</h4>

                <p className="text-sm font-semibold">
                  {booking?.service_description}
                </p>
              </div>
            </section>
          )}
        </div>
      ))}
    </section>
  );
};

export default ActiveBookings;
