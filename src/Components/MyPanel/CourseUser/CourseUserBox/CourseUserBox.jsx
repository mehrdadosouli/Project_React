import React from "react";
import { Link } from "react-router-dom";

function CourseUserBox({data}) {
  return (

    <div className="flex flex-wrap gap-5">
        {
            data.length ? data.map(item=><div key={item._id} className="flex flex-col md:w-[48%] w-full overflow-hidden rounded-3xl ">
                <img src={`http://localhost:4000/courses/covers/${item.course.cover}`} alt="" />
                <div className="bg-[#28293D] flex flex-col p-5 justify-between min-h-48">
                    <h3><Link className="text-white" to={{pathname:'/courses',search:`?name=${item.course.shortName}` }}>{item.course.name}</Link></h3>
                    <h4>{item.course.isComplete ? "دوره به اتمام رسیده" : "دوره در حال ضبط است"}</h4>
                </div>
                </div>)
            : 
            <h3>هیچ دوره ای  ندارید</h3>
        }
    </div>
  )
}

export default CourseUserBox