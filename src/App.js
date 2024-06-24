import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resetpass from "./pages/Resetpass";
import Aboutservice from "./pages/Aboutservice";
import ChatsLayout from "./components/chats/ChatsLayout";
import Chatbox from "./pages/Chatbox";
import Aboutprovider from "./pages/Aboutprovider";
import Bookings from "./pages/Bookings";
import Searchprovider from "./pages/Searchprovider";
import Requestedprovider from "./pages/Requestedprovider";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reset-password" element={<Resetpass />} />
        <Route path="about-service" element={<Aboutservice />} />
        <Route path="about-provider" element={<Aboutprovider />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="Search-provider" element={<Searchprovider />} />
        <Route path="requested-provider" element={<Requestedprovider />} />

        <Route element={<ChatsLayout />}>
          <Route path="chat" element={<Chatbox />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
