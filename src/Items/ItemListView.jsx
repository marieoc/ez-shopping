import React from 'react'

const ItemListView = ({ items }) => {
  return (
    <div>
        {items?.map((item) => {
            return (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price} &euro;</p>
                </div>
            )
        })}
    </div>
  )
}

export default ItemListView