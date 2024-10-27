import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" border-t border-t-secondary flex items-center justify-around py-10 font-medium">
      <div>© Eikon Peters 2024. All rights reserved</div>
      <ul className="flex gap-10 ">
        <li>
          <NavLink to={"/privacy"}>Privacy Policy</NavLink>
        </li>
        <li>
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
