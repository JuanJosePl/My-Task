import React from "react";
import ReactDOM from "react-dom/client";
import { $ } from "./utils/dom";
import "../src/css/main.css";
import App from './view/App';

ReactDOM.createRoot($("#root")).render(<App />);
