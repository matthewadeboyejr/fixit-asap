import { SignupContext } from "../context/SignupContext";
import { useContext } from "react";

const useSignupContext = () => {
  return useContext(SignupContext);
};
export default useSignupContext;
