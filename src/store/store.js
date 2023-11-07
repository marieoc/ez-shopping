import { createStore } from "redux";
import reducer from "../reducer/index";

// save to the localStorage
function saveToLocalStorage(state) {
    // console.log('save to localStorage');
    try {
        const serialisedState = JSON.stringify(state);
        console.log(serialisedState);
        localStorage.setItem('ez-shopping', serialisedState);
    }
    catch (err) {
        console.log(err);
    }
}

// load data from localStorage
function loadFromLocalStorage() {
    // console.log('load from localStorage');
    try {
        const serialisedState = localStorage.getItem('ez-shopping');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    }
    catch (err) {
        console.log(err);
        return undefined;
    }
}

// When page is loaded, get the data stored in localStorage
const store = createStore(reducer, loadFromLocalStorage());

// Each time store is changing, store the new data to localStorage 
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;