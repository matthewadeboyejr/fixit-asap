import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const UseAuthContext = () => {
  return useContext(AuthContext);
};
