import React from 'react'
import ItemListView from './ItemListView'
import { useDispatch, useSelector } from 'react-redux'

const ItemListContainer = () => {
    // The store is instanciated in main.jsx, now we can access its actions.type through dispatch, and its by calling useSelector hook
    const dispatch = useDispatch();
    const items = useSelector((state) => state.itemReducer.items);

    const handleSubmit = (e, item) => {
        e.preventDefault();
        const qty = e.target.qty.value;
        dispatch({ type: 'ADD_QUANTITY', payload: { qty, item } });
    }

  return (
    <>
        <ItemListView 
            items={items}
            handleSubmit={handleSubmit}
        />
    </>
  )
}

export default ItemListContainer