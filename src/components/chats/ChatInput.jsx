import React, { memo, useState, useCallback } from "react";
import { IoSendSharp } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";

const ChatInput = memo(
  ({ handleFileChange, handleSendMessage, inputMessage, setInputMessage }) => {
    return (
      <form
        onSubmit={handleSendMessage}
        className=" bg-white border flex gap-2 rounded-full m-2"
      >
        <label
          for="drop-file"
          className=" flex items-center justify-center px-3 cursor-pointer hover:opacity-80 text-xl"
        >
          <input
            id="drop-file"
            type="file"
            onChange={handleFileChange}
            className=" hidden"
          />
          <RiAttachment2 />
        </label>
        <input
          onChange={(e) => setInputMessage(e.target.value)}
          value={inputMessage}
          type="text"
          className="w-full py-3  outline-none text-xs  bg-transparent"
          placeholder="Type your message"
        />
        <span>
          <button
            type="submit"
            className="bg-secondary h-10 w-10 flex items-center justify-center text-sm m-2 rounded-full"
          >
            <IoSendSharp />
          </button>
        </span>
      </form>
    );
  }
);

export default ChatInput;
