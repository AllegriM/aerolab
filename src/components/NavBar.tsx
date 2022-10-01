import { Stack, Image, Text } from "@chakra-ui/react";
import AddCoin from "./Icons/AddCoin";
import Logo from "./Icons/Logo";
import MyCoins from "./MyCoins";
import ProfileImage from "../assets/profile.jpg";
import { useCoinsContext } from "../context/CoinsContext";
import { Link } from "react-router-dom";

function NavBar() {
  const context = useCoinsContext();

  return (
    <Stack
      position={"sticky"}
      top={0}
      padding=".5rem 2rem"
      background={"white"}
      direction="row"
      align={"center"}
      justifyContent="space-between"
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      zIndex={2}
    >
      <Link to="/">
        <Logo />
      </Link>

      <MyCoins coins={context?.userData?.points} />
      <Stack direction={"row"} align={"center"} gap={2}>
        <Link to="/history">
          <Text>My History</Text>
        </Link>
        <AddCoin addCoins={context?.redeemCoins} />
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
