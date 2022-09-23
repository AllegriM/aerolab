import { Stack } from "@chakra-ui/react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <Stack>
      <NavBar />
      <Banner />
      <ProductList />
    </Stack>
  );
}

export default Home;
