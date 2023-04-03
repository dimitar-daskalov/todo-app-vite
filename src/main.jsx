import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Todos";
import ToastProvider from "./context/toastProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
