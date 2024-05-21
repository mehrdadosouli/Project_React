import React, { useContext, useEffect, useState } from "react";

import PanelInfoBox from "../PanelInfoBox/PanelInfoBox.JSX";
import axios from "axios";
import { getToken } from "../../../utils/funcs";
import LastTickets from "../LastTickets/LastTickets";
import CourseUser from "../CourseUser/CourseUser";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


function Main() {
  const info=getToken('user')

  useEffect(()=>{
    
  },[])
  return (
    <div className="sm:w-[75%] w-[100%] p-20 px-16 flex flex-col gap-10 bg-[#1C1C28] rounded-3xl">
        <div className="flex justify-between">
          <span className="text-3xl font-bold">
            {info?.name} عزیز خوش آمدی
          </span>
          <span>MyPanel</span>
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
