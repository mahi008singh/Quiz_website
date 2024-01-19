import React,{useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import '../../css/adminCss/admin.css'
import { GiHamburgerMenu } from "react-icons/gi";


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
            alert("user deleted")
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
            <h1 style={{textAlign:"center",fontSize:"2rem"}}>Users query</h1>
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
                <h2>"No messages present !!"</h2>
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
                              <button onClick={()=>deleteContactmsg(data._id)} className='removeBtn'>remove</button>
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