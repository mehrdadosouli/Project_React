import React from 'react'
import { Link } from 'react-router-dom'
import { clearLocalStorage } from '../../../utils/funcs'
function SideMenu() {
  const logOutHandler=()=>{
    clearLocalStorage()
  }
  return (
        <div className='w-[25%] py-16 flex flex-col gap-10 '>
            <div className='flex gap-10 justify-center'>
              <img className='w-32' src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp" alt="weblearn" />
              <h1 className='text-7xl'>وب لرن</h1>
            </div>
            <div className='[&>*]:text-white flex flex-col gap-10 px-[18%]'>
             <Link to='/mypanel' >پیشخوان</Link>
             <Link to='/mycourses' >دوره های من</Link>
             <Link to='/login' onClick={logOutHandler}>خروج</Link>
            </div>
          </div>
      )
}

export default SideMenu