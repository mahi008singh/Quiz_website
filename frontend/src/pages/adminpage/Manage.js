import React,{useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import '../../css/adminCss/admin.css'
import { GiHamburgerMenu } from "react-icons/gi";
import PulseLoader from "react-spinners/PulseLoader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDelete } from "react-icons/md";


const Manage = () => {
  const [contactData,setContactData]=useState([])
  useEffect((e)=>{
      const getContactDetails=async()=>{
         try {
          const resp=await fetch('/adminpage/getcontactmsg',{
            method:"GET",
          })
           if(resp.ok){
            const data=await resp.json();
            setContactData(data)
           }else{
            console.log("no msg found")
           }
           console.log("contact Data-> ",contactData)
         } catch (error) {
          console.log(error)
         }
      }

      getContactDetails()
  },[])

  async function deleteContactmsg(id){
        try {
          
       let resp= await fetch(`/adminpage/deleteMsg/${id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          }
          })  
          if(resp){
            toast.success('Message deleted successfully !!',{
              position:"top-right"
            })
        }
       }catch (error) {
          console.log(error)
      }
  }


 const [toggleBar,setToggleBar]=useState(false)

 function toggleSidebar(){
  setToggleBar((prevState)=>!prevState)
 }
  return (
    <section className='dashContainer'>
        <Sidebar togle={toggleBar} />
        <GiHamburgerMenu onClick={toggleSidebar} className='hamIcon' />
        <main className='msgContainer'>
          <ToastContainer style={{fontSize:"1.4rem"}}/>
            <h2 style={{textAlign:"center",fontSize:"2rem"}}>Users query</h2>
            <section>
          <div className='msgdivBar'>
            <div>
              <h2><strong>Name</strong></h2>
            </div>
            <div>
              <h2>Email</h2>
            </div>
            <div>
              <h2>Messages</h2>
            </div>
            <div>
                <h2></h2>
            </div>
          </div>
          {    (contactData.length==0)
                ?
                // <h2>"No messages present !!"</h2>
                
                <div className='loaderDiv'>
                   <PulseLoader color="#36d7b7" size={20}/>  
                </div>
                :
                    contactData.map((data)=>{
                 
                      return(
                        <>
                          <div className='msgdivBar'>
                              <div>
                                 <h2>{data.name}</h2>
                              </div>
                              <div>
                                 <h2>{data.email}</h2>
                              </div>
                              <div>
                                 <p>{data.msg}</p>
                              </div>
                              <div>
                                <MdDelete className='removeBtn'  onClick={()=>deleteContactmsg(data._id)}/>
                              </div>
                          </div>
                        </>
                      )
                    })
                 }
            </section>
        </main>
    </section>
  )
}

export default Manage