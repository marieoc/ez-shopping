import React from "react";
import { Flex, Box, Image, Text, Input, Button } from "@chakra-ui/react";

const ItemListView = ({ items, handleSubmit }) => {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"stretch"}>
      {items?.map((item) => {
        return (
          <Flex width={"100%"} m="2rem" p="1rem" maxW={"600px"} key={item.id}>
            <Box w={"50%"} flexBasis={"30%"}>
              <Image w={"100%"} src={item.image} alt={item.description} />
            </Box>
            <Flex
              flexBasis={"65%"}
              direction={"column"}
              p="1rem"
              gap="5"
            >
              <Text fontSize={"lg"} fontWeight={"700"}>
                {item.title} <span>{item.category}</span>
              </Text>
              <p>{item.description}</p>
              <Text fontSize={"xl"} fontWeight={"700"}>
                &#36;{item.price}
              </Text>
              <div>
                <form
                  action=""
                  method=""
                  onSubmit={(e) => handleSubmit(e, item)}
                >
                  <label htmlFor="qty">
                    Quantity:
                    <Input name="qty" type={"number"} />
                  </label>
                  <Button colorScheme="yellow" type={"submit"}>
                    Add to basket
                  </Button>
                </form>
              </div>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default ItemListView;
