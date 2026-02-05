import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import "./css/Article.css";
import "./css/Header.css";
import "./css/Nav.css";
import "./css/Settings.css";
import "./css/TechNav.css";
import "./css/ScrollBar.css";
import "./css/CustomHR.css";
import "react-photo-view/dist/react-photo-view.css";
import "./css/Loader.css";
import "./css/InfoCard.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  </>,
);
