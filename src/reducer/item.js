import {
    ADD_QUANTITY
} from "./action-types";

const initialStates = {
    items: [
        { id: 1, name: "Pen", price: 2 },
        { id: 2, name: "Book", price: 14 },
        { id: 3, name: "Bag", price: 20 },
    ]
}

const itemReducer = (state = initialStates, action) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
}

export default itemReducer;