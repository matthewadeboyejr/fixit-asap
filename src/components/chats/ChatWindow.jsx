import { RiArrowLeftLine } from "react-icons/ri";

import { FaCircle } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { IoAddOutline, IoSendSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
//import useWebSocket from "../../hooks/useWebSocket";
import UseFormatTime from "../../hooks/UseFormatTime";
import useChatContext from "../../hooks/useChatContext";

const ChatWindow = () => {
  const { contactDetail, handleBackToContacts } = useChatContext();

  const [inputMessage, setInputMessage] = useState("");
  //const { isConnected, /* messages, */ sendMessage } = useWebSocket(
  // contactDetail?.id
  // );

  const messagesEndRef = useRef(null);

  const serviceImage = contactDetail?.receiver?.services[0]?.image;
  const businessName = contactDetail?.receiver?.business_name;
  const isOnline = contactDetail?.receiver?.user?.online_status?.is_online;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (inputMessage && isConnected) {
        console.log("Sending message:", inputMessage);
        sendMessage({ type: "chat", content: inputMessage });
        setInputMessage("");
      } else if (!isConnected) {
        console.error("WebSocket is not connected. Cannot send message.");
      }
    },
    [inputMessage, isConnected, sendMessage]
  ); */

  const messageSet = contactDetail?.message_set;
  const userID = localStorage.getItem("userId");

  return (
    <>
      {!contactDetail && (
        <div className="md:flex h-full items-center justify-center hidden ">
          <p className="flex flex-col items-center gap-4 animate-pulse">
            <span className="bg-teriary/50 p-3 text-2xl rounded-full">
              <TbHandClick />
            </span>
            <span className="text-xs">
              Click a contact to show message history
            </span>
          </p>
        </div>
      )}

      {contactDetail && (
        <div className="flex flex-col h-screen ">
          <section className="flex items-center gap-5 my-4 px-5">
            <button
              className="bg-white text-primary p-2 rounded-sm md:hidden"
              onClick={handleBackToContacts}
            >
              <RiArrowLeftLine />
            </button>
            <div className="flex items-center gap-5">
              <img
                className="w-10 h-10 rounded-full"
                src={serviceImage}
                alt={businessName}
              />
              <div className="flex flex-col">
                <p className="text-sm font-normal">{businessName}</p>
                <p className="flex items-center gap-2">
                  <span className=" text-xs">
                    {isOnline ? "Online" : "Offline"}
                  </span>
                  <FaCircle
                    className={`text-[10px] ${
                      isOnline ? "text-green-600" : "text-gray-400"
                    }`}
                  />
                </p>
              </div>
            </div>
          </section>

          <section className="flex-grow  overflow-y-auto bg-secondary/10 rounded-3xl p-4  ">
            {/*    {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm">{message.content}</p>
              </div>
            ))} */}

            <ul className="flex flex-col-reverse  gap-10  p-5 rounded-2xl ">
              {messageSet.map((message) => {
                const myMessages = Number(message?.sender) === Number(userID);
                const timestamp = message?.timestamp;
                const formattedTime = UseFormatTime(timestamp);
                return (
                  <li
                    key={message.id}
                    className={`flex ${
                      myMessages ? "justify-end" : "justify-start"
                    }`}
                  >
                    <p
                      className={`flex flex-col min-w-24 p-2 gap-1 rounded-t-lg  ${
                        myMessages
                          ? "bg-secondary text-white rounded-l-lg"
                          : "bg-white  rounded-r-lg"
                      }`}
                    >
                      <span className="md:text-xs text-sm">
                        {message?.text}
                      </span>
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

            <div ref={messagesEndRef} />
          </section>
          <form
            //onSubmit={handleSubmit}
            className=" bg-white border flex rounded-full m-2"
          >
            <button className="bg-secondary/50 p-2 flex items-center justify-center text-2xl m-2 rounded-full">
              <IoAddOutline />
            </button>
            <input
              onChange={(e) => setInputMessage(e.target.value)}
              value={inputMessage}
              type="text"
              className="w-full py-3 px-2 outline-none text-xs  bg-transparent"
              placeholder="Type your message..."
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
        </div>
      )}
    </>
  );
};

export default ChatWindow;
