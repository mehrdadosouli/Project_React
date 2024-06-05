import React, { useState,useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import LandingCounter from './LandingCounter';
import { FaBook } from "react-icons/fa";
export default function Landing() {

    const [search,setSearch]=useState('')
    const navigate=useNavigate()
    const searchHandler=(e)=>{
        navigate(`/search/${search}`)
    }

  return (
    <>
        <div className='sticky md:bg-bg_landing bg-bg_mobile bg-cover w-full h-[80vh] bg-no-repeat bg-fixed'>
            <h1 className="font-extrabold landing__title absolute lg:top-[65%] lg:left-[30%] top-[60%] left-[20%] text-white md:text-6xl sm:text-4xl text-3xl">
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
   
            <div className='relative sm:top-[52%] top-[30%] w-[30%] h-[4rem] mx-auto'>
                <input placeholder='searching...' className='absolute left-0 right-0 top-0 bottom-0 p-5 rounded-lg' type="text" value={search} onKeyUp={(e)=>e.keyCode==13 && searchHandler()} onChange={(e)=>setSearch(e.target.value)} />
                <span className='absolute left-[2%] bottom-0 top-[20%] text-4xl text-green-400'><IoSearchOutline className='hover:cursor-pointer' onClick={searchHandler}/></span>
            </div>

            <div className='flex w-[100%] text-center justify-evenly mx-auto absolute left-0 right-0 bottom-10 [&>*]:flex [&>*]:flex-col [&>*]:items-center mb-5 invisible sm:visible'>
                <div className='flex flex-col gap-5'>
                    <FaBook className='text-white text-5xl'/>
                    <div className="sm:text-white text-4xl font-bold text-white mt-1 flex flex-col">
                        <LandingCounter  num="50" />
                        <span className='text-xl lg:text-3xl'>کاربر توی سبزلرن ثبت نام کردن</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <FaBook className='text-white text-5xl'/>
                    <div className="sm:text-white text-4xl font-bold text-white mt-1 flex flex-col">
                        <LandingCounter  num="100" />
                        <span className='text-xl lg:text-3xl'>دوره آموزشی داریم</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <FaBook className='text-white text-5xl'/>
                    <div className="sm:text-white text-4xl font-bold text-white mt-1 flex flex-col">
                        <LandingCounter  num="150" />
                        <span className='text-xl lg:text-3xl'>دقیقه آموزش تولید کردیم</span>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}
