import axios from 'axios'
import React, { useEffect } from 'react'

import SideMenu from '../../Components/MyPanel/SideMenu/SideMenu'
import Main from '../../Components/MyPanel/Main/Main'



function MyPanel() {
  
  useEffect(()=>{
    
  },[])
  return (
    <div className='bg-bg-panel w-full py-16 sm:px-32 text-white'>
        <div className='flex'>
          <SideMenu />
          <Main />
        </div>
    </div>
  )
}

export default MyPanel