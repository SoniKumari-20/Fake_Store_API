import './style.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MainContext } from './content/MainProvider';

export default function Home() {

  const { allProducts } = useContext(MainContext);

  return (
    <div >
      <h1>
        Home Page
      </h1>
      <div className='margin'>
        {
          allProducts.map((items, id) =>
            <div className="card  cart_item" key={id} >
              <img className="card-img-top" src={items.image} alt="Card image cap" height={"200px"} />
              <div className="card-body text-center " height={"230px"} width={"230px"}>
                <h5 className="card-title">{items.category}</h5>
                <p className="card-text">{(items.title).substring(0, 18)}...</p>
                <Link to={'About/' + items.id}>
                  <button className='btn btn-primary add'>Bye Now!!</button>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
