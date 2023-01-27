import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from './content/MainProvider'

export default function Header() {
  const { cartItems } = useContext(MainContext);

  return (
    // <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <Link class="navbar-brand" href="/home">Navbar</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/home" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item active">
            <Link to="/users" class="nav-link" >Users <span class="sr-only">(current)</span></Link>
          </li>
        </ul>
        <Link to="/Cart_item"><div className='icons'>
          <div className='plus_product'>
            <h5>{cartItems.length}</h5>
          </div>
          <i className="fa fa-shopping-cart"></i>
        </div></Link>
      </div>
    </nav>
    // </div>
  )
}
