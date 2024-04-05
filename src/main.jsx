import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { HashRouter } from "react-router-dom";
import Modals from "./components/Modals.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Modals />
    </HashRouter>
  </React.StrictMode>
);
