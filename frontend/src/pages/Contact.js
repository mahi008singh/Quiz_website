import React from 'react'
import '../css/contact.css'
import { useState } from 'react'
import axios from "axios"
const Contact = () => {
       const [contactData,setContactData]=useState({
          name:"",
          email:"",
          msg:""
       })

       const submitMsg=async(e)=>{
          e.preventDefault();
          
          const {name,email,msg}=contactData;
          if(!name||!email||!msg){
            alert("input field is empty!!")
            return;
          }

          const resp=await fetch('/adminpage/postcontactmsg',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  name,email,msg
                })
          })
          let data=await resp.json();
          if ( data) {
          alert("sent successfully !!")
          setContactData({
            name:"",
            email:"",
            msg:""
          })
          } else {
              alert("Something went wrong")
          }
            
     
       }

      

       let name,value;
       const handleInput=(e)=>{
        name=e.target.name;
        value=e.target.value
        setContactData({...contactData,[name]:value});

       }
  return (
    <>
            <div data-aos="fade-up" className="contact_div">
                <h1>Ask here</h1>
                <form method="POST">
             
                    <input name="name" onChange={handleInput} value={contactData.name}  type="text" required placeholder="your name" />
                    <br />
                    <input name="email" onChange={handleInput} value={contactData.email} type="email" required placeholder="your email" />
                    <br />
                    <textarea name="msg" onChange={handleInput} value={contactData.msg} placeholder="your message" type="text" />
                    <br />
                    <button type="submit" onClick={submitMsg}>Submit</button>
                </form>
            </div>
    </>
  )
}

export default Contact