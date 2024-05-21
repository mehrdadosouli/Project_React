import React, { useState } from 'react'
import CourseUserBox from './CourseUserBox/CourseUserBox'
import { getToken } from '../../../utils/funcs'

function CourseUser() {
    const [course,SetCourse]=useState([])


  return (
    <div>
        <h3 className='bg-[#28293D] rounded-3xl p-10 mb-10 md:text-right text-center'>دوره های شما</h3>
        <CourseUserBox data={course} />
    </div>
  )
}

export default CourseUser