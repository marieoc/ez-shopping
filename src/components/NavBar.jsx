import {
  Flex,
  useColorMode,
  IconButton,
  Text,
  Heading,
  Box,
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
        borderBottom={"2px"}
        borderBottomColor={"orange"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to="/">
          {" "}
          <Heading color="yellow.400">
            {" "}
            <span className="  text-[1.5rem] tablet:text-[2rem] ">
              EZ Shopping{" "}
            </span>
          </Heading>
        </Link>
        <Flex gap={[3, 3, 10]} alignItems="center">
          <Link to="/users">
            {" "}
            <Text fontSize="xl" fontWeight="bold">
              {" "}
              {firstName} {lastName}{" "}
              <span className=" hidden tablet:inline-block"> 👨</span>
            </Text>
          </Link>
          <Link to="/cart">
            {" "}
            <Text fontSize="xl" className=" relative" fontWeight="bold">
              🛒{" "}
              <span className="hidden tablet:inline-block ">
                {cart?.length} items{" "}
              </span>
              <Box
                bg="yellow.400"
                className="  tablet:hidden text-center rounded-full px-2  text-sm absolute -top-1 left-3 "
              >
                <span className=" text-black ">{cart?.length}</span>
              </Box>
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
