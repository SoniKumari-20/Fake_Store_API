import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAllProductsData } from '../api';

export const MainContext = createContext({})
const MainProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async () => {
        getAllProductsData().then((res) => setAllProducts(res.data)).catch((err => {
            setAllProducts([])
        }))
    }

    const handleAddDataIntoCart = (id) => {
        let itemId = Number(id)
        let cartTempItems = [...cartItems]
        if (cartTempItems.find(e => e.id === itemId)) {
            cartTempItems.forEach((e => {
                if (e.id === itemId) {
                    e.count++
                }
            }))
        } else {
            cartTempItems.push({ id: (itemId), count: 1 })
        }
        setCartItems(cartTempItems)
    }

    const handleRemoveDatafromCart = (id) => {
        let itemId = Number(id)
        let confirmToRemove = window.confirm("are you sure want to remove")
        if (confirmToRemove) {
            let temp = [...cartItems]
            let removeItem = temp.filter((e) => {
                if (e.id !== itemId) {
                    return e
                }
            }
            )
            setCartItems(removeItem)
        } else {
            return
        }

    }








    return (
        <MainContext.Provider value={{
            getAllProducts,
            allProducts,
            handleAddDataIntoCart,
            handleRemoveDatafromCart,
            cartItems,
            setCartItems
        }}>
            {children}

        </MainContext.Provider>
    );
}

export default MainProvider;
