import React, { useState } from 'react'
import './style.css'
import { useContext } from 'react'
import { MainContext } from './content/MainProvider'

export const Cart_item = () => {
  const { cartItems, allProducts, handleRemoveDatafromCart } = useContext(MainContext)
  const [quantity, setQuantity] = useState(1)


  let allCartItemsId = cartItems.map(e => e.id)
  let allCartProducts = allProducts.filter(e => allCartItemsId.includes(e.id))
  



  return (
    <div>
      <h1>Cart Items</h1>

      <table class="table table-striped">
        <tr><th>Id</th>
          <th>Products</th>
          <th>Products Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {
          allCartProducts.map((e, id) =>

            <tr key={id} style={{ alignItems: "bottom" }}>
              <td>{id + 1}</td>
              <td><img className="card-img-top " style={{ height: 100, width: 100 }} src={e.image} /></td>
              <td>{e.title}</td>
              <td>
                {quantity}
                <button className=' btn btn-primary ' style={{ margin: 15 }} onClick={() => setQuantity(quantity + 1)} ><i className='fa fa-plus '></i></button>
                <button className='btn btn-danger ' style={{ margin: 3 }}  ><i className='fa fa-minus '></i></button>
              </td>
              <td>{e.price * quantity}</td>
              <td><button className='btn btn-danger' onClick={() => handleRemoveDatafromCart(e.id)}>Remove </button></td>
            </tr>
          )
        }
      </table>
      <hr></hr>

    </div>
  )
}
