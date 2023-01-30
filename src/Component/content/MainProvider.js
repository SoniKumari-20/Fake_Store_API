import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAllProductsData, getAllUsersData, getAllCategory} from '../api';

export const MainContext = createContext({})
const MainProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [allUserData, setAllUserData] = useState([])
    const [category, setCategory] = useState([])
    
    // console.log(allProducts)

    
    
    const getAllProducts = async () => {
        getAllProductsData().then((res) => setAllProducts(res.data)).catch((err => {
            setAllProducts([])
        }))
    }

    


    const getAllCategories = async () => {
        getAllCategory().then((res) => setCategory(res.data)).catch((err => {
            setCategory([])
        }))
    }

    useEffect(() => {
               getAllCategories()
    }, [])



    const getAllUsers = async () => {
        getAllUsersData().then((res) => setAllUserData(res.data)).catch((err => {
            setAllUserData([])
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
            setCartItems,
            allUserData,
            getAllUsers,
            getAllCategories,
            category,
            
           
        }}>
            {children}

        </MainContext.Provider>
    );
}

export default MainProvider;
