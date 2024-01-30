import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CourseUserBox from './CourseUserBox/CourseUserBox'
import { getToken } from '../../../utils/funcs'
function CourseUser() {
    const [course,SetCourse]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/users/courses',{
            headers:{
                Authorization:`Bearer ${getToken('user')}`
            }
        })
        .then(res=>SetCourse(res.data));
        
    },[])
  return (
    <div>
        <h3 className='bg-[#28293D] rounded-3xl p-10 mb-10 md:text-right text-center'>دوره های شما</h3>
        <CourseUserBox data={course} />
    </div>
  )
}

export default CourseUser