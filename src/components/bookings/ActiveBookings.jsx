import React from "react";
import useBookingContext from "../../hooks/useBookingContext";
import { useParams } from "react-router-dom";

const ActiveBookings = () => {
  const { bookings, loadingDetail, handleBookingDetails } = useBookingContext();

  return (
    <section className="">
      <h4 className="pb-5 text-sm">All services</h4>

      {bookings.map((booking) => (
        <div
          key={booking?.id}
          onClick={() => handleBookingDetails(booking?.id)}
          className="flex items-center justify-between px-5  sticky bottom-20 z-50 bg-white py-5 hover:cursor-pointer hover:bg-secondary/10"
        >
          <div className="flex gap-5 items-center">
            <img
              className="object-cover w-14 h-14  rounded-md "
              src={booking?.service_image}
              alt=""
            />
            <div>
              <p className="flex items-center gap-2 font-semibold text-xs ">
                {booking?.artisan_name}
              </p>
              <p className="text-xs opacity-50">{booking?.appointment_date}</p>
            </div>
          </div>

          <div className="flex flex-col text-xs gap-1">
            <p
              className={`${
                booking?.booking_status ? "bg-green-200" : "bg-red-600"
              }  p-2 rounded-sm`}
            >
              {booking?.booking_status ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActiveBookings;
