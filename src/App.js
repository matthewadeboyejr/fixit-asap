import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resetpass from "./pages/Resetpass";
import Aboutprovider from "./pages/Aboutprovider";
import Bookings from "./pages/Bookings";
import Searchprovider from "./pages/Searchprovider";
import Chat from "./pages/Chat";
import Landing from "./pages/Landing";
import Address from "./pages/Address";
import RequireAuth from "./components/layout/RequireAuth";
import NotFound from "./pages/NotFound";
import { SignupProvider } from "./context/SignupContext";
import Profile from "./pages/Profile";
import { LoginProvider } from "./context/LoginContext";
import { OpenModalProvider } from "./context/OpenModalContext";
import { AddressProvider } from "./context/AddressContext";
import { ArtisanProvider } from "./context/ArtisanContext";
import ViewRequestAcceptedProviders from "./pages/ViewRequestAcceptedProviders";
import RequestAcceptedProviders from "./pages/RequestAcceptedProviders";

const App = () => {
  return (
    <ArtisanProvider>
      <AddressProvider>
        <OpenModalProvider>
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
                <Route path="address" element={<Address />} />
                <Route path="profile" element={<Profile />} />
                <Route
                  path="view-requested-providers"
                  element={<ViewRequestAcceptedProviders />}
                />
                <Route
                  path="requested-providers"
                  element={<RequestAcceptedProviders />}
                />
              </Route>
            </Routes>
          </div>
        </OpenModalProvider>
      </AddressProvider>
    </ArtisanProvider>
  );
};

export default App;
