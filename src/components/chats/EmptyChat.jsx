import React from "react";
import { TbHandClick } from "react-icons/tb";

const EmptyChat = () => {
  return (
    <div className="md:flex h-full items-center justify-center hidden ">
      <p className="flex flex-col items-center gap-4 animate-pulse">
        <span className="bg-teriary/50 p-3 text-2xl rounded-full">
          <TbHandClick />
        </span>
        <span className="text-xs">Click a contact to show message history</span>
      </p>
    </div>
  );
};

export default EmptyChat;
