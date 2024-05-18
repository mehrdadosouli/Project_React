import React from 'react'
import { Link } from 'react-router-dom'
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import uuid from 'react-uuid';

export default function CourseBox({item}) {
 
return (
        <div className={`flex flex-col ${!item?.isSlider ? 'w-[100%]' : 'lg:w-[31%] md:w-[48%] w-[100%]'} shadow-lg rounded-2xl md:mb-10 mb-2 hover:transform hover:translate-y-[-10px] hover:transition-transform `}>
                    <img src={`http://localhost:4000/courses/covers/${item?.cover}`} alt="" className='w-full h-[20rem] object-cover rounded-t-2xl' />
                        <span className='p-2'>{item?.name}</span>
                        <div className='flex justify-between items-center p-2'>
                            <div className='flex justify-between items-center gap-5'>
                                <FaChalkboardTeacher />
                                <span>{item?.creator?.name}</span>
                            </div>
                            <div className='flex' id='star'>
                                {
                                   item?.courseAverageScore &&  Array(5 - (item.courseAverageScore)).fill(0).map(elem=> <div key={uuid()}><CiStar /></div>)
                                }
                                {
                                   item?.courseAverageScore &&  Array(item.courseAverageScore).fill(0).map(elem=><div key={uuid()}><TiStarFullOutline /></div>)
                                }
                            </div>
                        </div>
                        <div className='border border-t-1 border-l-0 border-r-0 border-b-0 border-solid border-gray-300 flex justify-center items-center p-5'>
                            <Link to={`/courses?name=${item?.shortName}`}>مشاهده جزیات</Link>
                        </div>
                </div>
  )
}
