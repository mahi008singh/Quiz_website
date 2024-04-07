import React, { useContext } from 'react';
import { useState ,useEffect} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import '../css/sign_up.css'
import '../css/style.css';
import svg1 from '../images/prep_login.svg'
import { QuizContext } from '../Context/QuizHolder';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import PulseLoader from "react-spinners/PulseLoader";
import ClipLoader from "react-spinners/ClipLoader";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
const {showuserName,setShowuserName,homeIndex}=useContext(QuizContext)
const navigate=useNavigate()
const [loginLoad,setLoginLoad]=useState(false)
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
    setLoginLoad(true)
    e.preventDefault();
    try{
        const {email,password}=loginData;
        if(!email||!password){
            toast.warning("Plz fill the complete details !!",{
                position: 'top-right',
            })
              setLoginLoad(false)
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
    if(data.msg==="not a registered user"){
        toast.warning("Not a registered user !!",{
            position: 'top-right',
        })
        setLoginData({
            email:"",
            password:""
        })
        setLoginLoad(false)
        return;
    }
    if(data.msg==="Invalid email or password !!"){
        toast.error("Invalid credentials !!",{
            position: 'top-right',
        })
        setLoginData({
            email:"",
            password:""
        })
        setLoginLoad(false)
       
    }else{
        // setIsLoggedIn(true)
       
        if(data.user.is_admin===0){
            toast.success("Login Success !!",{
                position: 'top-right',
            })
            localStorage.setItem('userName',JSON.stringify(data.user.name))
            localStorage.setItem('user_id',JSON.stringify(data.user._id))
            localStorage.setItem("userDATA",JSON.stringify(data.user))

            setShowuserName(() => {
                const storedState = data.user;
                return storedState ? storedState : ' ';
            })
            if(homeIndex==3){
                  navigate('/categ')
            }else{
                navigate('/companies')
            }
            
        }else{
            // userAuthentication()
            localStorage.setItem('userName',JSON.stringify(data.user.name))
            localStorage.setItem("admin",true)
            navigate('/admin/dashboard')
        }
        setLoginLoad(false)
    }
 
   }catch(err){
    console.log("error in login.js -->"+err)
   }
   
}
    return (
        <>
            <section className="signup_sec">
             <ToastContainer style={{fontSize:'1.4rem'}}/>
             {
                
             (0)?   <PulseLoader color="#36d7b7" size={20}/>  
             :
              <>
               <div className='loginImgDiv'>
                       <img src={svg1}/>
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
                             {showPassword ? <AiOutlineEye className='passwordEye'/> : <AiOutlineEyeInvisible className='passwordEye'/> }       
                        </div>
                            <label>Password</label>

                        </div>

                       <div>
                           <button className='signup_btn' onClick={postLogin}>
                            {
                               (loginLoad)?<ClipLoader color="#fff" size={22}/>: "submit"
                            }
                            </button>
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
