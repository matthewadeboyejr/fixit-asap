import React, { memo, useEffect, useRef, useState } from "react";
import useChatContext from "../../hooks/useChatContext";
import useWebSocket from "../../hooks/useWebSocket";
import UseFormatTime from "../../hooks/UseFormatTime";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MessageList = memo(() => {
  const { contactDetail, listRef } = useChatContext();
  const messageSet = contactDetail?.message_set || [];
  const { messages: liveMessages } = useWebSocket(contactDetail?.id);
  const userID = localStorage.getItem("userId");

  const lastMessageRef = useRef(null);
  const loadingRef = useRef(false);
  const shouldScrollRef = useRef(true);

  const initialLoadCount = 30;
  const loadIncrement = 20;
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // Initial load of previous messages
  useEffect(() => {
    if (messageSet.length > 0) {
      setVisibleMessages(messageSet.slice(0, initialLoadCount));
      setHasMore(messageSet.length > initialLoadCount);
      if (shouldScrollRef.current) {
        setTimeout(() => {
          lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [messageSet]);

  // Handle scroll for loading more messages
  const handleScroll = () => {
    if (
      !loadingRef.current &&
      hasMore &&
      listRef.current &&
      listRef.current.scrollTop < 100
    ) {
      loadingRef.current = true;
      shouldScrollRef.current = false;

      const currentHeight = listRef.current.scrollHeight;
      const currentScroll = listRef.current.scrollTop;

      const currentLength = visibleMessages.length;
      const newMessages = messageSet.slice(0, currentLength + loadIncrement);

      setVisibleMessages(newMessages);
      setHasMore(newMessages.length < messageSet.length);

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

  // Auto-scroll on new live messages
  useEffect(() => {
    if (listRef.current && liveMessages.length > 0) {
      const isNearBottom =
        listRef.current.scrollHeight - listRef.current.scrollTop <=
        listRef.current.clientHeight + 100;

      if (isNearBottom || shouldScrollRef.current) {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [liveMessages.length]);

  // Message component
  const Message = memo(({ message, isLast }) => {
    const isMyMessage = Number(message?.sender) === Number(userID);
    const formattedTime = UseFormatTime(message?.timestamp);

    return (
      <li
        ref={isLast ? lastMessageRef : null}
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
              //effect="blur"
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
  });

  return (
    <section className="h-screen overflow-hidden bg-secondary/10 rounded-3xl p-4">
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="flex flex-col-reverse h-[calc(100vh-200px)] overflow-y-auto"
      >
        <ul className="flex flex-col gap-10 p-5 rounded-2xl">
          {liveMessages.map((message, index) => (
            <Message
              key={`live-${message.id}`}
              message={message}
              isLast={
                index === liveMessages.length - 1 &&
                visibleMessages.length === 0
              }
            />
          ))}
        </ul>

        <ul className="flex flex-col-reverse gap-10 p-5 rounded-2xl">
          {hasMore && (
            <div className="text-center py-2 text-gray-500 text-sm">
              Scroll up to load more messages...
            </div>
          )}
          {visibleMessages.map((message, index) => (
            <Message
              key={`prev-${message.id}`}
              message={message}
              isLast={
                index === visibleMessages.length - 1 &&
                liveMessages.length === 0
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
});

export default MessageList;
