import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/funcs";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Sessions from "../../Components/Sessions/Sessions";
import Navbar from "../../Components/Navbar/Navbar";

function Episode() {
  const location=useLocation()
  const [param,setParam]=useState(null)
  const [episodeId,setEpisodeId]=useState(null)
  const [Id,setId]=useState(null)
  const [session, setSession] = useState([]);
  const [sessions, setSessions] = useState([]);
  
  useEffect(() => { 
    setParam(location.search.slice(6,9));
    setEpisodeId(location.search.slice(14));
    setId(location.search.slice(12,13));
    if(param){
      axios.get(`http://localhost:4000/v1/courses/${param}/${episodeId}`, {
        headers: { Authorization: `Bearer ${getToken("user")}` },
      })
      .then((res) => {
        setSession(res.data.session);
        setSessions(res.data.sessions); 
      });
    }
  },[param,location]); 

  return (
    <div className="bg-[#1C1C28]">
      <div className="container py-10">
      <Navbar text="white" />
        <div className="flex gap-10 my-10">
          <div className="w-3/4 bg-[#32334D] flex flex-col rounded-3xl">
            <div className="p-10 text-white">
              <h2>{sessions.length && sessions[Id].title}</h2>
            </div>
            <div className="p-10">
            <video
              className="w-full rounded-3xl"
              src={sessions.length && `http://localhost:4000/courses/covers/${sessions[Id].video}`} 
              poster={`http://localhost:4000/courses/covers/${episodeId}.png`}
              controls
            ></video>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-10 text-white bg-[#32334D] h-52 rounded-3xl">
           <Sessions data={{sessions}} name={param} /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
