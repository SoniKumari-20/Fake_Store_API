import React from 'react'
import { useContext } from 'react'
import { MainContext } from './content/MainProvider'

export const Cart_item = () => {
  const { cartItems, allProducts } = useContext(MainContext)
  let allCartItemsId = cartItems.map(e => e.id)
  let allCartProducts = allProducts.filter(e => allCartItemsId.includes(e.id))
  console.log(allCartProducts)
  return (
    <div>Cart_item


    </div>
  )
}
