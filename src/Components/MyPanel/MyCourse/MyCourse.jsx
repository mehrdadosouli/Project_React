import React, { useState } from "react";
import SideMenu from "../../../Components/MyPanel/SideMenu/SideMenu";
import AllCoursePanel from "../AllCoursePanel/AllCoursePanel";


function MyCourse() {

  const [info, setInfo] = useState([]);
    
      
  return (
    <div className="bg-bg-panel w-full py-16 sm:px-32 text-white">
      <div className="flex">
        <SideMenu />
        <AllCoursePanel infoUser={infoUser} info={info} />
      </div>
    </div>
  );
}

export default MyCourse;
