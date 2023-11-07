import { Box, Heading, Text, Center } from "@chakra-ui/react";
import React from "react";

function ErrorPage() {
  return (
    <Box h={"100vh"}>
      <Center mt={10}>
        <Heading
          color="yellow.400"
          as={"h1"}
          fontSize={"90px"}
          size={"4xl"}
          position="center"
        >
          Error 404
        </Heading>
      </Center>
      <Center mt={2}>
        <Text as={"b"} color="yellow.400" fontSize={"40px"}>
          Page not found !
        </Text>
      </Center>
    </Box>
  );
}

export default ErrorPage;
