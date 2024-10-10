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

const ProvidersLocationMap = () => {
  const { currentCoordinate } = useAddressContext();
  const { availableService } = useArtisanContext();

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
          {availableService?.services?.map((response) => (
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
