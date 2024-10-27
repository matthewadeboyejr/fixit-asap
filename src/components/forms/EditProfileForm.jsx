import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link } from "react-router-dom";

const EditProfileForm = () => {
  const errRef = useRef();
  const firstNameRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    post_code: "",
    county: "",
    city: "",
  });

  useEffect(() => firstNameRef.current.focus(), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {};

  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit}>
      <p
        ref={errRef}
        className={
          errMsg
            ? "text-xs bg-red-50  p-3 rounded-md text-red-500"
            : "absolute left-[-9999px]"
        }
      >
        {errMsg}
      </p>

      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="First name"
        type="text"
        name="first_name"
        value={registerData.first_name}
        onChange={handleChange}
        ref={firstNameRef}
        autoComplete="off"
        required
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Last name"
        type="text"
        name="last_name"
        value={registerData.last_name}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Email"
        type="email"
        name="email"
        value={registerData.email}
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <button className={`btn-primary`}>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Sign up"
          )}
        </div>
      </button>
    </form>
  );
};

export default EditProfileForm;
