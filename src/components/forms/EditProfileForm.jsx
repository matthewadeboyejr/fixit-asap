import React, { useRef } from "react";
import { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import useProfileContext from "../../hooks/useProfileContext";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import axiosInstance from "../../api/axios";
import useOpenModalContext from "../../hooks/useOpenModalContext";
import toast from "react-hot-toast";

const EditProfileForm = () => {
  const { profileData } = useProfileContext();
  const { phone, address, post_code, city, county } = profileData;
  const { setOpenEditProfile } = useOpenModalContext();
  const { handleProfileData } = useProfileContext();

  // const errRef = useRef();
  const firstNameRef = useRef();
  //const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [editData, setEditData] = useState({
    phone: phone || "",
    address: address || "",
    post_code: post_code || "",
    city: city || "",
    county: county || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preValues) => ({ ...preValues, [name]: value }));
  };

  const places = useMapsLibrary("places");

  const {
    /* ready,
    value, */
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    libraries: places ? [places] : [],
    /* requestOptions: {
      componentRestrictions: { country: "GB" },
    }, */
  });

  const handleSelect = async (description) => {
    setValue(description, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address: description });
      setEditData((preValues) => ({
        ...preValues,
        address: results[0].formatted_address,
        post_code: results[0].address_components[5].long_name,
        city: results[0].address_components[1].long_name,
        county: results[0].address_components[4].long_name,
      }));
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const url = "/account/api/v1/service-user/update/profile/";
      const data = {
        post_code: editData.post_code,
        phone: editData.phone,
        city: editData.city,
        county: editData.county,
        address: editData.address,
      };

      const response = await axiosInstance.post(url, data);
      if (response) {
        // Show success toast with promise
        await toast.promise(
          // Promise that resolves after handleProfileData
          new Promise((resolve) => {
            handleProfileData();
            setTimeout(resolve, 2000); // Wait for 2 seconds after profile data update
          }),
          {
            loading: "Updating profile...",
            success: "Profile updated successfully!",
            error: "Error updating profile",
          },
          {
            success: {
              duration: 3000,
              icon: "🎉",
            },
            error: {
              duration: 3000,
              icon: "❌",
            },
            style: {
              background: "#FFE86E",
              color: "#012332",
            },
          }
        );

        // Close modal after toast is shown
        setTimeout(() => {
          setOpenEditProfile(false);
        }, 3000);
      }
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full space-y-5 relative" onSubmit={handleSubmit}>
      {/*  <p
        ref={errRef}
        className={
          errMsg
            ? "text-xs bg-red-50  p-3 rounded-md text-red-500"
            : "absolute left-[-9999px]"
        }
      >
        {errMsg}
      </p> */}

      <div>
        <input
          className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
          placeholder="Address"
          type="text"
          name="address"
          value={editData.address}
          onChange={(e) => {
            setValue(e.target.value);
            handleChange(e);
          }}
          ref={firstNameRef}
          autoComplete="off"
          required
        />

        {status === "OK" && (
          <ul className="space-y-3 text-sm bg-white absolute top-16 z-50   w-full">
            {data.map(({ place_id, description }) => (
              <li
                className="cursor-pointer p-2 hover:bg-primary/20 rounded-md"
                key={place_id}
                onClick={() => handleSelect(description)}
              >
                {description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Post Code"
        type="text"
        name="post_code"
        value={editData.post_code}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="City"
        type="text"
        name="city"
        value={editData.city}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="County"
        type="text"
        name="county"
        value={editData.county}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Phone Number"
        type="text"
        name="phone"
        value={editData.phone}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <button type="submit" className={`btn-primary`}>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Save Changes"
          )}
        </div>
      </button>
    </form>
  );
};

export default EditProfileForm;
