import React, { useState ,useEffect} from 'react'
import { createContext } from 'react'
import {Reasquiz,Aptiquiz,Cquiz,Verbalquiz,TCS,CONGNIZANT,WIPRO,INFOSYS} from './Quizquestion';
import { useAsyncError } from 'react-router-dom';

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
    const [totalques,setTotalques]=useState(10);
    const [random,setRandom]=useState([])
    const [topsize,setTopsize]=useState();
    const [platform,setPlatform]=useState(0);
    const [chooseTopic,setChooseTopic]=useState(0)
    const [keyTopic,setKeyTopic]=useState(false)
    const [totalquesDB,setTotalquesDb]=useState('')
    const [availableQues,setAvailableQues]=useState(0)
    //Authentication context

    const [loginData,setLoginData]=useState("")
    const [showuserName,setShowuserName]=useState()
    const [totaltime,setTotaltime]=useState(0);
    const [homeIndex,setHomeIndex]=useState(0)
    const [localStorageIndex,setLocalStorageIndex]=useState(0);
    const [choosesubCategory,setChoosesubCategory]=useState('')

    const userAuthentication= async()=>{
        try {
            let response=await fetch('/userAuth/userdetail',{
                method:"GET",
                headers:{
                     Authorization:`Bearer ${localStorage.getItem("loginToken")}`,
                    // "Content-Type":"application/json",
                },
                
            });
            console.log(response,"hekko")
            if(response.ok){
                const data= await response.json();
                console.log(" contextData--> ",data)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
        useEffect(()=>{
            
                userAuthentication();
        },[])
    
    
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, Reasquiz,Aptiquiz,Cquiz,Verbalquiz,TCS,CONGNIZANT,WIPRO,INFOSYS,correct,setCorrect,
            timer,setTimer,data,setData,choose,setChoose,changetimer,setChangetimer,
            review,setReview,finalquiz,setFinalquiz,totalques,setTotalques,random,setRandom,
            topsize,setTopsize,platform,setPlatform,userAuthentication,showuserName,setShowuserName,chooseTopic,setChooseTopic,
            keyTopic,setKeyTopic,totalquesDB,setTotalquesDb,availableQues,setAvailableQues,totaltime,setTotaltime,
            homeIndex,setHomeIndex,localStorageIndex,setLocalStorageIndex,choosesubCategory,setChoosesubCategory
            }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };