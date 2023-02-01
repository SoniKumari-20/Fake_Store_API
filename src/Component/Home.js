import './style.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from './content/MainProvider';
import { getProductCategories } from './api';

export default function Home() {

  const { category, allProducts } = useContext(MainContext)

  const [filter, setFilter] = useState(allProducts)

  const [categoryItem, setCategoryItem] = useState("All")
  const [productsLoading, setProductLoading] = useState(false)

  const handleFetchProductsCategory = (item) => {
    if (item === "All") {
      setFilter(allProducts)
    } else {
      setProductLoading(true)
      getProductCategories(item).then((res) => {
        setFilter(res.data); setProductLoading(false)
      }).catch((err => console.log("error")))
    }
    setCategoryItem(item)
  }



  useEffect(() => {
    console.log(filter, "filter")
  }, [filter])

  // console.log(data)

  // const getCategoryData = async () => {

  // }


  // useEffect(() => {
  //   getCategoryData()
  // }, [data])





  return (
    <div >
      <div>
        <h1>
          Home Page
        </h1>
        <div className="container" style={{ width: "300px" }}>
          <div className="dropdown"  >
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {categoryItem}
            </button>
            <ul className="dropdown-menu">
              <li className="btn btn-light  " style={{ height: 40, width: 250, margin: 2 }} onClick={() => handleFetchProductsCategory("All")} >ALL</li>
              {category.map((item) => (
                <li className="btn btn-light  " style={{ height: 40, width: 250, margin: 2 }} onClick={() => handleFetchProductsCategory(item)} >{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {productsLoading ? <>

        <h1 style={{ marginTop: "100px" }} >Loading .......</h1>
      </> : <div className='margin'>
        <div className="container-fluid  text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
            {
              filter.map((items, id) =>
                <div className="col-sm my-4" key={id}>
                  <div className="card  cart_item" key={id + 1} >
                    <img className="card-img-top" src={items.image} alt="Card image cap" height={"200px"} />
                    <div className="card-body text-center " height={"230px"} width={"230px"}>
                      <h5 className="card-title">{items.category}</h5>
                      <p className="card-text">{(items.title).substring(0, 18)}...</p>
                      <div className="d-grid gap-2">
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

      </div>}
    </div>
  )
}
