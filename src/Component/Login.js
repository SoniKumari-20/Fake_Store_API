import React, { useEffect } from 'react'
import { useState } from 'react'
import { getLoginUser } from './api';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


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
        swal({
          title: "login successfully",
          text: "You Logged In SuccessFully!",
          icon: "success",
          button: "Done!",
        })

      }
    }
    ).catch(() => {
      swal({
        title: "Invalid Credentials!",
        text: "Please check Your  username & Password!",
        icon: "error",
        button: "Oops!",
      })
    })
  }

  const handleCollectData = (event) => {
    let { name, value } = event.target;
    console.log(event)
    setUserData(state => ({
      ...state,
      [name]: value,

    }))
  }




  return (
    
    <>
      <div className='form div'>
        <h3>Login Here</h3>
        <input typeof="text" placeholder="user-name" name="username" id="username" value={userData.username} onChange={handleCollectData} />
        <input type="password" placeholder="password" name='password' id="password" value={userData.password}
          onChange={handleCollectData} />
        <button type='submit' onClick={getLogin} >Log In</button>
        <small>hint:- username : johnd, password : m38rmF$</small>
        {/* <div className="social div">
          <div className="go div"><i className="fab fa-google"></i> <a href='/www.google.com'>google</a></div>
          <div className="fb div"><i className="fab fa-facebook"></i>  Facebook</div>
        </div> */}
      </div>
      {/* <div><button onClick={() =>all()}>add</button></div> */}
    </>
  )
}
