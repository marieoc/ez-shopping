import React from "react";
import { Flex, Tag, Image, Text, Button } from "@chakra-ui/react";

const CartView = ({ cart, removeItem, clearBasket, notify }) => {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="p-2 font-bold space-y-4">
        <h1 className="text-2xl">Hi Alan!</h1>
        <p>There are {cart.length} {cart.length <= 1 ? "item" : "items"} in your basket</p>
      </div>
      <div>
        <Button
          colorScheme="yellow"
          onClick={() => {
            clearBasket();
            notify("Cart is not empty.");
          }}
        >
          Clear basket
        </Button>
      </div>
      <div className="w-full flex-col justify-center items-center space-y-16">
        {cart?.map((cartItem) => {
          return (
            <div
              className="flex flex-col items-center justify-center tablet:flex-row w-full py-2"
              key={cartItem.id}
            >
              <div class="flex items-center justify-center tablet:mr-6">
                <Image
                  w={"100%"}
                  maxW={"200px"}
                  src={cartItem.image}
                  alt={cartItem.description}
                />
              </div>
              <Flex
                flexBasis={"65%"}
                direction={"column"}
                className="item_content__wrapper"
                p="1rem"
                gap="0.5rem"
              >
                <Text fontSize={"lg"} fontWeight={"700"}>
                  {cartItem.title} <Tag>{cartItem.category}</Tag>
                </Text>
                <p>{cartItem.description}</p>
                <Text fontSize={"2xl"} fontWeight={"700"}>
                  &#36;{cartItem.price}
                </Text>
                <Text fontSize={"xl"} fontWeight={"700"}>
                  Quantity: {cartItem.qty}
                </Text>
                <div className="add_to_cart_btn__wrapper">
                  <form
                    action=""
                    method=""
                    onSubmit={(e) => {
                      removeItem(e, cartItem.id);
                      notify("Item successfully removed from cart.");
                    }}
                    className="flex items-center justify-center p-2 tablet:justify-start"
                  >
                    <Button colorScheme="yellow" type="submit">
                      Remove
                    </Button>
                  </form>
                </div>
              </Flex>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartView;
