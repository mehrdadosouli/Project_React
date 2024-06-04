import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import CourseBox from '../../Components/CourseBox/CourseBox'
import { frontend } from '../../features/dataSlice'
const FrontEndPage = () => {
    const select=useSelector(frontend)
    return (
      <div>
          <Navbar text="black" />
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 container'>
              {
                  select.map(elem=><CourseBox item={elem}/>)
              }
          </div>
          <Footer />
      </div>
    )
  }

export default FrontEndPage;



