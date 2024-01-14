import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        <div className='flex justify-between items-center p-5 mx-10'>
            <div className="right flex gap-10">
                {
                    data.map(item=><span key={item._id}>
                        <Link to={item.href}>{item.title}</Link>
                    </span>)
                }
            </div>
            <div className="left border-green-400 border-spacing-4">
                <span>mehrdad osouli</span>
            </div>
        </div>
    </>
  )
}
