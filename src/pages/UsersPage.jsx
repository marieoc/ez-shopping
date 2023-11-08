import React, { useState } from "react";
import { Box, Input, Flex, Button, Heading, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
function UsersPage() {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(
    useSelector((state) => state.usersReducer.firstname)
  );
  const [lastName, setLastName] = useState(
    useSelector((state) => state.usersReducer.lastname)
  );
  const [email, setEmail] = useState(
    useSelector((state) => state.usersReducer.email)
  );

  const userName = useSelector((state) => state.usersReducer.firstname);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "CHANGE_USER_DATA",
      payload: { firstname: firstName, lastname: lastName, email: email },
    });
  };
  return (
    <Box w={[300, 400, 500]} mt={5} mx="auto">
      <Box my="10">
        <Heading as="h2">Hi {userName}!</Heading>
        <Text fontSize="3xl">Customize your profile here!</Text>
      </Box>
      <form action="" onSubmit={submitHandler}>
        <Flex alignItems="center" gap="3" flex="1">
          <label style={{ width: "27%" }} htmlFor="">
            {" "}
            Firstname
          </label>
          <Input
            size="sm"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Flex>
        <Flex mt="4" alignItems="center" gap="3" flex="1">
          <label style={{ width: "27%" }} htmlFor="">
            {" "}
            Lastname
          </label>
          <Input
            size="sm"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Flex>
        <Flex mt="4" alignItems="center" gap="3">
          <label style={{ width: "27%" }} htmlFor="">
            {" "}
            Email
          </label>
          <Input
            type="email"
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Button
          type="submit"
          colorScheme="yellow"
          color="black"
          size="lg"
          mt="5"
          mx="auto"
        >
          Save
        </Button>
      </form>
    </Box>
  );
}

export default UsersPage;
