import { Flex, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cart = useSelector((state) => state.itemReducer.cart);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <Flex
        padding={2}
        bg={"gray.400"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to="/">EZ Shopping</Link>
        <Flex gap={4} alignItems="center">
          <Link to="/users">Alan Turing 😀 </Link>
          <Link to="/cart">🛒 {cart?.length} items</Link>
          <IconButton
            variant="solid"
            aria-label="toggle theme"
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          />
        </Flex>
      </Flex>
    </nav>
  );
}

export default NavBar;
