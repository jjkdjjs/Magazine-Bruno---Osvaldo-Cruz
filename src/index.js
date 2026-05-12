import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import { CarrinhoProvider } from "./Context/CarrinhoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CarrinhoProvider>
      <AppRoutes />
    </CarrinhoProvider>
  </React.StrictMode>
);