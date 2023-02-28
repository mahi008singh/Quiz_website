import React,{useState} from 'react'
import './css/style.css';
import Homedata from './Api/Homecateg'

const Home = () => {
      const [popular,setPopular]=useState(Homedata.data1);
      const [recommend,setRecommend]=useState(Homedata.data2);
    return (
        <>
          <section class="home">

             <div class="swiper home-slider">

                <div class="swiper-wrapper">

                   <section class="swiper-slide slide" style={{ background: `url('./images/home-slide-1.jpg') no-repeat ` }}>
                      <div class="content">
                         <h3>Quiz on C++ on Sunday 15TH Jan</h3>
                         <p>Give live quiz and compete with others and boost your coding, aptitude and reasoning skills </p>
                         <a href="/compete" class="btn">Compete</a>
                      </div>
                   </section>

                   <section class="swiper-slide slide" style={{ background: "url('./images/home-slide-2.jpg') no-repeat" }}>
                      <div class="content">
                         <h3>The Best Quizes for your Practice</h3>
                         <p>Practice coding, reasoning, apti, and cs subjects related quizes on prepquizz  </p>
                         <a href="/Practice" class="btn">Practice</a>
                      </div>
                   </section>

                   {/* <!-- <section class="swiper-slide slide" style="background: url(images/home-slide-3.jpg) no-repeat;">
         <div class="content">
             <h3>The Best Quizes for your Practice</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
            <a href="#" class="btn">get started</a>
         </div>
      </section> --> */}

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
                         <a href="/login" target="_blank">
                            <img src={elem.img} alt="" />
                            <h3>{elem.title}</h3>
                         </a>

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

<h1 class="heading"> Our Popular Topics </h1>

<div class="swiper home-courses-slider">

   <div class="swiper-wrapper">
     {
        popular.map((elem)=>{
           return(
              <>
                 <div class="swiper-slide slide">
                    <div class="image">
                       <img src={elem.img} alt="" />
                       <h3>{elem.title}</h3>
                    </div>
                    <div class="content">
                       <h3>{elem.subtitle}</h3>
                       <p>{elem.para}</p>
                       <a href="/cat" class="btn">read more</a>
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

      <div class="box">
         <h3> <i class="fas fa-lightbulb"></i> Prepquizz </h3>
         <p>Prepquizz is a MCQ based quiz preperation platform
          for placements where student can learn and boost their skills 
         </p>
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
      </div>

      <div class="box">
         <h3>quick links</h3>
         <a href="/" class="link">Home</a>
         <a href="/Practice" class="link">Practice</a>
         <a href="/compete" class="link">Compete</a>
         <a href="#" class="link">About</a>
         
      </div>

      <div class="box">
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
