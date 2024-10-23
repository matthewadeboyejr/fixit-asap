import React from "react";
import { PreHeader } from "../components/general/Header";
import Error from "../Images/Error.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NetworkError = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* PreHeader Section */}
      <div className="px-5 md:px-20 lg:px-40">
        <PreHeader />
      </div>

      {/* Main Content */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 py-10 md:py-20 px-5">
        {/* Text Section */}
        <div className="space-y-6 md:space-y-8 max-w-lg text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-black">ooOPS</h1>
          <p className="text-xl md:text-2xl font-medium tracking-wider">
            Slow or No network detected. Kindly check your connection.
          </p>
          <p className="text-base md:text-lg font-semibold">Error code: 404</p>

          <button className="btn-primary flex items-center justify-center w-fit mx-auto md:mx-0">
            <span>I have fixed the network</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md mx-auto md:mx-0">
          <LazyLoadImage
            src={Error}
            className="w-full h-auto"
            alt="Network Error"
          />
        </div>
      </section>
    </div>
  );
};

export default NetworkError;
