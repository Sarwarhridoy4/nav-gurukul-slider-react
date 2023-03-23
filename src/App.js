import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
          autoplay: {
            delay:5000 // autoplay delay in milliseconds
          },
          pagination: {
            el: ".swiper-pagination",
          },
        }}
        
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/10.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Ajay Kumar</span>
          <span class="card__name">Associate Director - Curriculum</span>
          <p class="card__text">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/9.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Arun chauhan </span>
          <span class="card__name">Associate Director - Curriculum</span>
          <p class="card__text">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>
          
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/8.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Deepika Yadav</span>
          <span class="card__name">Lead Student Experience</span>
          <p class="card__text">Mtech-IIT Madras | Phd-IIT Roorkee</p>
          
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/7.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Manish d pepal</span>
          <span class="card__name">Lead Instructor</span>
          <p class="card__text">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>
          
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/6.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Praveen Sai Teella</span>
          <span class="card__name">KPraveen Sai Teella</span>
          <p class="card__text">Btech-IIT Guwahati</p>
          
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/5.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Rajiv Rana</span>
          <span class="card__name">Lead Student Experience</span>
          <p class="card__text">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>
          
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/2.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Rohit Sahu</span>
          <span class="card__name">Lead Curriculum Engineer</span>
          <p class="card__text">Mtech-IIT Roorkee | Phd-IIT Roorkee</p>
          
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/sandeep.jpeg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Sandeep kumar</span>
          <span class="card__name">Lead Instructor</span>
          <p class="card__text">Mtech-Thapar University | Phd-IIT Roorkee</p>
          
        </div>
      </div>

        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/1.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Subhod khullar</span>
          <span class="card__name">Lead Instructor</span>
          <p class="card__text">Mtech-IIT Roorkee | Phd-IIT Roorkee</p>
          
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card swiper-slide">
        <div class="card__image">
          <img src="https://geeksofgurukul.com/images/team_images/4.jpg" alt="card pic"/>
        </div>

        <div class="card__content">
          <span class="card__title">Rohit rana</span>
          <span class="card__name">Associate Director - Curriculum</span>
          <p class="card__text">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>
          
        </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}