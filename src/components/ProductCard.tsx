import { Image, Text, ListItem } from "@chakra-ui/react";
import { Product } from "../types";

function ProductCard({ productInfo }: { productInfo: Product }) {
  return (
    <ListItem key={productInfo._id} boxShadow="md" minH={"360px"}>
      <Image
        src={productInfo.img.hdUrl}
        maxW={"300px"}
        alt={productInfo.name}
      />
      <Text>{productInfo.category}</Text>
      <Text>{productInfo.name}</Text>
    </ListItem>
  );
}

export default ProductCard;
