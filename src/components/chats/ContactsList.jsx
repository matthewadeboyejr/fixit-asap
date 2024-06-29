import React from "react";
import Contacts from "./Contacts";

const ContactsList = ({ onSelectContact }) => {
  return (
    <div className="w-full md:w-1/4 border-r border-gray-200 p-4">
      <h2 className="text-xl font-semibold border-b pb-4 mb-4">Contacts</h2>
      <ul>
        {Contacts.map((contact) => (
          <li
            key={contact.id}
            className="p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
            onClick={() => onSelectContact(contact)}
          >
            <img className="w-10 h-10 rounded-full" src={contact.img} alt="" />
            <p className="text-sm font-medium"> {contact.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
