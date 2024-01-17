import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navbarMenuRandom } from '../../utils/funcs'


export default function Topbar() {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
       axios.get('http://localhost:4000/v1/menus/topbar') 
       .then(res=>setMenu(res.data))
    },[])
    return (
    <>
        <div className='flex justify-between items-center p-5 bg-gray-400 md:text-2xl text-sm sm:text-2xl overflow-hidden'>
            <div className="right">
                <ul className='ul flex sm:gap-5 gap-2 mx-5'>
                    {
                       navbarMenuRandom(menu,6)                      
                    }
                </ul>
            </div>
            <div className="left"></div>
        </div>
    </>
  )
}
