import {
  APIProvider,
  Map,
  AdvancedMarker,
  /* useAdvancedMarkerRef,
  useMap,
  useMapsLibrary,
  ControlPosition,
  MapControl, */
  Pin,
} from "@vis.gl/react-google-maps";

import useAddressContext from "../../hooks/useAddressContext";
import PlaceAutocompleteForm from "../forms/PlaceAutoCompleteForm";

const GoogleMap = () => {
  const { currentCoordinate } = useAddressContext();

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <PlaceAutocompleteForm />
      <Map
        style={{ width: "100%", height: "400px" }}
        center={currentCoordinate}
        zoom={10}
        mapId={process.env.REACT_APP_GOOGLE_MAPS_ID}
        fullscreenControl={false}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={currentCoordinate}>
          <Pin
            background={" #15abbc"}
            borderColor={"#15abbc"}
            glyphColor={"#233D4A"}
          />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
