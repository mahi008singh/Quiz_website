import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const navigate=useNavigate();
    const {Component}=props
    useEffect(()=>{
        let loginToken=localStorage.getItem("loginToken");
        
        if(!loginToken){
            navigate('/login')
        }
    
    },[])
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected