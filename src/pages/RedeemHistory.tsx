import {
  Image,
  HStack,
  VStack,
  Heading,
  Text,
  Center,
  CircularProgress,
} from "@chakra-ui/react";
import moment from "moment";
import Coin from "../components/Icons/Coin";
import NavBar from "../components/NavBar";
import useUserData from "../hooks/useUserData";
import { Product } from "../types";

function RedeemHistory() {
  const { userData, loading } = useUserData();
  // get redeemHistory from data in recently order
  const redeemHistory = userData?.redeemHistory?.sort(
    (a: Product, b: Product) => {
      return (
        new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
      );
    }
  );

  if (loading || !userData) {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="lightblue" />
      </Center>
    );
  }

  return (
    <>
      <NavBar />
      <VStack>
        {redeemHistory?.map((item: Product, index) => {
          return (
            <HStack
              key={index}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              maxW={700}
              w={"100%"}
              p={4}
              justify={"space-between"}
            >
              <HStack flexGrow={1}>
                <Image src={item.img.hdUrl} maxW={150} />
                <VStack align={"baseline"} spacing={0}>
                  <Heading as="h4" size="md">
                    {item.name}
                  </Heading>
                  <Text color={"gray.500"} fontStyle={"italic"}>
                    {moment(`${new Date(item.createDate)}`).fromNow()}
                  </Text>
                </VStack>
              </HStack>
              <HStack
                maxW={88}
                w={"100%"}
                justify={"space-between"}
                spacing={0}
              >
                <Coin />
                <Heading as="h4" size="md" m={5}>
                  {item.cost}
                </Heading>
              </HStack>
            </HStack>
          );
        })}
      </VStack>
    </>
  );
}

export default RedeemHistory;
