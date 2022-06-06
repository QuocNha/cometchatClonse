import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CometChat } from "@cometchat-pro/chat";
import { APP_ID, APP_REGION } from "./constants/constants";
import { AuthProvider } from "./context/authContext";

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(APP_REGION)
  .build();
CometChat.init(APP_ID, appSetting).then(
  () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </React.StrictMode>
    );
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and   take appropriate action.
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
