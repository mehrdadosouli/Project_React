import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { menuSlice } from '../../features/dataSlice'
import { navbarMenuRandom } from '../../utils/funcs'

export default function Topbar() {
    const menu=useSelector(menuSlice)
    return (
    <>
        <div className='flex justify-between items-center p-5 bg-gray-400 md:text-2xl text-sm sm:text-2xl overflow-hidden'>
            <div className="right">
                <ul className='ul flex sm:gap-5 gap-2 mx-2 text-base sm:text-lg md:text-xl'>
                    {
                       menu && menu.map(elem=>elem.submenu && navbarMenuRandom(elem.submenu,3).map(item=>(<li>
                        <Link to={item.link}>{item.page}</Link>
                       </li>)))           
                    }
                </ul>
            </div>
            <div className="left"></div>
        </div>
    </>
  )
}
