import React, { useEffect } from 'react';
import { getAllUsersData } from './api';

const Users = () => {

    useEffect(()=>{
        getAllUsersData().than(res=>{
            console.log(res,"data")
        })
    },[])
    return (
        <div>

        </div>
    );
}

export default Users;
