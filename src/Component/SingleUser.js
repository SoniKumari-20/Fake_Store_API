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
            <h1>
                About The User
            </h1>
            {itemLoading ? <>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden" style={{ fontSize: "40px" }} >Loading...</span>
                    </div>
                </div>
            </> :<div className='margin1 d-flex justify-content-center'>
                <div className="card " style={{ width: 500, marginTop:50 }}>
                    <div className="card-body" style={{textAlign:"left"}}>
                        <h3> Name :  {singleUserData.name.firstname + " " + singleUserData.name.lastname}</h3>
                        <hr ></hr>
                        <h5 className="card-title"> E-mail Address :  {singleUserData.email}</h5>
                        <hr></hr>
                        <h6 className="card-subtitle mb-2 "> Phone Number : {singleUserData.phone}</h6>
                        <hr></hr>
                        <p className="card-text"> House Number : {singleUserData.address.number}</p>
                        <p className="card-text"> Street Name : {singleUserData.address.street}</p>
                        <p className="card-text">City : {singleUserData.address.city}</p>
                        <hr></hr>
                        <h5>ZipCode : {singleUserData.address.zipcode}</h5>
                    </div>
                    </div>
                </div>}
        </div>
    )
}

