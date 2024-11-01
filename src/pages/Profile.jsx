import { SubHeader } from "../components/general/Header";
import EditProfile from "../components/Modal/EditProfile";
import ProfileDetails from "../components/Profile/ProfileDetails";
import useProfileContext from "../hooks/useProfileContext";

const Profile = () => {
  return (
    <div className="flex justify-center  bg-secondary/10 h-screen  ">
      <main className=" flex flex-col gap-7 md:w-1/3 w-full bg-white md:rounded-2xl  md:m-10 md:p-10 p-5 ">
        <SubHeader title={"Profile"} />
        <ProfileDetails />
      </main>
    </div>
  );
};

export default Profile;
