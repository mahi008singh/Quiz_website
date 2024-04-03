import React, { useEffect, useState } from 'react'
import '../css/compete.css';

const Compete = () => {
    const [flag,setFlag]=useState(true);
    const [flag2,setFlag2]=useState(true);
    const [flag3,setFlag3]=useState(true);

   useEffect(()=>{
   
   },[])

    return (
        <section className='competeSection'>
            <h1 className=''>Compete here..</h1>
             {
                (flag)?<Tabs flagstate1={{flag,setFlag}}/>
                : (flag2)?<Setup flagstate2={{flag2,setFlag2}} flagstate1={{flag,setFlag}}/>
                :(flag3)?<Intviewscreen flagstate3={{flag3,setFlag3}} flagstate2={{flag2,setFlag2}} />
                :<InterviewResult flagstate1={{flag,setFlag}} flagstate3={{flag3,setFlag3}}/>
             }
             
        </section>
    )
}

const Tabs=(props)=>{

    return(
     <>
         <div className='compete_tab'>
               <h2 className=''>Give the Interview</h2>
               <p>wjenlfa peok faopjefiawpejrpofak'e proj aoekfopaj eopkf</p>
               <button className='competeBtn' onClick={()=>props.flagstate1.setFlag(false)}>Start</button>
         </div>
     </>
    )
 }

const Setup=(props)=>{
    return(
        <>
            <div className='setupDiv'>
                 <div className='setupUpperDiv'>
                 <div>
                      <h1>Choose Field of interview </h1>
                        <select>
                            <option>Choose</option>
                             <option>Javascript</option>
                             <option>React</option>
                             <option>Technical</option>
                             <option>Hr</option>
                        </select>
                 </div>  
                 <div>
                      <h2>Set time for interview</h2>
                      <input placeholder='enter time' onChange={(e)=>e.target.value} type='number' />
                      <br/><br/>
                      <h2>Set number of questions</h2>
                      <input placeholder='enter time' onChange={(e)=>e.target.value} type='number' />
                 </div>     
                 </div>
                <div className='setupBottomDiv'>
                        <button className='competeBtn2' onClick={()=>props.flagstate2.setFlag2(false)}>Start</button>
                        <button className='competeBtn2' onClick={()=>props.flagstate1.setFlag(true)}>Exit</button>

                </div>
            </div>
        </>
    )
}

const Intviewscreen=(props)=>{
    return(
        <>
            <div className='interviewDiv'>
                    <div className='intviewQuesDiv'>

                    </div>
                    <div className='intviewTimer'>
                         <h1>Time left: 00</h1>
                         <h1>Time taken :00</h1>
                    </div>
                    <div className='btn2'>
                            <button className='competeBtn2'>Next</button>
                            <button className='competeBtn2' onClick={()=>props.flagstate2.setFlag2(true)} >Go back</button>
                            <button className='competeBtn2' onClick={()=>props.flagstate3.setFlag3(false)} >Exit</button>
                    </div>
            </div>  
        </>
    )
}

const InterviewResult=(props)=>{
    return(
        <>
            <div className='interviewResultBox'>
                <div>
                <h1>You result</h1>
                </div>
                <div>
                    <button className='competeBtn2' onClick={()=>{
                        props.flagstate3.setFlag3(false)
                        // props.flagstate1.setFlag(false)

                    }}>Exit</button>
                </div>

            </div>
        </>
    )
}


export default Compete
