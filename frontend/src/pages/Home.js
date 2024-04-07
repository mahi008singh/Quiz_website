import React,{useState,useContext} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/style.css'; 
import '../css/home.css';
import Homedata from '../Api/Homecateg';
import { QuizContext } from '../Context/QuizHolder';
import { AiFillBulb} from "react-icons/ai";
import Codeques from '../components/Codeques';
const Home = () => {
      const [popular,setPopular]=useState(Homedata.data1);
      const [recommend,setRecommend]=useState(Homedata.data2);
      const { platform,setPlatform,homeIndex,setHomeIndex,setKeyTopic,setChooseTopic} = useContext(QuizContext)



      const isLoggedin=localStorage.getItem("loginToken")
    return (
        <>
          <section class="home">

             <div class="swiper home-slider">

                <div class="swiper-wrapper">

                  {/* <section class="swiper-slide slide" >
                      <div class="content">
                         <h3>Quiz on C++, Aptitude,Reasoning</h3>
                         <p>Give live quiz and compete with others and boost your coding, aptitude and reasoning skills </p>
                         <a href="/compete" class="btn">Compete</a>
                      </div>
                   </section> */}
        
                   <section class="swiper-slide2 slide" >
                      <div class="content">
                         <h3>Try Quizes for your Practice</h3>
                         <p>Practice coding, reasoning, apti, and cse related quizes on prepquizz</p>
                         <a href="/Practice" className="btn">Practice</a>
                      </div>
                   </section>


                </div>

                <div class="swiper-pagination"></div>

             </div>

          </section>

{/* <!-- home section ends -->

<!-- subjects section starts  --> */}

          <section class="subjects">

             <h1 class="heading">Recommended</h1>

             <div class="box-container">

          {
             recommend.map((elem,ind)=>{
                return(
                   <>
                     <div class="box">
                        
                        <NavLink to={(isLoggedin)?"/companies":"/Login"} onClick={()=>setHomeIndex(ind)} >
                          <img src={require('../images/subject-icon-3.png')} alt="" />
                          <h3>{elem.title}</h3>
                        </NavLink>
              
                     </div>
                     
                   </>
                )
             })
          }
           <div class="box">
               <NavLink to={(isLoggedin)?"/categ":"/Login"} onClick={()=>{
                  setHomeIndex(3)
                  setKeyTopic(true)
                  setChooseTopic("SQL")

               }} >
                  <img src={require('../images/subject-icon-1.png')} alt="" />
                  <h3>SQL</h3>
               </NavLink>                    
           </div>

</div>

</section>

{/* <!-- subjects section ends -->

<!-- home courses slider section starts  --> */}

<section class="home-courses">

<h1 class="heading"> Coding Platform Problem Sheets </h1>

<div class="swiper platform_page">

   <div class="platform_container">
     {
        popular.map((elem,ind)=>{
         
           return(
              <>
                 <div class="platform_name slide">
                    <div class="image">
                       <img height="160rem" src={elem.img} alt="" />
                       <h3>{elem.title}</h3>
                    </div>
                    <div class="solve">
                       <NavLink to={"/Codeques"} className="solveBtn" onClick={()=>setPlatform(ind)}>solve</NavLink>
                    </div>
                 </div>

              </>
           )
        })
     }  

   </div>

</div>

</section>
<section class="footer">

   <div class="box-container">

      <div class="box1">
         <h3><AiFillBulb class="fas fa-lightbulb"/>Prepquizz </h3>
         <p>Prepquizz is a MCQ based quiz preperation platform
          for placements where student can learn and boost their skills 
         </p>
       
      </div>

      <div className="box">
         <h3>useful links</h3>
         <NavLink to={"/Contact"} style={{fontSize:"1.5rem"}} className="link">Contact us</NavLink>
         <NavLink to={"/Contact"} style={{fontSize:"1.5rem"}} className="link">Send feedback</NavLink>
         <NavLink to={"/"} style={{fontSize:"1.5rem"}} className="link">Privacy policy</NavLink>
         <NavLink to={"/"} style={{fontSize:"1.5rem"}} className="link">Terms of use</NavLink>
      </div>
      
   </div>
   <div>
       <br/> <br/>
       <h2>Copyright &copy; 2024, prepquizz. All rights reserved</h2>
   </div>

</section>

        </>
    )
}

export default Home
