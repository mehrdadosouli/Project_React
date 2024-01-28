import React,{ useEffect, useState } from 'react'
import { getToken } from '../../../utils/funcs'
import axios from 'axios'
// http://localhost:4000/v1/tickets/user
function LastTickets() {
    const [tiketUser,SetTiketUser]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/v1/tickets/user',{
            headers:{
                Authorization:`Bearer ${getToken('user')}`
            }
        }).then(res=> SetTiketUser(res.data))
    })
  return (
    <div className=''>
        <div className='text-red-300'>تیکت های اخیر</div>
        <div>
            {
                tiketUser.length ? tiketUser.map(item=><>
                    <div>{item.title}</div>
                </> ): <h3 className='py-5'>هیچ تیکتی ندارید</h3>
            }
        </div>
    </div>
  )
}

export default LastTickets