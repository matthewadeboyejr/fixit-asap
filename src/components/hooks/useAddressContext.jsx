import { useContext } from "react";
import AddressContext from "../context/AddressContext";

const useAddressContext = () => {
  return useContext(AddressContext);
};

export default useAddressContext;
