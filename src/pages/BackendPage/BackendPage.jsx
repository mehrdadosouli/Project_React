import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import CourseBox from '../../Components/CourseBox/CourseBox'
import { backend } from '../../features/dataSlice'
import { useLocation } from 'react-router-dom'
const BackendPage = () => {
    const select=useSelector(backend)
    const param=useLocation().pathname.split('/')[1]
    return (
      <div>
          <Navbar text="black" />
          <div className='flex mb-10'>
        <div class="w-1/3 h-44 relative bg-green-800 overflow-hidden clip-polygon">
        <span className='absolute top-[40%] right-10 text-white font-semibold text-3xl'>{param}</span> </div> 
        <div class="w-full h-44 bg-green-500 overflow-hidden clip-polygon2"></div>   
      </div> 
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 container'>
              {
                  select.map(elem=><CourseBox item={elem}/>)
              }
          </div>
          <Footer />
      </div>
    )
  }

export default BackendPage;


