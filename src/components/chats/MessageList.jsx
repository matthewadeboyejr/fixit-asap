import React, { memo, useEffect, useRef } from "react";
import PreviousMessage from "./PreviousMessage";
import LiveMessage from "./LiveMessage";

const MessageList = memo(() => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="h-screen overflow-y-auto bg-secondary/10 rounded-3xl p-4  ">
      <PreviousMessage />
      <LiveMessage />
      <div ref={messagesEndRef} />
    </section>
  );
});

export default MessageList;
