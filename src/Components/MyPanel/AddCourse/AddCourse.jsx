import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../../../features/dataSlice";
import SideMenu from "../SideMenu/SideMenu";
import Swal from 'sweetalert2'
import { scrollToTop } from "../../../utils/funcs";

export default function AddCourse() {
    // const select=useSelector(menuSlice)
    const dispatch=useDispatch()
    const [data,setData]=useState({
      nameCourse:'',
      description:'',
      video:null,
      suport:'',
    //   cover:null,
      shortName:'',
      price:'',
      menu:'فرانت اند'
    })
  
    const inputHandler = (e) => {
        const prev = { ...data };
        if (e.target.type === 'file') {
          prev[e.target.name] = e.target.files[0];
        } else {
          prev[e.target.name] = e.target.value;
        }
        setData(prev);
      };
    const submitHandler=async(e)=>{
      e.preventDefault()
     await dispatch(addCourse(data))
    //  if(data.menu){
    //   await Swal.fire({
    //     title: "با موفقیت منو اظافه شد",
    //     icon: "success"
    //   }).then(()=>{
    //     setData(prev=>({...prev,menu:'',link:''}))
    //     // for (const i in res) {
    //     //   res[i]=''
    //     //   setData(res)
    //     // }
    //   });
    //  }
    }
  
    // const deleteHandler=async(elem,id)=>{
    //  await dispatch(deleteNavMenu({elem,id}))
    //  await Swal.fire({
    //     title: "با موفقیت منو حذف شد",
    //     icon: "success"
    //   })
    // }
  
    scrollToTop()
  return (
    <div className="w-full flex bg-bg-panel min-h-screen gap-10 md:p-32 p-10" > 
        <SideMenu />
      <div className="flex flex-col">
       <h3 className="mx-auto pb-10 text-white font-extrabold">اظافه و حذف دوره</h3>
        <form className="h-fit flex justify-between items-start p-10 bg-bg-primary-dark " onSubmit={submitHandler}>
          <div className="flex flex-col gap-x-10 gap-y-10">
           <div className="flex flex-wrap gap-10">
            <label className="text-white" htmlFor="nameCourse">نام دوره</label>
                <input type="text" id="nameCourse" value={data.nameCourse} name="nameCourse" onChange={inputHandler} className="rounded-lg"/>

            <label className="text-white" htmlFor="description">توضیحات</label>
                <input type="text" id="description" value={data.description} name="description" onChange={inputHandler} className="rounded-lg"/>

                    <label className="text-white" htmlFor="video">ویدیو</label>
                    <input type="file" id="video" name="video" onChange={inputHandler} className="rounded-lg"/>


            {/* <label className="text-white" htmlFor="cover">عکس کاور</label>
                <input type="file" id="cover" value={data.cover} name="cover" onChange={inputHandler} className="rounded-lg"/> */}

            <label className="text-white" htmlFor="suport">پشتیبانی</label>
                <input type="text" id="suport" value={data.suport} name="suport" onChange={inputHandler} className="rounded-lg"/>

            <label className="text-white" htmlFor="shortName">اسم کوتاه</label>
                <input type="text" id="shortName" value={data.shortName} name="shortName" onChange={inputHandler} className="rounded-lg"/>

            <label className="text-white" htmlFor="price">قیمت</label>
                <input type="text" id="price" value={data.price} name="price" onChange={inputHandler} className="rounded-lg"/>

            
            <label className="text-white" htmlFor="menu">دسته بندی</label>
                <select name="menu" id="menu" onChange={inputHandler} className="rounded-lg">
                    <option value="فرانت اند">فرانت اند</option>
                    <option value="بک اند">بک اند</option>
                </select>
          </div>
          <input type="submit" className="text-white p-2 rounded-3xl" value='ایجاد' />
          </div>
        </form>

        {/* <h3 className="mx-auto my-10 pb-10 text-center text-white font-extrabold">حذف منو</h3>
        <div className="flex flex-col gap-10 p-10 w-full bg-bg-primary-dark text-white">
          
           
        </div> */}
       </div>
      </div>
  )
}
