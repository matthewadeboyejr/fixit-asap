import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import PlaceAutocompleteForm from "../forms/PlaceAutoCompleteForm";
import { googleMapApiKey } from "./ProvidersLocationMap";

const MapWrapper = () => {
  return (
    <APIProvider apiKey={googleMapApiKey}>
      <PlaceAutocompleteForm />
    </APIProvider>
  );
};

export default MapWrapper;
