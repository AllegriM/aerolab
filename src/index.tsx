import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import CoinsContextProvider from "./context/CoinsContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <CoinsContextProvider>
          <App />
        </CoinsContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
