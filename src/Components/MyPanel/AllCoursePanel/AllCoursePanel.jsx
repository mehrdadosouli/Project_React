import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CourseUser from "../CourseUser/CourseUser";

function AllCoursePanel({infoUser,info}) {

  const location = useLocation();
  const { pathname } = location;
  
  return (
    <div className="w-full p-20 px-16 bg-[#1C1C28] rounded-3xl">
      <div className="flex justify-between">
        <span className="text-3xl font-bold">
          {infoUser.name} عزیز خوش آمدی
        </span>
        <span>{pathname.split("/")[1]}</span>
      </div>
      <div className="w-full bg-[#1C1C28] rounded-3xl p-10">
          <CourseUser />
      </div>
    </div>
  );
}

export default AllCoursePanel;
