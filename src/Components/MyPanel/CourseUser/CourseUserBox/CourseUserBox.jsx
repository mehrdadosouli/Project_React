import React from "react";


function CourseUserBox({data}) {
  return (

    <div className="flex flex-wrap">
        {
            data.length ? data.map(item=><div key={item._id} className="flex flex-col w-1/2 overflow-hidden rounded-3xl">
                <img src={`http://localhost:4000/courses/covers/${item.course.cover}`} alt="" />
                <div className="bg-[#28293D] flex flex-col p-5 gap-7">
                    <h3>{item.course.name}</h3>
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