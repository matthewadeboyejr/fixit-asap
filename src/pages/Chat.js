import React from "react";
import ContactsList from "../components/chats/ContactsList";
import ChatWindow from "../components/chats/ChatWindow";
import { useState } from "react";

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <ContactsList onSelectContact={setSelectedContact} />
      <ChatWindow selectedContact={selectedContact} />
    </div>
  );
};

export default Chat;
