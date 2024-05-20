import CourseBox from '../CourseBox/CourseBox'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { popularCourse } from '../../features/dataSlice';

export default function PopularCourse() {
    const course=useSelector(popularCourse)
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", borderRadius:'50%' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", borderRadius:'50%' }}
        onClick={onClick}
      />
    );
  }

    
  return (
    <div className="container">
    <Slider {...settings}>
        {
            course?.map(item=>
                    <CourseBox item={item} key={item._id} isSlider={true} />
        )}
        </Slider>
    </div>
  )
}
