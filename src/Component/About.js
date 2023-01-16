import './style.css'
import React, { useContext, useEffect, useState } from 'react'
import { AbortedDeferredError, Link, useParams } from 'react-router-dom';
import { MainContext } from './content/MainProvider';



export default function About() {
  const [item1, setItem1] = useState("");
  const [cartitem, setCartitem] = useState([]);
  const { handleAddDataIntoCart } = useContext(MainContext)


  let { id } = useParams()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id).
      then((resp) => resp.json()).then
      ((data) => setItem1(data))
  }, [])

  function handleAddToCart(id) {
    handleAddDataIntoCart(id)
  }


  return (
    <div>
      <h1>
        About the Product
      </h1>
      <div className='margin1'>

        <img className="card-img-top card_img" src={item1.image} />
        <div className='card des_card'>
          <div className="card-body text-center " height={"230px"} width={"230px"}>
            <h3 className="card-title">{item1.category}</h3>
            <h5 className="card-text">{item1.title}</h5>
            <p className="card-text">{item1.description}</p>
            <h3>Rs. {item1.price}/-</h3>
          </div>
          <div className='margin1' style={{ width: 750 }}>
            <button className='btn btn-success add ' onClick={() => handleAddToCart(id)}>Add To Cart
            </button><br></br>
            <button className='btn btn-danger add'>Remove To Cart
            </button>
            <Link to="/Cart_item" className='btn btn-success add'>Go To Cart
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

