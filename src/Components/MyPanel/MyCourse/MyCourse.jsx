import React, { useEffect,useState,useContext } from "react";
import SideMenu from "../../../Components/MyPanel/SideMenu/SideMenu";
import { AuthInfosContext } from "../../../context/AuthContext";
import AllCoursePanel from "../AllCoursePanel/AllCoursePanel";
import { getToken } from "../../../utils/funcs";
import axios from "axios";


function MyCourse() {
  const infoUser = useContext(AuthInfosContext).infos;
  const [info, setInfo] = useState([]);
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
    <div className="bg-bg-panel w-full py-16 sm:px-32 text-white">
      <div className="flex">
        <SideMenu />
        <AllCoursePanel infoUser={infoUser} info={info} />
      </div>
    </div>
  );
}

export default MyCourse;
