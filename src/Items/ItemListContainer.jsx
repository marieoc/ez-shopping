import React from 'react'
import ItemListView from './ItemListView'
import { useDispatch, useSelector } from 'react-redux'

const ItemListContainer = () => {
    // The store is instanciated in main.jsx, now we can access its actions.type through dispatch, and its by calling useSelector hook
    // const dispatch = useDispatch();
    const items = useSelector((state) => state.itemReducer.items);
    console.log(items);

  return (
    <div>
        <ItemListView 
            items={items}
        />
    </div>
  )
}

export default ItemListContainer