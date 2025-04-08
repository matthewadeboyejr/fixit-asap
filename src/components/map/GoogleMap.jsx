import {
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
import { googleMapId } from "./ProvidersLocationMap";

const GoogleMap = () => {
  const { currentCoordinate } = useAddressContext();

  return (
    <Map
      style={{ width: "100%", height: "200px" }}
      center={currentCoordinate}
      zoom={10}
      mapId={googleMapId}
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
  );
};

export default GoogleMap;
