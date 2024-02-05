import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { AuthInfosContext } from '../../context/AuthContext';
import { clearLocalStorage } from '../../utils/funcs';

export default function Navbar({text}) {

    const info=useContext(AuthInfosContext)
    const [user,setUser]=useState({})
    const [data,setData]=useState([])
    const [course,setCourse]=useState(false)
    const logOutHandler=()=>{
        clearLocalStorage()
    }
    const fetch=async()=>{
        const dataa=await axios.get('http://localhost:4000/v1/menus')
        const res=await dataa.data
        setData(res)
        setUser(info.infos)
    }
    
    useEffect(()=>{  
        fetch()         
    },[info,course])
    return (
    <>
        <div className='flex justify-between items-center p-5 md:text-3xl sm:text-2xl text-lg'>
            <div className="right flex sm:gap-8 gap-2">
                {
                    data.map(item=>{
                        return(
                            <Link key={item._id} className={`relative list_menu md:px-3 py-4 text-base sm:text-2xl md:text-xl lg:text-3xl text-${text}`} to={`${item.href}`}>{item.title}{item.submenus.length !==0 && (<><i className='absolute top-5 mx-1 md:visible invisible'><IoIosArrowDown /></i>
                            <ul className='list-none bg-slate-400 md:w-[25rem] w-[16rem] p-5 flex flex-col gap-5 top-[4.5rem] rounded-lg absolute z-10 ul_menu invisible'>
                                   {item.submenus.map((submenu)=>(<li className='item_menu' key={submenu._id}>
                                    <Link className={`text-${text}`} onClick={()=>setCourse(submenu.href)} to={submenu.href}>{submenu.title}</Link></li>))}
                                </ul></>) }
                            </Link> 
                        )
                    })
                }
            </div>
            <div className="left flex items-center md:gap-5">
                {
                    !user.Islogin ? <span className={`md:p-1 text-sm md:text-2xl text-${text}`}><Link to="/login" >Login</Link></span> : (<Link to='/mypanel' className={`md:p-2 text-sm md:text-3xl  text-${text}`}>{user.name}</Link>)
                }
                {
                    user.Islogin && <Link onClick={logOutHandler} to='/login' className={`p-2 rounded-lg ml-3 text-${text}`}>LogOut</Link>
                }
            </div>
        </div>
    </>
  )
}
