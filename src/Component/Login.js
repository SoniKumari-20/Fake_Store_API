import React from 'react'

export const Login = () => {
  return (
    <>
      <div className="background div">
        {/* <div className="shape"></div> */}
        {/* <div className="shape"></div> */}
      </div>
      <div className='form div'>
        <h3>Login Here</h3>
        <label forhtml="username">Username</label>
        <input typeof="text" placeholder="Email or Phone" id="username" />
        <label forhtml="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button>Log In</button>
        <div className="social div">
          <div className="go div"><i className="fab fa-google"></i> <a href='/www.google.com'>google</a></div>
          <div className="fb div"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </div>
    </>
  )
}
