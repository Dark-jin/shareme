import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
window.Kakao.init("bb4d58887f192f9464e3d710ed6ba4cd");
window.Kakao.isInitialized();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
