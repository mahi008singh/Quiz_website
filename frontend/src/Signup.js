import React,{useState} from 'react';
import axios from "axios";
import {NavLink} from 'react-router-dom';
import './css/sign_up.css'
import './css/style.css'
const Signup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const submit=(e)=>{
      
            e.preventdefault();
            axios.post("http://127.0.0.1:5500/register",{
                name:name,
                email:email,
                password:password
            }).then(result=>{
                console.log(result.data)
            }).catch(err=>{
                console.log(err);
            })
    }
    return (
        <>
            <section className="signup_sec">
                <div className="signup_box">
                    <h1>Sign up </h1>
                    <form  method="POST">
                        <div className="txt_field">
                            <input name='name' value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required />
                            <label>Name</label>
                        </div>

                        <div class="txt_field">
                            <input name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" required />

                            <label>Email</label>
                        </div>

                        <div class="txt_field">
                            <input name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" required />
                            <label>Password</label>
                        </div>

                        <div>
                            <input onClick={submit} type="submit" />
                            {/* <div class="signup_link">
                                Already have an account?(Instructor)
                                <a href="instructor_login.html">Login</a>
                            </div> */}
                            <div class="signup_link">
                                Already have an account?
                                    <NavLink to={'/Login'}>Login</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup
