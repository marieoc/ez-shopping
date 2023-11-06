import React from "react";
import CartView from "./CartView";
import { useDispatch, useSelector } from "react-redux";
import CartTotal from "./CartTotal";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.itemReducer.cart);

  const removeItem = (e, cartItemId) => {
    e.preventDefault();
    console.log(cartItemId);
    dispatch({ type: "REMOVE_ITEM", payload: cartItemId });
  };

  const clearBasket = () => {
    dispatch({ type: "CLEAR_BASKET" });
  };

  return (
    <>
      <CartView cart={cart} removeItem={removeItem} clearBasket={clearBasket} />
      <CartTotal cart={cart} />
    </>
  );
};

export default CartContainer;
