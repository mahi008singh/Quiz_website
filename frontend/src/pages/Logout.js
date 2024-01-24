import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
const Logout = () => {
    const logoutUser=()=>{
        localStorage.removeItem("admin");
        localStorage.removeItem('userName');
        localStorage.removeItem('userDATA');
        return localStorage.removeItem("loginToken")
    }
   useEffect(()=>{
    logoutUser();
    
   },[logoutUser])

   return <Navigate to="/login"/>
}

export default Logout