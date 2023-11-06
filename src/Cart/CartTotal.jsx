import React from 'react';
import { Flex, Text } from "@chakra-ui/react";

const CartTotal = ({ cart }) => {
  const cartSubTotal = cart.reduce((total, item) => total + (item.price *item.qty), 0);

  return (
    <>
      <Flex w={'100%'} justifyContent={'flex-end'} p="1rem">
        <Text fontSize={'2xl'} fontWeight={'700'}>Total: &#36;{cartSubTotal.toFixed(2)}</Text>
      </Flex>
    </>
  )
}

export default CartTotal