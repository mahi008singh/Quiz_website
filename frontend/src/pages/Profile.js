import React,{useState,useContext} from 'react'
import { QuizContext } from '../Context/QuizHolder';
import '../css/profile.css'
const Profile = () => {
  const {showuserName,setShowuserName}=useContext(QuizContext)
  return (
    <div className='userProfileContainer'>
        <h1>Hello,{localStorage.getItem("userName")}  Welcome to your Profile</h1><br/> <br/>
        <section className='profileSection'>

        </section>
    </div>
  )
}

export default Profile