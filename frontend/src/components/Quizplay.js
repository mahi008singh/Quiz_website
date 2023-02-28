import React from 'react'
import Result from "./Result";
import Start from "./Start";
import Quiz from "./Quiz";
import { QuizContext } from "../Context/QuizHolder";
import { useContext } from "react";

const Quizplay = () => {
    const { start, exit } = useContext(QuizContext);
    return (
        <div>
            {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
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
