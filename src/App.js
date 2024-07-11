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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reset-password" element={<Resetpass />} />
        <Route path="about-provider" element={<Aboutprovider />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="Search-provider" element={<Searchprovider />} />
        <Route path="requested-provider" element={<Requestedprovider />} />

        <Route path="chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default App;
