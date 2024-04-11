
import React, {useEffect, useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';
import '../css/Quizbox.css';
import Timer from './Timer'


const Quizbox = () => {
 const { Reasquiz,Aptiquiz,review,setReview, correct, setCorrect,
    setExit,timer,setTimer,choose,setChoose,changetimer,data,setData,
    finalquiz,setFinalquiz,totalques,random,setRandom,chooseTopic,
    totaltime,setTotaltime,choosesubCategory,setChoosesubCategory} = useContext(QuizContext);
    // console.log("--> ",finalquiz)
   

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTotaltime(prev=>prev+1)
        },1000)
        console.log(totaltime)
        return ()=> clearInterval(interval)
    },[])
    

    let quesArray=[]
    let quesArray2=[]
    useEffect(()=>{
        for(let i=0;i<finalquiz.length;i++){
            if(finalquiz[i].category===chooseTopic){
                quesArray.push(finalquiz[i]);
            }
        }
        for(let i=0;i<quesArray.length;i++){
            console.log("<-->",quesArray)
                if(quesArray[i].subcategory==choosesubCategory){
                        quesArray2.push(quesArray[i])
                }
        }
        console.log("quesArray2-->",quesArray2)
        console.log("finaldata-->",finalquiz)
        setFinalquiz(quesArray2)
    },[])


   const [currInd, setCurrInd] = useState(0);
   const [ans, setAns] = useState("");
   const [total,setTotal]=useState(0);

   useEffect(()=>{
    if(timer<0)
    {   
        localStorage.removeItem("choosedOption")
        if (finalquiz[currInd].answer == ans) {
            setCorrect(prevState=>prevState+1);
        }
        setAns("");
            setTimer(changetimer);  
        if ((total+1)==totalques){
            
            setExit(true)
        }else{
            setTotal((prevState)=>prevState+1);
           setCurrInd(random[total])
        }

        if(!localStorage.getItem("choosedOption")){
            review.push({
                name:"Not chosen any option",
                choosed:"",
                correct:finalquiz[currInd].answer
            })
        }
            
    }
   },[timer])

// ---------------------(saving_the_data)------------------------

   const saveHandler = () => {
   
    if (finalquiz[currInd].answer === ans) {
        setCorrect(prevState=>prevState+1);
        
    }
    setAns("");
    setTimer(changetimer)
    
    if ((total+1)==totalques){
        setExit(true);
    } else {
        setTotal(prevState=>prevState+1);
        setCurrInd(random[total]);
    }

    //adding the correct answer to the review list-
    if(!localStorage.getItem("choosedOption")){
        review.push({
            name:"Not chosen any option",
            choosed:"",
            correct:finalquiz[currInd].answer
        })
    }
    else{
        review.push({
            name:finalquiz[currInd].question,
            choosed:JSON.parse(localStorage.getItem("choosedOption")),
            correct:finalquiz[currInd].answer
        })
    }

    localStorage.setItem("reviewResult",JSON.stringify(review))
    localStorage.removeItem("choosedOption")
   }

   // after choosing the options

   const chooseOption=(opt)=>{
         setAns(opt);
         localStorage.setItem("choosedOption",JSON.stringify(opt))
    
   }
  return (
    <>
      <section className="quiz_section">
        <div className='quiz-box'>
            <div className="quiz-img">
                <center>
                <img src={require('../images/quiz_glow.jpg')}/>
                <h1 style={{color:"red"}}>{}</h1>
                </center>
            </div>
            <h2 style={{marginLeft:"2rem"}}>Question {total + 1}/{totalques} (DATABASE)</h2>
            <div className='question_name'>  {finalquiz[currInd]?.question}</div>
            <div className='quiz_container'>
                <div className={` ${ans === "a" ? 'click_option' : ''} option`} onClick={()=>chooseOption("a") }>{finalquiz[currInd]?.optionA}</div>
                <div className={` ${ans === "b" ? 'click_option' : ''} option`}onClick={()=>chooseOption("b") }>{finalquiz[currInd]?.optionB}</div>
                <div className={` ${ans === "c" ? 'click_option' : ''} option`} onClick={()=>chooseOption("c") }>{finalquiz[currInd]?.optionC}</div>
                <div className={` ${ans === "d" ? 'click_option' : ''} option`} onClick={()=>chooseOption("d") }>{finalquiz[currInd]?.optionD}</div>
            </div>
            <div className='btn_container'>
                <button className='reset_btn' onClick={() => setAns("")}>Reset</button>
                <button className='next_btn' onClick={saveHandler}>Save & Next</button>
                <button className='exit_btn' onClick={()=>setExit(true)}>Exit</button>
            </div>
        </div>
        <div className="timer">
                 <div className="t1">
                    <h2>Time remaining</h2>
                 </div>
                 <div className="t2">
                      <div>
                        <Timer/>
                        <br/>  
                      </div> 
                 </div>
        </div>
      </section>
    </>
  )
}

export default Quizbox