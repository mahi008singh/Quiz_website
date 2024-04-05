import React,{useState,useContext, useEffect} from 'react';
import {NavLink} from "react-router-dom"
import '../css/style.css'
import Quants from '../Api/Maincateg';
import { QuizContext } from '../Context/QuizHolder';
import {Laptop,Percent,BookOpenCheck} from 'lucide-react'

const Practice = () => {
   const [data1,setData1]=useState(Quants.data1);
   const [data2,setData2]=useState(Quants.data2);
   const [data3,setData3]=useState(Quants.data3);

   const { data,setData,chooseTopic,setChooseTopic,keyTopic,setKeyTopic }=useContext(QuizContext)
    
    useEffect(()=>{
        setKeyTopic(false)
        localStorage.setItem("questionLength","0")
    },[])
    return (
        <>
            <section class="subjects">

                <h1 class="heading">CATEGORIES</h1>
                <br />

                <h1 className="h1">
                 <Laptop style={{marginRight:"1rem"}} />
                    Coding</h1>
                <br />
                <br />
                <div class="box-container">

                   {
                       data1.map((elem)=>{
                           return(
                               <>
                                   <div class="box">
                                       <NavLink to={elem.link} onClick={()=>setData(elem.apiNum)}>
                                           <img  onClick={()=>{
                                                setChooseTopic(elem.title)
                                                setKeyTopic(true)
                                           }}  src={require('../images/subject-icon-1.png')} alt="" />
                                           <h3>{elem.title}</h3>
                                       </NavLink>

                                   </div>
                               </>
                           )
                       })
                   }

                </div>

                {/* <!-- -------------------Apti/Reas--------------------- --> */}

                <br /> <br /> <br /> <br /> <br />
                <h2 class="h1">
                <Percent style={{marginRight:"1rem"}} />
                    Apti/Reas</h2>
                <br /> <br />
                <div class="box-container">
                    {
                        data2.map((elem)=>{
                            return(
                                <>
                                    <div class="box">
                                        <NavLink to={elem.link} onClick={()=>setData(elem.apiNum) }  >
                                            <img  onClick={()=>{
                                                setChooseTopic(elem.title)
                                                // setKeyTopic(true)
                                               
                                            }}  src={require('../images/subject-icon-1.png')} alt="" />
                                            <h3 class="Quant_h1" >{elem.title}</h3>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>


                {/* <!-- ------------------CSE subjects--------------- --> */}
                <br /> <br /> <br /> <br /> <br />

                <h2 class="h1">
                <BookOpenCheck  style={{marginRight:"1rem"}} />
                    Cse Subjects</h2>
                <br /> <br />
                <div class="box-container">

                   {
                       data3.map((elem)=>{
                           return(
                               <>
                                   <div class="box">
                                       <NavLink to={elem.link}  onClick={()=>setData(elem.apiNum)}>
                                           <img onClick={()=>{
                                            setChooseTopic(elem.title)
                                            setKeyTopic(true)
                                           }}  src={require("../images/subject-icon-1.png")} alt="" />

                                           <h3>{elem.title}</h3>
                                       </NavLink>

                                   </div>
                               </>
                           )
                       })
                   }  

                </div>

            </section>
       </>
    )
}

export default Practice;
