import {
  Flex,
  useColorMode,
  IconButton,
  Text,
  Heading,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cart = useSelector((state) => state.itemReducer.cart);
  const { colorMode, toggleColorMode } = useColorMode();
  const firstName = useSelector((state) => state.usersReducer.firstname);
  const lastName = useSelector((state) => state.usersReducer.lastname);
  return (
    <nav>
      <Flex
        padding={[1, 1, 5]}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to="/">
          {" "}
          <Heading color="yellow.400"> EZ Shopping</Heading>
        </Link>
        <Flex gap={[0, 3, 10]} alignItems="center">
          <Link to="/users">
            {" "}
            <Text fontSize="xl" fontWeight="bold">
              {" "}
              {firstName} {lastName} 👨
            </Text>
          </Link>
          <Link to="/cart">
            {" "}
            <Text fontSize="xl" fontWeight="bold">
              🛒 <span style={{ color: "##ECC94B" }}>{cart?.length}</span> items
            </Text>
          </Link>
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
