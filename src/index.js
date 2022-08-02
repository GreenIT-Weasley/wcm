import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = "https://localhost:3000";
// axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
