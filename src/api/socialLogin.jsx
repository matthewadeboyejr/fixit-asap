import axios from "./axios";
import { useGoogleLogin } from "@react-oauth/google";

export const GoogleLogin = () => {
  const handleGoogleLogin = async (tokenResponse) => {
    const url = "/account/api/v1/google/login/?login_type=user";
    const data = { access_token: tokenResponse.code };
    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLogin(tokenResponse),
    flow: "auth-code",
  });
};
