import {
  Image,
  Text,
  ListItem,
  Stack,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { requestRedeemProducts } from "../services/postRedeemProduct";
import { CoinsContextProps, Product, UserData } from "../types";
import BuyBlue from "./Icons/BuyBlue";
import BuyWhite from "./Icons/BuyWhite";
import MyCoins from "./MyCoins";

interface ProductCardProp {
  productInfo: Product;
  redeemProduct: CoinsContextProps["spendCoinsToRedeem"];
  userCoins: UserData["points"];
}
function ProductCard({
  productInfo,
  redeemProduct,
  userCoins,
}: ProductCardProp) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const toast = useToast();
  const buyProduct = () => {
    toast({
      title: "Item purchased.",
      description: `Purchased ${productInfo.name} with ${productInfo.cost} coins.`,
      position: "bottom-left",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    redeemProduct(productInfo.cost);
    requestRedeemProducts(productInfo._id);
  };

  return (
    <ListItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={productInfo._id}
      pos={"relative"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      minH={"310px"}
      maxW={282}
      p={2}
      cursor={"pointer"}
    >
      <Stack
        display={isHovered ? "block" : "none"}
        pos={"absolute"}
        top={0}
        left={0}
        h={"100%"}
        w={"100%"}
        bg={isHovered ? "rgba(48, 216, 250, .80)" : "transparent"}
      >
        <Stack
          h={"100%"}
          direction={"column"}
          justify={"center"}
          align={"center"}
        >
          <MyCoins coins={productInfo.cost} />
          <Button
            onClick={buyProduct}
            disabled={productInfo.cost > userCoins ? true : false}
            w={"70%"}
            borderRadius={"50px"}
          >
            Redeem
          </Button>
        </Stack>
      </Stack>
      {isHovered ? <BuyWhite /> : <BuyBlue />}
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
