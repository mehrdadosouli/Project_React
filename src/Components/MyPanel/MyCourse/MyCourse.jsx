import React, { useEffect, useState } from "react";
import SideMenu from "../../../Components/MyPanel/SideMenu/SideMenu";
import { useSelector } from "react-redux";
import { myCourses } from "../../../features/dataSlice";
import CourseUser from "../CourseUser/CourseUser";
import PanelInfoBox from "../PanelInfoBox/PanelInfoBox";
import { getToken } from "../../../utils/funcs";


function MyCourse() {
  const select=useSelector(myCourses)
  const data=getToken('user') 

  const [info, setInfo] = useState([]);
  useEffect(()=>{
    setInfo(select)
  },[info,select])
    
      
  return (
    <div className='w-full bg-bg-panel min-h-screen md:p-32 p-10 text-white'>
      <PanelInfoBox info={data} />
        <div className='flex flex-row justify-between bg-bg-primary-dark'>
          <SideMenu />
          <div className="md:w-2/3 w-full p-10">
          {
                info.length ? <CourseUser data={info} /> : <span>هیچ دوره ای ندارید</span>
              }
          </div>
        </div>
    </div>
  );
}

export default MyCourse;
