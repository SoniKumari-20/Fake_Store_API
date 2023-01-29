import React, { useState } from 'react'
import './style.css'
import { useContext } from 'react'
import { MainContext } from './content/MainProvider'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const Cart_item = () => {
  const { cartItems, allProducts, handleRemoveDatafromCart, setCartItems } = useContext(MainContext)
  const totalPrice = 0
  const [totalAmount, setTotalAmount] = useState(0)

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
    console.log(tempCartItem)
  }
  useEffect(() => {
    totalCartAmount()
  }, [cartItems])

  const totalCartAmount = () => {
    let totalAmountData = 0;
    allCartProducts.forEach(ele => {
      let id = ele.id;
      let obj = cartItems.find(e => e.id === id)
      totalAmountData += (obj.count * ele.price)
    })
    setTotalAmount(totalAmountData)
  }
  // console.log(allCartProducts.length, "len")
  // // let totalAmount =  
  // console.log(,"prod")




  return (
    <div>
      <h1> <Link to={"/home"} ><i class="fa-solid fa-house"></i></Link>  CART ITEMS <i class="fa-sharp fa-solid fa-cart-shopping text-primary"></i></h1>
      <div style={{ display: "flex" }} >
        <div style={{ width: "80%" }} >      <table class="table table-striped">
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
                <td>{e.id}</td>
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
        </table></div>
        {allCartProducts.length > 0 && <div style={{ width: "20%" }} >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">total amount</h5>
              {allCartProducts.map(ele => {
                let { count } = cartItems.find(e => e.id === ele.id)
                return <>
                  <span>{`${count} * ${ele.price} =  ${count * ele.price}`}   </span> <br />
                </>
              })}

              <h2>${totalAmount}</h2>

            </div>
          </div>

        </div>}

      </div>

      <hr></hr>
      {/* {
        allCartProducts.map((e) =>
          <>
            {
              e.price * cartItems.find(element => element.id === e.id).count
            }
          </>
        )
      } */}

      {allCartProducts.length === 0 &&
        <span className='h1'>
          NO CART ITEMS
        </span>}

    </div>
  )
}
