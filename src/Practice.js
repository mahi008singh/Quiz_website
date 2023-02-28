import React,{useState,useContext} from 'react';
import {NavLink} from "react-router-dom"
import './css/style.css'
import Quants from './Api/Maincateg';
import { QuizContext } from './Context/QuizHolder';


const Practice = () => {
   const [data1,setData1]=useState(Quants.data1);
   const [data2,setData2]=useState(Quants.data2);
   const [data3,setData3]=useState(Quants.data3);

   const { data,setData }=useContext(QuizContext)

    return (
        <>
            <section class="subjects">

                <h1 class="heading">CATEGORIES</h1>
                <br />

                <h1 class="h1">Coding</h1>
                <br />
                <br />
                <div class="box-container">

                   {
                       data1.map((elem)=>{
                           return(
                               <>
                                   <div class="box">
                                       <NavLink to={elem.link} onClick={()=>setData(elem.apiNum)} target="_blank">
                                           <img src={elem.img} alt="" />
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
                <h2 class="h1">Apti/Reas</h2>
                <br /> <br />
                <div class="box-container">
                    {
                        data2.map((elem)=>{
                            return(
                                <>
                                    <div class="box">
                                        <NavLink to={elem.link} onClick={()=>setData(elem.apiNum) }  >
                                            <img src="images/subject-icon-1.png" alt="" />
                                            <h3 class="Quant_h1" >{elem.title}</h3>
                                        </NavLink>

                                    </div>
                                </>
                            )
                        })
                    }

                </div>
                {/* <!-- ------------------computer subjects--------------- --> */}
                <br /> <br /> <br /> <br /> <br />

                <h2 class="h1">Cse Subjects</h2>
                <br /> <br />
                <div class="box-container">

                   {
                       data3.map((elem)=>{
                           return(
                               <>
                                   <div class="box">
                                       <a href={elem.link} target="_blank">
                                           <img src="images/subject-icon-1.png" alt="" />
                                           <h3>{elem.title}</h3>
                                       </a>

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
