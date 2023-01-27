import React, { useEffect } from 'react'
import { useState } from 'react'
import { getLoginUser } from './api';


export const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  

  const getLogin = async () => {
         getLoginUser(userName, password).then((res) =>localStorage.setItem("Token",res.data.token)
         ).catch((err => {
         console.log([])
         }))
  }

useEffect(() => {
  getLogin()
}, [])   
       

  


  return (
    <>
      <div className="background div">
        {/* <div className="shape"></div> */}
        {/* <div className="shape"></div> */}
      </div>
      <div className='form div'>
        <h3>Login Here</h3>
        <label forhtml="username">Username</label>
        <input typeof="text" placeholder="Email or Phone" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <label forhtml="password">Password</label>
        <input type="password" placeholder="Password" id="password"  value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={() => getLogin(userName,password)}>Log In</button>
        <div className="social div">
          <div className="go div"><i className="fab fa-google"></i> <a href='/www.google.com'>google</a></div>
          <div className="fb div"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </div>
    </>
  )
}
