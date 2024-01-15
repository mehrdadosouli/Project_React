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
        <div className='flex justify-between items-center p-5 mx-10 md:text-3xl sm:text-2xl text-lg'>
            <div className="right flex sm:gap-14 gap-5">
                {
                    data.map(item=>{
                        return(
                                <Link key={item._id} className='relative list_menu p-3' to={item.href}>{item.title} {item.submenus.length ? (<><i className='absolute top-4 mx-1'><IoIosArrowDown /></i>
                                <ul className='list-none p-7 bg-slate-400 flex flex-col gap-5 top-14 rounded-lg absolute w-[300px] ul_menu invisible'>
                                       {item.submenus.map((submenu)=>(<li className='item_menu' key={submenu._id}>
                                        <Link className='text-white' to={submenu.href}>{submenu.title}</Link></li>))}
                                    </ul></>) : "" }
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
