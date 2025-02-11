import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import useSignupContext from "../hooks/useSignupContext";
import toast from "react-hot-toast";
import useAuthenticateContext from "../hooks/useAuthenticateContext";
import { useNavigate } from "react-router-dom";
import useLoginContext from "../hooks/useLoginContext";

export const GoogleSignupButton = ({ action }) => {
  const navigate = useNavigate();
  const { login } = useAuthenticateContext();
  const { setErrMsg } = useLoginContext();

  const handleGoogleLogin = async (accessId) => {
    const url = `https://artisanapi-48408c1be722.herokuapp.com/account/api/v1/google/${action}/?login_type=user`;
    const data = { access_token: accessId };
    try {
      const response = await axios.post(url, data);
      const token = response?.data?.data?.token;
      const userID = response?.data?.data?.user_id;

      if (token && userID) {
        localStorage.setItem("accessToken", token);
        localStorage.setItem("userId", userID);
        await login();

        navigate("/dashboard");
      } else {
        toast.error("Invalid login credentials");
      }
    } catch (error) {
      let errorMessage = "Login failed";
      if (error.response?.data?.non_field_errors) {
        errorMessage = error.response.data.non_field_errors;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setErrMsg(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className=" w-full border flex items-center justify-around p-2 rounded-md">
      <div className="text-sm">Continue with Google</div>
      <div>|</div>
      <GoogleLogin
        className="w-full"
        onSuccess={(credentialResponse) => {
          handleGoogleLogin(credentialResponse.credential);
        }}
        onError={(error) => {
          console.log("Google Login Error:", error || "Login Failed");
        }}
        useOneTap
        width={350}
        theme="filled_blue"
        type="icon"
      />
    </div>
  );
};
