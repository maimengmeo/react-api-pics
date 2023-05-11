import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchImages from "./api";

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<App />);
