import React, { useContext } from 'react';
import { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import '../css/sign_up.css'
import '../css/style.css'
import { QuizContext } from '../Context/QuizHolder';

const Login = () => {
const {setIsLoggedIn}=useContext(QuizContext)
const navigate=useNavigate()

const [loginData,setLoginData]=useState({
    email:"",
    password:""
    
})

let name,value

const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value
    setLoginData({...loginData,[name]:value})
}

// --------------(post_login)-----------

const postLogin=async (e)=>{
 
    e.preventDefault();
    try{
        const {email,password}=loginData;
        
        let resp= await fetch('/userAuth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })

        });
        
    
    let data=await resp.json()
    // stroing the jwt token into localStorage
    localStorage.setItem("loginToken",JSON.stringify(data.token))
    console.log("loginData-->",data);
    if(!data){
        alert("Invalid Credentials")
        setLoginData({
            email:"",
            password:""
        })
       
    }else{
        // setIsLoggedIn(true)
        if(data.msg.is_admin===0){
            alert("Login success...")
            navigate('/companies')
        }else{
            // userAuthentication()
            localStorage.setItem("admin",true)
            navigate('/admin/dashboard')
        }
    }
    
   }catch(err){
    console.log("error -->"+err)
   }

}
    return (
        <>
            <section className="signup_sec">
                <div className='loginImgDiv'>
                        <img src={require('../images/login_img.avif')}/>
                </div>
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
                            <button className='signup_btn' onClick={postLogin}>submit</button>
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
