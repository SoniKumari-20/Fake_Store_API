import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const MainContext = createContext({})
const MainProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json()).then((data) => setAllProducts(data)).catch((err => {
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
        let temp = [...cartItems]
        let removeItem = temp.filter((e)=>{
        if(e.id !== itemId){
           return e
        }}
        )
       setCartItems(removeItem)
    }

  




    

    return (
        <MainContext.Provider value={{
            getAllProducts,
            allProducts,
            handleAddDataIntoCart,
            handleRemoveDatafromCart,
            cartItems
        }}>
            {children}

        </MainContext.Provider>
    );
}

export default MainProvider;
