import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder';
import '../App.css';
import '../css/start.css';


export default function Start() {
    const { setStart,changetimer,keyTopic,setChangetimer,totalques,setTotalques,finalquiz,random,setRandom,topsize,setTopsize } = useContext(QuizContext)
      function setRandomly(){
              while(random.length<totalques){
                let r;
                 if(keyTopic){
                   r=Math.floor(Math.random()*Number(localStorage.getItem("questionLength")));
                 }else{
                   r=Math.floor(Math.random()*topsize);
                 }
               
                if(random.indexOf(r)===-1)
                {
                  random.push(r);
                }
                console.log(random.length)
              }
              console.log("random_index-->",random);
      }
    return (
      <>
        <div class="start">
        <div class="rules">
            <h1>Rules of Quiz</h1>
            <ul>
                <li>1) The quiz contains no. of questions set by you</li>
                <li>2) Each question comes with time limit, you can set timer</li>
                <li>3) There is no negative marking in the quiz</li>
                <li>4) Press save&next button to lock the choice and reset button to reset option</li>
                <li>5) Track your score and total time taken to attempt the quiz in last</li>
            </ul>
        </div>
       <div class="start_div">  
         <div style={{display:"flex"}}>
           <h3 style={{margin:"auto 1rem",fontSize:"1.7rem"}}>No. of question</h3>
           <input className="settimer" value={totalques} onChange={(e)=>setTotalques(e.target.value)} placeholder="10" type="number"/>
           <h3 style={{margin:"auto 1rem",fontSize:"1.8rem"}}>Set timer</h3>
            <input className="settimer" value={changetimer} onChange={(e)=>setChangetimer(e.target.value)} min="30" max="90" placeholder="30" type="number"/>
          </div>     
        <button onClick={() =>{
          if(keyTopic&&totalques>Number(localStorage.getItem("questionLength"))){
            alert("cannot set questions more than available questions..")
            return;
          }
          setStart(true)
          setRandomly()}} className='start-btn'>Start Quiz</button>
       </div>
    </div>
      </>
    )
}
