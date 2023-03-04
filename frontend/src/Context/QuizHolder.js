import React, { useState } from 'react'
import { createContext } from 'react'
import {Reasquiz,Aptiquiz} from './Quizquestion';

const QuizContext = createContext();

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    const [timer,setTimer]=useState(20);
    const [data,setData]=useState(0);
    const [choose,setChoose]=useState(0);
    const [changetimer,setChangetimer]=useState(30);
    const [review,setReview]=useState([]);
    const [finalquiz,setFinalquiz]=useState();
    const [totalques,setTotalques]=useState(10)

    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, Reasquiz,Aptiquiz,correct,setCorrect,
            timer,setTimer,data,setData,choose,setChoose,changetimer,setChangetimer,
            review,setReview,finalquiz,setFinalquiz,totalques,setTotalques
            }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };