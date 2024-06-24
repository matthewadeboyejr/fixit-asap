import {
  RiPhoneLine,
  RiVideoOnLine,
  RiAddFill,
  RiMic2Fill,
} from "react-icons/ri";

const Chatbox = () => {
  return (
    <div className=" flex flex-col justify-between flex-grow max-w-full max-h-screen">
      <section className="flex items-center justify-between p-5 border-b">
        <div className="flex items-center gap-4 ">
          <img
            className="object-cover w-10 h-10 rounded-full "
            src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <p className="font-semibold"> Cleaning Group</p>
          <p className="underline text-xs text-secondary">view profile</p>
        </div>
        <div className=" flex items-center">
          <p className="bg-secondary p-3 rounded-sm text-2xl">
            <RiPhoneLine />
          </p>
          <p className="bg-secondary/20 p-3 rounded-sm text-2xl">
            <RiVideoOnLine />
          </p>
        </div>
      </section>

      <section className="flex-grow p-5 space-y-6 h-1/2 overflow-auto ">
        <div className="bg-teriary/30 w-fit p-2 rounded-t-lg rounded-br-lg flex flex-col text-sm ">
          <p>Hello, Just saw your request to clean Can I know the details</p>
          <p className="text-xs text-right opacity-50">4:00pm</p>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary/60 w-fit p-2 rounded-t-lg rounded-bl-lg  text-sm ">
            <p>Hello, Just saw your request to clean Can I know the details</p>
            <p className="text-xs  opacity-50">4:00pm</p>
          </div>
        </div>
        <div className="bg-teriary/30 w-fit p-2 rounded-t-lg rounded-br-lg flex flex-col text-sm ">
          <p>Hello, Just saw your request to clean Can I know the details</p>
          <p className="text-xs text-right opacity-50">4:00pm</p>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary/60 w-fit p-2 rounded-t-lg rounded-bl-lg  text-sm ">
            <p>Hello, Just saw your request to clean Can I know the details</p>
            <p className="text-xs  opacity-50">4:00pm</p>
          </div>
        </div>
        <div className="bg-teriary/30 w-fit p-2 rounded-t-lg rounded-br-lg flex flex-col text-sm ">
          <p>Hello, Just saw your request to clean Can I know the details</p>
          <p className="text-xs text-right opacity-50">4:00pm</p>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary/60 w-fit p-2 rounded-t-lg rounded-bl-lg  text-sm ">
            <p>Hello, Just saw your request to clean Can I know the details</p>
            <p className="text-xs  opacity-50">4:00pm</p>
          </div>
        </div>
        <div className="bg-teriary/30 w-fit p-2 rounded-t-lg rounded-br-lg flex flex-col text-sm ">
          <p>Hello, Just saw your request to clean Can I know the details</p>
          <p className="text-xs text-right opacity-50">4:00pm</p>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary/60 w-fit p-2 rounded-t-lg rounded-bl-lg  text-sm ">
            <p>Hello, Just saw your request to clean Can I know the details</p>
            <p className="text-xs  opacity-50">4:00pm</p>
          </div>
        </div>
      </section>

      <section className=" ">
        <div className="flex items-center gap-2  p-5 ">
          <div className="shadow-black/10 shadow-md w-full flex items-center bg-white p-2 rounded-full gap-3">
            <p className="bg-secondary p-3 rounded-full ">
              <RiAddFill />
            </p>
            <input
              type="type"
              placeholder="Type your message here"
              className=" bg-transparent placeholder:text-xs"
            />
          </div>
          <p className="bg-white text-secondary p-4 rounded-full">
            <RiMic2Fill />
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chatbox;
