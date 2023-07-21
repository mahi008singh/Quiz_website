import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/sign_up.css'
import './css/style.css'
const Login = () => {
    return (
        <>
            <section className="signup_sec">
                <div className="login_box">
                    <h1>Login</h1>
                    <form action="/register" method="POST">
                        {/* <div className="txt_field">
                            <input name='name' type="text" required />

                            <label>Name</label>
                        </div> */}

                        <div class="txt_field">
                            <input name='email' type="text" required />

                            <label>Email</label>
                        </div>

                        <div class="txt_field">
                            <input name='password' type="password" required />
                            <label>Password</label>
                        </div>

                        <div>
                            <input type="submit" />
                            {/* <div class="signup_link">
                                Already have an account?(Instructor)
                                <a href="instructor_login.html">Login</a>
                            </div> */}
                            <div class="signup_link">
                                Not registered yet?
                                    <NavLink to={'/Signup'}>Signup</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
