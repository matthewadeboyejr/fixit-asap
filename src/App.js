import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resetpass from "./pages/Resetpass";
import Aboutprovider from "./pages/Aboutprovider";
import Bookings from "./pages/Bookings";
import Searchprovider from "./pages/Searchprovider";
import Requestedprovider from "./pages/Requestedprovider";
import Chat from "./pages/Chat";
import Landing from "./pages/Landing";
import Address from "./pages/Address";
import RequireAuth from "./components/layout/RequireAuth";
import NotFound from "./pages/NotFound";
import { LoginProvider } from "./components/context/LoginContext";
import { SignupProvider } from "./components/context/SignupContext";
import Profile from "./pages/Profile";
import { ProfileProvider } from "./components/context/ProfileContext";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />

        {/*    {Public routes} */}
        <Route
          path="login"
          element={
            <LoginProvider>
              <Login />
            </LoginProvider>
          }
        />
        <Route
          path="signup"
          element={
            <SignupProvider>
              <Signup />
            </SignupProvider>
          }
        />

        <Route path="reset-password" element={<Resetpass />} />

        {/*    {Needs to be protected} */}

        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about-provider" element={<Aboutprovider />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="chat" element={<Chat />} />
          <Route path="Search-provider" element={<Searchprovider />} />
          <Route path="requested-provider" element={<Requestedprovider />} />
          <Route path="address" element={<Address />} />
          <Route
            path="profile"
            element={
              <ProfileProvider>
                <Profile />
              </ProfileProvider>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
