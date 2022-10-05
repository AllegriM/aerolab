import {
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { requestPoints } from "../../services/postRedeemPoints";
import { CoinsContextProps, CoinsRedeemProps } from "../../types";
import CoinRedeemOptions from "../CoinRedeemOptions";

export const COIN_OPTIONS = [1000, 5000, 7500];

type Props = {
  addCoins: CoinsContextProps["redeemCoins"];
};

function AddCoin({ addCoins }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [coinsAmount, setCoinsAmount] = useState<CoinsRedeemProps["coins"]>(
    COIN_OPTIONS[0]
  );

  const redeemCoins = () => {
    console.log(coinsAmount);
    addCoins(coinsAmount);
    requestPoints(coinsAmount);
  };

  return (
    <>
      <Stack direction={"row"}>
        <Button
          onClick={onOpen}
          variant={"solid"}
          bg="white"
          h={8}
          maxW={10}
          p={0}
          border="1px solid lightgray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#94a3b8"
            strokeWidth="2"
            width="28"
            height="28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              stroke="#94A3B8"
              fill="none"
              strokeWidth="2px"
            ></path>
          </svg>
        </Button>
        {/* profile.png image */}
      </Stack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xs"}
        closeOnOverlayClick={false}
      >
        <ModalOverlay bg={"none"} />
        <ModalContent>
          <ModalHeader>Coins</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"}>
              Add coins at your acount, selecting the score below and push Add
              coins button
            </Text>
            <CoinRedeemOptions setCoins={setCoinsAmount} coins={coinsAmount} />
          </ModalBody>

          <ModalFooter pt={2} px={6}>
            <Button onClick={redeemCoins} colorScheme="blue" w={"100%"}>
              Add Coins
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCoin;
