import React from "react";
import { Box, Input, Flex, Button, Heading, Text } from "@chakra-ui/react";

const UserView = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  userName,
  submitHandler,
}) => {
  return (
    <Box w={[300, 400, 500]} mt={5} mx="auto">
      <Box my="10">
        <Heading as="h2">Hi {userName}!</Heading>
        <Text fontSize="3xl">Customize your profile here!</Text>
      </Box>
      <form action="" onSubmit={submitHandler}>
        <Flex alignItems="center" gap="3" flex="1">
          <label style={{ width: "27%" }} htmlFor="fname">
            {" "}
            Firstname :
          </label>
          <Input
            id="fname"
            size="sm"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Flex>
        <Flex mt="4" alignItems="center" gap="3" flex="1">
          <label style={{ width: "27%" }} htmlFor="lname">
            {" "}
            Lastname :
          </label>
          <Input
            id="lname"
            size="sm"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Flex>
        <Flex mt="4" alignItems="center" gap="3">
          <label style={{ width: "27%" }} htmlFor="email">
            {" "}
            Email :
          </label>
          <Input
            id="email"
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
};

export default UserView;
