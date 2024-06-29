import React, { useState } from "react";
import {
  RiStarSFill,
  RiChat3Line,
  RiPhoneLine,
  //RiVerifiedBadgeFill,
  RiStarFill,
  //RiCloseFill,
  RiGroupFill,
  RiPoliceBadgeFill,
  RiChat4Fill,
  RiArrowLeftLine,
} from "react-icons/ri";
import { MostBooked, Others } from "../components/dashboard/Cards";

const Aboutprovider = () => {
  const title = {
    0: "Services",
    1: "Works",
    2: "Reviews",
  };

  const content = {
    0: <Service />,
    1: <Works />,
    2: <Review />,
  };

  const [displayContent, setDisplayConstent] = useState(0);

  const handleAboutClick = () => {
    setDisplayConstent(0);
  };

  const handleWorkClick = () => {
    setDisplayConstent(1);
  };

  const handleReviewClick = () => {
    setDisplayConstent(2);
  };

  return (
    <div className="md:mx-72 md:py-5 bg-white/50">
      <main className="space-y-10 m-5 ">
        <div className="flex items-center gap-5 md:pt-0 pt-10  ">
          <p className="bg-primary/30 text-primary p-2 rounded-sm">
            <RiArrowLeftLine />
          </p>
          <h4 className="text-lg font-semibold">Service provider</h4>
        </div>
        <section className="relative rounded-lg overflow-hidden  w-full ">
          <div className="flex items-center justify-between px-5  sticky bottom-20 z-50 bg-white py-5">
            <div className="flex gap-5 items-center">
              <img
                className="object-cover w-14 h-14  rounded-full "
                src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div>
                <p className="flex items-center gap-2 font-semibold text-xs ">
                  <span>Clean Group Limited</span>
                  <span className="text-green-700">
                    <RiStarFill />
                  </span>
                </p>
                <p className="text-xs opacity-50">Cleaning service</p>
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

        <section className="flex justify-between ">
          <div className="flex flex-col items-center ">
            <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
              <RiGroupFill />
            </p>
            <p className="font-semibold text-xs">300+</p>
            <p className="text-xs opacity-50">Customers</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
              <RiPoliceBadgeFill />
            </p>
            <p className="font-semibold text-xs">Trusted</p>
            <p className="text-xs opacity-50">Badge</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
              <RiStarSFill />
            </p>
            <p className="font-semibold text-xs">Trusted</p>
            <p className="text-xs opacity-50">Badge</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className=" bg-secondary/20 text-secondary p-3 rounded-full w-fit mb-2 ">
              <RiChat4Fill />
            </p>
            <p className="font-semibold text-xs">200+</p>
            <p className="text-xs opacity-50">Review</p>
          </div>
        </section>

        <section className="bg-white space-y-10 pb-7  ">
          <ul className=" flex justify-evenly text-sm border-b rounded-lg sticky top-0 p-5 bg-white z-50 ">
            <li
              className="border-b-4 border-secondary cursor-pointer"
              onClick={handleAboutClick}
            >
              {title[0]}
            </li>
            <li className="cursor-pointer" onClick={handleWorkClick}>
              {title[1]}
            </li>
            <li className="cursor-pointer" onClick={handleReviewClick}>
              {title[2]}
            </li>
          </ul>
          <div className="px-5 overflow-auto"> {content[displayContent]}</div>
        </section>
      </main>
      {/* <div className="flex z-50 sticky justify-center bottom-0 w-full p-5 bg-white shadow-md shadow-black/20">
        <button className=" w-full md:w-2/3 bg-primary text-secondary p-3.5 rounded-full  ">
          Book Now
        </button>
      </div> */}
    </div>
  );
};

export default Aboutprovider;

const Service = () => {
  return (
    <div className="space-y-3 ">
      <MostBooked />
      <Others />
    </div>
  );
};
const Works = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-3 overflow-x-auto ">
        <img
          className="object-cover min-w-full  md:h-60  rounded-md "
          src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className="object-cover min-w-full  md:h-60  rounded-md"
          src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className="object-cover min-w-full  md:h-60 rounded-md "
          src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className="object-cover min-w-full  md:h-60  rounded-md"
          src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};
const Review = () => {
  return (
    <div className="space-y-5 ">
      <section>
        <h4 className=" font-medium opacity-50 text-center">Overall rating</h4>
        <div className="flex flex-col gap-4 items-center border-b py-5">
          <p className="text-4xl font-semibold">4.0</p>
          <p className="flex items-center text-orange-400 text-2xl gap-1 ">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </p>
          <p className=" text-sm opacity-50">based on 23 reviews</p>
        </div>
      </section>
      section
      <section className="space-y-4 ">
        <div className="flex gap-5 py-3 ">
          <img
            className="object-cover w-14 h-14  rounded-full "
            src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="space-y-3">
            <h4 className=" font-medium opacity-50 ">John Doe</h4>
            <p className="flex items-center text-orange-400 text-sm gap-1 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </p>
            <p>
              Excellent service and also keep to time, i will recommed them to
              anyone
            </p>
            <p className="text-xs opacity-50">
              <span>London</span>/<span>1/2/23</span>
            </p>
          </div>
        </div>
        <div className="flex gap-5 py-3 ">
          <img
            className="object-cover w-14 h-14  rounded-full "
            src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="space-y-3">
            <h4 className=" font-medium opacity-50 ">John Doe</h4>
            <p className="flex items-center text-orange-400 text-sm gap-1 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </p>
            <p>
              Excellent service and also keep to time, i will recommed them to
              anyone
            </p>
            <p className="text-xs opacity-50">
              <span>London</span>/<span>1/2/23</span>
            </p>
          </div>
        </div>
        <div className="flex gap-5 py-3 ">
          <img
            className="object-cover w-14 h-14  rounded-full "
            src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="space-y-3">
            <h4 className=" font-medium opacity-50 ">John Doe</h4>
            <p className="flex items-center text-orange-400 text-sm gap-1 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </p>
            <p>
              Excellent service and also keep to time, i will recommed them to
              anyone
            </p>
            <p className="text-xs opacity-50">
              <span>London</span>/<span>1/2/23</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
