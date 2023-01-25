import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import { Cart_item } from './Component/Cart_item';
import Header from './Component/Header';
import Home from './Component/Home';
import { MainContext } from './Component/content/MainProvider';
import { useContext } from 'react';
import { Login } from './Component/Login';
import { Protected, Public } from './Component/utils';
import { HttpClient } from './Component/api/HttpClient';
import Users from './Component/Users';
HttpClient.setDefaultAxios()

function App() {
  const { getAllProducts, getAllUsers } = useContext(MainContext)
  useEffect(() => {
    getAllProducts()
  }, [])

  useEffect(()=>{
    getAllUsers()
},[])


  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Public><Login /></Public>} >
          </Route>
          <Route path='/home' element={<Protected> <Home /> </Protected>}></Route>
          <Route path='About/:id' element={<Protected> <About /> </Protected>}></Route>
          <Route path='Cart_item' element={<Protected> <Cart_item /> </Protected>}></Route>
          <Route path='users' element={<Protected> <Users /> </Protected>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
