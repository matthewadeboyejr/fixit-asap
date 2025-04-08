import { SubHeader } from "../components/general/Header";
import UpcomingBookings from "../components/bookings/UpcomingBookings";
import ActiveBookings from "../components/bookings/ActiveBookings";
import BookingDetails from "../components/Modal/BookingDetails";

const Bookings = () => {
  return (
    <div className="w-screen min-h-screen flex  bg-secondary/10 flex-col md:items-center ">
      <main className="space-y-5  md:max-w-fit md:min-w-1/3 w-full h-full bg-white md:rounded-2xl  md:m-10 md:p-10 p-5 ">
        <SubHeader title={"Bookings"} />
        <UpcomingBookings />
        <ActiveBookings />
      </main>
      <BookingDetails />
    </div>
  );
};

export default Bookings;
