import React, { useEffect, useState,useRef } from 'react'
import Sidebar from './Sidebar'
import '../../css/adminCss/admin.css'
import { RiTestTubeFill } from 'react-icons/ri'
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {

  const [userData,setUserData]=useState([])
 
  useEffect((e)=>{
    const getUserData=async()=>{
      try{
       const resp=await fetch('http://localhost:5500/adminpage/getUsers',{
         method:"GET",  
        
        }) ;
        // console.log(resp)
        if (resp.ok) {
          let data = await resp.json();
          setUserData(data)
          // console.log(data)
        }else{
          setUserData(["There is no user"])
        }
   
      }catch(err){
         console.log(err)
      }
      
     }
    // console.log("useEffect called")
    getUserData()
   return ()=>{

   }
 },[])
  const [toggleBar,setToggleBar]=useState(false)

 function toggleSidebar(){
  setToggleBar((prevState)=>!prevState)
 }
  return (
    <>
      <section className='dashContainer'>
        <Sidebar togle={toggleBar} />
        <GiHamburgerMenu onClick={toggleSidebar} className='hamIcon' />

        <main className='dashmainContainer'>
            <h2 className='adminh2'>Admin dashboard</h2>
            <section>
                <div className='userWidget'>
                      <div>
                       <p> Total users</p>
                        <h3>
                          {userData.length}
                        </h3>
                        </div>
                      <div>
                        <p>Total questions</p>
                        <h2>
                          433
                        </h2>
                      </div>
                </div>
                <div className='registeredUser'>
                  {
                        userData.map((elem,ind)=>{
                          return(
                            <div key={ind} className='userDiv'>
                              <h3>{elem.name}</h3>
                              <p>{elem.email}</p>
                              <button>Remove</button>
                            </div>
                          )
                        }) 
                  }
                </div>
            </section>
        </main>
      </section>
    </>
  )
}


export default Dashboard