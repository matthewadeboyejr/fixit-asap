import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { RiSearch2Line } from "react-icons/ri";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useAddressContext from "../../hooks/useAddressContext";
import toast from "react-hot-toast";

const PlaceAutocompleteForm = () => {
  const { setSuggestAddress, setSuggestCordinate, setSuggestPostalCode } =
    useAddressContext();

  const places = useMapsLibrary("places");

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
      const { lat, lng } = await getLatLng(results[0]);

      setSuggestCordinate({ lat, lng });
      setSuggestAddress(results[0].formatted_address);

      const reverseResults = await getGeocode({ location: { lat, lng } });
      const postalComponent = reverseResults[0].address_components.find(
        (comp) => comp.types.includes("postal_code")
      );
      const postalCode = postalComponent?.long_name;
      if (!postalCode) {
        toast.error(
          "Please select a more specific location to get the postal code."
        );
      }
      setSuggestPostalCode(results[0].address_components[5].long_name);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <form className="space-y-5 py-5 w-full relative">
      <div className="flex bg-secondary/20 items-center p-4 rounded-md ">
        <RiSearch2Line />
        <input
          className="bg-transparent cursor-pointer  w-full placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder={ready ? "Search Place / postcode" : "Wait a sec"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
        />
      </div>

      <ul className="space-y-3 text-sm bg-white absolute top-16 z-50   w-full">
        {status === "OK" &&
          data.map(({ place_id, description }) => (
            <li
              className="cursor-pointer p-2 hover:bg-primary/20 rounded-md"
              key={place_id}
              onClick={() => handleSelect(description, place_id)}
            >
              {description}
            </li>
          ))}
      </ul>
    </form>
  );
};

export default PlaceAutocompleteForm;
