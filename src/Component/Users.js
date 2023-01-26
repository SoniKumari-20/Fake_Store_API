import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from './content/MainProvider';

const Users = () => {
    const { allUserData } = useContext(MainContext)
console.log(allUserData)

    
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
                            <td>{e.name.firstname + " "+  e.name.lastname}</td>
                            <td>{e.email}</td>
                            <td >{e.phone}</td>
                            <td>{e.username}</td>
                            <td><Link to={"/singleuser/" + e.id}><button className='btn btn-success'>View</button></Link></td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

export default Users;
