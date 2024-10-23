import React, { memo, useEffect, useRef, useState } from "react";
import useChatContext from "../../hooks/useChatContext";
import UseFormatTime from "../../hooks/UseFormatTime";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PreviousMessages = memo(() => {
  const { contactDetail, listRef } = useChatContext();
  const messageSet = contactDetail?.message_set || [];
  const userID = localStorage.getItem("userId");

  const initialLoadCount = 30;
  const loadIncrement = 20;
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);

  // Initial load
  useEffect(() => {
    if (messageSet.length > 0) {
      setVisibleMessages(messageSet.slice(0, initialLoadCount));
      setHasMore(messageSet.length > initialLoadCount);
    }
  }, [messageSet]);

  // Handle scroll
  const handleScroll = () => {
    if (
      !loadingRef.current &&
      hasMore &&
      listRef.current &&
      listRef.current.scrollTop < 100
    ) {
      loadingRef.current = true;

      const currentHeight = listRef.current.scrollHeight;
      const currentScroll = listRef.current.scrollTop;

      const currentLength = visibleMessages.length;
      const newMessages = messageSet.slice(0, currentLength + loadIncrement);

      setVisibleMessages(newMessages);
      setHasMore(newMessages.length < messageSet.length);

      // Maintain scroll position after loading
      requestAnimationFrame(() => {
        if (listRef.current) {
          const newHeight = listRef.current.scrollHeight;
          listRef.current.scrollTop =
            currentScroll + (newHeight - currentHeight);
          loadingRef.current = false;
        }
      });
    }
  };

  // Scroll to bottom on new message
  useEffect(() => {
    if (listRef.current && messageSet.length > visibleMessages.length) {
      const isNearBottom =
        listRef.current.scrollHeight - listRef.current.scrollTop <=
        listRef.current.clientHeight + 100;

      if (isNearBottom) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    }
  }, [messageSet.length, visibleMessages.length]);

  return (
    <ul
      ref={listRef}
      onScroll={handleScroll}
      className="flex flex-col-reverse gap-10 p-5 rounded-2xl overflow-y-auto h-[calc(100vh-200px)]"
    >
      {hasMore && (
        <div className="text-center py-2 text-gray-500 text-sm">
          Scroll up to load more messages...
        </div>
      )}

      {visibleMessages.map((message) => {
        const isMyMessage = Number(message?.sender) === Number(userID);
        const formattedTime = UseFormatTime(message?.timestamp);

        return (
          <li
            key={message.id}
            className={`flex ${isMyMessage ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex flex-col min-w-24 p-2 gap-1 rounded-t-lg ${
                isMyMessage
                  ? "bg-secondary text-white rounded-l-lg"
                  : "bg-white rounded-r-lg"
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

              <span className="md:text-xs text-sm break-words">
                {message?.text}
              </span>

              <span
                className={`text-right opacity-65 text-xs ${
                  isMyMessage ? "text-white" : "text-primary"
                }`}
              >
                {formattedTime}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
});

export default PreviousMessages;
