import { useSearchParams } from "react-router-dom";
import Sessions from "../../Components/Sessions/Sessions";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { allCourse } from "../../features/dataSlice";

function Episode() {

  // useEffect(() => { 
  //   setParam(location.search.slice(6,9));
  //   setEpisodeId(location.search.slice(14));
  //   setId(location.search.slice(12,13));
  //   if(param){
  //     axios.get(`http://localhost:4000/v1/courses/${param}/${episodeId}`, {
  //       headers: { Authorization: `Bearer ${getToken("user")}` },
  //     })
  //     .then((res) => {
  //       setSession(res.data.session);
  //       setSessions(res.data.sessions); 
  //     });
  //   }
  // },[param,location]); 
  const [search]=useSearchParams()
  const id=search.get('id')
  const name=search.get('name')

  const select=useSelector(allCourse)

const sessionOne=select.find(elem=>{
  if(elem.sessions){
    return elem.sessions
  }
})

const filterSession=sessionOne.sessions.find(item=>item._id == id)

  return (
    <div className="bg-[#1C1C28] text-white">
      <div className=" container py-10">
      <Navbar text="white" />
        <div className="flex gap-10 my-10">
          <div className="w-3/4 h-full bg-[#32334D] flex flex-col rounded-3xl">
            <div className="p-10 text-white">
              <h2>{filterSession && filterSession.title}</h2> 
            </div>
            <div className="p-10">
            <video
              className="w-full rounded-3xl"
              src={sessionOne && `src/assets/video/${filterSession._id}.mp4`} 
              poster={`src/assets/image/${filterSession._id}.jpg`}
              controls
            ></video>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-10 text-white bg-[#32334D] rounded-3xl">
           <Sessions data={sessionOne} /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
