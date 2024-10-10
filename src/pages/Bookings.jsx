import { SubHeader } from "../components/general/Header";
import UpcomingBookings from "../components/bookings/UpcomingBookings";
import ActiveBookings from "../components/bookings/ActiveBookings";
import BookingDetails from "../components/Modal/BookingDetails";

const Bookings = () => {
  return (
    <div className="w-screen flex  flex-col md:items-center ">
      <main className="space-y-10 md:w-1/3  m-5">
        <SubHeader title={"Bookings"} />
        <UpcomingBookings />
        <ActiveBookings />
      </main>
      <BookingDetails />
    </div>
  );
};

export default Bookings;
