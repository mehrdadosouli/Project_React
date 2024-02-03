import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
function Sessions({data}) {
  const [show,setShow]=useState(false)
  const location=useLocation()
  const param=new URLSearchParams(location.search).get('name')
  const accordionHandler=(e)=>{
    setShow(!show)
    let panel=e.target.nextElementSibling
    panel.classList.toggle('accordion')
    panel.style.maxHeight=panel.style.maxHeight ? null : panel.scrollHeight + "px"
  }
  return (
    <div className='bg-[#28293D] text-white my-10 w-full'>
        <h4>سر فصل ها</h4>
          <div className='m-10 bg-[#32334D] flex flex-col'>
            <div className={`cursor-pointer p-10 ${show && "bg-[#32335D] mb-5"}`} onClick={accordionHandler}>{data.name}</div>
              <div className='max-h-0 overflow-hidden transition-all mr-10 flex flex-col gap-5 mb-5'>{
                data.sessions.length ? data.sessions.map((elem,index)=>data.isUserRegisteredToThisCourse || elem.free ? 
                <div key={elem._id} className='flex justify-between px-5'><div><span className='ml-5'>{index + 1}</span><Link to={`/courses/${param}/${elem._id}`} className='text-slate-300'>{elem.title}</Link></div> <span>{elem.time}</span></div> 
                : <div><span>{elem.title}</span></div>) : <div>ایتمی وجود ندارد</div>
                }
              </div>
            
        </div>
    </div>
  )
}

export default Sessions