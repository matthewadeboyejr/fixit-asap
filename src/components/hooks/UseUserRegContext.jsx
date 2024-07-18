import { UserRegContext } from "../context/UserRegContext";
import { useContext } from "react";

const useUserRegContext = () => {
  return useContext(UserRegContext);
};
export default useUserRegContext;
