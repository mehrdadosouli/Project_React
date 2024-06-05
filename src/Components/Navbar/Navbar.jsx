import { useState } from 'react';
import { Link } from 'react-router-dom'
import { clearLocalStorage, getToken } from '../../utils/funcs';
import { useSelector } from 'react-redux';
import { menuSlice } from '../../features/dataSlice';


export default function Navbar({ text }) {
    const menu = useSelector(menuSlice)
    let user = getToken('user')
    const [showMenu, setShowMenu] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [resizeScreen, setResizeScreen] = useState(window.innerWidth);

    const logOutHandler = () => {
        clearLocalStorage()
    }
    const showHandler = () => {
        setShowMenu(!showMenu)
    }
    const showSubmenuHandler = (item) => {
        if (activeSubmenu == item.page) {
            setShowSubmenu(!showSubmenu)
            setActiveSubmenu(item.page)
        } else {
            setShowSubmenu(true)
            setActiveSubmenu(item.page)
        }
    }
    window.addEventListener('resize', () => setResizeScreen(window.innerWidth))
    return (
        <>
            <div className='flex justify-between items-start md:px-10 p-10 lg:bg-white bg-bg-primary-dark text-white lg:text-black'>
                <div className={`flex lg:flex-row flex-col justify-start items-start gap-10 list-none`}>
                    <span className='p-3 lg:hidden flex hover:cursor-pointer z-50' onClick={showHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </span>
                    {
                        menu && menu.map(item =>
                            <li className={`group transition-colors relative ${showSubmenu && item.page == activeSubmenu ? 'bg-orange-200' : 'hover:bg-orange-200'} rounded-xl p-2 hover:cursor-pointer ${showMenu ? 'visible' : 'lg:flex hidden'} `}><Link to={item.link}> {item.page}</Link>
                                {item.submenu && resizeScreen < 1025 && (<span className={`p-2 rounded-l-xl select-none transition-all absolute ${showSubmenu && activeSubmenu == item.page && 'transform -rotate-90'}`} onClick={() => showSubmenuHandler(item)} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                                </span>)}
                                {item.submenu ? <ul className={`md:min-w-96 min-w-72 h-fit p-5 text-white gap-10 bg-bg-primary-light z-50 transition-1 ${resizeScreen < 1025 ? showSubmenu && activeSubmenu == item.page ? 'flex flex-col' : 'hidden' : 'absolute top-20 rounded-xl invisible group-hover:visible'}`}>
                                    {item.submenu.map(sub =>
                                        <li className='p-2 lg:my-5 transition-colors hover:bg-orange-200 rounded-xl cursor-pointer'><Link to={sub.link}>{sub.page}</Link></li>
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
