import React from 'react';
import { Flex, Box, Image, Text, Input, Button } from "@chakra-ui/react";

const CartView = ({ cart, removeItem, clearBasket }) => {
    
  return (
    <Flex w='100vw' flexDirection={'column'} p="2rem">
        <div>
            <Text fontSize={'lg'} fontWeight={'700'}>Hi Alan!<br />
            There are {cart.length} items in your basket</Text>
        </div>
        <div>
            <Button
                colorScheme='yellow'
                onClick={clearBasket}
            >
                Clear basket
            </Button>
        </div>
        <Flex p="2rem">
            {cart?.map((cartItem, index) => {
                return (
                    <Flex
                    width={"100%"}
                    m='2rem'
                    p='1rem'
                    key={cartItem.id}
                    >
                    <Box w={'50%'} flexBasis={'30%'}>
                    <Image w={'100%'} maxW={'200px'} src={cartItem.image} alt={cartItem.description} />
                    </Box>
                    <Flex flexBasis={'65%'} direction={'column'} className="item_content__wrapper" p="1rem">
                    <Text fontSize={'lg'} fontWeight={'700'}>
                        {cartItem.title} <span>{cartItem.category}</span>
                    </Text>
                    <p>{cartItem.description}</p>
                    <Text fontSize={'xl'} fontWeight={'700'}>&#36;{cartItem.price}</Text>
                    <div className="add_to_cart_btn__wrapper">
                        <form 
                            action=""
                            method=""
                            onSubmit={(e) => removeItem(e, cartItem.id)}
                        >
                            <Button colorScheme='yellow'>Remove</Button>
                        </form>
                    </div>
                    </Flex>
                    </Flex>
                )
            })}
        </Flex>
    </Flex>
  )
}

export default CartView