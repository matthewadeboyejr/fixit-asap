import { SubHeader } from "../components/general/Header";
import ProfileDetails from "../components/Profile/ProfileDetails";
import { LoginProvider } from "../components/context/LoginContext";

const Profile = () => {
  return (
    <LoginProvider>
      <div className="flex justify-center items-center h-screen  ">
        <main className=" space-y-10 p-5 md:min-w-96 h-full min-w-full  bg-white/50 ">
          <SubHeader title={"Profile"} />
          <ProfileDetails />
        </main>
      </div>
    </LoginProvider>
  );
};

export default Profile;
