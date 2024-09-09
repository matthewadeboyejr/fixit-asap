import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { RiSearch2Line } from "react-icons/ri";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useAddressContext from "../hooks/useAddressContext";

const PlaceAutocompleteForm = () => {
  const places = useMapsLibrary("places");
  const { setAddress, setCurrentCoordinate } = useAddressContext();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ libraries: places ? [places] : [] });

  const handleSelect = async (description) => {
    setValue(description, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address: description });
      console.log(results);
      const { lat, lng } = await getLatLng(results[0]);

      setCurrentCoordinate({ lat: lat, lng: lng });
      setAddress(results[0].formatted_address);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <form className="space-y-5 py-5 ">
      <div className="flex bg-secondary/10 items-center p-4 rounded-md ">
        <RiSearch2Line />
        <input
          className="bg-transparent   w-full placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Search Place / postcode"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
        />
      </div>

      <ul className="space-y-5">
        {status === "OK" &&
          data.map(({ place_id, description }) => (
            <li
              className="cursor-pointer"
              key={place_id}
              onClick={() => handleSelect(description)}
            >
              {description}
            </li>
          ))}
      </ul>
    </form>
  );
};

export default PlaceAutocompleteForm;
