import React from 'react'
import './css/sign_up.css'
import './css/style.css'
const Signup = () => {
    return (
        <>
            <section className="signup_sec">
                <div className="signup_box">
                    <h1>Sign up </h1>
                    <form action="/register" method="POST">
                        <div className="txt_field">
                            <input name='name' type="text" required />

                            <label>Name</label>
                        </div>

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
                            <div class="signup_link">
                                Already have an account?(Instructor)
                                <a href="instructor_login.html">Login</a>
                            </div>
                            <div class="signup_link">
                                Already have an account?(Student)
                                    <a href="/login">Login</a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup
