import React, { useEffect } from "react";
import ContactsList from "../components/chats/ContactsList";
import ChatWindow from "../components/chats/ChatWindow";
import useChatContext from "../hooks/useChatContext";
import ChatSkeleton from "../components/skeleton/ChatSkeleton";
import { useLocation } from "react-router-dom";

const Chat = () => {
  const { selectedContactId, loading, handleSelectContact } = useChatContext();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.contactId) {
      handleSelectContact(location.state.contactId);
    }
  }, [location, handleSelectContact]);

  return (
    <div className="h-screen flex flex-col md:flex-row ">
      <div
        className={`w-full h-full md:w-1/4 bg-white ${
          selectedContactId ? "hidden md:block" : "block"
        }`}
      >
        <ContactsList />
      </div>
      {loading ? (
        <ChatSkeleton />
      ) : (
        <div
          className={`w-full bg-secondary/ ${
            selectedContactId ? "block" : "hidden md:block"
          }`}
        >
          <ChatWindow />
        </div>
      )}
    </div>
  );
};

export default Chat;
