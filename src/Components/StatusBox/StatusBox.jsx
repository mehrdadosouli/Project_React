import React from 'react'

function StatusBox({status,value}) {
  return (
    <div className='w-full p-10 bg-[#32334D] flex flex-col gap-5 justify-center items-center text-white rounded-3xl'>
        <span>{status}</span>
        <span className='text-slate-400'>{value}</span>
    </div>
  )
}

export default StatusBox