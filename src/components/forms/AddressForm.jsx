import { useRef, useEffect } from "react";
import { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "../../api/axios";

const AddressForm = () => {
  const navigate = useNavigate();
  const postalRef = useRef();

  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => postalRef.current.focus(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    //const token = localStorage.getItem("token");
    const url = "/account/api/v1/service-user/profile/";
    const data = { post_code: postal, address: address };
    //const config = { Authorization: `Token ${access}` };

    try {
      const response = await axiosInstance.post(url, data);
      console.log(response);
      navigate("/dashboard");

      setPostal("");
      setAddress("");
    } catch (error) {
      setErrMsg(error.response?.data?.message);
      isLoading(false);
    }
  };

  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit}>
      <p
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
        placeholder="Post Code"
        type="text"
        name="post_code"
        value={postal}
        onChange={(e) => {
          setPostal(e.target.value);
        }}
        ref={postalRef}
        required
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Address"
        type="address"
        name="address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        required
      />

      <button disabled={isLoading ? true : false} className={`btn-primary `}>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CgSpinnerTwo className="animate-spin text-2xl" />
          ) : (
            "Save"
          )}
        </div>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Have an account?
        <Link to={"/login"} className="text-secondary hover:underline t">
          Sign<span className="italic  ">in</span>
        </Link>
      </div>
    </form>
  );
};

export default AddressForm;
