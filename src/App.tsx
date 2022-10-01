import { Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RedeemHistory from "./pages/RedeemHistory";

function App() {
  return (
    <Stack className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<RedeemHistory />} />
      </Routes>
    </Stack>
  );
}

export default App;
