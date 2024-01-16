import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CourseBox from '../CourseBox/CourseBox';
import uuid from 'react-uuid';

export default function LastedCourse() {
 
    const [course,setCourse]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/courses')
        .then(courses=>setCourse(courses.data))
    },[])
  return (
    <div className='flex flex-wrap container gap-5'>
        {
            course.slice(0,6).map(item=>
                <CourseBox {...item} key={uuid()}/>
            )
        }
    </div>
  )
}
