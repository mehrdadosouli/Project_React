import Slider from "react-slick";
import CourseBox from "../CourseBox/CourseBox";
import { useSelector } from "react-redux";
import { presellCourse } from "../../features/dataSlice";

export default function PreSellCourse() {
  const data = useSelector(presellCourse);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
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
    };

  return (
    <div className="container">
      <Slider {...settings}>
        {data.map((item) => (
          <CourseBox item={item} isSlider={true} key={item._id} />
        ))}
      </Slider>
    </div>
  );
}
