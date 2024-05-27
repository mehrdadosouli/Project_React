import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNavMenu, deleteNavMenu, menuSlice } from "../../../features/dataSlice";
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
   if(data.menu){
    await Swal.fire({
      title: "با موفقیت منو اظافه شد",
      icon: "success"
    }).then(()=>{
      setData(prev=>({...prev,menu:'',link:''}))
      // for (const i in res) {
      //   res[i]=''
      //   setData(res)
      // }
    });
   }
  }

  const deleteHandler=async(elem,id)=>{
   await dispatch(deleteNavMenu({elem,id}))
   await Swal.fire({
      title: "با موفقیت منو حذف شد",
      icon: "success"
    })
  }


  return (
    <div className="w-full flex bg-bg-panel min-h-screen gap-10 md:p-32 p-10 ">
      <div className="absolute top-0 transform -translate-x-1/2">
      <Navbar />
      </div>
      <div className="">
        <SideMenu />
      </div>
      <div className="flex flex-col">
       <h3 className="mx-auto pb-10 text-white font-extrabold">ایجاد منو</h3>
        <form className="h-fit flex flex-wrap justify-between items-start p-10 bg-[#1C1C28] " onSubmit={submitHandler}>
          <div className="flex flex-wrap md:flex-row flex-col gap-x-10 gap-y-10">
           <div className="flex gap-x-10">
           <label className="text-white" htmlFor="menu">منو اصلی</label>
            <input type="text" id="menu" value={data.menu} name="menu" onChange={inputHandler} className="rounded-lg"/>
           </div>
            <div className="flex gap-x-10">
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
          </div>
        </form>

        <h3 className="mx-auto my-10 pb-10 text-center text-white font-extrabold">حذف منو</h3>
        <div className="flex flex-col gap-10 p-10 w-full bg-[#1C1C28] text-white">
            {
              select.map(item=><div key={item.id} className="flex gap-5">
               <div className="flex items-center gap-5">
                  <span>{item.page}</span>
                  <button className="p-2 rounded-xl text-red-400" onClick={()=>deleteHandler(item.page,item.id)}>delete</button>
                </div>
               {
                item.submenu?.map(elem=>
                <div className="flex items-center gap-5" key={elem.id}>
                  <span>{elem.page}</span>
                  <button className="p-2 rounded-xl text-red-400" onClick={()=>deleteHandler(elem.page,elem.id)}>delete</button>
                </div>)
               }
              </div>)
            }
        </div>
       </div>
      </div>
  );
}
