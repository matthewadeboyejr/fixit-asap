import { useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import axios from "axios";
import useAuthenticateContext from "../hooks/useAuthenticateContext";

const LoginContext = createContext({});
export default LoginContext;

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuthenticateContext();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [profileIsLoading, setProfileIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [errorProfileMsg, setErrorProfileMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  const handleProfileData = async () => {
    setProfileIsLoading(true);
    const url = "/account/api/v1/service-user/profile/";

    try {
      const response = await axiosInstance.get(url);
      setProfileData(response?.data);

      setErrorProfileMsg(null);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setErrorProfileMsg(error.message || "an error occurred");
    } finally {
      setProfileIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://artisanapi-48408c1be722.herokuapp.com/account/api/v1/login/?login_type=user";
    const data = { username: loginData.email, password: loginData.password };

    try {
      setIsLoading(true);
      const response = await axios.post(url, data);
      const token = response?.data?.data?.token;
      const userID = response?.data?.data?.user_id;
      if (token) {
        localStorage.setItem("accessToken", token);
      }
      if (userID) {
        localStorage.setItem("userId", userID);
      }
      login();
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
      handleProfileData();
      setIsLoading(false);
      setLoginData({ email: "", password: "" });
    } catch (error) {
      if (error.response?.data?.non_field_errors) {
        setErrMsg(error.response?.data?.non_field_errors);
      } else if (error.message) {
        setErrMsg(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        errMsg,
        loginData,
        handleChange,
        isLoading,
        handleSubmit,
        handleProfileData,
        profileData,
        errorProfileMsg,
        profileIsLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
