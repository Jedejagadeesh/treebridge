import React from "react";
import { createRoot } from "react-dom/client";
import Jede from "./hlo.jsx"; // import default export
import "./App.css"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Jede/>);
