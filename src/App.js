import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import { Cart_item } from './Component/Cart_item';
import Header from './Component/Header';
import Home from './Component/Home';
import MainProvider, { MainContext } from './Component/content/MainProvider';
import { useContext } from 'react';


function App() {
  const { getAllProducts } = useContext(MainContext)
  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='About/:id' element={<About />}></Route>
          <Route path='Cart_item' element={<Cart_item />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
