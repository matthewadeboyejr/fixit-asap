import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";

const Searchprovider = () => {
  return (
    <div className="md:mx-72 md:py-5 bg-white/50 h-screen flex  flex-col justify-between">
      <div className="flex items-center justify-between p-4  ">
        <h4 className="text-lg font-semibold">Available vendors </h4>
        <p className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-opacity-10 transition-opacity">
          <RiCloseFill />
        </p>
      </div>
      <section className="flex-grow bg-black/30"></section>

      <section className="flex items-center justify-between p-5  bg-white  ">
        <div className="flex gap-5 items-center">
          <div className="flex justify-center items-center border-4 rounded-full font-semibold text-center w-2 h-2 p-6 animate-pulse">
            5
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold text-xs ">
              Service Provider
            </p>
            <p className="text-xs opacity-50">Have an offer for you </p>
          </div>
        </div>

        <div className="flex flex-col text-xs gap-1">
          <Link className=" bg-primary  text-secondary p-2 rounded-sm">
            view
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Searchprovider;
