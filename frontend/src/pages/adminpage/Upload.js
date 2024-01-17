import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Upload = () => {
    
    const [uploadData,setUploadData]=useState({
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        answer:"",

    });

    let name,value

    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value
        setUploadData({...uploadData,[name]:value})
    }


  const uploadQues= async(e)=>{

    e.preventDefault()
  
     try {
        const {question,optionA,optionB,optionC,optionD,answer}=uploadData
        if(!question||!optionA||!optionB||!optionC||!optionD||!answer){
            alert("Plz fill the complete detail !!")
            return;
        }
        let resp=await fetch('/adminpage/uploads',{
         method:"POST",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
              question,
              optionA,
              optionB,
              optionC,
              optionD,
              answer
         })
        })
        
        if(resp){
            setUploadData(
                {
                    question:"",
                    optionA:"",
                    optionB:"",
                    optionC:"",
                    optionD:"",
                    answer:"",
            
                }
            )
            alert("upload Successfull")
        }else{
            alert("something went wrong")
        }
        
     } catch (error) {
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
        <main className='uploadContainer'>
             <h2 style={{textAlign:"center",fontSize:"2rem"}}>Upload all your question from here</h2>
             <section>
                <div className='chooseUpload'>
                    <h2>Choose Categories for upload</h2>
                    <select name="" id="">
                    <option value="">Choose</option>
                    <option value="">Aptitude</option>
                    <option value="">Reasoning</option>
                    <option value="">verbal</option>
                    </select>
                </div>
                <div className='addUpload'>
                <form method='POST'>
                    <label htmlFor="">Your question</label>
                    <input required  name='question' id='quesInput' placeholder="type your question..." value={uploadData.question} onChange={handleInputs} type="text" /> <br />
                    <br />
                    <div>
                        <label htmlFor="">Option A)</label> 
                        <input name='optionA'  placeholder='type option' onChange={handleInputs} value={uploadData.optionA} type="text" /> <br/>
                        <label htmlFor="">Option B)</label> 
                        <input  name='optionB' placeholder='type option' onChange={handleInputs} value={uploadData.optionB}  type="text" /><br />
                    </div>
                    <div>
                        <label htmlFor="">Option C)</label>
                        <input  name='optionC' placeholder='type option' onChange={handleInputs} value={uploadData.optionC}  type="text" /> <br/>
                        <label htmlFor="">Option D)</label>
                        <input  name='optionD' placeholder='type option' onChange={handleInputs} value={uploadData.optionD}  type="text" />
                    </div>
                    <div>
                        <label htmlFor="" >Answer</label>
                        <input className='ansInput' placeholder='type correct option a,b,c or d' name='answer' type='text' onChange={handleInputs} value={uploadData.answer}/>
                    </div>
                    <button  className='uploadBtn Signup' onClick={uploadQues} >Upload</button>
                    </form>
                </div>
         
             </section>
        </main>
        </section>
    </>
  )
}

export default Upload