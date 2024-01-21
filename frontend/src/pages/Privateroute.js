import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Privateroute = () => {
    const navigate=useNavigate();
    let isAdmin=localStorage.getItem("admin")
    let loginToken=localStorage.getItem("loginToken");
    
        if(isAdmin&&loginToken){
            return <Outlet/>
        }else{
            return <h1>"Not an admin, plz! login as admin"</h1>
        }
    
}

export default Privateroute