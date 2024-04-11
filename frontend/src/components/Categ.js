import React,{useEffect,useState,useContext} from 'react'
import '../css/cat.css';
import {NavLink} from 'react-router-dom'
import Reasdata from '../Api/Reasoncat.js'
import { QuizContext } from '../Context/QuizHolder';
import { Networkquiz } from '../Context/Quizquestion';
import ClipLoader from "react-spinners/ClipLoader";

import Quants from '../Api/Maincateg';





const Categ = () => {
    const {setStart,keyTopic,totalquesDB,setTotalquesDb,setChooseTopic, chooseTopic,data,setData,
        choose,setChoose,finalquiz,setFinalquiz,Reasquiz,
        Aptiquiz,Verbalquiz,Cquiz,topsize,setTopsize,TCS,
        COGNIZANT,WIPRO,INFOSYS,availableQues,setAvailableQues,homeIndex,setHomeIndex,
        localStorageIndex,setLocalStorageIndex,choosesubCategory,setChoosesubCategory,isCompany,setIsCompany } = useContext(QuizContext)
    const [render,setRender]=useState(Reasdata.data1)


    const [data2,setData2]=useState(Quants.data2);
    
    localStorage.removeItem('reviewResult');
    const [quesLoaded, setQuesLoaded]=useState(false)
    
    // code to fetch the data from database-
    const fetchDBques= async()=>{
       
             setQuesLoaded(true)
            const resp=await fetch(`/adminpage/getuploads`,{
                method:"GET",

            })
             let finalData=await resp.json();
             console.log("fetchedData_db-->",finalData)
             if(keyTopic){
                 setQuesLoaded(false)

                setFinalquiz(finalData)
                console.log(finalquiz)
             }
             let quesArray=[]
             for(let i=0;i<finalData.length;i++){

                if(finalData[i].category===chooseTopic){
                    quesArray.push(finalData[i]);
                }
            }
            console.log("category_wise_ques-->",quesArray)
            let companyQues=[]
            if(isCompany){
                quesArray=quesArray.filter((elem)=>elem.tag=="company")
                 console.log("company_filtered_ques-->",quesArray)

            }
    // ----------------------(length of each subcategory)------------------------------
        
             let subcategoryDataLengths = quesArray.reduce((acc, question) => {
                const { subcategory } = question;
                const index = acc.findIndex(item => item.subcategory == subcategory);
                if (index === -1) {
                    acc.push({ subcategory, count: 1 });
                } else {
                    acc[index].count++;
                }
                return acc;
            }, [])
            
    
           let  subcategoryLengths=subcategoryDataLengths.sort((a, b) => {
                const titleA = a.subcategory.toLowerCase(); 
                const titleB = b.subcategory.toLowerCase();
                
                if (titleA < titleB) {
                    return -1; 
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0; 
            }).map((elem)=>elem.count)
        
    // ----------------------(end)-------------------------------
            
            console.log("subcategoryLength-->",)

            localStorage.setItem("questionLength",JSON.stringify(subcategoryLengths))
    }
    useEffect(()=>{

        setStart(false)
       
        if(data==1){
            setRender(Reasdata.data1);
            setFinalquiz(Aptiquiz)
        }
        if(data==2)
        {  setRender(Reasdata.data2);
           setFinalquiz(Reasquiz)
        }
        if(data==3)
          { 
              setRender(Reasdata.data3)
              setFinalquiz(Verbalquiz)
          }
          if(data==4)
          {  setRender(Reasdata.data4);
             setFinalquiz(Cquiz)
          }
          if(data==5)
          { // js questions 
            setRender(Reasdata.data5);
          }
          if(data==6)
          {  setRender(Reasdata.data6);
             setFinalquiz(Cquiz)
          }
          if(data==7)
          {  setRender(Reasdata.data7);
             setFinalquiz(Cquiz)
          }
           if(data==8)
          { 
              setRender(Reasdata.data8)

          }
           if(data==9)
          { 
              setRender(Reasdata.data9)

          }
           if(data==10)
          { 
              setRender(Reasdata.data10)

          }
           if(data==11)
          { 
              setRender(Reasdata.data11)
          }
           if(data==12)
          { 
             if(homeIndex==0){

                setRender(Reasdata.data1)
                setChooseTopic("Quantitative Aptitude")
                console.log(data2[0].title)
             }else if(homeIndex==1){
                setRender(Reasdata.data2)
                setChooseTopic("Logical Reasoning")


             }else if(homeIndex==2){
                setRender(Reasdata.data3)
                setChooseTopic("Verbal Ability")

             }
              setFinalquiz(Aptiquiz)

          }
           if(data==13)
          { 
            if(homeIndex==0){
                setRender(Reasdata.data1)
                setChooseTopic("Quantitative Aptitude")

             }else if(homeIndex==1){
                setRender(Reasdata.data2)
                setChooseTopic("Logical Reasoning")

             }else if(homeIndex==2){
                setChooseTopic("Verbal Ability")

             }
              setFinalquiz(COGNIZANT)

          }
           if(data==14)
          { 
            if(homeIndex==0){
                setRender(Reasdata.data1)
                setChooseTopic("Quantitative Aptitude")

             }else if(homeIndex==1){
                setRender(Reasdata.data2)
                setChooseTopic("Logical Reasoning")

             }else if(homeIndex==2){
                setChooseTopic("Verbal Ability")
             }
              setFinalquiz(WIPRO)

          }
           if(data==15)
          { 
            if(homeIndex==0){
                setRender(Reasdata.data1)
             }else if(homeIndex==1){
                setRender(Reasdata.data2)
             }else if(homeIndex==2){
                setRender(Reasdata.data3)
             }
              setFinalquiz(INFOSYS)

          }
          if(homeIndex==3){
            setRender(Reasdata.data16)
            setFinalquiz(Networkquiz)
          }


        if(keyTopic){
            fetchDBques()
        }
        
    },[chooseTopic])

    const category=["Aptitude","Aptitude","Reasoning","Verbal","C/C++ programming",
       "Javascript","Python","Java","Networking","OOPS","DBMS","Operating System","TCS","COGNIZANT","WIPRO","INFOSYS"];
    return (
        <>
            <div class="reasoning">
                <h1 class="logical_h1">{homeIndex==3?"SQL":category[data]}</h1>
            </div>
            
            <section class="reas_category">
                {
                    render.sort((a, b) => {
                        const titleA = a.title.toLowerCase(); // Convert titles to lowercase for case-insensitive comparison
                        const titleB = b.title.toLowerCase();
                        
                        if (titleA < titleB) {
                            return -1; // If titleA comes before titleB, return -1 (indicating a should come before b)
                        }
                        if (titleA > titleB) {
                            return 1; // If titleA comes after titleB, return 1 (indicating a should come after b)
                        }
                        return 0; // If titles are the same, return 0
                    }).map((elem,ind)=>{
                        return(
                            <>
                                <div className='divBar' >
                                  <div className="div_title">
                                   <h2>{elem.title}</h2>
                                    {
                                        (localStorage.getItem("questionLength")!=0)
                                        ?<p>Available ques. {JSON.parse(localStorage.getItem("questionLength"))[ind]}</p>
                                        : <p>Available ques. {elem.size}</p>
                                    }
                                  </div>
                                    <NavLink to={elem.link}>
                                      <button  onClick={()=>{
                                        setChoose(elem.apiNum)
                                        setTopsize(elem.size)
                                        setChoosesubCategory(elem.title)
                                        setLocalStorageIndex(ind)
                                       }}
                                      class="btn_">
                                       {
                                          (quesLoaded&&keyTopic)?<ClipLoader color="#fff" size={18} />:"Go to quiz"
                                       }
                                       </button>
                                    </NavLink>
                                </div>
                            </>
                        )
                    })
                }

            </section>
        </>
    )
}

export default Categ
