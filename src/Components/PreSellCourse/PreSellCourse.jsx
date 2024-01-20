import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseBox from '../CourseBox/CourseBox';

export default function PreSellCourse() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/courses/presell')
        .then(res=>setData(res.data))
    },[])
    return (
    <div className='container'>
    <Swiper
    slidesPerView={3}
      spaceBetween={50}
      breakpoints={{
        100: { slidesPerView: 1},
        768: { slidesPerView: 2},
        1023:{ slidesPerView: 3}
      }}
      loop={true}
      autoplay={true}
      scrollbar={{draggable:true}}
    >
        {data.map(item=>
                <SwiperSlide key={item._id}>
                    <CourseBox {...item} isSlider={true} />
                </SwiperSlide>   
            )}
    </Swiper>
    </div>
  )
}
