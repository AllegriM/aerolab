import { Center, CircularProgress, List, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCoinsContext } from "../context/CoinsContext";
import useProducts from "../hooks/useProducts";
import { CoinsContextProps } from "../types";
import Dashboard from "./Dashboard";
import ProductCard from "./ProductCard";
import { FilterByCategory, FilterByPrice } from "./types";

function ProductList() {
  const { products, status } = useProducts();
  const { spendCoinsToRedeem } = useCoinsContext() as CoinsContextProps;
  const [page, setPage] = useState<number>(1);
  const MAX_PRODUCTS_PER_PAGE = 16;
  const [category, setCategory] = useState<FilterByCategory>(
    FilterByCategory.All
  );
  const [filter, setFilter] = useState<FilterByPrice>(
    FilterByPrice.HighestPrice
  );

  const filteredCategoryProducts = React.useMemo(() => {
    switch (category) {
      case "All": {
        return products;
      }
      case "Audio":
        return products.filter((product) => product.category === "Audio");
      case "Cameras":
        return products.filter((product) => product.category === "Cameras");
      case "Laptops":
        return products.filter((product) => product.category === "Laptops");
      case "Tablets & E-readers":
        return products.filter(
          (product) => product.category === "Tablets & E-readers"
        );
      case "Phone Accessories":
        return products.filter(
          (product) => product.category === "Phone Accessories"
        );
      case "Phones":
        return products.filter((product) => product.category === "Phones");
      case "PC Accesories":
        return products.filter(
          (product) => product.category === "PC Accesories"
        );
      case "Gaming":
        return products.filter((product) => product.category === "Gaming");
      case "Smart Home":
        return products.filter((product) => product.category === "Smart Home");
      case "Monitors & TV":
        return products.filter(
          (product) => product.category === "Monitors & TV"
        );
      case "Drones":
        return products.filter((product) => product.category === "Drones");
      default:
        return products;
    }
  }, [products, category]);
  React.useMemo(() => {
    switch (filter) {
      case "Lowest Price":
        return filteredCategoryProducts?.sort((a, b) => a.cost - b.cost);
      case "Highest Price":
        return filteredCategoryProducts?.sort((a, b) => b.cost - a.cost);
      default:
        return products;
    }
  }, [products, filter]);

  return (
    <Stack justify="center" align="center">
      {status === "pending" ? (
        <Center padding={12}>
          <CircularProgress isIndeterminate color="lightblue" />
        </Center>
      ) : (
        <>
          <Dashboard
            active={filter}
            onChange={setFilter}
            onChangeCategory={setCategory}
            productsAmount={filteredCategoryProducts.length}
            page={page}
            setPage={setPage}
          />
          <List
            display="grid"
            gridTemplateColumns="repeat( auto-fit, minmax(280px, 1fr) )"
            gap={6}
            maxW={1200}
            width={"100%"}
          >
            {filteredCategoryProducts
              ?.slice(
                (page - 1) * MAX_PRODUCTS_PER_PAGE,
                (page - 1) * MAX_PRODUCTS_PER_PAGE + MAX_PRODUCTS_PER_PAGE
              )
              .map((product) => {
                return (
                  <ProductCard
                    key={product._id}
                    productInfo={product}
                    redeemProduct={spendCoinsToRedeem}
                  />
                );
              })}
          </List>
          <Text
            w={"100%"}
            py={4}
            fontSize={18}
            fontWeight={600}
            color={"gray.500"}
            textAlign={"center"}
          >
            {filteredCategoryProducts?.length} of{" "}
            {filteredCategoryProducts?.length} products
          </Text>
        </>
      )}
    </Stack>
  );
}

export default ProductList;
