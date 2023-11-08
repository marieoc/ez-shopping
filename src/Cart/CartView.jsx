import React, { useState } from "react";
import { Flex, Tag, Image, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CartView = ({
  cart,
  removeItem,
  clearBasket,
  notify,
  updateQuantity,
  quantity,
  setQuantity,
  editQuantity,
  setEditQuantity,
}) => {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="p-2 font-bold space-y-4 flex flex-col items-center tablet:items-start">
        <h1 className="text-2xl  ">Hi Alan!</h1>
        <p>
          There are {cart.length} {cart.length <= 1 ? "item" : "items"} in your
          basket
        </p>
      </div>
      <div className=" mx-auto  tablet:mx-0">
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
              <div className="flex items-center justify-center tablet:mr-6">
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
                p="1rem"
                gap="0.5rem"
              >
                <Text fontSize={"lg"} fontWeight={"700"}>
                  {cartItem.title} <Tag>{cartItem.category}</Tag>
                </Text>
                <p className="italic tablet:w-[60%] ">{cartItem.description}</p>
                <Text fontSize={"2xl"} fontWeight={"700"}>
                  &#36;{cartItem.price}
                </Text>
                <div>
                  <form
                    action=""
                    method=""
                    onSubmit={(e) => updateQuantity(e, cartItem.id)}
                  >
                    <label className="font-bold" htmlFor={`qty-${cartItem.id}`}>
                      Quantity:{" "}
                    </label>
                    <input
                      id={`qty-${cartItem.id}`}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                        setEditQuantity({ id: cartItem.id, status: true });
                      }}
                      value={
                        editQuantity.status && editQuantity.id === cartItem.id
                          ? quantity
                          : cartItem.qty
                      }
                      className="w-full border rounded p-1 border-gray max-w-[50px]"
                      name="qty"
                      type={"number"}
                      required
                      min={1}
                      max={100}
                    />
                    <Button
                      size={"sm"}
                      colorScheme="yellow"
                      ml={2}
                      type="submit"
                    >
                      Modifier
                    </Button>
                  </form>
                </div>
                <div>
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
