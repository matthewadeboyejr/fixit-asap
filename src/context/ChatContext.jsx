import React, { createContext, useState, useCallback, useRef } from "react";
import axiosInstance from "../api/axios";
import useArtisanContext from "../hooks/useArtisanContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ChatContext = createContext({});

export const ChatProvider = ({ children }) => {
  const [contactDetail, setContactDetail] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [startingMsg, setStartingMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const { availableService } = useArtisanContext();
  const navigate = useNavigate();

  const listRef = useRef(null);

  const handleSelectContact = useCallback(
    async (contactId) => {
      if (contactId === selectedContactId && contactDetail) {
        return;
      }
      setLoading(true);
      setSelectedContactId(contactId);
      console.log("Select Contact id ", contactId);
      try {
        const url = `/service-user/api/v1/service-conversation/${contactId}/`;
        const response = await axiosInstance.get(url);
        if (response?.data?.data) {
          setContactDetail(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching contact detail:", error);
        setContactDetail(null);
      } finally {
        setLoading(false);
      }
    },
    [selectedContactId, contactDetail]
  );

  /* start message function */

  const handleStartMessage = useCallback(
    async (artisan_id, service_id) => {
      setStartingMsg(true);
      const url = `/service-user/api/v1/start-messaging/`;
      const payload = { artisan_id, service_id };

      try {
        const response = await axiosInstance.post(url, payload);
        const contactId = response?.data?.data?.id;

        console.log("from start message", contactId);

        if (contactId) {
          navigate("/chat", { state: { contactId } });
        } else {
          toast.error("Unable to initiate chat, try again");
        }
      } catch (error) {
        if (error?.code === "ERR_NETWORK" || error?.code === "ECONNABORTED") {
          navigate("/error");
        } else {
          toast.error(error?.response?.data?.message || "Something went wrong");
        }
      } finally {
        setStartingMsg(false);
      }
    },
    [selectedContactId, contactDetail]
  );

  /* Initiate chat function */

  const handleinitiateChat = useCallback(
    async (providerID) => {
      const url = "/service-user/api/v1/service-conversation/";
      const jobID = availableService?.job_detail?.id;
      const data = {
        artisan_id: providerID,
        job_id: jobID,
      };
      try {
        const response = await axiosInstance.post(url, data);
        const contactId = response?.data?.data?.id;
        if (contactId) {
          navigate("/chat", { state: { contactId } });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [availableService, navigate]
  );

  const handleBackToContacts = useCallback(() => {
    setSelectedContactId(null);
    setContactDetail(null);
    navigate("/chat", { replace: true, state: {} });
  }, [navigate]);

  const contextValue = {
    contactDetail,
    setContactDetail,
    selectedContactId,
    setSelectedContactId,
    handleSelectContact,
    handleBackToContacts,
    loading,
    handleinitiateChat,
    listRef,
    handleStartMessage,
    startingMsg,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;
