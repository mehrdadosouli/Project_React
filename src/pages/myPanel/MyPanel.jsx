import React, { useEffect, useState } from 'react'
import SideMenu from '../../Components/MyPanel/SideMenu/SideMenu'
import CourseUser from '../../Components/MyPanel/CourseUser/CourseUser'
import LastTickets from '../../Components/MyPanel/LastTickets/LastTickets'
import PanelInfoBox from '../../Components/MyPanel/PanelInfoBox/PanelInfoBox'
import { getToken } from '../../utils/funcs'
import { useSelector } from 'react-redux'
import { myCourses } from '../../features/dataSlice'


function MyPanel() {

  const select=useSelector(myCourses) 
  const [info, setInfo] = useState([]);
  const [courses, setCourses] = useState([]);
  const data=getToken('user') 
  useEffect(()=>{
    setCourses(select)
    setInfo(data)
  },[])
  return (
    <div className='w-full bg-bg-panel min-h-screen md:p-32 p-10 text-white'>
        <PanelInfoBox info={info} />
        <div className='flex md:flex-row justify-between bg-bg-primary-dark'>
          <SideMenu />
          <div className="md:w-2/3 w-full flex xl:flex-row flex-col gap-10 p-10">
            <div className="xl:w-1/2 w-full">
              {
                courses.length ? <CourseUser data={courses} /> : <span>هیچ دوره ای ندارید</span>
              }
            </div>
            <div className="xl:w-1/2 w-full bg-bg-primary-light rounded-3xl p-10">
              <LastTickets />
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyPanel
