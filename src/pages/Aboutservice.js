import React, { useState } from "react";
import {
  RiStarSFill,
  RiChat3Line,
  RiPhoneLine,
  RiVerifiedBadgeFill,
  RiStarFill,
} from "react-icons/ri";

const Aboutservice = () => {
  const title = {
    0: "About",
    1: "Works",
    2: "Reviews",
  };

  const content = {
    0: <About />,
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
    <div className="relative">
      <main className="space-y-10 m-5 pb-20 ">
        <section className="relative rounded-lg overflow-hidden  md:w-80  w-full ">
          <img
            className="object-cover min-w-full  md:h-60  "
            src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          {/*  <div className="absolute bg-primary/20 inset-0 "></div> */}
        </section>

        <section className="flex justify-between px-2">
          <p className="p-3.5 border border-secondary rounded-md text-center">
            Home Cleaning
          </p>

          <div className="flex  gap-2 items-center bg-white px-3  rounded-sm ">
            <p>
              <RiStarSFill className="text-teriary text-sm" />
            </p>
            <p className="text-xs">4.3</p>
            <p className="text-xs">| 400 reviews</p>
          </div>
        </section>

        <section className="px-2">
          <h4 className="text-sm font-semibold">Floor Deep Cleaning</h4>
          <p>
            <span></span>
            <span className="opacity-50 text-sm">
              No. 2 Lake street, London central, Uk
            </span>
          </p>
        </section>

        <section className="bg-white space-y-10 pb-7  ">
          <ul className=" flex justify-evenly text-sm border-b rounded-lg sticky top-0 p-5 bg-white z-50 ">
            <li
              className="border-b-4 border-secondary"
              onClick={handleAboutClick}
            >
              {title[0]}
            </li>
            <li onClick={handleWorkClick}>{title[1]}</li>
            <li onClick={handleReviewClick}>{title[2]}</li>
          </ul>
          <div className="px-5"> {content[displayContent]}</div>

          <div className="px-5 space-y-6 sticky bottom-20 z-50 bg-white py-5">
            <h4 className="text-sm font-semibold">Service provider</h4>

            <div className="flex items-center justify-between">
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
                      <RiVerifiedBadgeFill />
                    </span>
                  </p>
                  <p className="text-sm opacity-50">Service provider</p>
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
          </div>
        </section>
      </main>
      <div className=" fixed bottom-0 w-full p-5">
        <button className=" w-full bg-primary text-secondary p-3.5 rounded-full  ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Aboutservice;

const About = () => {
  return (
    <div className="space-y-3 text-sm">
      <h4 className="font-semibold opacity-50">About Service</h4>
      <p className=" opacity-50 leading-6">
        Spruce up your floors! Deep clean removes dirt, grime & allergens. Call
        for a healthier, shinier shine.
      </p>
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
