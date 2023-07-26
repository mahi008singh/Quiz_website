import React from 'react'
import '../css/contact.css'
const Contact = () => {
  return (
    <>
            <div data-aos="fade-up" className="contact_div">
                <h1>Ask here</h1>
                <form action="https://formspree.io/f/xnqyqkgj" method="POST">
                    <input name="name" type="text" required placeholder="your name" />
                    <br />

                    <input name="email" type="email" required placeholder="your email" />
                    <br />
                    <textarea name="tarea" placeholder="your message" type="text" />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
    </>
  )
}

export default Contact