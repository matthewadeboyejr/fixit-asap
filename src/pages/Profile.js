import { SubHeader } from "../components/general/Header";
import { RiLogoutCircleLine } from "react-icons/ri";
import useProfileContext from "../components/hooks/useProfileContext";
import ProfileDetails, {
  ProfileDetailsSkeleton,
} from "../components/Profile/ProfileDetails";
import { ProfileProvider } from "../components/context/ProfileContext";
import SignoutButton from "../components/Buttons/SignoutButton";

const Profile = () => {
  const { isLoading, errorMsg } = useProfileContext();

  return (
    <ProfileProvider>
      <div className="flex justify-center items-center h-screen  ">
        <main className=" space-y-10 p-5 md:min-w-96 h-full min-w-full  bg-white/50 ">
          <SubHeader title={"Profile"} />

          {isLoading ? (
            <>
              <ProfileDetailsSkeleton />
            </>
          ) : errorMsg ? (
            <div className="text-center py-10">
              <p>Error fetching profile data: {errorMsg}</p>
            </div>
          ) : (
            <>
              <ProfileDetails />
            </>
          )}
          <section className="">
            <SignoutButton />
          </section>
        </main>
      </div>
    </ProfileProvider>
  );
};

export default Profile;
