import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
function SideMenu() {
  const [showMenu,setShowMenu]=useState(false)
  const closeHandler=()=>{
    setShowMenu(!showMenu)
  }

  return (
      <div className='md:static fixed top-0 right-0 p-10 flex flex-col z-50'>
        <span className={`w-screen h-screen inline-flex bg-gray-600 opacity-55 absolute top-0 right-0 transform  ${showMenu ? 'translate-x-0' : 'translate-x-full' }`} onClick={closeHandler}></span>
          <div className='text-4xl sm:hidden flex hover:cursor-pointer z-20 transform translate-x-0' onClick={()=>{setShowMenu(!showMenu)}}>{!showMenu ? <GiHamburgerMenu /> : <IoClose />}</div>
          <div className={`p-16 flex flex-col gap-10 sm:visible translate-x-[1rem] sm:bg-inherit bg-slate-500 text-center sm:transform-none transform transition-all ease-linear ${showMenu ? 'visible translate-x-[1rem]' : 'invisible translate-x-[10rem]'}`}>
            <div className='flex lg:flex-row flex-col-reverse gap-10 justify-center'>
              <img className='xl:w-32 w-24 mx-auto select-none' src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp" alt="weblearn" />
              <h1 className='xl:text-7xl text-5xl select-none '><Link to='/' className='text-white'>وب لرن</Link></h1>
            </div>
            <div className='[&>*]:text-white flex flex-col gap-10 lg:px-[18%]'>
             <Link to='/mypanel' >پیشخوان</Link>
             <Link to='/mycourses' >دوره های من</Link>
             <Link to='/addCourse' >اظافه کردن دوره</Link>
             <Link to='/mymenu' >منو های من</Link>
             <Link to='/' >خروج</Link>
            </div>
          </div>
      </div>
      )
}

export default SideMenu