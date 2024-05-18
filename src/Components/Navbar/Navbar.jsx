import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { clearLocalStorage, getToken } from '../../utils/funcs';
import { useSelector } from 'react-redux';
import { menuSlice } from '../../features/dataSlice';


export default function Navbar({text}) {
    const menu=useSelector(menuSlice)
    const logOutHandler=()=>{
        clearLocalStorage()
    }
    let user=getToken('user')
  
    return (
    <>
        <div className='flex justify-between items-center p-5 md:text-3xl sm:text-2xl text-lg'>
            <div className="right flex sm:gap-8 gap-2">
                {
                    menu.map(item=>{
                        return(
                            <li key={item.id} className='relative list_menu md:px-3 py-4 text-base sm:text-2xl md:text-xl lg:text-3xl list-none'><Link to={item.link}>{item.page}</Link>{item.submenu && 
                            (<><i className='absolute top-5 mx-1 md:visible invisible'><IoIosArrowDown /></i>
                            <ul className='list-none bg-gradient-to-br from-cyan-500 to-blue-500 md:w-[25rem] w-[16rem] flex flex-col gap-5 top-[4.5rem] rounded-lg absolute z-10 ul_menu invisible'>
                                   {item.submenu.map((submenu)=>(<li className='item_menu px-7 py-4 [&>*]:text-white' key={submenu.id}>
                                    <Link to={submenu.link}> {submenu.page} </Link></li>)) }
                                </ul></>) }
                            </li>
                        )
                    })
                }
            </div>
            <div className="left flex items-center md:gap-5">
                {
                    !user?.Islogin ? <span className={`md:p-1 text-sm md:text-2xl text-${text}`}><Link to="/login" >Login</Link></span> : (<Link to='/mypanel' className={`md:p-2 text-sm md:text-3xl  text-${text}`}>{user.name}</Link>)
                }
                {
                    user?.Islogin && <Link onClick={logOutHandler} to='/login' className={`p-2 rounded-lg ml-3 text-${text}`}>LogOut</Link>
                }
            </div>
        </div>
    </>
  )
}
