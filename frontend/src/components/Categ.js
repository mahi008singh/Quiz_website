import React,{useEffect,useState,useContext} from 'react'
import '../css/cat.css';
import {NavLink} from 'react-router-dom'
import Reasdata from '../Api/Reasoncat.js'
import { QuizContext } from '../Context/QuizHolder';
import { Networkquiz } from '../Context/Quizquestion';
import ClipLoader from "react-spinners/ClipLoader";


const Categ = () => {
    const {setStart,keyTopic,totalquesDB,setTotalquesDb, chooseTopic,data,setData,
        choose,setChoose,finalquiz,setFinalquiz,Reasquiz,
        Aptiquiz,Verbalquiz,Cquiz,topsize,setTopsize,TCS,
        COGNIZANT,WIPRO,INFOSYS,availableQues,setAvailableQues,homeIndex,setHomeIndex } = useContext(QuizContext)
    const [render,setRender]=useState(Reasdata.data1)

    
    localStorage.removeItem('reviewResult');
    const [quesLoaded, setQuesLoaded]=useState(false)
    
    // code to fetch the data from database-
    const fetchDBques= async()=>{
             setQuesLoaded(true)
            const resp=await fetch(`/adminpage/getuploads`,{
                method:"GET",

            })
             let finalData=await resp.json();
             console.log("final-->",finalData)
             if(keyTopic){
                 setQuesLoaded(false)

                setFinalquiz(finalData)
                console.log(finalquiz)
             }
             let quesArray=[]
             for(let i=0;i<finalData.length;i++){
                if(finalData[i].category===chooseTopic){
                    quesArray.push(finalData[i]);
                }
            }
            console.log(quesArray)
            localStorage.setItem("questionLength",JSON.stringify(quesArray.length))
    }
    useEffect(()=>{
        setStart(false)
        fetchDBques()
        
        if(data==1){
            setRender(Reasdata.data1);
            setFinalquiz(Aptiquiz)
        }
        if(data==2)
        {  setRender(Reasdata.data2);
           setFinalquiz(Reasquiz)
        }
        if(data==3)
          { 
              setRender(Reasdata.data3)
              setFinalquiz(Verbalquiz)
          }
          if(data==4)
          {  setRender(Reasdata.data4);
             setFinalquiz(Cquiz)
          }
          if(data==5)
          { // js questions 
            setRender(Reasdata.data5);
            //  setFinalquiz(Cquiz)
          }
          if(data==6)
          {  setRender(Reasdata.data6);
             setFinalquiz(Cquiz)
          }
          if(data==7)
          {  setRender(Reasdata.data7);
             setFinalquiz(Cquiz)
          }
           if(data==8)
          { 
              setRender(Reasdata.data8)
              //setFinalquiz(Networkquiz)

          }
           if(data==9)
          { 
              setRender(Reasdata.data9)
              //setFinalquiz(Networkquiz)

          }
           if(data==10)
          { 
              setRender(Reasdata.data10)
            //   setFinalquiz(finalData)

          }
           if(data==11)
          { 
              setRender(Reasdata.data11)
              //setFinalquiz(Networkquiz)

          }
           if(data==12)
          { 
             if(homeIndex==0){
                setRender(Reasdata.data1)
             }else if(homeIndex==1){
                setRender(Reasdata.data2)
             }else if(homeIndex==2){
                setRender(Reasdata.data3)
             }
              setFinalquiz(TCS)

          }
           if(data==13)
          { 
            if(homeIndex==0){
                setRender(Reasdata.data1)
             }else if(homeIndex==1){
                setRender(Reasdata.data2)
             }else if(homeIndex==2){
                setRender(Reasdata.data3)
             }
              setFinalquiz(COGNIZANT)

          }
           if(data==14)
          { 
            if(homeIndex==0){
                setRender(Reasdata.data1)
             }else if(homeIndex==1){
                setRender(Reasdata.data2)
             }else if(homeIndex==2){
                setRender(Reasdata.data3)
             }
              setFinalquiz(WIPRO)

          }
           if(data==15)
          { 
            if(homeIndex==0){
                setRender(Reasdata.data1)
             }else if(homeIndex==1){
                setRender(Reasdata.data2)
             }else if(homeIndex==2){
                setRender(Reasdata.data3)
             }
              setFinalquiz(INFOSYS)

          }
          if(homeIndex==3||data==16){
            setRender(Reasdata.data16)
            setFinalquiz(Networkquiz)
          }
    },[])

    const category=["Aptitude","Aptitude","Reasoning","Verbal","C/C++ programming",
       "Javascript","Python","Java","Networking","OOPS","DBMS","Operating System","TCS","COGNIZANT","WIPRO","INFOSYS"];
    return (
        <>
            <div class="reasoning">
                <h1 class="logical_h1">{homeIndex==3?"SQL":category[data]}</h1>
            </div>

            <section class="reas_category">
                {
                    render.map((elem)=>{
                        return(
                            <>
                                <div className='divBar' >
                                  <div className="div_title">
                                   <h2>{elem.title}</h2>
                                    {
                                        (localStorage.getItem("questionLength")!=0)
                                        ?<p>Available ques. {localStorage.getItem("questionLength")}</p>
                                        : <p>Available ques. {elem.size}</p>
                                    }
                                  </div>
                                    <NavLink to={elem.link}>
                                      <button onClick={()=>{setChoose(elem.apiNum)
                                       setTopsize(elem.size)
                                       }}
                                      class="btn_">
                                       {
                                          (quesLoaded&&keyTopic)?<ClipLoader color="#fff" size={18} />:"Go to quiz"
                                       }
                                       </button>
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
