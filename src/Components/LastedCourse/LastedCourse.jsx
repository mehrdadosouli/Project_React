import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
export default function LastedCourse() {
 
    const [course,setCourse]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/courses')
        .then(courses=>setCourse(courses.data))
    },[])
  return (
    <div className='flex flex-wrap container gap-5'>
        {
            course.slice(0,6).map(item=><>
                <div className='flex flex-col w-[32.6%] shadow-lg rounded-2xl overflow-hidden md:mb-10 mb-2 hover:transform hover:translate-y-[-10px] hover:transition-transform'>
                    <img src={`http://localhost:4000/courses/covers/${item.cover}`} alt="" className='w-full h-[20rem] object-cover' />
                        <span className='p-2'>{item.name}</span>
                        <div className='flex justify-between items-center p-2'>
                            <div className='flex justify-between items-center gap-5'>
                                <FaChalkboardTeacher />
                                <span>{item.creator}</span>
                            </div>
                            <div className='flex' id='star'>
                                {
                                    Array(5-item.courseAverageScore).fill(0).map(elem=><CiStar />)
                                }
                                {
                                    Array(item.courseAverageScore).fill(0).map(elem=><TiStarFullOutline />)
                                }
                            </div>
                        </div>
                        <div className='border border-t-1 border-l-0 border-r-0 border-b-0 border-solid border-gray-300 flex justify-center items-center p-5'>
                            <Link to={`/courses/sessions/${item.shortName}`}>مشاهده جزیات</Link>
                        </div>
                </div>
            </>)
        }
    </div>
  )
}
