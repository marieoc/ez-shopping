import React from "react";
import CartView from "./CartView";
import { useDispatch, useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import toaster, { Toaster } from "react-hot-toast";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.itemReducer.cart);

  const notify = (msg) => toaster.success(msg);

  const removeItem = (e, cartItemId) => {
    e.preventDefault();
    dispatch({ type: "REMOVE_ITEM", payload: cartItemId });
  };

  const clearBasket = () => {
    dispatch({ type: "CLEAR_BASKET" });
  };

  return (
    <>
      <Toaster position="top-center" />
      <CartView
        cart={cart}
        removeItem={removeItem}
        clearBasket={clearBasket}
        notify={notify}
      />
      <CartTotal cart={cart} />
    </>
  );
};

export default CartContainer;
