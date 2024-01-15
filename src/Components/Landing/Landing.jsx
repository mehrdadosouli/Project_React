import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const [search,setSearch]=useState('')
    const navigate=useNavigate()
    const searchHandler=(e)=>{
        navigate(`/search/${search}`)
    }

  return (
    <>
        <div className='sticky bg-bg_landing w-full h-[15rem] sm:h-[52.5rem] md:h-[61.9rem] bg-contain bg-top bg-no-repeat sm:bg-cover sm:bg-center bg-fixed'>
            <h1 className="landing__title absolute lg:top-[60%] lg:left-[30%] top-[60%] left-[20%] text-white md:text-6xl sm:text-4xl text-2xl">
            <Typewriter
                onInit={(typeWriter) => {
                typeWriter
                    .typeString("ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم!")
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("وب لرن - آکادمی خصوصی برنامه نویسی")
                    .start()
                    .pauseFor(2000);
                }}
                options={{
                loop: true,
                }}
            />
            </h1>
   
                <div className='relative sm:top-[50%] top-[30%] w-[50%] h-[3rem] mx-auto'>
                    <input className='absolute left-0 right-0 top-0 bottom-0 p-5 rounded-lg' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <span className='absolute left-[2%] bottom-0 top-[20%] text-green-400'><IoSearchOutline className='hover:cursor-pointer' onClick={searchHandler}/></span>
            </div>
        </div>
        
    </>
  )
}
