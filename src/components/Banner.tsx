import { Stack, Image, Text } from "@chakra-ui/react";
import BannerImage from "../assets/header-x2.png";

function Banner() {
  return (
    <Stack style={{ marginTop: 0 }}>
      <Image src={BannerImage} />
      <Text
        // disable as element
        fontSize={["2rem", "3rem", "5rem", "6rem"]}
        pos={"absolute"}
        bottom={["5", "5", "10"]}
        left={["5", "10", "20"]}
        color={"white"}
        fontWeight={"600"}
      >
        Electronics
      </Text>
    </Stack>
  );
}

export default Banner;
