import { Stack, Text } from "@chakra-ui/react";
import Coin from "./Icons/Coin";

function MyCoins({ coins }: { coins: number | undefined }) {
  return (
    <Stack
      direction={"row"}
      align="center"
      px={2}
      border="1px solid lightgray"
      bg={"blackAlpha.200"}
      borderRadius={20}
    >
      <Coin />
      <Text fontWeight={700}>{coins}</Text>
    </Stack>
  );
}

export default MyCoins;
