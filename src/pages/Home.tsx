import { Stack } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <Stack>
      <NavBar />
      <Banner />
      <Dashboard />
      <ProductList />
    </Stack>
  );
}

export default Home;
