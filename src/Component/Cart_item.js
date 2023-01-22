import React, { useState } from 'react'
import './style.css'
import { useContext } from 'react'
import { MainContext } from './content/MainProvider'
import { Link } from 'react-router-dom'

export const Cart_item = () => {
  const { cartItems, allProducts, handleRemoveDatafromCart, setCartItems } = useContext(MainContext)


  let allCartItemsId = cartItems.map(e => e.id)
  let allCartProducts = allProducts.filter(e => allCartItemsId.includes(e.id))

  const setQuantity = (id, data) => {

    let tempCartItem = [...cartItems];
    tempCartItem.forEach(e => {
      if (e.id === id) {
        e.count += data
      }
    })
    setCartItems(tempCartItem)
  }
  console.log(allCartProducts.length, "len")



  return (
    <div>
      <h1> <Link to={"/home"} ><i class="fa-solid fa-house"></i></Link>  CART ITEMS <i class="fa-sharp fa-solid fa-cart-shopping text-primary"></i></h1>

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

            <tr key={e.id} style={{ alignItems: "bottom" }}>
              <td>{e.id + 1}</td>
              <td><img className="card-img-top " style={{ height: 100, width: 100 }} src={e.image} alt='' /></td>
              <td>{e.title}</td>
              <td className='CartbtnContiner' >
                {cartItems.find(element => element.id === e.id).count}
                <button className=' btn btn-primary ' style={{ margin: 15 }} onClick={() => setQuantity(e.id, +1)} ><i className='fa fa-plus '></i></button>
                <button className='btn btn-danger ' style={{ margin: 3 }} onClick={() => setQuantity(e.id, -1)} ><i className='fa fa-minus '></i></button>
              </td>
              <td>{e.price * cartItems.find(element => element.id === e.id).count}</td>
              <td><button className='btn btn-danger' onClick={() => handleRemoveDatafromCart(e.id)}>Remove </button></td>
            </tr>
          )
        }
      </table>
      <hr></hr>
      {allCartProducts.length === 0 &&
        <span className='h1'>
          NO CART ITEMS
        </span>}

    </div>
  )
}
