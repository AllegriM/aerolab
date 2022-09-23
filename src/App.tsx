import { Stack } from "@chakra-ui/react";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Stack className="App">
      <NavBar />
      <Banner />
    </Stack>
  );
}

export default App;
