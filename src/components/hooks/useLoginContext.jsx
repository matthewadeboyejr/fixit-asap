import { useContext } from "react";
import LoginContext from "../context/LoginContext";

const useLoginContext = () => {
  return useContext(LoginContext);
};

export default useLoginContext;
