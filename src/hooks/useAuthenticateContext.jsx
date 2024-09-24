import { useContext } from "react";
import AuthenticateContext from "../context/AuthenticateContext";

const useAuthenticateContext = () => {
  return useContext(AuthenticateContext);
};

export default useAuthenticateContext;
