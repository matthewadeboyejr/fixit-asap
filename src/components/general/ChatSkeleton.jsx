import React from "react";

const ChatSkeleton = () => {
  return (
    <div className="w-full bg-secondary/20 h-screen ">
      <section className="flex items-center gap-5  p-5">
        <div className="relative h-10 w-10 rounded-full flex justify-center items-center bg-gray-300 animate-pulse ">
          <svg
            className="w-5 h-5  text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="space-y-2">
          <p className="rounded-full h-2 w-52 bg-gray-300"></p>
          <p className="rounded-full h-2 w-20 bg-gray-300"></p>
        </div>
      </section>
      <section className=" space-y-10  bg-white/50 rounded-3xl py-10 px-5">
        <div className="flex justify-end">
          <span className="rounded-t-lg rounded-l-lg h-16 w-1/2 bg-gray-200  animate-pulse"></span>
        </div>
        <div className="flex justify-end">
          <span className="rounded-t-lg rounded-l-lg h-16 w-1/2 bg-gray-200  animate-pulse"></span>
        </div>
        <div className="flex justify-start">
          <span className="rounded-t-lg rounded-r-lg h-16 w-1/2 bg-gray-300 flex justify-end animate-pulse"></span>
        </div>
        <div className="flex justify-end">
          <span className="rounded-t-lg rounded-l-lg h-16 w-1/2 bg-gray-200   animate-pulse"></span>
        </div>
        <div className="flex justify-start">
          <span className="rounded-t-lg rounded-r-lg h-16 w-1/2 bg-gray-300 flex justify-end animate-pulse"></span>
        </div>
        <div className="flex justify-start">
          <span className="rounded-t-lg rounded-r-lg h-16 w-1/2 bg-gray-300 flex justify-end animate-pulse"></span>
        </div>
        <div className="flex justify-end">
          <span className="rounded-t-lg rounded-l-lg h-16 w-1/2 bg-gray-200  animate-pulse"></span>
        </div>
        <div className="flex justify-start">
          <span className="rounded-t-lg rounded-r-lg h-16 w-1/2 bg-gray-300 flex justify-end animate-pulse"></span>
        </div>
      </section>
    </div>
  );
};

export default ChatSkeleton;
