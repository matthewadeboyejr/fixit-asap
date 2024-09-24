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

import useArtisanContext from "../../hooks/useArtisanContext";
import { useEffect } from "react";

const ProvidersLocationMap = () => {
  const { currentCoordinate } = useAddressContext();
  const { availableService } = useArtisanContext();

  useEffect(() => {
    console.log(availableService, "jjjjjj");
    console.log(currentCoordinate, "aaaaaa");
  }, []);

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div className="absolute inset-0">
        <Map
          style={{ width: "100%", height: "100%" }}
          center={currentCoordinate}
          zoom={10}
          mapId={process.env.REACT_APP_GOOGLE_MAPS_ID}
          fullscreenControl={false}
          disableDefaultUI={true}
        >
          {availableService.map((response) => (
            <AdvancedMarker
              key={response?.id}
              position={{
                lat: response?.artisan?.latitude,
                lng: response?.artisan?.longitude,
              }}
            >
              <Pin
                background={" #15abbc"}
                borderColor={"#15abbc"}
                glyphColor={"#233D4A"}
              />
            </AdvancedMarker>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
};

export default ProvidersLocationMap;
