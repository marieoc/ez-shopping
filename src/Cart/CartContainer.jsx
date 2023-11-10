import React, { useEffect, useState } from "react";
import CartView from "./CartView";
import { useDispatch, useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import toaster, { Toaster } from "react-hot-toast";

const CartContainer = () => {
  const [quantity, setQuantity] = useState("");
  const [editQuantity, setEditQuantity] = useState({
    id: "",
    status: false,
  });

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

  const updateQuantity = (e, itemId) => {
    e.preventDefault();

    if (quantity === "") {
      return;
    }

    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } });

    return setEditQuantity({ id: "", status: false });
  };

  return (
    <>
      <Toaster position="top-center" />
      <CartView
        cart={cart}
        removeItem={removeItem}
        clearBasket={clearBasket}
        notify={notify}
        updateQuantity={updateQuantity}
        quantity={quantity}
        setQuantity={setQuantity}
        editQuantity={editQuantity}
        setEditQuantity={setEditQuantity}
      />
      <CartTotal cart={cart} />
    </>
  );
};

export default CartContainer;
