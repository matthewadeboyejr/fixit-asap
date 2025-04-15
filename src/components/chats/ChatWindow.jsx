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
  const [isSending, setIsSending] = useState(false);
  const { isConnected, sendMessage } = useWebSocket(contactDetail?.id);

  console.log("contact details", contactDetail);

  const handleSendMessage = useCallback(
    async (e) => {
      e.preventDefault();
      if (!inputMessage.trim() || isSending || !isConnected) return;

      setIsSending(true);
      try {
        const success = sendMessage({ message: inputMessage });
        if (success) {
          console.log("Message sent:", inputMessage);
          setInputMessage("");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsSending(false);
      }
    },
    [inputMessage, isConnected, sendMessage, isSending]
  );
  const handleSendFile = useCallback(
    async (e) => {
      e.preventDefault();
      if (!file || isSending || !isConnected) return;

      setIsSending(true);
      try {
        const success = sendMessage({ message: "", attachment: file });
        if (success) {
          setFile("");
          setOpenPreviewFile(false);
        }
      } catch (error) {
        console.error("Error sending file:", error);
      } finally {
        setIsSending(false);
      }
    },
    [file, isConnected, sendMessage, setOpenPreviewFile, isSending]
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
