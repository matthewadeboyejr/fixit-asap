import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resetpass from "./pages/Resetpass";
import Bookings from "./pages/Bookings";
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
import RequestAvailableProviders from "./pages/RequestAvailableProviders";
import RequestAcceptedProviders from "./pages/RequestAcceptedProviders";
import RequestExporeProvider from "./pages/RequestExporeProvider";
import { ChatProvider } from "./context/ChatContext";
import { BookingProvider } from "./context/BookingContext";
import ServiceDetail from "./pages/ServiceDetail";
import SelectedCategory from "./pages/SelectedCategory";
import { ProfileProvider } from "./context/ProfileContext";
import NetworkError from "./pages/NetworkError";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { APIProvider } from "@vis.gl/react-google-maps";

const App = () => {
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <ProfileProvider>
        <ArtisanProvider>
          <AddressProvider>
            <OpenModalProvider>
              <ChatProvider>
                <div>
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="error" element={<NetworkError />} />
                    <Route path="privacy" element={<PrivacyPolicy />} />
                    <Route path="terms" element={<Terms />} />

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
                      <Route
                        path="service-detail"
                        element={<ServiceDetail />}
                      />
                      <Route
                        path="bookings"
                        element={
                          <BookingProvider>
                            <Bookings />
                          </BookingProvider>
                        }
                      />
                      <Route
                        path="chat"
                        element={
                          <ChatProvider>
                            <Chat />
                          </ChatProvider>
                        }
                      />
                      {/*    <Route path="/chat/:contactId" element={<Chat />} /> */}
                      <Route path="address" element={<Address />} />
                      <Route path="profile" element={<Profile />} />
                      <Route
                        path="accepted-providers"
                        element={<RequestAcceptedProviders />}
                      />
                      <Route
                        path="available-providers"
                        element={<RequestAvailableProviders />}
                      />
                    </Route>
                    <Route
                      path="explore-providers"
                      element={<RequestExporeProvider />}
                    />
                    <Route
                      path="selected-category"
                      element={<SelectedCategory />}
                    />
                  </Routes>
                </div>
              </ChatProvider>
            </OpenModalProvider>
          </AddressProvider>
        </ArtisanProvider>
      </ProfileProvider>
    </APIProvider>
  );
};

export default App;
