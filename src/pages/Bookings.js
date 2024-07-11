import { RiChat3Line, RiStarFill, RiInfoI } from "react-icons/ri";
import { SubHeader } from "../components/general/Header";

const Bookings = () => {
  return (
    <div className="md:mx-72 md:py-5 bg-white/50">
      <main className="space-y-10 m-5">
        <SubHeader title={"My Bookings"} />
        <section className="">
          <h4 className="pb-5">Upcoming Service</h4>

          <div className="flex items-center justify-between px-5  sticky bottom-20 z-50 bg-white py-5">
            <div className="flex gap-5 items-center">
              <img
                className="object-cover w-14 h-14  rounded-md "
                src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div>
                <p className="flex items-center gap-2 font-semibold text-xs ">
                  <span>Floor Deep Cleaning</span>
                  <span className="text-green-700">
                    <RiStarFill />
                  </span>
                </p>
                <p className="text-xs opacity-50">Clean Group Limited</p>
              </div>
            </div>

            <div className="flex gap-1">
              <span className="bg-secondary p-2 rounded-sm ">
                <RiChat3Line />
              </span>
              <span className=" bg-secondary/20 p-2 rounded-sm">
                <RiInfoI />
              </span>
            </div>
          </div>
        </section>

        <section className="">
          <h4 className="pb-5 text-sm">Completed service</h4>

          <div className="flex items-center justify-between px-5  sticky bottom-20 z-50 bg-white py-5">
            <div className="flex gap-5 items-center">
              <img
                className="object-cover w-14 h-14  rounded-md "
                src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div>
                <p className="flex items-center gap-2 font-semibold text-xs ">
                  Floor Deep Cleaning
                </p>
                <p className="text-xs opacity-50">1/2/23</p>
              </div>
            </div>

            <div className="flex flex-col text-xs gap-1">
              <p className=" bg-green-200 p-2 rounded-sm">Completed</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bookings;
