import { createContext } from "react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const AddressContext = createContext({});

export const AddressProvider = ({ children }) => {
  const [currentCoordinate, setCurrentCoordinate] = useState({
    lat: 0,
    lng: 0,
  });
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const GetCoordinate = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentCoordinate({ lat: latitude, lng: longitude });
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
      setIsLoading(true);
      const response = await axios.get(url);
      const data = response.data.results[0].formatted_address;
      setAddress(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetCoordinate();
  }, []);

  return (
    <AddressContext.Provider
      value={{
        currentCoordinate,
        setCurrentCoordinate,
        address,
        isLoading,
        setAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressContext;
