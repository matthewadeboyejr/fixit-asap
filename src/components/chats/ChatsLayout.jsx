import { Outlet } from "react-router-dom";
import Contacts from "./Contacts";

const ChatsLayout = () => {
  return (
    <div className="flex flex-grow h-screen overflow-hidden">
      <Contacts />
      <Outlet />
    </div>
  );
};

export default ChatsLayout;
