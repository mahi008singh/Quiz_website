import React, { useState } from 'react'
import '../css/sendotp.css'
import { useNavigate } from 'react-router-dom'
const Sendotp = () => {
    const navigate=useNavigate()
    const [generateOtp,setGenerateOtp]=useState(true)
    const [enterEmail,setEnterEmail]=useState('')
    const [changePass,setChangePass]=useState({
        email:"",
        otpcode:"",
        password:""
    })

let name, value;
    const handleInputs=(e)=>{
         name=e.target.name;
         value=e.target.value;
         setChangePass({...changePass,[name]:value})
    }

    const updatePass=async(e)=>{
          const {email,otpcode,password}=changePass
          e.preventDefault();
          const resp=await fetch('/userAuth/changePassword',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,otpcode,password
                })
          })
          let data=await resp.json();
          if(data){
              alert("Password changed successfully")
              navigate('/login')
          }else{
              alert("Something went wrong")
          }
    }

    const sendOtp= async(e)=>{
        e.preventDefault();
        let resp=await fetch('/userAuth/generateOtp',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               email:enterEmail,
            })
        })
        let data=await resp.json();
        console.log(data)
        if(data.msg==="Email id not exists"){
            alert("Enter valid email !!")
        }else{
            alert("otp generated successfully")
            setGenerateOtp(false)
        }
        
    }

  return (
    <>
       {
        generateOtp?  <section className='sendOTP'>
          <form method="POST">
          <h1>Reset Password</h1>
              <div>
                  
                  <label htmlFor="">Email</label> <br /> <br />
                  <input required name='email' value={enterEmail} onChange={(e)=>setEnterEmail(e.target.value)} type="text" placeholder='enter your email'/>
                  
              </div>
              <div> 
                  <button onClick={sendOtp}>Send Otp</button>
              </div>
          </form>
  </section>
:
  <section className='sendOTP'>
          <form method="POST">
          <h1>Change your Password</h1>
              <div>
                 <label htmlFor="">Email</label> <br /> <br />
                  <input name='email' value={changePass.email} onChange={handleInputs} type="text" placeholder='enter your email'/><br /> <br />
                  <label htmlFor="">Otp code</label> <br /> <br />
                  <input name='otpcode' value={changePass.otpcode} onChange={handleInputs} type="text" placeholder='enter valid 4-digit otp'/>
                  <br /> <br />
                  <label htmlFor="">New Password</label> <br /> <br />
                  <input name='password' value={changePass.password} onChange={handleInputs} type="password" placeholder='enter your new password !!' />
              </div>
              <div>
                  <button onClick={updatePass}>Update</button>
              </div>
          </form>
  </section>
       }
    </>
  )
}

export default Sendotp