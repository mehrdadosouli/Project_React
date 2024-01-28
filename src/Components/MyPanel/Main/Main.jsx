import React,{useContext} from 'react'
import { AuthInfosContext } from '../../../context/AuthContext'
function Main() {
    const infoUser=useContext(AuthInfosContext).infos
    return (
    <div className='w-[75%] bg-[#1C1C28] rounded-3xl'>

    </div>
  )
}

export default Main