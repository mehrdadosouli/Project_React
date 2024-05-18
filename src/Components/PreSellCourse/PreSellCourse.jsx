import { Swiper, SwiperSlide } from 'swiper/react';
import CourseBox from '../CourseBox/CourseBox';
import { useSelector } from 'react-redux';
import { presellCourse } from '../../features/dataSlice';

export default function PreSellCourse() {
    const data=useSelector(presellCourse)
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
                    <CourseBox item={item} isSlider={true} />
                </SwiperSlide>   
            )}
    </Swiper>
    </div>
  )
}
