import { IoNotificationsSharp } from "react-icons/io5";
import {
  RiHomeLine,
  RiTimeLine,
  RiChat3Line,
  RiAccountCircleLine,
  RiArrowLeftLine,
} from "react-icons/ri";
import Logo from "../Images/Logo-yellow.png";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileModal from "../dashboard/Modals/ProfileModal";
import { useState } from "react";

const nav = [
  { icon: <RiHomeLine />, name: "Home", path: "/dashboard" },
  { icon: <RiTimeLine />, name: "Booking", path: "/bookings" },
  { icon: <RiChat3Line />, name: "Chat", path: "/chat" },
  { icon: <RiChat3Line />, name: "Chat", path: "/chat" },
];

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between   ">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={Logo}
        className="w-28 h-auto "
        alt="logo"
      />
      <nav className="hidden md:flex  bg-primary px-7 py-2 rounded-full gap-7  ">
        {nav.map((navLink) => (
          <NavLink to={navLink.path} className="flex items-center gap-2  ">
            <span className="text-secondary text-xl hover:text-teriary ">
              {navLink.icon}
            </span>
            <span className="text-white text-sm hover:underline ">
              {navLink.name}
            </span>
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-4 text-primary ">
        <IoNotificationsSharp className="hover:opacity-70 transition-opacity" />
        <div
          onClick={() => {
            setOpenProfile(true);
          }}
          className="flex items-center gap-2 hover:underline cursor-pointer "
        >
          <RiAccountCircleLine className="text-xl" />
          <p className="">Profile</p>
        </div>
      </div>

      <ProfileModal
        openProfile={openProfile}
        closeProfile={() => {
          setOpenProfile(false);
        }}
      />
    </header>
  );
};

export default Header;

export const LandingHeader = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between   ">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={Logo}
        className="w-28 h-auto "
        alt="logo"
      />
      <nav className="hidden md:flex  bg-primary px-7 py-2 rounded-full gap-10  ">
        <NavLink
          to={""}
          className="flex items-center gap-2 text-white text-sm hover:underline  "
        >
          About us
        </NavLink>
        <NavLink
          to={""}
          className="flex items-center gap-2 text-white text-sm hover:underline  "
        >
          FAQ
        </NavLink>
        <NavLink
          to={""}
          className="flex items-center gap-2 text-white text-sm hover:underline "
        >
          Pricing
        </NavLink>
        <NavLink
          to={""}
          className="flex items-center gap-2 text-white text-sm hover:underline "
        >
          Contact Us
        </NavLink>
      </nav>
      <div className="flex items-center gap-4 text-primary ">
        <IoNotificationsSharp className="hover:opacity-70 transition-opacity" />
        <div
          onClick={() => {
            setOpenProfile(true);
          }}
          className="flex items-center gap-2 hover:underline cursor-pointer "
        >
          <RiAccountCircleLine className="text-xl" />
          <p className="">Profile</p>
        </div>
      </div>

      <ProfileModal
        openProfile={openProfile}
        closeProfile={() => {
          setOpenProfile(false);
        }}
      />
    </header>
  );
};

export const MobileNav = () => {
  return (
    <nav className=" flex justify-evenly bg-primary  py-3  rounded-full mx-5 gap-7 shadow-2xl  drop-shadow-lg">
      {nav.map((navLink) => (
        <NavLink to={nav.path} className="flex flex-col items-center gap-1  ">
          <span className="text-secondary text-xl hover:text-teriary ">
            {navLink.icon}
          </span>
          <span className="text-white text-xs hover:underline ">
            {navLink.name}
          </span>
        </NavLink>
      ))}
    </nav>
  );
};

export const SubHeader = (props) => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center gap-5 md:pt-0 pt-5">
      <p
        onClick={() => navigate(-1)}
        className="bg-primary/30 text-primary p-2 rounded-sm"
      >
        <RiArrowLeftLine />
      </p>
      <h4 className="text-lg font-semibold">{props.title}</h4>
    </section>
  );
};
