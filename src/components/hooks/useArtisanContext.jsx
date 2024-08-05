import { useContext } from "react";
import ArtisanContext from "../context/ArtisanContext";

const useArtisanContext = () => {
  return useContext(ArtisanContext);
};

export default useArtisanContext;
