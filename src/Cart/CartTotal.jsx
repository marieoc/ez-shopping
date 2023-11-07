import React from "react";

const CartTotal = ({ cart }) => {
  const cartSubTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      <div className="w-full flex justify-end p-4 pb-8">
        <p className="text-3xl font-bold">Total: &#36;{cartSubTotal.toFixed(2)}</p>
      </div>
    </>
  );
};

export default CartTotal;
