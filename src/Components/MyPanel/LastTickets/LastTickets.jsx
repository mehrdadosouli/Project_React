import React,{ useState } from 'react'
function LastTickets() {
    const [tiketUser,SetTiketUser]=useState([])

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