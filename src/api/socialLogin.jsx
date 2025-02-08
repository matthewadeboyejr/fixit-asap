import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import useSignupContext from "../hooks/useSignupContext";
import toast from "react-hot-toast";

export const GoogleSignupButton = ({ action }) => {
  const handleGoogleLogin = async (accessId) => {
    const url = `https://artisanapi-48408c1be722.herokuapp.com/account/api/v1/google/${action}/?login_type=user`;
    const data = { access_token: accessId };
    try {
      const response = await axios.post(url, data);
      console.log(response);
      console.log("Google access token:", accessId);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Request failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className=" w-full flex justify-center">
      <GoogleLogin
        className="w-full"
        onSuccess={(credentialResponse) => {
          console.log("ID Token:", credentialResponse.credential);

          handleGoogleLogin(credentialResponse.credential);
        }}
        onError={(error) => {
          console.log("Google Login Error:", error || "Login Failed");
        }}
        useOneTap
        width={350}
      />
    </div>
  );
};
