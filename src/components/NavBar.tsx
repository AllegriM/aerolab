import { Stack, Image } from "@chakra-ui/react";
import AddCoin from "./Icons/AddCoin";
import Logo from "./Icons/Logo";
import MyCoins from "./MyCoins";
import ProfileImage from "../assets/profile.jpg";

function NavBar() {
  return (
    <Stack
      padding=".5rem 2rem"
      direction="row"
      align={"center"}
      justifyContent="space-between"
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      zIndex={2}
    >
      <Logo />
      <MyCoins coins={400} />
      <Stack direction={"row"} align={"center"} gap={2}>
        <AddCoin />
        <Image
          src={ProfileImage}
          alt="profileImage"
          borderRadius={"50%"}
          w={10}
        />
      </Stack>
    </Stack>
  );
}

export default NavBar;
