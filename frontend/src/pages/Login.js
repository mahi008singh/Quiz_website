import React, { useContext } from 'react';
import { useState ,useEffect} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import '../css/sign_up.css'
import '../css/style.css'
import { QuizContext } from '../Context/QuizHolder';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import PulseLoader from "react-spinners/PulseLoader";


const Login = () => {
const {showuserName,setShowuserName}=useContext(QuizContext)
const navigate=useNavigate()

// useEffect(() => {
//     localStorage.setItem('userName', JSON.stringify(showuserName));
//   }, [showuserName]);

const [loginData,setLoginData]=useState({
    email:"",
    password:""
    
})

let name,value
const [showPassword,setShowPassword]=useState(false);
const [icon,setIcon]=useState(AiOutlineEyeInvisible)
const handlerShowPassword=()=>{
    if(showPassword===true){

        setShowPassword(false);
        setIcon(AiOutlineEyeInvisible)
    }
    else {
        setShowPassword(true);
        setIcon(AiOutlineEye);
    }
}
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
        if(!email||!password){
            alert("Plz fill the complete details !!")
            return;
        }
        
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
    if(data.msg==="Not a registered user"){
        alert("not a registered user")
        setLoginData({
            email:"",
            password:""
        })
        return;
    }
    if(data.msg==="Invalid email or password !!"){
        alert("Invalid Credentials")
        setLoginData({
            email:"",
            password:""
        })
       
    }else{
        // setIsLoggedIn(true)
       
        if(data.user.is_admin===0){
            alert("Login success...")
            localStorage.setItem('userName',JSON.stringify(data.user.name))
            localStorage.setItem('user_id',JSON.stringify(data.user._id))
            localStorage.setItem("userDATA",JSON.stringify(data.user))

            setShowuserName(() => {
                const storedState = data.user;
                return storedState ? storedState : ' ';
            })
            navigate('/companies')
        }else{
            // userAuthentication()
            localStorage.setItem('userName',JSON.stringify(data.user.name))
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
             {
                
             (0)?   <PulseLoader color="#36d7b7" size={20}/>  
             :
              <>
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
                            <input name='password' value={loginData.password} onChange={handleInputs} type={
                                showPassword ? "text" : "password"}  required />
                        <div id="check" value={showPassword}
                             onClick={handlerShowPassword} 
                             > 
                             {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/> }       
                        </div>
                            <label>Password</label>

                        </div>

                       <div>
                           <button className='signup_btn' onClick={postLogin}>submit</button>
                       </div>
                   </form>

                   <div className="signup_link">
                       <p style={{fontSize:"1.6rem"}}><NavLink to={'/Sendotp'}>forget password?</NavLink></p>
                       Not registered yet?
                       <NavLink to={'/Signup'}>Signup</NavLink>
                   </div>
               </div>
              </>
             }
            </section>
        </>
    )
}

export default Login
