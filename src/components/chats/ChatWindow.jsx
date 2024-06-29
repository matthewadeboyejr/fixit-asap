import React from "react";

const ChatWindow = ({ selectedContact }) => {
  return (
    <div className="w-full md:w-3/4 p-4">
      {selectedContact ? (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Chat with {selectedContact.name}
          </h2>
          <div className="h-64 border border-gray-200 p-4 mb-4 overflow-y-scroll">
            {/* Chat messages will go here */}
          </div>
          <input
            type="text"
            className="w-full p-2 border border-gray-200 rounded"
            placeholder="Type your message..."
          />
        </>
      ) : (
        <p className="text-gray-500">Select a contact to start chatting</p>
      )}
    </div>
  );
};

export default ChatWindow;
