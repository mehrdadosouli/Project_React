import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CourseBox from '../CourseBox/CourseBox'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import 'swiper/css/autoplay';

export default function PopularCourse() {
    const [course,setCourse]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/courses/popular')
        .then(result=>setCourse(result.data))
    },[])

  return (
    <div className='container gap-5'>
            <Swiper
                slidesPerView={3}
                breakpoints= {{
                    100: { slidesPerView: 1},
                    768: { slidesPerView: 2},
                    1023: {slidesPerView: 3}
                  }}
                spaceBetween={30}
                zoom='true'
                pagination={{ clickable: true }}
                loop={true}
                className="w-full"
                scrollbar={{ draggable: true }}
                autoplay= {{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
        {
            course.map(item=>
                <SwiperSlide key={item._id}>
                    <CourseBox {...item} isSlider={true} />
                </SwiperSlide>   
            )
        }

        </Swiper>
    </div>
  )
}
