import { HStack, Text } from "@chakra-ui/react";
import Chakra from "./Icons/Chakra";
import Github from "./Icons/Github";
import LinkedIn from "./Icons/LinkedIn";
import React from "./Icons/React";

function Footer() {
  return (
    <HStack justify={"center"}>
      <HStack
        p={2}
        borderTop={"1px solid lightgray"}
        justify={"space-between"}
        align={"center"}
        maxW={"1200px"}
        w={"100%"}
      >
        <HStack>
          <Github />
          <LinkedIn />
        </HStack>
        <HStack spacing={1}>
          <Text>Built with</Text>
          <React />
          <Text pr={1}>&</Text>
          <Chakra />
        </HStack>
      </HStack>
    </HStack>
  );
}

export default Footer;
