import React, { useEffect, useState, useContext } from 'react'
import {NavLink} from "react-router-dom"
// import '../css/companies.css'
import '../css/style.css'
import Quants from '../Api/Maincateg';
import { QuizContext } from '../Context/QuizHolder';
const Companies = () => {
    
    const { data,setData }=useContext(QuizContext)
    const [render,setRender]=useState(Quants.data4);
    
  return (
    
    <section className='subjects'>
         <h1>Welcome, {JSON.parse(localStorage.getItem("userName"))} !!</h1>
         <h1 style={{fontSize:"3rem", textAlign:"center"}}>
          Company specific question
         </h1>
         <br/>
         <br/>
         <br/>
         <br/>
         <div class="box-container">
                    {
                        render.map((elem)=>{
                            return(
                                <>
                                    <div class="box">
                                        <NavLink to={elem.link} onClick={()=>setData(elem.apiNum)}  >
                                            <img src={require('../images/subject-icon-1.png')} alt="" />
                                            <h3 class="Quant_h1" >{elem.title}</h3>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        })
                    }

          </div>
    </section>
  )
}

export default Companies