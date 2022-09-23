import { List, Stack } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useProducts();
  return (
    <Stack justify="center" align="center">
      <List
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fill,300px)"}
        gap={2}
        maxW={1000}
      >
        {products.map((product) => {
          return <ProductCard key={product._id} productInfo={product} />;
        })}
      </List>
    </Stack>
  );
}

export default ProductList;
