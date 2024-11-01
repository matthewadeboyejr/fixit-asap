import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthenticateContext from "../hooks/useAuthenticateContext";
import toast from "react-hot-toast";

const LoginContext = createContext({});
export default LoginContext;

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  //const location = useLocation();
  const { login } = useAuthenticateContext();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  /*  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://artisanapi-48408c1be722.herokuapp.com/account/api/v1/login/?login_type=user";
    const data = {
      username: loginData.email.toLowerCase(),
      password: loginData.password,
    };

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

      navigate("/dashboard");
      setIsLoading(false);
      setLoginData({ email: "", password: "" });
    } catch (error) {
      if (error.response?.data?.non_field_errors) {
        setErrMsg(error.response?.data?.non_field_errors);
      } else {
        setErrMsg(error?.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
    }
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://artisanapi-48408c1be722.herokuapp.com/account/api/v1/login/?login_type=user";
    const data = {
      username: loginData.email.toLowerCase(),
      password: loginData.password,
    };

    try {
      setIsLoading(true);

      await toast.promise(
        // Wrap all login operations in a promise
        new Promise(async (resolve, reject) => {
          try {
            const response = await axios.post(url, data);
            const token = response?.data?.data?.token;
            const userID = response?.data?.data?.user_id;

            if (token && userID) {
              localStorage.setItem("accessToken", token);
              localStorage.setItem("userId", userID);
              await login(); // Wait for login function to complete
              setLoginData({ email: "", password: "" });
              resolve(response); // Resolve the promise on success
              navigate("/dashboard"); // Navigate after successful login
            } else {
              reject(new Error("Invalid login credentials")); // Reject if token or userID is missing
            }
          } catch (error) {
            let errorMessage = "Login failed";
            if (error.response?.data?.non_field_errors) {
              errorMessage = error.response.data.non_field_errors;
            } else if (error.response?.data?.message) {
              errorMessage = error.response.data.message;
            }
            setErrMsg(errorMessage);
            reject(new Error(errorMessage)); // Reject with error message
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
  return (
    <LoginContext.Provider
      value={{
        errMsg,
        loginData,
        handleChange,
        isLoading,
        handleSubmit,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
