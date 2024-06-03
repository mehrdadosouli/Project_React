import React from 'react'
import { Link } from 'react-router-dom';
export default function Article({data}) {

  return (
    <div>
            <div className='w-full h-[30rem] overflow-hidden flex'><img src={`http://localhost:5173/${data.cover}`} alt="" className='object-contain' /></div>
            <h4 className='font-extrabold'>{data.title}</h4>
            <p className='mt-5 text-gray-400 w-full h-32 overflow-hidden text-ellipsis'>{data.body}</p>
            <div className='bg-green-400 inline-block p-3 rounded-2xl mt-5'><Link className=' text-white' to={`/allarticles`}>بیشتر بخوانید</Link></div>
    </div>
  )
}
