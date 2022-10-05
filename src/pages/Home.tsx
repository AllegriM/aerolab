import { Stack } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <Stack>
      <NavBar />
      <Banner />
      <ProductList />
      <Footer />
    </Stack>
  );
}

export default Home;
