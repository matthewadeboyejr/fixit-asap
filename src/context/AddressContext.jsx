import { createContext } from "react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { googleMapApiKey } from "../components/map/ProvidersLocationMap";

const AddressContext = createContext({});
export const AddressProvider = ({ children }) => {
  const [currentCoordinate, setCurrentCoordinate] = useState({
    lat: 0,
    lng: 0,
  });
  const [address, setAddress] = useState("");
  const [suggestAddress, setSuggestAddress] = useState("");
  const [suggestPostalCode, setSuggestPostalCode] = useState("");
  const [suggestCordinate, setSuggestCordinate] = useState({
    lat: 0,
    lng: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [postalCode, setPostalCode] = useState("");

  const getAddress = useCallback(async (latitude, longitude) => {
    const apiKey = googleMapApiKey;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      setIsLoading(true);
      const response = await axios.get(url);
      const result = response.data.results[0];

      const postalComponent = result.address_components.find((comp) =>
        comp.types.includes("postal_code")
      );

      const postal = postalComponent?.long_name || "";
      const formattedAddress = result.formatted_address;

      setAddress(formattedAddress);
      setPostalCode(postal);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const GetCoordinate = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentCoordinate({ lat: latitude, lng: longitude });
        getAddress(latitude, longitude);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  }, [getAddress]);

  useEffect(() => {
    GetCoordinate();
  }, [GetCoordinate]);

  console.log("currentCoordinate", currentCoordinate);
  console.log("address", address);
  console.log("postalCode", postalCode);

  return (
    <AddressContext.Provider
      value={{
        currentCoordinate,
        setCurrentCoordinate,
        address,
        isLoading,
        setAddress,
        postalCode,
        setPostalCode,
        suggestAddress,
        setSuggestAddress,
        suggestPostalCode,
        setSuggestPostalCode,
        suggestCordinate,
        setSuggestCordinate,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressContext;
