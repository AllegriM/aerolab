import { Center, CircularProgress, List, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCoinsContext } from "../context/CoinsContext";
import useProducts from "../hooks/useProducts";
import Dashboard from "./Dashboard";
import ProductCard from "./ProductCard";
import { FilterByPrice } from "./types";

function ProductList() {
  const { products, status } = useProducts();
  const data = useCoinsContext();

  // const [category, setCategory] = useState<FilterByCategory>(
  //   FilterByCategory.All
  // );
  const [filter, setFilter] = useState<FilterByPrice>(
    FilterByPrice.LowestPrice
  );
  const filteredPriceProducts = React.useMemo(() => {
    switch (filter) {
      // case "Most Recent":
      //   return products.sort();
      case "Lowest Price":
        return products.sort((a, b) => a.cost - b.cost);
      case "Highest Price":
        return products.sort((a, b) => b.cost - a.cost);
      default:
        return products;
    }
  }, [products, filter]);

  // const filteredCategoryProducts = React.useMemo(() => {
  //   switch (category) {
  //     case "All":
  //       return products;
  //     case "Audio":
  //       return products.filter((product) => product.category === "Audio");
  //     case "Cameras":
  //       return products.filter((product) => product.category === "Cameras");
  //     case "Laptops":
  //       return products.filter((product) => product.category === "Laptops");
  //     case "Tablets & E-Readers":
  //       return products.filter(
  //         (product) => product.category === "TabletsAndEReaders"
  //       );
  //     case "Phone Accessories":
  //       return products.filter(
  //         (product) => product.category === "PhoneAccessories"
  //       );
  //     case "Phones":
  //       return products.filter((product) => product.category === "Phones");
  //     case "PC Accessories":
  //       return products.filter(
  //         (product) => product.category === "PCAccessories"
  //       );
  //     case "Gaming":
  //       return products.filter((product) => product.category === "Gaming");
  //     case "Smart Home":
  //       return products.filter((product) => product.category === "SmartHome");
  //     case "Monitors & TV":
  //       return products.filter(
  //         (product) => product.category === "MonitorsAndTv"
  //       );
  //     case "Drones":
  //       return products.filter((product) => product.category === "Drones");
  //     default:
  //       return products;
  //   }
  // }, [products, category]);

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
            // onChangeCategory={setCategory}
          />
          <List
            display="grid"
            gridTemplateColumns="repeat( auto-fit, minmax(280px, 1fr) )"
            gap={6}
            maxW={1200}
            width={"100%"}
          >
            {filteredPriceProducts.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  productInfo={product}
                  redeemProduct={data?.spendCoinsToRedeem}
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
            16 of 32 products
          </Text>
        </>
      )}
    </Stack>
  );
}

export default ProductList;
