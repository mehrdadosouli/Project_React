import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNavMenu, menuSlice } from "../../../features/dataSlice";
import SideMenu from "../SideMenu/SideMenu";
import Navbar from '../../../Components/Navbar/Navbar'
import Swal from 'sweetalert2'

export default function MyMenu() {
  const select=useSelector(menuSlice)
  const dispatch=useDispatch()
  const [data,setData]=useState({
    menu:'',
    submenu:'',
    link:''
  })
  const inputHandler=(e)=>{
    let prev={...data}
    if(e.target.value=='صفحه اصلی'){
      prev[e.target.name]=''
    }else{
      prev[e.target.name]=e.target.value
    }
    setData(prev)
  }
  const submitHandler=async(e)=>{
    e.preventDefault()
   await dispatch(addNavMenu(data))
   await Swal.fire({
    title: "با موفقیت منو اظافه شد",
    icon: "success"
  }).then(()=>{
    let res={...data}
    for (const i in res) {
      res[i]=''
      setData(res)
    }
  });
  }
  return (
    <div className="w-full bg-bg-panel min-h-screen flex xl:flex-row flex-col gap-10 md:p-32 p-10">
      <div className="absolute top-0 transform -translate-x-1/2">
      <Navbar />
      </div>
      <div className="w-full flex justify-between items-center bg-[#1C1C28]">
        <SideMenu />
        <form className="flex justify-between p-10 w-2/3" onSubmit={submitHandler}>
          <div className="flex gap-10">
            <label className="text-white" htmlFor="menu">منو اصلی</label>
            <input type="text" id="menu" value={data.menu} name="menu" onChange={inputHandler} className="rounded-lg"/>
            <label className="text-white" htmlFor="link">لینک</label>
            <input type="text" id="link" value={data.link} name="link" onChange={inputHandler} className="rounded-lg"/>
          </div>
          <div className="flex gap-10">
            <label className="text-white" htmlFor="submenu">زیر منو</label>
            <select name="submenu" id="submenu" onChange={inputHandler} className="rounded-lg">
              {
                select && select.map(elem=><option key={elem.id} value={elem.page}>{elem.page}</option>)
              }
            </select>
          </div>
          <input type="submit" className="text-white p-2 rounded-3xl" value='ایجاد' />
        </form>
        </div>
      </div>
  );
}
