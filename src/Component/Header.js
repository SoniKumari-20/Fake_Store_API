import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MainContext } from './content/MainProvider'
import './style.css'

export default function Header() {
  const { cartItems } = useContext(MainContext);
  const Navigate = useNavigate()

  function logout() {
    localStorage.removeItem("Token")
    window.location.href = "/"

  }




  return (
    // <div>
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" href="/home">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {
        localStorage.getItem("Token") ?
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link to="/users" className="nav-link" >Users <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            <Link to="/Cart_item"><div className='icons'>
              <div className='plus_product'>
                <h5>{cartItems.length}</h5>
              </div>
              <i className="fa fa-shopping-cart"></i>
            </div></Link>
            < div className='btn btn-light' style={{ marginLeft: 20 }} onClick={logout} >LogOut</div>
          </div>
          :
          <div></div>
}

    </nav>
    // </div>
  )
}
