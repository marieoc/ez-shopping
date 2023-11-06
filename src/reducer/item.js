import {
    ADD_QUANTITY, CLEAR_BASKET, REMOVE_ITEM
} from "./action-types";

const initialStates = {
    items: [
        { id: 1, name: "Pen", desc: "Lorem Ipsum", price: 2, qty: 1 },
        { id: 2, name: "Book", desc: "Lorem Ipsum", price: 14, qty: 1 },
        { id: 3, name: "Bag", desc: "Lorem Ipsum", price: 20, qty: 1 },
    ],
    cart: []
}

const itemReducer = (state = initialStates, action) => {
    switch (action.type) {
        case ADD_QUANTITY:
            console.log(action.payload);
            return {
                ...state,
                cart: [
                    ...state.cart,
                    { ...action.payload.item, qty: action.payload.qty}
                ]
            }
        
        case REMOVE_ITEM: 
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }

        case CLEAR_BASKET:
            return {
                ...state,
                cart: []
            }

        default: {
            return state;
        }
    }
}

export default itemReducer;