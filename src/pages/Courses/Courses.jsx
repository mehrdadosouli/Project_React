import React, { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { getToken } from "../../utils/funcs";
import axios from "axios";
import StatusBox from "../../Components/StatusBox/StatusBox";
import Navbar from "../../Components/Navbar/Navbar";
import Sessions from "../../Components/Sessions/Sessions";
import { allCourse } from "../../features/dataSlice";
import { useSelector } from "react-redux";

import vid from '../../assets/video/js-20-lib.mp4'

function Courses() {
  const [searchParam,setSearchParam] = useSearchParams();
  const navigate=useNavigate()
  const select=useSelector(allCourse)
  const [course,setCourse]=useState(null)

      
        useEffect(()=>{
          const params=searchParam.get('name')
          const filteringCourseUrl=async()=>{
            const filterCategory=await select.filter(item=>item.shortName === params) 
            await setCourse(filterCategory)   
          }
          filteringCourseUrl()
        },[])
      
      
    if(course && course[0].categoryID){
    return (
        <div className="bg-[#1C1C28] text-white">
          <div className="container py-10">
            <Navbar text="white" />
            <div className="flex items-center gap-10 my-10">
                <div className="w-1/2 flex flex-col gap-10 text-white">
                    <h1 className="text-5xl font-extrabold">{course[0].name}</h1>
                    <p className="leading-loose">اولین قدم شروع طراحی وبسایت، آموزش HTML هست. HTML یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی. همونجوری که هیچ موجودی نمیتونه بدون اسکلت زندگی کنه،</p>
                </div>
                <div className="w-1/2">
                    <video className="w-full rounded-3xl" src={vid} poster={`http://localhost:4000/courses/covers/${course[0].cover}`} controls></video>
                </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-wrap w-2/3 gap-10">
                <div className="flex w-full gap-10">
                    <StatusBox status='وضعیت دوره' value={course[0].categoryID.isComplete ? "دوره به اتمام رسیده" : "دوره در حال برگذاری است"} />
                    <StatusBox status='قیمت دوره' value={course[0].price ? course[0].price : "رایگان"} />
                    <StatusBox status='اخرین بروزرسانی' value={course[0].updatedAt.slice(0,10)} />
                </div> 
                <div className="flex w-full gap-10">
                    <StatusBox status='روش پشتیبانی' value={course[0].support ? course[0].support : "-"} />
                    <StatusBox status='نام دوره' value={course[0].shortName ? course[0].shortName : "-"} />
                    <StatusBox status='دسته بندی' value={course[0].categoryID.name} />
                </div> 
              </div>
              <div className="w-1/2 p-10 bg-[#28293D] gap-10 rounded-3xl flex flex-col justify-center items-center">
                <div className="flex w-full gap-10">
                  <StatusBox status='تعداد دانشجو' value={course[0].courseStudentsCount ? course[0].courseStudentsCount : "0"} />
                  <StatusBox status='پشتیبانی' value={course[0].support ? course[0].support : "-"} />
                </div>
                <div className="w-full text-white flex flex-col gap-5">
                  <span>75% رضایت مندی</span>
                  <input type="range" className="w-full" name="rate" id=""  value="75"/>
                </div>
              </div>
            </div>
            {/* session of course */}
            <div className="flex gap-10">
              <div className="flex flex-wrap w-full gap-10">
                {course[0] && <Sessions data={course[0]}/>}
              </div>
            </div>
          </div>
        </div>
    );
   }else{
    return(
      <div><h2>دوره ای نداریم با این مشخصات</h2></div>
    )
   }
}

export default Courses;
 