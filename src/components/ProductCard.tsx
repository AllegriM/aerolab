import { Image, Text, ListItem, Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Product } from "../types";
import BuyBlue from "./Icons/BuyBlue";
import BuyWhite from "./Icons/BuyWhite";

function ProductCard({ productInfo }: { productInfo: Product }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ListItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={productInfo._id}
      pos={"relative"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      minH={"310px"}
      p={2}
      cursor={"pointer"}
    >
      {isHovered ? <BuyBlue /> : <BuyWhite />}
      <Image
        src={productInfo.img.hdUrl}
        alt={productInfo.name}
        py={2}
        m={"0 auto"}
        borderBottom={"2px solid lightgray"}
      />
      <Stack spacing={0} p={3}>
        <Text color={"gray.400"}>{productInfo.category}</Text>
        <Heading as="h5" size="sm" fontWeight={"medium"}>
          {productInfo.name}
        </Heading>
      </Stack>
    </ListItem>
  );
}

export default ProductCard;
