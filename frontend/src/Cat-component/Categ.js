import React,{useEffect,useState,useContext} from 'react'
import '../css/cat.css';
import {NavLink} from 'react-router-dom'
import Reasdata from '../Api/Reasoncat.js'
import { QuizContext } from '../Context/QuizHolder';

const Categ = () => {
    const { data,setData,choose,setChoose } = useContext(QuizContext)
    const [render,setRender]=useState(Reasdata.data1)
    useEffect(()=>{
        if(data==2)
          setRender(Reasdata.data2)
       else if(data==3)
           setRender(Reasdata.data3)
    },[])

    return (
        <>
        
            <div class="reasoning">
                <h1 class="logical_h1">{data==1?"Aptitude":data==2?"Reasoning":"Verbal"}</h1>
            </div>

            <section class="reas_category">
                {
                    render.map((elem)=>{
                        return(
                            <>
                                <div>
                                    <h1>{elem.title}</h1>
                                    <NavLink to={elem.link}> <button onClick={()=>setChoose(elem.apiNum)} class="btn_">Go to quiz</button></NavLink>
                                </div>
                            </>
                        )
                    })
                }

            </section>
        </>
    )
}

export default Categ
