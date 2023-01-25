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
        <div class="container-fluid  text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
            {
              allProducts.map((items, id) =>
                <div class="col-sm my-4">
                  <div className="card  cart_item" key={id} >
                    <img className="card-img-top" src={items.image} alt="Card image cap" height={"200px"} />
                    <div className="card-body text-center " height={"230px"} width={"230px"}>
                      <h5 className="card-title">{items.category}</h5>
                      <p className="card-text">{(items.title).substring(0, 18)}...</p>
                      <div class="d-grid gap-2">
                        <Link to={'/About/' + items.id} style={{ display: "block" }} className='btn btn-primary fluid' >
                          Bye Now!!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}
