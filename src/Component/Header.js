import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from './content/MainProvider'

export default function Header() {
const {cartItems} = useContext(MainContext);



  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
          </ul>
          <form className="form-inline my-5 my-lg-0">
            <Link to="/Cart_item"><div className='icons'>
              <div className='plus_product'>
                <h5>{cartItems.length}</h5>
              </div>
              <i className="fa fa-shopping-cart"></i>
              </div></Link>
          </form>
        </div>
      </nav>
    </div>
  )
}
