import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import './css/style.css';
import './css/home.css';
import Homedata from './Api/Homecateg';
import { AiFillBulb} from "react-icons/ai";

const Home = () => {
      const [popular,setPopular]=useState(Homedata.data1);
      const [recommend,setRecommend]=useState(Homedata.data2);
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
                         <a href="/Practice" class="btn">Practice</a>
                      </div>
                   </section>


                </div>

                <div class="swiper-pagination"></div>

             </div>

          </section>

{/* <!-- home section ends -->

<!-- subjects section starts  --> */}

          <section class="subjects">

             <h1 class="heading">Our Recommendation</h1>

             <div class="box-container">

          {
             recommend.map((elem)=>{
                return(
                   <>
                      <div class="box">
                         <NavLink to={"/Signup"} >
                           <img src={require('./images/subject-icon-3.png')} alt="" />
                            <h3>{elem.title}</h3>
                         </NavLink>

                      </div>
                   </>
                )
             })
          }

</div>

</section>

{/* <!-- subjects section ends -->

<!-- home courses slider section starts  --> */}

<section class="home-courses">

<h1 class="heading"> Coding Platform Problems </h1>

<div class="swiper platform_page">

   <div class="platform_container">
     {
        popular.map((elem)=>{
           return(
              <>
                 <div class="platform_name slide">
                    <div class="image">
                       <img src={require('./images/course-1-3.png')} alt="" />
                       <h3>{elem.title}</h3>
                    </div>
                    <div class="solve">
                       <h3>{elem.subtitle}</h3>
                       <p>{elem.para}</p>
                       <a href="/cat" class="btn">Solve</a>
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
         <div className="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
      </div>

      <div className="box">
         <h3>useful links</h3>
         <a href="#" class="link">ask questions</a>
         <a href="#" class="link">send feedback</a>
         <a href="#" class="link">privacy policy</a>
         <a href="#" class="link">terms of use</a>
      </div>
      
   </div>

</section>

        </>
    )
}

export default Home
