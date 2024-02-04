import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navbarMenuRandom } from '../../utils/funcs'


export default function Topbar() {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        document.querySelector('ul').innerHTML=''
       axios.get('http://localhost:4000/v1/menus/topbar') 
       .then(res=>setMenu(navbarMenuRandom(res.data,6)))
    },[])
    return (
    <>
        <div className='flex justify-between items-center p-5 bg-gray-400 md:text-2xl text-sm sm:text-2xl overflow-hidden'>
            <div className="right">
                <ul className='ul flex sm:gap-5 gap-2 mx-2 text-base sm:text-lg md:text-xl'>kjh
                    {
                       menu              
                    }
                </ul>
            </div>
            <div className="left"></div>
        </div>
    </>
  )
}
