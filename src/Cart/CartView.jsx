import React from 'react'

const CartView = ({ cart, removeItem, clearBasket }) => {
    
  return (
    <>
        <div>
            Hi Alan!
            There are {cart.length} items in your basket
        </div>
        <div>
            <button
                onClick={clearBasket}
            >Clear basket</button>
        </div>
        <div>
            {cart?.map((cartItem, index) => {
                return (
                    <div key={index}>
                        <p>{cartItem.title} {cartItem.qty}qty {cartItem.price}&#36;</p>
                        <form 
                            action=""
                            method=""
                            onSubmit={(e) => removeItem(e, cartItem.id)}
                        >
                            <button>Remove</button>
                        </form>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default CartView