import { Link } from 'react-router-dom';
import { getToken } from '../../utils/funcs';
import { FaLockOpen,FaLock  } from "react-icons/fa";

function Sessions({data}) {
  const isLogin=getToken('user')


  return (
    <div className=' bg-[#28293D] text-white p-5 w-full rounded-3xl'>
        <h4 className='text-white'>سر فصل ها</h4>
          <div className='m-5 bg-[#32334D] flex flex-col rounded-3xl overflow-hidden'>
            <div className={`cursor-pointer p-10 bg-[#32335D] mb-5 text-white`} >{data.name}</div>
              <div className={`transition-all mx-5 flex flex-col gap-5 mb-5`} >{
                data ? data.sessions.map((elem,index)=>
                <div key={elem._id} className={`flex justify-between p-5 `}>
                <div className='flex gap-5'>{index + 1}
                {(isLogin && elem.free || elem.free) ?
                <>
                  <Link to={`/episode?name=${data.shortName}&id=${elem?._id}`}>{elem.title}</Link>
                </>
                :
                <> 
                <span className='text-slate-300'>{elem.title}</span></>}</div>
                <span className='flex gap-5'>{(isLogin && elem.free || elem.free) ? <FaLockOpen /> :<FaLock />}
                  {elem.time}
                </span>
                </div>)
                 : <div>ایتمی وجود ندارد</div>
                }
              </div>
        </div>
    </div>
  )
} 

export default Sessions

