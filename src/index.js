import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthenticateProvider } from "./components/context/AuthenticateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="975998885562-n2uri8u9clc914svec93ufjrvnio9giq.apps.googleusercontent.com">
        <AuthenticateProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthenticateProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
