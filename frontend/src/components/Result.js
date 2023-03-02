import React, { useContext } from 'react'
import '../App.css';
import '../css/result.css'
import { QuizContext } from '../Context/QuizHolder';
import {NavLink} from 'react-router-dom';

export default function Result() {
    const { correct,setCorrect, setExit, setStart, finalquiz,setReview } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
        setReview([]);
        setCorrect(0)
    }
   
    return (

        <>
            <section className="result">
                <div className="result_box">
                    <div className="icon">
                        <i className="fas fa-crown"></i>
                    </div>
                    <div style={{ fontSize: "1.5rem", textAlign: "center" }}>You have completed the Quiz!</div>
                    <div className="score">
                        <h4 className=''>{correct} correct out of {finalquiz.q1.length}</h4>
                        <p className="time_taken">time taken: <span class="hund">00</span>:
                             <span className="tens">00</span>:
                             <span className="ones">00</span>
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