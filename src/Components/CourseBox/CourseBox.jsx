import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import uuid from 'react-uuid';

export default function CourseBox(props) {
 
return (
        <div className={`flex flex-col ${props.isSlider ? 'w-[100%]' : 'lg:w-[32%] md:w-[48.5%] w-[100%]'} shadow-lg rounded-2xl overflow-hidden md:mb-10 mb-2 hover:transform hover:translate-y-[-10px] hover:transition-transform `}>
                    <img src={`http://localhost:4000/courses/covers/${props.cover}`} alt="" className='w-full h-[20rem] object-cover' />
                        <span className='p-2'>{props.name}</span>
                        <div className='flex justify-between items-center p-2'>
                            <div className='flex justify-between items-center gap-5'>
                                <FaChalkboardTeacher />
                                <span>{props.creator}</span>
                            </div>
                            <div className='flex' id='star'>
                                {
                                    Array(5-props.courseAverageScore).fill(0).map(elem=> <div key={uuid()}><CiStar /></div>)
                                }
                                {
                                    Array(props.courseAverageScore).fill(0).map(elem=><div key={uuid()}><TiStarFullOutline /></div>)
                                }
                            </div>
                        </div>
                        <div className='border border-t-1 border-l-0 border-r-0 border-b-0 border-solid border-gray-300 flex justify-center items-center p-5'>
                            <Link to={`/courses/sessions/${props.shortName}`}>مشاهده جزیات</Link>
                        </div>
                </div>
  )
}
