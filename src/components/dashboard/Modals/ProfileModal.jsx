import { Link, useNavigate } from "react-router-dom";
import {
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiCloseFill,
  RiLogoutCircleLine,
} from "react-icons/ri";

const ProfileModal = ({ openProfile, closeProfile }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`${
        openProfile ? `flex` : `hidden`
      }  bg-black/70 fixed inset-0 z-50 h-screen justify-end`}
    >
      <div className="bg-white p-5 rounded-t-md w-2/3 md:w-1/5  flex flex-col  ">
        <div className="flex items-center justify-between border-b pb-7">
          <div className="flex items-center space-x-5">
            <img
              className="object-cover w-10 h-10  rounded-full "
              src="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div>
              <h4 className="text-sm font-medium">John Doe</h4>
              <p className="text-xs opacity-50">Service user</p>
            </div>
          </div>
          <p
            onClick={closeProfile}
            className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity "
          >
            <RiCloseFill />
          </p>
        </div>
        <div className="flex flex-col gap-7 pt-5  ">
          <Link className="flex items-center gap-3  ">
            <span className="text-teriary text-xl">
              <RiAccountCircleLine />
            </span>
            <span className="text-sm">Edit profile</span>
          </Link>
          <Link className="flex items-center gap-3  ">
            <span className="text-teriary text-xl">
              <RiLockPasswordLine />
            </span>
            <span className="text-sm">Security</span>
          </Link>
        </div>
        <div className="flex flex-1 items-end ">
          <p
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-end  text-red-600 bg-red-200 flex-1 p-3 mb-10 hover:opacity-80 rounded-md cursor-pointer"
          >
            <span className=" text-xl">
              <RiLogoutCircleLine />
            </span>
            <span className="text-sm">Sign Out</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileModal;
