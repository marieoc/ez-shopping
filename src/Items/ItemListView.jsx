import React from "react";
import { Flex, Box, Image, Text, Button, Tag, HStack } from "@chakra-ui/react";

const ItemListView = ({ items, handleSubmit, notify }) => {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"stretch"}>
      {items?.map((item) => {
        return (
          <div
            className="flex flex-col items-center justify-center tablet:flex-row tablet:items-start my-8 p-2 w-full max-w-[600px]"
            key={item.id}
          >
            <Box w={"50%"} flexBasis={"30%"}>
              <Image w={"100%"} src={item.image} alt={item.description} />
            </Box>
            <Flex flexBasis={"65%"} direction={"column"} p="1rem" gap="5">
              <Text fontSize={"lg"} fontWeight={"700"}>
                {item.title} <Tag>{item.category}</Tag>
              </Text>
              <Text noOfLines={[2, 2, 3]}>{item.description}</Text>
              <Text fontSize={"xl"} fontWeight={"700"}>
                &#36;{item.price}
              </Text>
              <div>
                <form
                  action=""
                  method=""
                  onSubmit={(e) => {
                    handleSubmit(e, item);
                    notify();
                  }}
                >
                  <HStack>
                    <label htmlFor="qty">Quantity:</label>
                    <input
                      className="w-full border rounded p-1 border-gray max-w-[50px]"
                      name="qty"
                      type={"number"}
                      placeholder="0"
                      required
                      min={1}
                      max={100}
                    />
                  </HStack>

                  <div className="flex items-center justify-center tablet:justify-start p-1">
                    <Button mt={4} colorScheme="yellow" type={"submit"}>
                      Add to basket
                    </Button>
                  </div>
                </form>
              </div>
            </Flex>
          </div>
        );
      })}
    </Flex>
  );
};

export default ItemListView;
