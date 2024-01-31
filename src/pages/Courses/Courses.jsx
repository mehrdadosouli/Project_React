import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getToken } from "../../utils/funcs";
import axios from "axios";
import StatusBox from "../../Components/StatusBox/StatusBox";
import Navbar from "../../Components/Navbar/Navbar";
import Sessions from "../../Components/Sessions/Sessions";


function Courses() {
  const location = useLocation();
  const myParam = new URLSearchParams(location.search).get("name");
  const [dataa, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.post(`http://localhost:4000/v1/courses/${myParam}`,null,{
            headers: {Authorization: `Bearer ${getToken("user")}`}
        });
        setData(result.data);
        console.log(dataa);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[]);
    if(dataa && dataa.categoryID){
    return (
        <div className="bg-[#1C1C28] text">
          <div className="container py-10">
            <Navbar text="white" />
            <div className="flex items-center gap-10 my-10">
                <div className="w-1/2 flex flex-col gap-10 text-white">
                    <h1 className="text-5xl font-extrabold">{dataa.name}</h1>
                    <p className="leading-loose">اولین قدم شروع طراحی وبسایت، آموزش HTML هست. HTML یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی. همونجوری که هیچ موجودی نمیتونه بدون اسکلت زندگی کنه،</p>
                </div>
                <div className="w-1/2">
                    <video className="w-full rounded-3xl" src='' poster={`http://localhost:4000/courses/covers/${dataa.cover}`} controls></video>
                </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-wrap w-2/3 gap-10">
                <div className="flex w-full gap-10">
                    <StatusBox status='وضعیت دوره' value={dataa.categoryID.isComplete ? "دوره به اتمام رسیده" : "دوره در حال برگذاری است"} />
                    <StatusBox status='قیمت دوره' value={dataa.price ? dataa.price : "رایگان"} />
                    <StatusBox status='اخرین بروزرسانی' value={dataa.updatedAt.slice(0,10)} />
                </div> 
                <div className="flex w-full gap-10">
                    <StatusBox status='وضعیت دوره' value={dataa.categoryID.isComplete ? "دوره به اتمام رسیده" : "دوره در حال برگذاری است"} />
                    <StatusBox status='قیمت دوره' value={dataa.price ? dataa.price : "رایگان"} />
                    <StatusBox status='اخرین بروزرسانی' value={dataa.updatedAt.slice(0,10)} />
                </div> 
              </div>
              <div className="w-1/2 p-10 bg-[#28293D] gap-10 rounded-3xl flex flex-col justify-center items-center">
                <div className="flex w-full gap-10">
                  <StatusBox status='تعداد دانشجو' value={dataa.courseStudentsCount ? dataa.courseStudentsCount : "0"} />
                  <StatusBox status='پشتیبانی' value={dataa.support ? dataa.support : "-"} />
                </div>
                <div className="w-full text-white flex flex-col gap-5">
                  <span>75% رضایت مندی</span>
                  <input type="range" className="w-full" name="rate" id=""  value="75"/>
                </div>
              </div>
            </div>
            {/* session of course */}
            <div className="flex flex-wrap w-2/3 gap-10">
              <Sessions />
            </div>
          </div>
        </div>
    );
   }
}

export default Courses;
 