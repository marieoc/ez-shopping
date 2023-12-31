import {
  ADD_QUANTITY,
  CLEAR_BASKET,
  REMOVE_ITEM,
  STORE_ITEMS,
  UPDATE_QUANTITY,
} from "./action-types";

const initialStates = {
  items: [],
  cart: [],
  newQty: ''
};

const itemReducer = (state = initialStates, action) => {
  switch (action.type) {
    case STORE_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_QUANTITY:
      console.log(state.cart);
      const quantity = parseInt(action.payload.qty);
      const itemId = action.payload.item.id;

      const isAlreadyInCart = state.cart.some((item) => item.id === itemId);
      // if item is already in cart, update item with new quantity
      if (isAlreadyInCart) {
        const updatedCart = state.cart.map((item) => {
          return { ...item, qty: quantity + item.qty };
        });
        return {
          ...state,
          cart: updatedCart,
        };

        // if new item, add item with chossen qty
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.item, qty: quantity }],
        };
      }

    case UPDATE_QUANTITY:
      const updatedQuantity = parseInt(action.payload.quantity);
      const cartItemId = action.payload.itemId;

      const updatedCart = state.cart.map((item) => {
        if (item.id === cartItemId) {
          return { ...item, qty: updatedQuantity };
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_ITEM:
      console.log(action.payload);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case CLEAR_BASKET:
      return {
        ...state,
        cart: [],
      };

    default: {
      return state;
    }
  }
};

export default itemReducer;
