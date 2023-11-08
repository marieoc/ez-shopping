import React, { useEffect } from "react";
import CartContainer from "../Cart/CartContainer";

function CartPage() {
  useEffect(() => {
    document.title = "Cart Page";
  }, []);
  return <CartContainer />;
}

export default CartPage;
