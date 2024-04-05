import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../css/adminCss/uploadques.css'
import ClipLoader from "react-spinners/ClipLoader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Subcatdata from '../../Api/SubcatData';

const Upload = () => {
    
    const [uploadData,setUploadData]=useState({
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        category:"",
        subcategory:"",
        tag:"",
        companyName:"",
        answer:"",

    });
    const [subCategory,setSubCategory]=useState([])
    const [catIndex,setCatIndex]=useState(0)

    useEffect(()=>{
        setSubCategory(Subcatdata[catIndex-1])
    },[uploadData.category])


    
// -----------------------------(input_handling)--------------------------
//------------------------------------------------------------------------
let name,value
    const handleInputs=(e)=>{
        setCatIndex(e.target.selectedIndex)
        name=e.target.name;
        value=e.target.value
        setUploadData({...uploadData,[name]:value})
    }
    const [isUploading,setIsUploading]=useState(false)

  const uploadQues= async(e)=>{
    setIsUploading(true)
    e.preventDefault()
  
     try {
        const {question,optionA,optionB,optionC,optionD,category,subcategory,tag,answer,companyName}=uploadData
        if(!question||!optionA||!optionB||!optionC||!optionD||!category||!subcategory||!answer){
            toast.warning("Plz fill the complete detail !!",{
                position: "top-center",
            })
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
              category,
              subcategory,
              tag,
              companyName,
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
                    category:"",
                    subcategory:"",
                    tag:"",
                    companyName:"",
                    answer:"",
            
                }
            )
            setIsUploading(false)
            toast.success("Uploaded Successfully!!",{
                position: "top-center",
            })
            document.querySelector('.chooseSelect').selected=true;
            document.querySelector('.chooseSelect2').selected=true;
            document.querySelector('.chooseSelect3').selected=true;


        }else{
            toast.error("Something went wrong!!",{
                position: "top-center",
            })
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
            <ToastContainer style={{fontSize:"1.4rem"}}/>
             <h2 style={{textAlign:"center",fontSize:"2rem"}}>Upload all your question from here</h2>
             <form method='POST'>
             <section>
                <div className='chooseUpload'>
                     <div>
                     <h2>Choose Categories</h2>
                    <select name="category" onChange={handleInputs} id="">
                        <option className='chooseSelect' value="" selected>Choose</option>
                        <option value="Quantitative Aptitude" >Quantitative Aptitude</option>
                        <option value="Logical Reasoning">Logical Reasoning</option>
                        <option value="Verbal Ability" >Verbal Ability</option>
                        <option value="C/C++" >C/C++</option>
                        <option value="javascript" >javascript</option>
                        <option value="Python" >Python</option>
                        <option value="Java" >Java</option>
                        <option value="cn">Cn</option>
                        <option value="oops">Oops</option>
                        <option value="dbms" >Dbms</option>
                        <option value="os" >OS</option>
                        <option value="SQL" >SQL</option>
                    </select>
                     </div>
                    <div>
                        <h2>Choose sub-categories</h2>

                        <select name="subcategory" onChange={handleInputs} id="">
                            <option className='chooseSelect2' value="" selected>Choose</option>
                            {
                                subCategory?.map((elem)=>{
                                    return(
                                        <>
                                            <option  value={elem.title}>{elem.title}</option> 
                                        </>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <div>
                        <h2>Choose tag</h2>
                        <select name="tag" onChange={handleInputs} >
                            <option className='chooseSelect3' selected>Choose</option>
                            <option value="none">none</option>
                            <option value="company">company</option>
                        </select>
                    </div>
                    <div>
                        <h2>Comapny name</h2>
                        <input className='companyInp' name="companyName" placeholder='enter company' value={uploadData.companyName} onChange={handleInputs} />
                           
                        
                    </div>
                   
                </div>
                <div className='addUpload'>
                
                    <div>
                    <label htmlFor="">Your question</label> <br/>
                    <textarea required  name='question' id='quesInput' placeholder="type your question..." value={uploadData.question} onChange={handleInputs} type="text" > </textarea> <br />
                   
                    </div>
                    <div>
                        <label htmlFor="">Option A)</label> <br/>
                        <input name='optionA'  placeholder='type option' onChange={handleInputs} value={uploadData.optionA} type="text" /> <br/>
                        <label htmlFor="">Option B)</label> <br/>
                        <input  name='optionB' placeholder='type option' onChange={handleInputs} value={uploadData.optionB}  type="text" /><br />
                    </div>
                    <div>
                        <label htmlFor="">Option C)</label><br/>
                        <input  name='optionC' placeholder='type option' onChange={handleInputs} value={uploadData.optionC}  type="text" /> <br/>
                        <label htmlFor="">Option D)</label><br/>
                        <input  name='optionD' placeholder='type option' onChange={handleInputs} value={uploadData.optionD}  type="text" />
                    </div>
                    <div>
                        <label htmlFor="" >Answer</label><br/>
                        <input className='ansInput' placeholder='type correct option a,b,c or d' name='answer' type='text' onChange={handleInputs} value={uploadData.answer}/>
                    </div>
                    <button  className='uploadBtn Signup' onClick={uploadQues} >
                    {
                        (isUploading)?<ClipLoader color="#fff" size={18} />
                        :"Upload"
                    }
                    </button>
                    
                </div>
         
             </section>
             </form>
        </main>
        </section>
        
    </>
  )
}

export default Upload