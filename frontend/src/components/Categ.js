import React,{useEffect,useState,useContext} from 'react'
import '../css/cat.css';
import {NavLink} from 'react-router-dom'
import Reasdata from '../Api/Reasoncat.js'
import { QuizContext } from '../Context/QuizHolder';
import { Networkquiz } from '../Context/Quizquestion';

const Categ = () => {
    const {keyTopic,totalquesDB,setTotalquesDb, chooseTopic,data,setData,
        choose,setChoose,finalquiz,setFinalquiz,Reasquiz,
        Aptiquiz,Verbalquiz,Cquiz,topsize,setTopsize,TCS,
        COGNIZANT,WIPRO,INFOSYS,availableQues,setAvailableQues } = useContext(QuizContext)
    const [render,setRender]=useState(Reasdata.data1)

    
    localStorage.removeItem('reviewResult');
    
    const fetchDBques= async()=>{
            const resp=await fetch(`/adminpage/getuploads`,{
                method:"GET",

            })
             let finalData=await resp.json();
             if(keyTopic){
                setFinalquiz(finalData)

             }

           

    }
    useEffect(()=>{
       
        fetchDBques()
       
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
              setFinalquiz(Verbalquiz)
          }
          if(data==4)
          {  setRender(Reasdata.data4);
             setFinalquiz(Cquiz)
          }
          if(data==5)
          {  setRender(Reasdata.data5);
             setFinalquiz(Reasquiz)
          }
          if(data==6)
          {  setRender(Reasdata.data6);
             setFinalquiz(Reasquiz)
          }
          if(data==7)
          {  setRender(Reasdata.data7);
             setFinalquiz(Reasquiz)
          }
          else if(data==8)
          { 
              setRender(Reasdata.data8)
              //setFinalquiz(Networkquiz)

          }
          else if(data==9)
          { 
              setRender(Reasdata.data9)
              //setFinalquiz(Networkquiz)

          }
          else if(data==10)
          { 
              setRender(Reasdata.data10)
            //   setFinalquiz(finalData)

          }
          else if(data==11)
          { 
              setRender(Reasdata.data11)
              //setFinalquiz(Networkquiz)

          }
          else if(data==12)
          { 
              setRender(Reasdata.data12)
              setFinalquiz(TCS)

          }
          else if(data==13)
          { 
              setRender(Reasdata.data13)
              setFinalquiz(COGNIZANT)

          }
          else if(data==14)
          { 
              setRender(Reasdata.data14)
              setFinalquiz(WIPRO)

          }
          else if(data==15)
          { 
              setRender(Reasdata.data15)
              setFinalquiz(INFOSYS)

          }
    },[])

    const category=["Aptitude","Aptitude","Reasoning","Verbal","C programming",
       "C++ Programming","Python","Java","Networking","OOPS","DBMS","Operating System","TCS","COGNIZANT","WIPRO","INFOSYS"];
    return (
        <>
            <div class="reasoning">
                <h1 class="logical_h1">{category[data]}</h1>
            </div>

            <section class="reas_category">
                {
                    render.map((elem)=>{
                        return(
                            <>
                                <div className='divBar' >
                                  <div className="div_title">
                                   <h2>{elem.title}</h2>
                                     <p>Available ques. {elem.size}</p>
                                  </div>
                                    <NavLink to={elem.link}>
                                        <button onClick={()=>{setChoose(elem.apiNum)
                                       setTopsize(elem.size)}} class="btn_">Go to quiz</button>
                                    </NavLink>
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