import React from 'react';
import { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import '../css/sign_up.css'
import '../css/style.css'

const Login = () => {

const navigate=useNavigate()
const [loginData,setLoginData]=useState({
    email:"",password:""
    
})

let name,value

const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value
    setLoginData({...loginData,[name]:value})
}
// --------------(post_login)-----------
const postLogin=async (e)=>{
   try{
    const {email,password}=loginData
    e.preventDefault();
    let resp=await fetch('/userAuth/login/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",   
        },
        body:JSON.stringify({
            email,
            password
        })
    })
    let data=await resp.json()
    localStorage.setItem("user",JSON.stringify(data))
    console.log(data);

    navigate('/')
   }catch(err){
    console.log("->"+err)
   }
}
    return (
        <>
            <section className="signup_sec">
                <div className="login_box">
                    <h1>Login</h1>
                    <form method="POST">
                        <div className="txt_field">
                            <input name='email' value={loginData.email} onChange={handleInputs} type="text" required />

                            <label>Email</label>
                        </div>

                        <div className="txt_field">
                            <input name='password' value={loginData.password} onChange={handleInputs} type="password" required />
                            <label>Password</label>
                        </div>

                        <div>
                            <button onClick={postLogin}>submit</button>
                        </div>
                    </form>

                    <div className="signup_link">
                        Not registered yet?
                        <NavLink to={'/Signup'}>Signup</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
