import React, { createContext, useState, useCallback } from "react";
import axiosInstance from "../api/axios";
import useArtisanContext from "../hooks/useArtisanContext";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext({});

export const ChatProvider = ({ children }) => {
  const [contactDetail, setContactDetail] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { availableService } = useArtisanContext();
  const navigate = useNavigate();

  const handleSelectContact = useCallback(
    async (contactId) => {
      if (contactId === selectedContactId && contactDetail) {
        return;
      }
      setLoading(true);
      setSelectedContactId(contactId);
      try {
        const url = `/service-user/api/v1/service-conversation/${contactId}/`;
        const response = await axiosInstance.get(url);
        if (response?.data?.data) {
          setContactDetail(response.data.data);
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

  const handleBackToContacts = useCallback(() => {
    setSelectedContactId(null);
    setContactDetail(null);

    navigate("/chat", { replace: true, state: {} });
  }, []);

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
        const contactId = response.data?.data?.id;
        if (contactId) {
          navigate("/chat", { state: { contactId } });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [availableService, navigate]
  );

  const contextValue = {
    contactDetail,
    setContactDetail,
    selectedContactId,
    setSelectedContactId,
    handleSelectContact,
    handleBackToContacts,
    loading,
    handleinitiateChat,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;
