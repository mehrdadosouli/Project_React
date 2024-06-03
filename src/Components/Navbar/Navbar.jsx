import { useState } from 'react';
import { Link } from 'react-router-dom'
import { clearLocalStorage, getToken } from '../../utils/funcs';
import { useSelector } from 'react-redux';
import { menuSlice } from '../../features/dataSlice';


export default function Navbar({ text }) {
    const menu = useSelector(menuSlice)
    let user = getToken('user')
    const [showMenu,setShowMenu]=useState(false)

    const logOutHandler = () => {
        clearLocalStorage()
    }
    const showHandler=()=>{
        console.log(showMenu);
        setShowMenu(!showMenu)
    }
    return (
        <>
            <div className='flex justify-between items-start md:px-10 p-10'>
                <div className={`flex md:flex-row flex-col justify-start items-start gap-10 list-none`}>
                        <span className='p-3 lg:hidden flex hover:cursor-pointer z-50' onClick={showHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    {
                    menu && menu.map(item => 
                        <li className={`group relative transition-colors hover:bg-orange-200 rounded-xl p-2 hover:cursor-pointer ${showMenu ? 'visible' : 'hidden' }`}><Link to={item.link}> {item.page}</Link>
                            {item.submenu ? <ul className='md:min-w-96 min-w-72 h-fit p-5 flex flex-col text-white gap-10 bg-green-700 z-50 absolute md:top-20 top-2 md:right-0 right-36 transition-1 invisible group-hover:visible group-hover:opacity-100 opacity-0'>
                                {item.submenu.map(sub =>
                                    <li className='p-2 transition-colors hover:bg-orange-200 rounded-xl cursor-pointer'><Link to={sub.link}>{sub.page}</Link></li>
                                )}</ul>
                                : ""
                            }
                        </li>
                    )}
                </div>
                <div className="left flex items-center md:gap-5">
                    {
                        !user ? <span className={`md:p-1 p-3 text-lg md:text-2xl text-${text}`}><Link to="/login" >Login</Link></span> : (<Link to='/mypanel' className={`md:p-2 text-lg md:text-3xl  text-${text}`}>{user.name}</Link>)
                    }
                    {
                        user && <Link onClick={logOutHandler} to='/login' className={`p-3 rounded-lg ml-3 text-${text}`}>LogOut</Link>
                    }
                </div>
            </div>
        </>
    )
}
