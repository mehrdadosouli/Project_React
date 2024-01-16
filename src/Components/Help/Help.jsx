import React, { useState } from 'react'
import { MdComputer } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { AiFillCrown } from "react-icons/ai";
export default function Help() {
    const [title,setTitle]=useState([{id:1,name:'دوره های اختصاصی',description:'با پشتیبانی و کیفیت بالا ارائه میده !',icon:<AiFillBank />},{id:2,name:'دوره های اختصاصی',description:'براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده',icon:<AiFillCamera />},{id:3,name:'دوره های اختصاصی',description:'اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست',icon:<MdComputer />},{id:4,name:'دوره های اختصاصی',description:'به هر مدرسی رو نمیده. چون کیفیت براش مهمه !',icon:<AiFillCrown />}])
  return (
    <div className='grid grid-cols-2 gap-20 py-10 container'>
        {
            title.map(item=><div className='flex gap-5 items-center shadow-lg rounded-2xl p-5'>
                <span className='text-6xl text-gray-600'>{item.icon}</span>
                <div className='flex flex-col'>
                    <span>{item.name}</span>
                    <span>{item.description}</span>
                </div>
            </div>)
        }
    </div>
  )
}
