
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import Leetques from '../Api/Codeprob'
import '../css/codeques.css'



const Codeques = () => {

  const [prob1,setProb1]=useState(Leetques);
  const [expand,setExpand]=useState(true)
  const filterques=(categ)=>{
     let filteredarr= Leetques.filter((currElem)=>{
          return currElem.category===categ
        })
       setProb1(filteredarr)
  }
  return(
    <>
       <section>
          <div className={(expand)?'codecateg':"codecateg_new"}>
               <div className='codecateg_div'>
               <button onClick={()=>setProb1(Leetques)}>All</button>
               <button onClick={()=>filterques("array")}>Array</button>
                <button onClick={()=>filterques("string")}>String</button>
                <button onClick={()=>filterques("Linkedlist")}>Linked List</button>
                <button onClick={()=>filterques("Tree")}>Tree</button>
                <button onClick={()=>filterques("Hashing")}>Hashing</button>
                <button onClick={()=>filterques("p_q")}>priority queue</button>
                <button onClick={()=>filterques("bst")}>BST</button>
                <button onClick={()=>filterques("slidingwindow")}>Sliding window</button>
                <button onClick={()=>filterques("2pointers")}>Two pointers</button>
                <button onClick={()=>filterques("sorting")}>sorting</button>
                <button onClick={()=>filterques("binsearch")}>Binary search</button>
                
               </div>
                <div className='expand'>
                  <button onClick={()=>setExpand(prev=>!prev)}>{(expand)?"expand":"collapse"}</button>
                </div>
          </div>
             {
                prob1.map((e)=>{
                       return(
                        <>
                            <div className='ques_bar'>
                                <h1>{e.ques}</h1>
                                 <a  target="_blank" href={e.link}>visit</a>
                                <span style={{color:"color: rgb(44, 225, 44);",fontWeight:"900"}}>{e.diff}</span>
                            </div>
                        </>
                       )
                })
             }
       </section>
    </>
  );

}
export default Codeques