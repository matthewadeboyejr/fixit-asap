import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthenticateContext from "../hooks/useAuthenticateContext";
import toast from "react-hot-toast";
import axiosInstance, { baseUrl } from "../api/axios";

const LoginContext = createContext({});
export default LoginContext;

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  //const location = useLocation();
  const { login } = useAuthenticateContext();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [resetPassData, setResetPassData] = useState({
    email: "",
    otp: "",
    new_password: "",
  });
  const [resetState, setResetState] = useState({
    data: "",
    errMsg: "",
    confirmErrMsg: "",
    sendingOtp: false,
    confirmingOtp: false,
    otpSent: false,
    passChange: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setResetPassData((values) => ({ ...values, [name]: value }));
  };

  const updateResetState = (value) => {
    setResetState((prev) => ({ ...prev, ...value }));
  };

  const updateResetData = (value) => {
    setResetPassData((prev) => ({ ...prev, ...value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${baseUrl}/account/api/v1/login/?login_type=user`;
    const data = {
      username: loginData.email.toLowerCase(),
      password: loginData.password,
    };

    try {
      setIsLoading(true);

      await toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            const response = await axios.post(url, data);
            const token = response?.data?.data?.token;
            const userID = response?.data?.data?.user_id;

            if (token && userID) {
              localStorage.setItem("accessToken", token);
              localStorage.setItem("userId", userID);
              await login();
              setLoginData({ email: "", password: "" });
              resolve(response);
              navigate("/dashboard");
            } else {
              reject(new Error("Invalid login credentials"));
            }
          } catch (error) {
            let errorMessage = "Login failed";
            if (error.response?.data?.non_field_errors) {
              errorMessage = error.response.data.non_field_errors;
            } else if (error.response?.data?.message) {
              errorMessage = error.response.data.message;
            }
            setErrMsg(errorMessage);
            reject(new Error(errorMessage));
          }
        }),
        {
          loading: "Logging in...",
          success: "Successfully logged in!",
          error: (err) => `${err.message}`,
        },
        {
          success: {
            duration: 2000,
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
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmResetOtp = async (e) => {
    e.preventDefault();

    const url = "/account/password-reset-confirm-otp/";
    const email = resetPassData?.email;
    const otp = resetPassData?.otp;
    const new_password = resetPassData?.new_password;
    const data = { email, otp, new_password };

    try {
      updateResetState({ confirmingOtp: true });
      const response = await axiosInstance.post(url, data);

      if (response?.statusText === "OK" && response?.status === 200) {
        toast.success(
          response?.data?.message || "password changed successfully"
        );

        await new Promise((resolve) => setTimeout(resolve, 100));

        updateResetState({ otpSent: false });
        updateResetData({ email: "", otp: "", new_password: "" });
        navigate("/login");
      } else {
        const errorMessage = response?.data?.message || "Unexpected response.";
        throw new Error(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Request failed";
      updateResetState({ confirmErrMsg: errorMessage });
      toast.error(errorMessage);
    } finally {
      updateResetState({ confirmingOtp: false });
    }
  };

  const handleRestOtp = async (e) => {
    e.preventDefault();

    const url = "/account/password-reset-otp/";
    const email = resetPassData?.email;
    const data = { email };

    try {
      updateResetState({ sendingOtp: true });
      const response = await axiosInstance.post(url, data);

      if (response?.statusText === "OK" && response?.status === 200) {
        toast.success(response?.data?.message || "Otp sent successfully");

        await new Promise((resolve) => setTimeout(resolve, 100));

        updateResetState({ data: response.data });
        updateResetState({ otpSent: true });
      } else {
        const errorMessage = response?.data?.message || "Unexpected response.";
        throw new Error(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Request failed";
      updateResetState({ errMsg: errorMessage });
      toast.error(errorMessage);
    } finally {
      updateResetState({ sendingOtp: false });
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
        updateResetState,
        handleResetChange,
        resetState,
        resetPassData,
        updateResetData,
        handleConfirmResetOtp,
        handleRestOtp,
        setErrMsg,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
