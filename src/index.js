import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Registration from "./components/registration/Regist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
