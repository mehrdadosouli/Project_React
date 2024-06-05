import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { deleteMyCourse } from "../../../features/dataSlice";

function CourseUser({data}) {
  const dispatch=useDispatch()
  const location=useLocation()
  const [loc,setLoc]=useState('')
  const deleteHandler=(id)=>{
    dispatch(deleteMyCourse(id))
  }
  useEffect(()=>{
    setLoc(location.pathname)
  },[])
  return (

    <div className="md:grid lg:grid-cols-2 grid-cols-1">
        {
            data ? data.map(item=><div key={item._id} className="flex flex-col m-5 overflow-hidden rounded-3xl ">
                <Link to={`/courses?name=${item.shortName}`}>
                  <img src={`/src/assets/courses/${item.cover.split('/')[4].split('.')[0]}.png`} alt="" className="w-full " />
                  </Link>
                <div className="bg-bg-primary-light flex flex-col p-5 justify-between min-h-32">
                    {/* <h3><Link className="text-white" to={{pathname:'/courses',search:`?name=${item.course.shortName}` }}>{item.course.name}</Link></h3> */}
                    <h3 className="md:text-2xl text-lg"><Link to={`/courses?name=${item.shortName}`}>{item.name}</Link></h3>
                    <h4 className="md:text-2xl text-lg">{item.isComplete ? "دوره به اتمام رسیده" : "دوره در حال ضبط است"}</h4>
                </div>
                    {
                      loc == '/mycourses' && <div className="bg-bg-primary-light"><button className="bg-red-400 rounded-2xl overflow-hidden p-2 m-2 hover:cursor-pointer" onClick={()=>deleteHandler(item._id)}>delete</button></div> 
                    }
                </div>)
            : 
            <h3>هیچ دوره ای  ندارید</h3>
        }
    </div>
  )
}

export default CourseUser