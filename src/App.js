import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resetpass from "./pages/Resetpass";
import Aboutservice from "./pages/Aboutservice";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="reset-password" element={<Resetpass />} />
      <Route path="about-service" element={<Aboutservice />} />
    </Routes>
  );
};

export default App;
