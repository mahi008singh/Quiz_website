import React,{useState,useContext, useEffect} from 'react'
import { QuizContext } from '../Context/QuizHolder';
import '../css/profile.css'
const Profile = () => {
  const {showuserName,setShowuserName}=useContext(QuizContext)
 

  return (
    <div className='userProfileContainer'>
        <h1>Hello,{localStorage.getItem("userName")}  Welcome to your Profile</h1><br/> <br/>
        <section className='profileSection'>
              <div className='leftDiv'>
                    <img  src={require('../images/profile_icon.png')}/>
                    <div className='userName'>
                       <h2>{JSON.parse(localStorage.getItem('userDATA')).name}</h2>
                       <p>Student</p>
                       <button>Edit Profile</button>
                    </div>
              </div>
             
              <div className='rightDiv'>
                   
                    <div className='aboutDiv'>
                      <h2>About</h2>
                          <ul>
                            <li>
                              <span>User Id : </span>
                              <span>{JSON.parse(localStorage.getItem('userDATA')).userId} (auto generated)</span>
                            </li>
                            <li>
                               <span>Name :</span>
                               <span>{JSON.parse(localStorage.getItem('userDATA')).name}</span>
                            </li>
                            <li> 
                              <span>Email :</span>
                               <span>{JSON.parse(localStorage.getItem('userDATA')).email}</span>
                              </li>
                            <li>
                              <span>Verified :</span>
                               <span>{JSON.parse(localStorage.getItem('userDATA')).is_verified?"Yes":"No"}</span>
                              </li>
                            <li>
                              <span>Phone :</span>
                             <span>{JSON.parse(localStorage.getItem('userDATA')).mobile?JSON.parse(localStorage.getItem('userDATA')).mobile:"Not provided"}</span>
                             </li>
                          </ul>
                    </div>
              </div>
        </section>
    </div>
  )
}

export default Profile