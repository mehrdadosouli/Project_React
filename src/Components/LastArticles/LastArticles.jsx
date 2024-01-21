import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LastArticles() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/articles')
        .then(res=>setData(res.data))
    },[])
  return (<div className='flex flex-wrap container gap-5'>
         {
          data.map(item=><div className='flex-col p-10 lg:w-[32%] md:w-[48.5%] w-[100%] flex-wrap rounded-2xl shadow-lg mb-14' key={item._id}>
            <div className='w-full h-[30rem] overflow-hidden flex'><img src={`http://localhost:4000/courses/covers/${item.cover}`} alt="" className='object-contain' /></div>
            <h4 className='font-extrabold'>{item.title}</h4>
            <p className='mt-5 text-gray-400 w-full h-32 overflow-hidden text-ellipsis'>{item.body}</p>
            <div className='bg-green-400 inline-block p-3 rounded-2xl mt-5'><Link className=' text-white' to={`/article-info/${item.shortName}`}>بیشتر بخوانید</Link></div>
          </div>)
         }
    </div>)
}
