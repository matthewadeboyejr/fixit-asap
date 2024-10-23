import React from "react";
import { PreHeader } from "../components/general/Header";
import { NavLink } from "react-router-dom";
import undraw from "../Images/undraw.png";

const navLinks = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/signup" },
  { name: "Landing Page", path: "/" },
  { name: "Book Artisans", path: "/dashboard" },
];

const NotFound = () => {
  // Common classNames for reuse
  const containerClass = "w-full px-5 md:px-20 lg:px-40 py-10";
  const textClass = "font-medium tracking-wider";
  const linkClass = "hover:underline font-normal text-secondary";

  return (
    <div className="w-screen min-h-screen bg-white">
      {/* Pre-header container */}
      <div className={containerClass}>
        <PreHeader />
      </div>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start">
        {/* Text Section */}
        <div className={`${containerClass} md:flex-1 space-y-8 md:py-20`}>
          <h1 className="text-4xl md:text-6xl font-black">Hmmmm!</h1>
          <p className={`text-lg md:text-2xl ${textClass}`}>
            We can't seem to find the page you're looking for.
          </p>
          <p className="text-sm md:text-base font-semibold">Error code: 404</p>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <p>Check these helpful links:</p>
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Image Section */}
        <div className="w-full md:flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={undraw}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            alt="Page not found illustration"
          />
        </div>
      </section>
    </div>
  );
};

export default NotFound;
