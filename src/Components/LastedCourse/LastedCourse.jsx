import { useSelector } from 'react-redux';
import CourseBox from '../CourseBox/CourseBox';
import { allCourse } from '../../features/dataSlice';


export default function LastedCourse() {
 const course=useSelector(allCourse)
    console.log(course);
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container gap-5'>
        {
            course.slice(0,6).map(item=><div key={item._id}>
                <CourseBox item={item}/>
            </div>
            )
        }
    </div>
  )
}
