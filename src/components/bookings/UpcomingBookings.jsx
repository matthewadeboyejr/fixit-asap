import { RiStarFill } from "react-icons/ri";
import useBookingContext from "../../hooks/useBookingContext";
import { ProviderSkeleton } from "../skeleton/ProviderSkeleton";
import { useEffect } from "react";

const UpcomingBookings = () => {
  const { bookings, loading, handleAcceptService, handleGetBookings } =
    useBookingContext();

  const hasUpcomingServices = bookings?.some(
    (booking) => !booking.booking_status
  );

  useEffect(() => {
    handleGetBookings();
  }, []);

  return (
    <section className="">
      <h4 className="pb-5">Upcoming Service</h4>
      {loading && ProviderSkeleton(2)}
      {!loading && !hasUpcomingServices && (
        <p className="text-center py-4 opacity-50">
          No upcoming services to accept yet.
        </p>
      )}
      {bookings?.map((booking) => (
        <div
          key={booking?.id}
          className={` ${
            booking?.booking_status ? "hidden" : "block"
          } border-2 border-primary rounded-lg flex flex-col  justify-between px-5  sticky bottom-20 z-50 bg-white space-y-6 py-6`}
        >
          <div className="flex gap-5  items-center">
            <img
              className="object-cover w-20 h-20  rounded-md "
              src={booking?.service_image}
              alt=""
            />
            <div>
              <p className="flex items-center gap-2 font-semibold text-lg ">
                <span>{booking?.artisan_name}</span>
                <span className="text-green-700">
                  <RiStarFill />
                </span>
              </p>
              <p className="text-xs opacity-50">{booking?.appointment_date}</p>
            </div>
          </div>

          <p>{booking?.service_description}</p>

          <div className="flex gap-1 ">
            <button className="border w-full border-secondary px-4 py-3 rounded-md ">
              Reject
            </button>
            <button
              // onClick={() => handleAcceptService(booking?.id)}
              className="w-full bg-secondary px-4 py-3 rounded-md"
            >
              Accepted
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingBookings;
