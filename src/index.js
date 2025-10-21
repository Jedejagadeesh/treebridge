// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import "./App.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
