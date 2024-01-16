import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
    const [data,setData]=useState([])
    useEffect(()=>{
           const fetch=async()=>{
                const dataa=await axios.get('http://localhost:4000/v1/menus')
                const res=await dataa.data
                setData(res)
            }
            fetch()
    },[])
    return (
    <>
        <div className='flex justify-between items-center p-5 md:text-3xl sm:text-2xl text-lg'>
            <div className="right flex gap-2 md:gap-8">
                {
                    data.map(item=>{
                        return(
                                <Link key={item._id} className='relative list_menu px-3 py-4 text-lg sm:text-xl lg:text-3xl' to={item.href}>{item.title} {item.submenus.length !==0 && (<><i className='absolute top-5 mx-1'><IoIosArrowDown /></i>
                                <ul className='list-none bg-slate-400 md:w-[25rem] w-[16rem] p-5 flex flex-col gap-5 top-[4.5rem] rounded-lg absolute z-10 ul_menu invisible'>
                                       {item.submenus.map((submenu)=>(<li className='item_menu' key={submenu._id}>
                                        <Link className='text-white' to={submenu.href}>{submenu.title}</Link></li>))}
                                    </ul></>) }
                                </Link> 
                        )
                    })
                }
            </div>
            <div className="left border-green-400 border-solid border p-5 rounded-lg ">
                <span>mehrdad osouli</span>
            </div>
        </div>
    </>
  )
}
