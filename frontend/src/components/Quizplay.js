import React from 'react'
import Result from "./Result";
import Start from "./Start";
import Quiz from "./Quiz";
import Quizbox from './Quizbox';
import { QuizContext } from "../Context/QuizHolder";
import { useContext } from "react";

const Quizplay = () => {
    const { start, exit ,keyTopic,setKeyTopic} = useContext(QuizContext);
    return (
        <div>
            {
        exit === false
          ?
          <>
            {
              start === true
                ? keyTopic==true?
                <Quizbox />
                :<Quiz/>
                :
                <Start />
            }
          </>
          : <Result />
      }
        </div>
    )
}

export default Quizplay
