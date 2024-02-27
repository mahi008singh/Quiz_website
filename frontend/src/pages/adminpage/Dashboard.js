import React, { useEffect, useState,useRef, useContext } from 'react'
import Sidebar from './Sidebar'
import '../../css/adminCss/admin.css'
import { RiTestTubeFill } from 'react-icons/ri'
import { GiHamburgerMenu } from "react-icons/gi";
import PulseLoader from "react-spinners/PulseLoader";
import { QuizContext } from '../../Context/QuizHolder';  


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {

  const [userData,setUserData]=useState([])
  const {totalquesDB,setTotalquesDb}=useContext(QuizContext)
  useEffect((e)=>{
    const getUserData=async()=>{
      try{
         const resp=await fetch(`/adminpage/getUsers`,{
         method:"GET",  
        
        }) ;

// ----------------(fetching the questions from DB)------------------------

      const resp2=await fetch(`/adminpage/getuploads`,{
          method:"GET",

      })
       let finalData=await resp2.json();
       
       setTotalquesDb(finalData.length)
//------------------------(end)---------------------------
        if (resp.ok) {
          let data = await resp.json();
          setUserData(data)
          console.log(data)
        }else{
          setUserData(["There is no user"])
        }
   
      }catch(err){
         console.log(err)
      }
      
     }
    // console.log("useEffect called")
    getUserData()
  
 },[])

 //delete user function

async function deleteUser(id){
        try {
          const resp=await fetch(`http://localhost:5500/adminpage/delete/${id}`,{
              method:"DELETE",
              headers:{
                "Content-Type":"application/json"
              }
          })

          if(resp){
            toast.success("User deleted !!",{
              position: 'top-right',
          })
              // window.location.reload()
          }
        } catch (error) {
          toast.error(error,{
            position: 'top-right',
        })
          console.log(error)

        }
 }


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
        <ToastContainer style={{fontSize:"1.4rem"}}/>
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
                        <h3>
                          {totalquesDB}
                        </h3>
                      </div>
                </div>
                <div className='registeredUser'>
                  {
                    (userData.length===0)?  
                    <div className='loaderDiv'>
                        <PulseLoader color="#36d7b7" size={20}/>  
                    </div>
                    :  userData.map((elem,ind)=>{
                          return(
                            <div key={ind} className='userDiv'>
                              <h3>{elem.name}</h3>
                              <span style={{color:"red"}}>
                                {
                                  (elem.is_verified==1)?
                                  <p style={{color:"green"}}>verified</p>
                                  :<p style={{color:"red"}}>Not verified</p>
                                }
                              </span>
                              <p>{elem.email}</p>
                              <button onClick={()=>deleteUser(elem._id)}>Remove</button>
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