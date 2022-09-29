import { HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { CoinsRedeemProps } from "../types";
import { COIN_OPTIONS } from "./Icons/AddCoin";

function CoinRedeemOptions({ setCoins, coins }: CoinsRedeemProps) {
  // Make POST to API and get coins
  // requestPoints();

  return (
    <HStack my={4} w={"100%"}>
      <RadioGroup
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        value={coins}
      >
        {COIN_OPTIONS.map((value) => {
          return (
            <Radio
              onChange={(e) => setCoins(Number(e.target.value))}
              key={value}
              value={value}
            >
              {value}
            </Radio>
          );
        })}
      </RadioGroup>
    </HStack>
  );
}

export default CoinRedeemOptions;
