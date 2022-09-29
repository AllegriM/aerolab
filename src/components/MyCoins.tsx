import { Stack, Text } from "@chakra-ui/react";
import Coin from "./Icons/Coin";

function MyCoins({ coins }: { coins: number | undefined }) {
  return (
    <Stack
      direction={"row"}
      align="center"
      justify={"center"}
      px={2}
      border="1px solid lightgray"
      bg={"gray.200"}
      maxW={"120px"}
      borderRadius={20}
      zIndex={2}
    >
      <Coin />
      <Text fontWeight={700}>{coins}</Text>
    </Stack>
  );
}

export default MyCoins;
