import React from 'react'

const ItemListView = ({ items, handleSubmit }) => {
  return (
    <div>
        {items?.map((item) => {
            return (
              <div key={item.id}>
                <div className="item_img__wrapper">

                </div>
                <div className="item_content__wrapper">
                  <p>{item.name} - {item.price}&#36;</p>
                  <div className="add_to_cart_btn__wrapper">
                    <form 
                      action=""
                      method=""
                      onSubmit={(e) => handleSubmit(e, item)}
                    >
                    <label htmlFor="qty">Quantity:
                      <input name="qty" type={"number"} />
                    </label>
                    <button 
                      type={"submit"}
                    >
                      Add to basket
                    </button>
                    </form>
                      
                  </div>
                </div>
              </div>
            )
        })}
    </div>
  )
}

export default ItemListView