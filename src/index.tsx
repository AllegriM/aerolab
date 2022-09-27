import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import CoinsContextProvider from "./context/CoinsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <CoinsContextProvider>
        <App />
      </CoinsContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
