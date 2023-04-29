import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
const root = createRoot(document.getElementById("root"))
root.render(
  <div className="bg-[#181e24] min-h-screen">
    <App />
  </div>
);

