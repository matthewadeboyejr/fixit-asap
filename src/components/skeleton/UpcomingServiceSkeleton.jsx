const UpcomingServiceSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="border  rounded-lg flex flex-col border-r-4 border-r-gray-300 animate-pulse  justify-between px-5  bg-white space-y-6 py-6"
      >
        <section className=" flex flex-col md:flex-row gap-5  md:items-start  ">
          <div className="space-y-5">
            <div className="flex gap-5  items-center">
              <div className="relative h-10 w-10 rounded-md flex justify-center items-center bg-gray-300 animate-pulse ">
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

              <p className=" h-2  rounded-lg w-60 bg-gray-300 animate-pulse"></p>
            </div>
            <div className="gap-2 flex flex-col md:items-center md:flex-row">
              <p className="flex items-center gap-2 ">
                <span className="h-2 rounded-full w-2 bg-gray-300 animate-pulse"></span>
                <span className="h-2 rounded-lg w-20 bg-gray-300 animate-pulse"></span>
              </p>
              <p className="flex items-center gap-2 ">
                <span className="h-2 rounded-full w-2 bg-gray-300 animate-pulse"></span>
                <span className="h-2 rounded-lg w-20 bg-gray-300 animate-pulse"></span>
              </p>
            </div>
          </div>
          <button className="flex items-center pt-4 gap-3 md:pl-20">
            <span className="h-2 rounded-lg w-14 bg-gray-300 animate-pulse"></span>
          </button>
        </section>

        <section className="flex gap-1 text-xs  ">
          <button className=" w-full md:w-24 h-10 rounded-lg bg-gray-300 animate-pulse "></button>
          <button className="w-full md:w-24 h-10 rounded-lg bg-gray-300 animate-pulse "></button>
        </section>
      </div>
    ));
};

export default UpcomingServiceSkeleton;
