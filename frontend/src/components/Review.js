import React,{useState,useContext} from 'react'
import { QuizContext } from '../Context/QuizHolder';
import Reviewdata from '../Api/Reviewapi';
import '../css/Review.css'
const Review = () => {
    const {review,setReview}=useContext(QuizContext);
    return (
        <>
           <section className="review_b">
               <h1>Your Result Overview</h1>
               {
                   review.map((elem)=>{
                       return(
                           <>
                             <div  className={elem.choosed===elem.correct?"review_div_green":"review_div_red"}>
                                  <div className="r1">
                                      <p>{elem.name}</p>
                                  </div>
                                  <div className="r2">
                                      <p>| correct:{elem.correct}</p>
                                  </div>
                             </div> 
                           </>
                       )
                   })
               }
           </section>      

        </>
    )
}

export default Review
