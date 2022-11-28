import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2000,
        style: {
          display: "block",
          textAlign: "center",
          padding: "5px",
        },
      }}
    />
    <App />
  </React.StrictMode>
);
