import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";

import PlaceAutocompleteForm from "../forms/PlaceAutoCompleteForm";

const MapWrapper = () => {
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <PlaceAutocompleteForm />
    </APIProvider>
  );
};

export default MapWrapper;
