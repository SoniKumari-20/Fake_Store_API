import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import { Cart_item } from './Component/Cart_item';
import Header from './Component/Header';
import Home from './Component/Home';
export const globalInfo = createContext();

function App() {
  const [item, setItem] = useState([]);
  const initialstate = {
    cartQuantity: 0
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").
      then((res) => res.json()).then((data) => setItem(data))
  }, [])


  return (
    <globalInfo.Provider value={{ item, initialstate }}  >
      <Header />
      <div className="App">
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/About/:id' element={<About />}></Route>
          <Route path='/Cart_item' element={<Cart_item />}></Route>
        </Routes>




      </div>

    </globalInfo.Provider>
  );
}

export default App;
