import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import { allCourse } from '../../features/dataSlice'
import CourseBox from '../../Components/CourseBox/CourseBox'

export default function Shopping() {
    const select=useSelector(allCourse)
  return (
    <div>
        <Navbar text="black" />
        <img src="src/assets/image/img.jpg" alt="" className='mb-20' />
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 container'>
            {
                select.map(elem=><CourseBox item={elem}/>)
            }
        </div>
        <Footer />
    </div>
  )
}
