import React, {useEffect, useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';
import Timer from './Timer'
import '../css/Quizbox.css';


export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    )
}


const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit,timer,setTimer,choose,setChoose,changetimer } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    
     const [quizzler,setQuizzler]=useState(quizzes.q1);
     useEffect(() => {
         if(choose==1)
            setQuizzler(quizzes.q1)
            else if(choose==3)
            setQuizzler(quizzes.q2);
            else if(choose==7)
            setQuizzler(quizzes.q7);
           
     }, [])




    if(timer<0)
    {  
        if (quizzler[current].correct === ans) 
            setCorrect(correct + 1);
            setAns("");
            setTimer(changetimer);
        if ((current + 1) === quizzler.length) 
            setExit(true)
         next(current + 1);

    }

    const saveHandler = () => {
        if (quizzler[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        setTimer(changetimer)
        if ((current + 1) === quizzler.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
    }

    const chooseOption=(opt)=>{
        setAns(opt)
    }
    return (
       <>
       
        <section className="quiz_section">
        <div className='quiz-box'>
            <div className="quiz-img">
                <center>
                <img src={require('../images/quiz_glow.jpg')}/>
                </center>
            </div>
            <h2 style={{marginLeft:"2rem"}}>Question {current + 1}/10</h2>
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
                      <span>
                        <Timer/>  
                      </span> 
                 </div>
        </div>
        </section>
       </>
    )
}