import React, { useEffect } from 'react'
import { useState } from 'react'
import { getLoginUser } from './api';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  let navigate = useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })


  const getLogin = async () => {
    getLoginUser(userData).then((res) => {
      if (res.data.token) {
        localStorage.setItem("Token", res.data.token)
        navigate("/home")
      }
    }
    ).catch((err => {
      console.log([])
    }))
  }

  const handleCollectData = (event) => {
    let { name, value } = event.target;
    console.log(event)
    setUserData(state => ({
      ...state,
      [name]: value
    }))
  }





  return (
    <>
      <div className="background div">
      </div>
      <div className='form div'>
        <h3>Login Here</h3>
        <label forhtml="username">Username</label>
        <input typeof="text" placeholder="User Name" name="username" id="username" value={userData.username} onChange={handleCollectData} />
        <label forhtml="password">Password</label>
        <input type="password" placeholder="Password" name='password' id="password" value={userData.password}
          onChange={handleCollectData} />
        <button type='submit' onClick={getLogin}>Log In</button>
        {/* <div className="social div">
          <div className="go div"><i className="fab fa-google"></i> <a href='/www.google.com'>google</a></div>
          <div className="fb div"><i className="fab fa-facebook"></i>  Facebook</div>
        </div> */}
      </div>
    </>
  )
}
