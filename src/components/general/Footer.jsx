import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-primary text-secondary m-5 rounded-xl   flex items-center gap-3 justify-around p-10 font-medium md:flex-row flex-col">
      <div>© Eikon Peters 2024. All rights reserved</div>
      <ul className="flex md:gap-10 gap-5 ">
        <li className="underline">
          <NavLink to={"/privacy"}>Privacy Policy</NavLink>
        </li>
        <li className="underline">
          <NavLink to={"/terms"}>Terms and Conditions</NavLink>
        </li>
        {/* <li>
          {" "}
          <NavLink>Cookie notice</NavLink>
        </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
