import React,{useEffect,useState,useContext} from 'react'
import '../css/cat.css';
import {NavLink} from 'react-router-dom'
import Reasdata from '../Api/Reasoncat.js'
import { QuizContext } from '../Context/QuizHolder';
import { Networkquiz } from '../Context/Quizquestion';

const Categ = () => {
    const { data,setData,choose,setChoose,finalquiz,setFinalquiz,Reasquiz,Aptiquiz } = useContext(QuizContext)
    const [render,setRender]=useState(Reasdata.data1)
    useEffect(()=>{
        if(data==1){
            setRender(Reasdata.data1);
            setFinalquiz(Aptiquiz)
        }
        if(data==2)
        {  setRender(Reasdata.data2);
           setFinalquiz(Reasquiz)
        }
       else if(data==3)
          { 
              setRender(Reasdata.data3)

          }
          else if(data==4)
          { 
              setRender(Reasdata.data4)
              setFinalquiz(Networkquiz)

          }
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
                                  <div className="div_title">
                                   <h2>{elem.title}</h2>
                                     <p>Available ques.{elem.size}</p>
                                  </div>
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
