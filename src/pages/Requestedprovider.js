import {
  //RiStarSFill,
  RiChat3Line,
  RiStarFill,
  RiPhoneLine,
  RiArrowLeftLine,
} from "react-icons/ri";
import { FaLocationPin } from "react-icons/fa6";

const Requestedprovider = () => {
  return (
    <div className="md:mx-72 md:py-5 bg-white/50 h-screen">
      <main className="space-y-10 m-5">
        <section className="flex items-center gap-5 md:pt-0 pt-5">
          <p className="bg-primary/30 text-primary p-2 rounded-sm">
            <RiArrowLeftLine />
          </p>
          <h4 className="text-lg font-semibold">Requesed provider</h4>
        </section>

        <section className=" space-y-5">
          <h4 className=" text-sm opacity-40">
            List of Marchant interest in your request
          </h4>

          <div className="flex items-center justify-between px-3  sticky bottom-20 z-50 bg-white py-5">
            <div className="flex gap-2 md:gap-5 items-center">
              <img
                className="object-cover w-14 h-14  rounded-md "
                src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="space-y-2">
                <p className="text-xs border border-secondary w-fit p-1 rounded-md">
                  Home cleaning
                </p>
                <p className="flex items-center gap-2 font-semibold text-xs ">
                  <span>Clean Group Limited</span>
                  <span className="text-green-700 flex gap-1">
                    <RiStarFill />
                    <div> 4.2</div>
                  </span>
                </p>

                <p className="flex  items-center gap-1">
                  <span className="text-teriary text-xs">
                    <FaLocationPin />
                  </span>
                  <span className="opacity-50 text-xs flex gap-1">
                    No. 2 Lake street
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              <span className="bg-secondary p-2 rounded-sm ">
                <RiChat3Line />
              </span>
              <span className=" bg-secondary/20 p-2 rounded-sm">
                <RiPhoneLine />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between px-3  sticky bottom-20 z-50 bg-white py-5">
            <div className="flex gap-2 md:gap-5 items-center">
              <img
                className="object-cover w-14 h-14  rounded-md "
                src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="space-y-2">
                <p className="text-xs border border-secondary w-fit p-1 rounded-md">
                  Home cleaning
                </p>
                <p className="flex items-center gap-2 font-semibold text-xs ">
                  <span>Clean Group Limited</span>
                  <span className="text-green-700 flex gap-1">
                    <RiStarFill />
                    <div> 4.2</div>
                  </span>
                </p>

                <p className="flex  items-center gap-1">
                  <span className="text-teriary text-xs">
                    <FaLocationPin />
                  </span>
                  <span className="opacity-50 text-xs flex gap-1">
                    No. 2 Lake street
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              <span className="bg-secondary p-2 rounded-sm ">
                <RiChat3Line />
              </span>
              <span className=" bg-secondary/20 p-2 rounded-sm">
                <RiPhoneLine />
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Requestedprovider;
