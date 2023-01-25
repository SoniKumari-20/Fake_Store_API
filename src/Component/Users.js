import React, { useContext, useEffect } from 'react';
import { MainContext } from './content/MainProvider';

const Users = () => {
    const { allUserData } = useContext(MainContext)


    
    return (
        <div>

            <table class="table table-striped">
                <tr><th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Username</th>
                    <th>View</th>
                </tr>
                {
                    allUserData.map((e,id) =>
                        <tr style={{ alignItems: "bottom" }}>
                            <td>{id + 1}</td>
                            <td>{e.name.firstname + e.name.lastname}</td>
                            <td>{e.email}</td>
                            <td >{e.phone}</td>
                            <td>{e.username}</td>
                            <td><button className='btn btn-danger' >View</button></td>
                        </tr>

                    )
                }
            </table>
        </div>
    );
}

export default Users;
