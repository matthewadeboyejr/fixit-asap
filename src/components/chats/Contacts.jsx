import React from "react";
import ContactsList from "./ContactsList";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Contacts = () => {
  return (
    <div className=" bg-white  max-h-screen">
      <div className="p-5 gap-3 flex justify-between">
        <h1 className="text-xl font-medium ">Chats</h1>

        <div className="flex items-center bg-white px-3 py-1 rounded-md">
          <FiSearch />
          <input className="outline-none bg-transparent" type="text" />
        </div>
      </div>
      <ul className=" overflow-auto h-screen">
        {ContactsList.map((list, index) => (
          <li className="  border-b ">
            <NavLink to={list.path} key={index} className={"link"}>
              <img
                className="object-cover w-10 h-10 rounded-full "
                src={list.img}
                alt=""
              />

              <div className=" w-full space-y-1">
                <p className="flex justify-between text-sm">
                  <span>{list.name}</span>
                  <span className="text-xs">{list.time}</span>
                </p>
                <p className="text-xs opacity-50">{list.message}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
