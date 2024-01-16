import React from 'react'
import { Link } from 'react-router-dom'
export default function SectionTitle({title,descrip,btn}) {
  return (
    <div className='flex justify-between container items-center relative py-10'>
        <div className='flex flex-col before:befores '>
            <h3 className='bg-green-200'>{title}</h3>
            <span>{descrip}</span>
        </div>
        {
            btn && <div className='bg-green-500 rounded-lg p-3 text-white'><Link to="/courses">{btn}</Link></div>
        }
    </div>
  )
}
