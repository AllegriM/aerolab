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

function AddCoin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedAmountCoins, setSelectedAmountCoins] = useState<boolean>(true);

  const handleAddCoin = () => {
    setSelectedAmountCoins(!selectedAmountCoins);
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
            <Stack mt={4} direction={"row"} justifyContent={"space-between"}>
              <Button variant={"solid"}>1000</Button>
              <Button variant={"solid"}>5000</Button>
              <Button variant={"solid"}>7500</Button>
            </Stack>
          </ModalBody>

          <ModalFooter pt={2} px={6}>
            <Button colorScheme="blue" w={"100%"}>
              Add Coins
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCoin;
