import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { clearLocalStorage } from '../../../utils/funcs'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
function SideMenu() {
  const [showMenu,setShowMenu]=useState(false)
  const logOutHandler=()=>{
    clearLocalStorage()
  }

  return (
      <div className='sm:relative absolute sm:w-[25%] w-[35%] p-5 flex flex-col z-40'>
          <div className='text-4xl sm:hidden flex hover:cursor-pointer z-20 transform translate-x-0' onClick={()=>{setShowMenu(!showMenu)}}>{!showMenu ? <GiHamburgerMenu /> : <IoClose />}</div>
          <div className={`py-16 flex flex-col gap-10 sm:visible translate-x-[1rem] sm:bg-inherit bg-slate-500 text-center sm:transform-none transform transition-all ease-linear ${showMenu ? 'visible translate-x-[1rem]' : 'invisible translate-x-[10rem]'}`}>
            <div className='flex lg:flex-row flex-col-reverse gap-10 justify-center'>
              <img className='xl:w-32 w-24 mx-auto select-none' src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp" alt="weblearn" />
              <h1 className='xl:text-7xl text-5xl select-none'>وب لرن</h1>
            </div>
            <div className='[&>*]:text-white flex flex-col gap-10 lg:px-[18%]'>
             <Link to='/mypanel' >پیشخوان</Link>
             <Link to='/mycourses' >دوره های من</Link>
             <Link to='/login' onClick={logOutHandler}>خروج</Link>
            </div>
          </div>
      </div>
      )
}

export default SideMenu