import './style.css'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { MainContext } from './content/MainProvider';
import { getSingleProduct } from './api';



export default function About() {
  const [item1, setItem1] = useState("");
  const { handleAddDataIntoCart } = useContext(MainContext)
  const [itemLoading, setItemLoading] = useState(false)


  let { id } = useParams()
  useEffect(() => {
    setItemLoading(true)
    getSingleProduct(id).then((res) => { setItem1(res.data); setItemLoading(false) })
  }, [])

  function handleAddToCart(id) {
    handleAddDataIntoCart(id)
  }


  return (
    <div>
      <h1>
        About the Product
      </h1>

      {itemLoading ? <>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden" style={{ fontSize: "40px" }} >Loading...</span>
          </div>
        </div>
      </> : <div className='margin1'>
        <img className="card-img-top card_img" src={item1.image} alt='' />
        <div className='card des_card'>
          <div className="card-body text-center " height={"230px"} width={"230px"}>
            <h3 className="card-title">{item1.category}</h3>
            <h5 className="card-text">{item1.title}</h5>
            <p className="card-text">{item1.description}</p>
            <h3>Rs. {item1.price}/-</h3>
            <h6>Rating {item1.rating && item1.rating.rate} <i className='fa fa-star'></i> </h6>
          </div>
          <div className='margin1' style={{ width: 750 }}>
            <Link to="/home" className='btn btn-primary add'>Go To Home <i className="fa-solid fa-house"></i>
            </Link>
            <button className='btn btn-secondary add' onClick={() => handleAddToCart(id)}>Add To Cart <i className="fa-solid fa-cart-plus"></i>
            </button>
            <Link to="/Cart_item" className='btn btn-success add'>Go To Cart  <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>

        </div>

      </div>}
    </div>
  )
}

