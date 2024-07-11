import React from "react";
import { RiAccountCircleLine, RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const serviceCard = [
  {
    name: "Floor Deep Cleaning",
    provider: "clean group",
    distance: "1km+",
    star: "4.3",
    img: "https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Furnature maintenance",
    provider: "John Doe",
    distance: "3km+",
    star: "4.0",
    img: "https://images.pexels.com/photos/3536424/pexels-photo-3536424.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Plumbering",
    provider: "Jenny Doe",
    distance: "3km+",
    star: "4.9",
    img: "https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Floor Deep Cleaning",
    provider: "clean group",
    distance: "1km+",
    star: "4.3",
    img: "https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Furnature maintenance",
    provider: "John Doe",
    distance: "3km+",
    star: "4.0",
    img: "https://images.pexels.com/photos/3536424/pexels-photo-3536424.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Plumbering",
    provider: "Jenny Doe",
    distance: "3km+",
    star: "4.9",
    img: "https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const FixOfDay = () => {
  return (
    <section className="space-y-5 ">
      <h2 className="px-5 text-lg">Fixed of the day</h2>

      <div className="flex gap-5 overflow-x-auto">
        {serviceCard.map((e) => (
          <div className="space-y-5 rounded-lg bg-white p-3 ">
            <div className="relative rounded-lg overflow-hidden  md:w-64  w-48">
              <img
                className="object-cover min-w-full  h-40  "
                src={e.img}
                alt=""
              />
              <div className="absolute bg-primary/20 inset-0 "></div>
              <div className="absolute inset-0 ">
                <div className="flex items-center bg-white w-12  m-3 rounded-sm justify-evenly">
                  <p>
                    {" "}
                    <RiStarSFill className="text-teriary text-sm" />
                  </p>

                  <p className="text-xs">{e.star}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-medium text-nowrap">{e.name}</h5>
                <div className=" flex  items-center gap-2 text-xs">
                  <RiAccountCircleLine className=" text-secondary " />
                  <p className="opacity-50 text-xs">{e.provider}</p>
                </div>
              </div>

              <p className="font-medium text-xs text-secondary text-nowrap">
                {e.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const CloseToYou = () => {
  return (
    <section className="space-y-5">
      <div className="flex justify-between px-5">
        <h2 className=" text-sm">Artisan close to you</h2>
        <Link className="text-secondary hover:underline">view all</Link>
      </div>

      <div className="flex gap-5 overflow-x-auto ">
        {serviceCard.map((e) => (
          <div className="space-y-5 rounded-lg bg-white p-3  ">
            <div className="relative rounded-lg overflow-hidden  md:w-80  w-64 ">
              <img
                className="object-cover min-w-full  md:h-60  "
                src={e.img}
                alt=""
              />
              <div className="absolute bg-primary/20 inset-0 "></div>
              <div className="absolute inset-0 ">
                <div className="flex items-center bg-white w-12  m-3 rounded-sm justify-evenly">
                  <p>
                    {" "}
                    <RiStarSFill className="text-teriary text-sm" />
                  </p>

                  <p className="text-xs">{e.star}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between px-2">
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-medium op">{e.name}</h5>
                <div className=" flex  items-center gap-2 text-xs">
                  <RiAccountCircleLine className=" text-secondary " />
                  <p className="opacity-50 text-xs">{e.provider}</p>
                </div>
              </div>

              <p className="font-medium text-xs text-secondary">{e.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const FeaturedServices = () => {
  return (
    <section className="space-y-5">
      <h2 className="px-5 text-lg">Featured services</h2>

      <div className="flex gap-5 overflow-x-auto">
        {serviceCard.map((e) => (
          <div className="space-y-5 rounded-lg bg-white p-3 ">
            <div className="relative rounded-lg overflow-hidden  md:w-64  w-48">
              <img
                className="object-cover min-w-full  h-40  "
                src={e.img}
                alt=""
              />
              <div className="absolute bg-primary/20 inset-0 "></div>
              <div className="absolute inset-0 ">
                <div className="flex items-center bg-white w-12  m-3 rounded-sm justify-evenly">
                  <p>
                    {" "}
                    <RiStarSFill className="text-teriary text-sm" />
                  </p>

                  <p className="text-xs">{e.star}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-medium text-nowrap">{e.name}</h5>
                <div className=" flex  items-center gap-2 text-xs">
                  <RiAccountCircleLine className=" text-secondary " />
                  <p className="opacity-50 text-xs">{e.provider}</p>
                </div>
              </div>

              <p className="font-medium text-xs text-secondary text-nowrap">
                {e.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export const MostBooked = () => {
  return (
    <section className="space-y-5">
      <h2 className="px-5 text-lg">Most Booked</h2>

      <div className="flex gap-5 overflow-x-auto">
        {serviceCard.map((e) => (
          <div className="space-y-5 rounded-lg bg-white p-3 ">
            <div className="relative rounded-lg overflow-hidden  md:w-64  w-48">
              <img
                className="object-cover min-w-full  h-40  "
                src={e.img}
                alt=""
              />
              <div className="absolute bg-primary/20 inset-0 "></div>
              <div className="absolute inset-0 ">
                <div className="flex items-center bg-white w-12  m-3 rounded-sm justify-evenly">
                  <p>
                    {" "}
                    <RiStarSFill className="text-teriary text-sm" />
                  </p>

                  <p className="text-xs">{e.star}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-medium text-nowrap">{e.name}</h5>
                <div className=" flex  items-center gap-2 text-xs">
                  <RiAccountCircleLine className=" text-secondary " />
                  <p className="opacity-50 text-xs">{e.provider}</p>
                </div>
              </div>

              <p className="font-medium text-xs text-secondary text-nowrap">
                {e.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export const Others = () => {
  return (
    <section className="space-y-5">
      <h2 className="px-5 text-lg">Others</h2>

      <div className="flex gap-5 overflow-x-auto">
        {serviceCard.map((e) => (
          <div className="space-y-5 rounded-lg bg-white p-3 ">
            <div className="relative rounded-lg overflow-hidden  md:w-64  w-48">
              <img
                className="object-cover min-w-full  h-40  "
                src={e.img}
                alt=""
              />
              <div className="absolute bg-primary/20 inset-0 "></div>
              <div className="absolute inset-0 ">
                <div className="flex items-center bg-white w-12  m-3 rounded-sm justify-evenly">
                  <p>
                    {" "}
                    <RiStarSFill className="text-teriary text-sm" />
                  </p>

                  <p className="text-xs">{e.star}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-medium text-nowrap">{e.name}</h5>
                <div className=" flex  items-center gap-2 text-xs">
                  <RiAccountCircleLine className=" text-secondary " />
                  <p className="opacity-50 text-xs">{e.provider}</p>
                </div>
              </div>

              <p className="font-medium text-xs text-secondary text-nowrap">
                {e.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
