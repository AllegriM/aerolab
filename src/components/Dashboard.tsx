import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface ButtonFilterProps {
  type: string;
  active: boolean;
}

function Dashboard() {
  const [isActive, setIsActive] = useState<ButtonFilterProps>({
    type: "Most Recent",
    active: true,
  });

  const selectFilterOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target.innerHTML);
  };

  return (
    <HStack w={"100%"} justify={"space-between"}>
      <HStack maxW={"1200px"} w={"100%"} m={"0 auto"}>
        <Text pr={5} borderRight={"1px solid lightgray"}>
          16 of 32 products
        </Text>
        <Text>Sort by: </Text>
        <Button borderRadius={"50px"} onClick={selectFilterOption}>
          Most Recent
        </Button>
        <Button borderRadius={"50px"} onClick={selectFilterOption}>
          Lowest Price
        </Button>
        <Button borderRadius={"50px"} onClick={selectFilterOption}>
          Highest Price
        </Button>
      </HStack>
    </HStack>
  );
}

export default Dashboard;
