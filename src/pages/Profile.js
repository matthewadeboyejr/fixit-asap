import { SubHeader } from "../components/general/Header";
import ProfileDetails from "../components/Profile/ProfileDetails";
import { LoginProvider } from "../context/LoginContext";

const Profile = () => {
  return (
    <LoginProvider>
      <div className="flex justify-center  bg-secondary/10 h-screen  ">
        <main className="space-y-5  md:w-1/3 w-full bg-white md:rounded-2xl  md:m-10 md:p-10 p-5 ">
          <SubHeader title={"Profile"} />
          <ProfileDetails />
        </main>
      </div>
    </LoginProvider>
  );
};

export default Profile;
