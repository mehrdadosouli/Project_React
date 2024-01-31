import React, { useContext, useEffect, useState } from "react";
import { AuthInfosContext } from "../../../context/AuthContext";
import PanelInfoBox from "../PanelInfoBox/PanelInfoBox.JSX";
import axios from "axios";
import { getToken } from "../../../utils/funcs";
import LastTickets from "../LastTickets/LastTickets";
import CourseUser from "../CourseUser/CourseUser";
import { useLocation } from "react-router-dom";


function Main() {
  const infoUser = useContext(AuthInfosContext).infos;
  const [info,setInfo]=useState([])
  const location = useLocation();
  const { pathname } = location;
  const fetchInfoUser=()=>{
    axios.get('http://localhost:4000/v1/infos/p-admin',{
      headers:{
        Authorization:`Bearer ${getToken('user')}`
      }
    })
    .then(res=>setInfo(res.data))
    .catch(error=>console.log(error))
  }
  useEffect(()=>{
    fetchInfoUser()
  },[])
  return (
    <div className="sm:w-[75%] w-[100%] p-20 px-16 bg-[#1C1C28] rounded-3xl">
      <div>
      <div className="flex justify-between">
        <span className="text-3xl font-bold">
          {infoUser.name} عزیز خوش آمدی
        </span>
        <span>{pathname.split("/")[1]}</span>
      </div>        
           <PanelInfoBox data={info} name="مجموعه" />
      </div>
      <div className="flex xl:flex-row flex-col gap-10">
        <div className="xl:w-1/2 w-full">
          <CourseUser />
        </div>
        <div className="xl:w-1/2 w-full bg-[#28293D] rounded-3xl p-10">
          <LastTickets />
        </div>
      </div>
    </div>
  );
}

export default Main;
