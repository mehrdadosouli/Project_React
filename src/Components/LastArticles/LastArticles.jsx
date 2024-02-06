import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Article from '../Article/Article'

export default function LastArticles() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/articles')
        .then(res=>setData(res.data))
    },[])
  return (<div className='flex flex-wrap container xl:gap-10 md:gap-5 gap-2 py-10'>
         {
          data.map(item=><div className='flex lg:w-[31%] md:w-[48%] w-[100%] rounded-2xl shadow-lg p-10' key={item._id}><Article data={item} /></div>)
         }
    </div>)
}
