import CourseBox from '../CourseBox/CourseBox'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import 'swiper/css/autoplay';
import { useSelector } from 'react-redux';
import { popularCourse } from '../../features/dataSlice';

export default function PopularCourse() {
    const course=useSelector(popularCourse)
    console.log(course);
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
            course?.map(item=>
                <SwiperSlide key={item._id}>
                    <CourseBox item={item} isSlider={true} />
                </SwiperSlide>   
            )
        }

        </Swiper>
    </div>
  )
}
