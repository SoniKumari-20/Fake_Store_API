import {  useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import { Cart_item } from './Component/Cart_item';
import Header from './Component/Header';
import Home from './Component/Home';
import  { MainContext } from './Component/content/MainProvider';
import { useContext } from 'react';
import { Login } from './Component/Login';
import { ProtectedRoutes } from './Component/content/ProtectedRoutes';


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
          
          <Route path='Login' element={ <Login /> } >
          </Route>
          <Route path='/home' element={<ProtectedRoutes Component={Home} />}></Route>
          <Route path='About/:id' element={<ProtectedRoutes Component={About} />}></Route>
          <Route path='Cart_item' element={<ProtectedRoutes Component={Cart_item} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
