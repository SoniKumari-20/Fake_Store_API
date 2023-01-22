import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const ProtectedRoutes = ({Component}) => {
const navigate = useNavigate();

    useEffect(()=>{
        let login = localStorage.getItem("login")
        if(!login){
            navigate('/Login')
        }
    })
  return (
    <div>
       <Component />
    </div>
  )
}
