import createContext from "react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const UserLocationContext = createContext({});

export const UserLocationProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [address, setAddress] = useState("hello");

  const GetCoordinate = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        GetAddress(latitude, longitude);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  }, []);

  const GetAddress = async (latitude, longitude) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const data = response.data.results[0].formatted_address;
      console.log(data);
      setAddress(data);
    } catch (error) {}
  };

  useEffect(() => {
    GetCoordinate();
  }, [GetCoordinate]);

  return (
    <UserLocationContext.Provider value={{ currentLocation, address }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
