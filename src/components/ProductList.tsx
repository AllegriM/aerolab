import { List, Stack } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useProducts();
  return (
    <Stack justify="center" align="center">
      <List
        display="grid"
        gridTemplateColumns="repeat( auto-fit, minmax(280px, 1fr) )"
        gap={6}
        maxW={1200}
        width={"100%"}
      >
        {products.map((product) => {
          return <ProductCard key={product._id} productInfo={product} />;
        })}
      </List>
    </Stack>
  );
}

export default ProductList;
