import React, {useEffect, useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';
import Timer from './Timer'
import '../css/Quizbox.css';


export default function Quiz() {
    const {random,setRandom}=useContext(QuizContext)
    const [current, setCurrent] = useState(random[0]);
    const [total,setTotal]=useState(0);
    const [ans, setAns] = useState("");
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} ans={ans} setAns={setAns} next={setCurrent} total={total} setTotal={setTotal} />
        </div>
    )
}


const Box = ({ current, next,total,setTotal,ans,setAns }) => {
    const { Reasquiz,Aptiquiz,review,setReview, correct, setCorrect,
         setExit,timer,setTimer,choose,setChoose,changetimer,data,setData,
         finalquiz,totalques,random,setRandom} = useContext(QuizContext);

   
    

    let [quizzler,setQuizzler]=useState(finalquiz.q1);
     
     useEffect(() => {
         if(choose==1)
            setQuizzler(finalquiz.q1)
            else if(choose==2)
            setQuizzler(finalquiz.q2);
            else if(choose==3)
            setQuizzler(finalquiz.q3);
            else if(choose==4)
            setQuizzler(finalquiz.q4);
            else if(choose==5)
            setQuizzler(finalquiz.q5);
            else if(choose==6)
            setQuizzler(finalquiz.q6);
            else if(choose==7)
            setQuizzler(finalquiz.q7);
            else if(choose==8)
            setQuizzler(finalquiz.q8);
            else if(choose==9)
            setQuizzler(finalquiz.q9);
            else if(choose==10)
            setQuizzler(finalquiz.q10);

            console.log(quizzler)

        }, [])


      

        if(timer<0)
        {   setAns("");
            if (quizzler[current].correct === ans) 
                setCorrect(correct + 1);
                setTimer(changetimer);  
            if ((total+1)==totalques) 
                setExit(true)
               setTotal(total+1);
             next(current+1);
             
    
        }

    const saveHandler = () => {
        if (quizzler[current].correct === ans) {
            setCorrect(correct + 1);
        }
        
        setAns("");
        setTimer(changetimer)
        if ((total+1)==totalques){
            setExit(true)
        } else {
            //here we are randoomly giving the index  using random 
            setTotal(total+1);
            next(random[total+1]);
            
        }
        
        console.log(quizzler);

    }

    const chooseOption=(opt)=>{
        setAns(opt);
        review.push({name:quizzler[current].question,choosed:opt,correct:quizzler[current].correct})

    }
    return (
       <>
       
        <section className="quiz_section">
        <div className='quiz-box'>
            <div className="quiz-img">
                <center>
                <img src={require('../images/quiz_glow.jpg')}/>
                <h1 style={{color:"red"}}>{quizzler[current].tag}</h1>
                </center>
            </div>
            <h2 style={{marginLeft:"2rem"}}>Question {total + 1}/{totalques}</h2>
            <div className='question_name'>  {quizzler[current].question}</div>
            <div className='quiz_container'>
                <div className={` ${ans === "a" ? 'click_option' : ''} option`} onClick={()=>chooseOption("a") }>{quizzler[current].a}</div>
                <div className={` ${ans === "b" ? 'click_option' : ''} option`} onClick={()=>chooseOption("b")}>{quizzler[current].b}</div>
                <div className={` ${ans === "c" ? 'click_option' : ''} option`} onClick={()=>chooseOption("c")}>{quizzler[current].c}</div>
                <div className={` ${ans === "d" ? 'click_option' : ''} option`} onClick={()=>chooseOption("d")}>{quizzler[current].d}</div>
            </div>
            <div className='btn_container'>
                <button className='reset_btn' onClick={() => setAns("")}>Reset</button>
                <button className='next_btn' onClick={saveHandler}>Save & Next</button>
                <button className='exit_btn' onClick={() => setExit(true)}>Exit</button>
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