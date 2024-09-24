import { useContext } from "react";
import OpenModalContext from "../context/OpenModalContext";

const useOpenModalContext = () => {
  return useContext(OpenModalContext);
};

export default useOpenModalContext;
