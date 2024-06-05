import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import { allCourse } from '../../features/dataSlice'
import CourseBox from '../../Components/CourseBox/CourseBox'
import { useLocation } from 'react-router-dom'

export default function Shopping() {
  const select = useSelector(allCourse)
  const param=useLocation().pathname.split('/')[1]
  
  return (
    <div>
      <Navbar text="black" />
      <div className='flex mb-10'>
        <div class="w-1/3 h-44 relative bg-green-800 clip-polygon">
        <span className='absolute top-[40%] right-10 text-white font-semibold text-3xl'>{param}</span> </div> 
        <div class="w-full h-44 bg-green-500 clip-polygon2"></div>   
      </div> 
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 container'>
        {
          select.map(elem => <CourseBox key={elem._id} item={elem} />)
        }
      </div>
      <Footer />
    </div>
  )
}

