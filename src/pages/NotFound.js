import React from "react";
import { PreHeader } from "../components/general/Header";
import { NavLink } from "react-router-dom";
import undraw from "../components/Images/undraw.png";

const NotFound = () => {
  const nav = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/signup" },
    { name: "Landing Page", path: "/" },
    { name: "Book Artisans", path: "/dashboard" },
  ];

  return (
    <div className=" w-screen min-h-screen bg-white ">
      <div className="md:px-40">
        <PreHeader />
      </div>

      <section className=" flex md:flex-row flex-col ">
        <div className="space-y-8 px-5 md:px-52 md:py-20">
          <h1 className="text-6xl font-black">Hmmmm!</h1>
          <p className="text-2xl font-medium tracking-wider">
            We can't seem to find the page you're looking for.
          </p>
          <p className="font-semibold">Error code: 404</p>

          <nav className="flex gap-1 flex-col w-fit">
            <p>Check this helpful links :</p>
            {nav.map((link) => (
              <NavLink
                to={link.path}
                className="hover:underline font-normal text-secondary "
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="w-full">
          <img src={undraw} className="w-fit " alt="" />
        </div>
      </section>
    </div>
  );
};

export default NotFound;
