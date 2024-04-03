import React, { useContext, useEffect } from 'react'
import '../App.css';
import '../css/result.css'
import { QuizContext } from '../Context/QuizHolder';
import {NavLink} from 'react-router-dom';
import {FaCrown} from "react-icons/fa";
export default function Result() {
    const { correct,setCorrect, setExit, setStart,totalques, finalquiz,setReview,totaltime,setTotaltime } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
        setReview([]);
        setCorrect(0)
        setTotaltime(0)
    }

  function getTotaltime(){
     let min=Math.floor(totaltime/60);
     let hours=Math.floor(min/60);
     let sec=totaltime%60;

     let finalTime=`${hours} : ${min} : ${sec}`
    return finalTime
  }

    return (

        <>
            <section className="result">
                <div className="result_box">
                    <div className="icon">
                        <FaCrown className=" fa-crown"/>
                    </div>
                    <div style={{ fontSize: "1.5rem", textAlign: "center" }}>You have completed the Quiz!</div>
                    <div className="score">
                        <h4 className=''>{correct} correct out of {totalques}</h4>
                        <p className="time_taken">time taken: 
                             <span class="hund"> {getTotaltime()}</span>
                             {/* <span className="tens">00</span>:
                             <span className="ones">00</span> */}
                        </p>
                    </div>
                    <div className="resultbtn">
                        <button onClick={playAgain} className=''>Try agian</button>
                        <a href={'/Practice'}><button className="quit">Quit Quiz</button></a>
                    </div>
                </div>
                <div className="review_sec">
                    <NavLink to={'/Review'}><button className="review_btn">Review result</button></NavLink>
                </div>
            </section>
        </>
        
    )
}