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

const App = () => {
  return (
    <ArtisanProvider>
      <AddressProvider>
        <OpenModalProvider>
          <ChatProvider>
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
                  <Route path="service-detail" element={<ServiceDetail />} />
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
              </Routes>
            </div>
          </ChatProvider>
        </OpenModalProvider>
      </AddressProvider>
    </ArtisanProvider>
  );
};

export default App;
