import './style.css'
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from './content/MainProvider';
import { getProductCategories } from './api';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

export default function Home() {

  const {category, allProducts, setAllProducts} = useContext(MainContext)

const [filter, setFilter] = useState(allProducts)
const [data, setData] = useState("")

console.log(data)

const getCategoryData = async () => {
  getProductCategories(data).then((res) =>
  setFilter(res.data)).catch((err => console.log("error")))
}


useEffect(() => {
  getCategoryData()
}, [])

const  filterData = (cat) => {
  setData(cat)
}


  

  return (
    <div >
      <div>
        <h1>
          Home Page
        </h1>
        <div className="container" style={{ width: "300px" }}>
          <div class="dropdown"  >
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Category
            </button>
            <ul class="dropdown-menu">

            <li class="btn btn-light  "  style={{height: 40, width: 250,  margin:2}} onClick={ () => setFilter(allProducts)} >ALL</li>
              <li class="btn btn-light  "  style={{height: 40, width: 250,  margin:2}} onClick={ () => filterData("electronics")} >{category[0]} </li>
              <li class="btn btn-light"  style={{height: 40,width: 250,  margin:2}} onClick={() =>filterData("jewelery")}>{category[1]}</li>
              <li class="btn btn-light"  style={{height: 40,width: 250, margin:2}} onClick={() =>filterData("men's clothing")} >{category[2]}</li>
              <li class="btn btn-light"  style={{height: 40,width: 250 , margin:2}} onClick={() =>filterData("women's clothing")}>{category[3]}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='margin'>
        <div class="container-fluid  text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
            {
              filter.map((items, id) =>
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
