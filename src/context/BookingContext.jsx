import React, { createContext, useCallback, useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import useOpenModalContext from "../hooks/useOpenModalContext";

const BookingContext = createContext({});

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [activeBookings, setActiveBookings] = useState([]);
  const [bookingDetail, setBookingDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingActive, setLoadingActive] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const { setOpenBookingDetail } = useOpenModalContext();

  const handleGetBookings = async () => {
    setLoading(true);
    const url = "/service-user/api/v1/service-booking/";
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        setBookings(response?.data?.data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleBookingDetails = async (bookingID) => {
    setLoadingDetail(true);
    const url = `/service-user/api/v1/service-booking/${bookingID}`;
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        setBookingDetail(response?.data?.data);
      }
      setLoadingDetail(false);
    } catch (error) {
      console.error(error);
      setLoadingDetail(false);
    } finally {
      setLoadingDetail(false);
    }

    if (bookingDetail) {
      setOpenBookingDetail(true);
    }
  };

  const handleAcceptService = async (bookingID) => {
    setLoadingActive(true);
    const url = `/service-user/api/v1/accept-booking/?booking_id=${bookingID}`;
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        setActiveBookings(response?.data?.data);
      }
      setLoadingActive(false);
    } catch (error) {
      console.error(error);
      setLoadingActive(false);
    } finally {
      setLoadingActive(false);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        loading,
        activeBookings,
        loadingActive,
        handleAcceptService,
        handleGetBookings,
        handleBookingDetails,
        loadingDetail,
        bookingDetail,
        setBookingDetail,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
