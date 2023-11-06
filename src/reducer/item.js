import {
    ADD_QUANTITY
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
                    { ...action.payload, qty: action.payload.qty}
                ]
            }

        default: {
            return state;
        }
    }
}

export default itemReducer;