import './style.css'
import React, {  useContext, useEffect, useState } from 'react'
import {  AbortedDeferredError, useParams } from 'react-router-dom';
import { globalInfo } from '../App';
 

 export default function About() {
const [item1, setItem1] = useState("");
const [cartitem, setCartitem] = useState([]);


let Id = useParams()
  useEffect(()=>{
   fetch("https://fakestoreapi.com/products/"+Id.id).
    then((resp)=>resp.json()).then
    ((data)=>setItem1(data))
  },[])
  let {initialstate} = useContext(globalInfo)
           
function handleAdd(){
  let item = item1
  let num = cartitem.findIndex((e)=> e.id === item.id)
  if(num >= 0){
    initialstate.cartQuantity+=1
  }else{
    let data = cartitem.push(item1)
    console.log(data,num);
  }  
}


  return (
    <div>
      <h1>
       About the Product
      </h1>
      <div className='margin1'>
           
              <img className="card-img-top card_img" src={item1.image} alt="Card image cap"  />
              <div className='card des_card'>
              <div className="card-body text-center " height={"230px"} width={"230px"}>
                <h3 className="card-title">{item1.category}</h3>
                <h5 className="card-text">{item1.title}</h5>
                <p className="card-text">{item1.description}</p>
                <h3>Rs. {item1.price}/-</h3>
                </div>
                <div className='margin1' style={{width: 750}}>
                <button className='btn btn-success add ' onClick={()=>handleAdd(item1)}>Add To Cart
                </button><br></br>
                <button className='btn btn-danger add'>Remove To Cart
                </button>
                <button className='btn btn-success add'>Go To Cart
                </button>
                </div>
           
            </div>
          
      </div> 
    </div>
  )
}
