
import React, { useState } from 'react';
import { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import codeprac from '../Api/Codeprob'
import '../css/codeques.css'
import {QuizContext} from '../Context/QuizHolder';


const Codeques = () => {
  const {platform, setPlatform } = useContext(QuizContext)
  // const [select,setSelect]=useState(codeprac.Leetques);
  let select;
  if(platform==0){
    select=codeprac.Leetques
  }else if(platform==1){
    select=codeprac.gfgques
  }
  else if(platform==2){
    select=codeprac.chefques
  }
  else if(platform==3){
    select=codeprac.hackques
  }
  const [prob1,setProb1]=useState(select);
  
  const [expand,setExpand]=useState(true)
  const filterques=(categ)=>{
     let filteredarr= select.filter((currElem)=>{
          return currElem.category===categ
        })
       setProb1(filteredarr)
  }
  return(
    <>
       <section>
          <div className={(expand)?'codecateg':"codecateg_new"}>
               <div className='codecateg_div'>
               <button onClick={()=>setProb1(select)}>All</button>
               <button onClick={()=>filterques("array")}>Array</button>
                <button onClick={()=>filterques("string")}>String</button>
                <button onClick={()=>filterques("Linkedlist")}>Linked List</button>
                <button onClick={()=>filterques("Tree")}>Tree</button>
                <button onClick={()=>filterques("Hashing")}>Hashing</button>
                <button onClick={()=>filterques("p_q")}>priority queue</button>
                <button onClick={()=>filterques("bst")}>BST</button>
                <button onClick={()=>filterques("DP")}>dynamic programming</button>
                <button onClick={()=>filterques("slidingwindow")}>Sliding window</button>
                <button onClick={()=>filterques("2pointers")}>Two pointers</button>
                <button onClick={()=>filterques("sorting")}>sorting</button>
                <button onClick={()=>filterques("binsearch")}>Binary search</button>
                <button onClick={()=>filterques("matrix")}>Matrix</button>
                
                
               </div>
                <div className='expand'>
                  <button onClick={()=>setExpand(prev=>!prev)}>{(expand)?"see all":"see less"}</button>
                </div>
          </div>
            <div >
                  {
                      prob1.map((e)=>{
                            return(
                              <>
                                  <div className='ques_bar'>
                                      <h1>{e.ques}</h1>
                                      <a  target="_blank" href={e.link}>visit</a>
                                      <span style={{fontWeight:"900"}}>{e.diff}</span>
                                  </div>
                              </>
                            )
                      })
                  }
            </div>
       </section>
    </>
  );

}
export default Codeques