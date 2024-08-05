import { useContext } from "react";
import LoginContext from "../context/LoginContext";

const UseLoginContext = () => {
  return useContext(LoginContext);
};

export default UseLoginContext;
