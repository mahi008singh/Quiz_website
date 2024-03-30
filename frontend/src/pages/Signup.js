import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import '../css/sign_up.css'
import '../css/style.css';
import svg1 from '../images/prep_sign.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import ClipLoader from "react-spinners/ClipLoader";

const Signup = () => {
    const navigate=useNavigate()
    const [userdata, setUserData] = useState({
        name: "", 
        email: "", 
        password: ""
    });
    const [signupLoad,setSignupLoad]=useState(false)
    let name, value;
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
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({...userdata, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        setSignupLoad(true)
        const { name, email, password } = userdata;
        if(!name||!email||!password){
            toast.warning("Plz fill the complete details !!",{
                position: 'top-right',
            })
            setSignupLoad(false)
            return;
        }
        const resp = await fetch('/userAuth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        })

        const data = await resp.json();

        // localStorage.setItem("usersignup",JSON.stringify(data))
        if (!data) {
            toast.error("Invalid registration",{
                position: 'top-right',
            })
            setSignupLoad(false)

        } else {
            toast.success("you are registered successfully",{
                position: 'top-right',
            })
            setSignupLoad(false)
            window.alert("Check your email for verification link")
        }
        navigate('/login')

    }
    return (
        <>
            <section className="signup_sec">
                <ToastContainer style={{fontSize:"1.4rem"}}/>
                <div className='loginImgDiv'>
                    <img src={svg1}/>
                </div>
                <div className="signup_box">
                    <h1>Sign up </h1>

                    <form method="POST">
                        <div className="txt_field">
                            <input name='name' value={userdata.name} onChange={handleInputs} type="text" required />
                            <label>Name</label>
                        </div>

                        <div className="txt_field">
                            <input name='email' value={userdata.email} onChange={handleInputs} type="text" required />
                            <label>Email</label>
                        </div>

                        <div className="txt_field">
                            <input name='password' value={userdata.password} onChange={handleInputs} type={
                                showPassword ? "text" : "password"} required />
                            <div id="check" value={showPassword}
                             onClick={handlerShowPassword} 
                             > 
                             {showPassword ? <AiOutlineEye className='passwordEye'/> : <AiOutlineEyeInvisible className='passwordEye'/> }       
                        </div>
                            <label>Password</label>
                        </div>

                        <div>
                            <button className='signup_btn' onClick={postData}>
                            {
                               (signupLoad)?<ClipLoader color="#fff" size={22}/>: "submit"
                            }
                            </button>
                        </div>
                    </form>

                    <div class="signup_link">
                        Already have an account?
                        <NavLink to={'/Login'}>Login</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
