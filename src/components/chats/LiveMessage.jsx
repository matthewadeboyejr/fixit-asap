import React, { memo } from "react";
import useWebSocket from "../../hooks/useWebSocket";
import useChatContext from "../../hooks/useChatContext";
import UseFormatTime from "../../hooks/UseFormatTime";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LiveMessage = memo(() => {
  const { contactDetail, listRef } = useChatContext();
  const { messages } = useWebSocket(contactDetail?.id);

  const userID = localStorage.getItem("userId");
  return (
    <ul ref={listRef} className="flex flex-col  gap-10  p-5 rounded-2xl ">
      {messages.map((message, index) => {
        const myMessages = Number(message?.sender) === Number(userID);
        const timestamp = message?.timestamp;
        const formattedTime = UseFormatTime(timestamp);

        return (
          <li
            key={message.id}
            className={`flex ${myMessages ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`flex flex-col min-w-24 p-2 gap-1 rounded-t-lg  ${
                myMessages
                  ? "bg-secondary text-white rounded-l-lg"
                  : "bg-white  rounded-r-lg"
              }`}
            >
              {message?.attachment && (
                <LazyLoadImage
                  src={message.attachment}
                  alt="attachment"
                  placeholder={
                    <div className="bg-gray-200 w-full h-32 rounded-md flex items-center justify-center">
                      Loading...
                    </div>
                  }
                  effect="blur"
                  className="rounded-md max-w-56 w-full"
                />
              )}
              <span className="md:text-xs text-sm">{message?.text}</span>
              <span
                className={`text-right text-primary opacity-65 text-xs ${
                  myMessages ? "text-white" : "text"
                }`}
              >
                {formattedTime}
              </span>
            </p>
          </li>
        );
      })}
    </ul>
  );
});

export default LiveMessage;
