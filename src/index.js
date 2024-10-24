import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthenticateProvider } from "./context/AuthenticateContext";

// Viewport height fix function
const setAppHeight = () => {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
};

// Viewport height fix component
const ViewportFix = ({ children }) => {
  useEffect(() => {
    setAppHeight();
    window.addEventListener("resize", setAppHeight);

    return () => {
      window.removeEventListener("resize", setAppHeight);
    };
  }, []);

  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ViewportFix>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="975998885562-n2uri8u9clc914svec93ufjrvnio9giq.apps.googleusercontent.com">
          <AuthenticateProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthenticateProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ViewportFix>
  </React.StrictMode>
);
