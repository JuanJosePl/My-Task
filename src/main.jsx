import React from "react";
import ReactDOM from "react-dom/client";
import { $ } from "./utils/dom";
import "../src/css/main.css";
import App from "./view/App";
import { ThemeContextProvider } from "./context/ThemeContext";

ReactDOM.createRoot($("#root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
