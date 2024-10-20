import { IoNotificationsSharp } from "react-icons/io5";
import {
  RiHomeLine,
  RiTimeLine,
  RiChat3Line,
  RiArrowLeftLine,
} from "react-icons/ri";
import Logo from "../../Images/Logo-yellow.png";
import LogoMain from "../../Images/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import UserAddress from "./UserAddress";

const nav = [
  { id: 1, icon: <RiHomeLine />, name: "Home", path: "/dashboard" },
  { id: 2, icon: <RiTimeLine />, name: "Booking", path: "/bookings" },
  { id: 3, icon: <RiChat3Line />, name: "Chat", path: "/chat" },
];

const Header = () => {
  const { setOpenProfile, openProfile } = useOpenModalContext();

  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between">
      {/*  <img
        onClick={() => {
          navigate("/");
        }}
        src={LogoMain}
        className="w-20 h-auto "
        alt="logo"
      /> */}
      <div id="address">
        <UserAddress color="text-white" bg="" />
      </div>

      <nav className="hidden md:flex bg-primary p-4 rounded-full gap-7">
        {nav.map((navLink) => (
          <NavLink
            key={navLink.id}
            to={navLink.path}
            className="flex items-center gap-2  "
          >
            <span className="text-secondary text-xl hover:text-teriary ">
              {navLink.icon}
            </span>
            <span className="text-white text-sm hover:underline ">
              {navLink.name}
            </span>
          </NavLink>
        ))}

        <div
          onClick={() => {
            setOpenProfile(!openProfile);
          }}
          className="flex md:flex-row flex-col items-center gap-1 cursor-pointer "
        >
          <p className="text-secondary text-xl hover:text-teriary ">
            <GoPerson />
          </p>
          <p className="text-white text-sm hover:underline  ">Profile</p>
        </div>
      </nav>
      <div id="notification" className="flex items-center gap-4 text-primary ">
        <p className="text-white bg-white/10 p-2 md:p-1 text-xs rounded-md ">
          <IoNotificationsSharp className="hover:opacity-70 transition-opacity" />
        </p>
      </div>
    </header>
  );
};

export default Header;

export const LandingHeader = () => {
  //const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between  px-10 ">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={LogoMain}
        className="w-28 h-auto "
        alt="logo"
      />
      <nav className="hidden md:flex  bg-primary px-7 py-2 rounded-full gap-10 border-b-4 border-teriary  ">
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
        <button></button>
      </div>
    </header>
  );
};

export const PreHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="p-10">
      <img
        onClick={() => navigate("/")}
        src={LogoMain}
        className="w-24 h-auto  hover:scale-110"
        alt="logo"
      />
    </header>
  );
};

export const MobileNav = () => {
  const { setOpenProfile, openProfile } = useOpenModalContext();
  return (
    <nav
      id="nav"
      className=" flex justify-evenly bg-primary  py-3  rounded-full mx-10  shadow-2xl  drop-shadow-lg"
    >
      {nav.map((navLink) => (
        <NavLink
          key={navLink.id}
          to={navLink.path}
          className="flex flex-col items-center   "
        >
          <span className="text-secondary text-lg hover:text-teriary ">
            {navLink.icon}
          </span>
          <span className="text-white text-xs hover:underline ">
            {navLink.name}
          </span>
        </NavLink>
      ))}
      <div
        onClick={() => {
          setOpenProfile(!openProfile);
        }}
        className="flex md:flex-row flex-col items-center   "
      >
        <p className="text-secondary text-lg hover:text-teriary ">
          <GoPerson />
        </p>
        <p className="text-white text-xs hover:underline  ">Profile</p>
      </div>
    </nav>
  );
};

export const SubHeader = (props) => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center gap-2 md:pt-0 ">
      <p
        onClick={() => navigate(-1)}
        className=" hover:cursor-pointer text-primary p-2 rounded-sm"
      >
        <RiArrowLeftLine />
      </p>
      <h4 className="text-lg font-medium">{props.title}</h4>
    </section>
  );
};
