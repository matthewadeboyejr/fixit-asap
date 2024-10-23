import { useCallback, useState } from "react";
import useWebSocket from "../../hooks/useWebSocket";
import useChatContext from "../../hooks/useChatContext";
import ImagePreview from "../Modal/ImagePreview";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import EmptyChat from "./EmptyChat";

const ChatWindow = () => {
  const { contactDetail } = useChatContext();
  const { setOpenPreviewFile } = useOpenModalContext();
  const [inputMessage, setInputMessage] = useState("");
  const [file, setFile] = useState("");
  const { isConnected, sendMessage } = useWebSocket(contactDetail?.id);

  const handleSendMessage = useCallback(
    (e) => {
      e.preventDefault();
      if (inputMessage && isConnected) {
        sendMessage({ message: inputMessage });
        console.log("sending message:", inputMessage);
        setInputMessage("");
      } else if (!isConnected) {
        console.error("WebSocket is not connected. Cannot send message.");
      }
    },
    [inputMessage, isConnected, sendMessage]
  );
  const handleSendFile = useCallback(
    (e) => {
      e.preventDefault();
      if (file && isConnected) {
        sendMessage({ message: "", attachment: file });
        setFile("");
        setOpenPreviewFile(false);
      } else if (!isConnected) {
        console.error("WebSocket is not connected. Cannot send message.");
      }
    },
    [file, isConnected, sendMessage, setOpenPreviewFile]
  );

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFile(reader.result);
      setOpenPreviewFile(true);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  //console.log(file);

  return (
    <>
      {!contactDetail && <EmptyChat />}
      {contactDetail && (
        <div className="flex flex-col max-h-screen ">
          <ChatHeader />
          <MessageList />
          <ChatInput
            handleFileChange={handleFileChange}
            handleSendMessage={handleSendMessage}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
          />
        </div>
      )}

      <ImagePreview file={file} sendFile={handleSendFile} />
    </>
  );
};

export default ChatWindow;
