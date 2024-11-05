import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleUser } from './api';

export default function SingleUser() {
    const [singleUserData, setSingleUserData] = useState({});
    const [itemLoading, setItemLoading] = useState(false)
    let { id } = useParams();


    useEffect(() => {
        setItemLoading(true)
        getSingleUser(id).then((res) => { setSingleUserData(res.data); setItemLoading(false) })
    }, [])

    return (
        <div>
            {/* <h1>
                About The User
            </h1> */}
            {itemLoading ? <>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden" style={{ fontSize: "40px" }} >Loading...</span>
                    </div>
                </div>
            </> : <div className='margin1 d-flex justify-content-center p-3'>
                <div className="card " style={{ width: "30%",width:"40%", marginTop: 10 }}>
                    
                    <div className="card-body" style={{ textAlign: "left" }}>
                    <div className='d-flex justify-content-center' >
                        <img style={{height:"190px", width:"190px", borderRadius:"50%"}} src='https://tse2.mm.bing.net/th?id=OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH&pid=Api&P=0' alt='...'></img>
                    </div>
                        <h3> {singleUserData?.name?.firstname + " " + singleUserData?.name?.lastname}</h3>
                        <hr ></hr>
                        <strong className="card-title"> {singleUserData?.email}</strong>
                        <hr></hr>
                        <strong className="card-subtitle mb-2 ">Number : {singleUserData?.phone}</strong>
                        <hr></hr>
                        <p className="card-text"><strong>Address :  </strong>
                             {singleUserData?.address?.street}, {singleUserData?.address?.number}, {singleUserData?.address?.city}</p>
                        <hr></hr>
                        <strong>ZipCode : {singleUserData?.address?.zipcode}</strong>
                    </div>
                </div>
            </div>
            }
        </div >
    )
}

