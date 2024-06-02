import { Link } from 'react-router-dom'
import { clearLocalStorage, getToken } from '../../utils/funcs';
import { useSelector } from 'react-redux';
import { menuSlice } from '../../features/dataSlice';


export default function Navbar({ text }) {
    const menu = useSelector(menuSlice)

    const logOutHandler = () => {
        clearLocalStorage()
    }
    let user = getToken('user')

    return (
        <>
            <div className='flex justify-between py-5 px-10'>
                <div className='flex flex-row justify-start items-center gap-10 list-none'>
                <span className='lg:hidden flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    {
                    menu && menu.map(item => 
                        <li className={`lg:flex hidden group relative`}><Link to={item.link}> {item.page}</Link>
                            {item.submenu ? <ul className='min-w-96 h-fit p-5 flex flex-col text-white gap-10 bg-gray-700 z-50 absolute top-16 transition-all invisible group-hover:visible group-hover:opacity-100 opacity-0'>
                                {item.submenu.map(sub =>
                                    <li className=''><Link to={sub.link}>{sub.page}</Link></li>
                                )}</ul>
                                : ""
                            }
                        </li>
                    )}
                </div>
                <div className="left flex items-center md:gap-5">
                    {
                        !user ? <span className={`md:p-1 text-sm md:text-2xl text-${text}`}><Link to="/login" >Login</Link></span> : (<Link to='/mypanel' className={`md:p-2 text-sm md:text-3xl  text-${text}`}>{user.name}</Link>)
                    }
                    {
                        user && <Link onClick={logOutHandler} to='/login' className={`p-2 rounded-lg ml-3 text-${text}`}>LogOut</Link>
                    }
                </div>
            </div>
        </>
    )
}
