import { SubHeader } from "../components/general/Header";
import BookingDetails from "../components/Modal/BookingDetails";
import Category from "../components/general/Category";

const SelectedCategory = () => {
  return (
    <div className="w-screen h-screen flex  bg-secondary/10 flex-col md:items-center ">
      <main className="space-y-5  md:w-1/3 w-full h-full bg-white md:rounded-2xl  md:m-10 md:p-10 p-5 overflow-y-auto">
        <SubHeader title={"Category"} />
        <Category />
      </main>
      <BookingDetails />
    </div>
  );
};

export default SelectedCategory;
