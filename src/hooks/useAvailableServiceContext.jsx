import { useContext } from "react";
import AvailableServiceContext from "../context/AvailableServiceContext";

const useAvailableServiceContext = () => {
  return useContext(AvailableServiceContext);
};

export default useAvailableServiceContext;
