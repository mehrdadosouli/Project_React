import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, allCourse, deleteCourse, frontend } from "../../../features/dataSlice";
import SideMenu from "../SideMenu/SideMenu";
import Swal from 'sweetalert2'
import { scrollToTop } from "../../../utils/funcs";
import CourseBox from "../../CourseBox/CourseBox";

export default function AddCourse() {
  const select = useSelector(frontend)
  const selectAllCourses = useSelector(allCourse)
  const dispatch = useDispatch()
  const [data, setData] = useState({
    _id: select.length,
    name: "",
    description: "",
    cover: '',
    menu: 'فرانت اند',
    support: "",
    shortName: "",
    sessions: [
    ],
    price: 0,
    isComplete: 0,
    status: "start",
    categoryID: {
      _id: "6345cbd132c10de974957632",
      title: "برنامه نویسی فرانت اند",
      createdAt: "2022-10-11T20:02:25.118Z",
      updatedAt: "2022-10-31T12:16:38.299Z",
      __v: 0,
      name: "frontend"
    },
    creator: {
      _id: "634e6b0e1d5142b91afa9bb3",
      username: "amin_saeedi",
      email: "ce01010101it@gmail.com",
      name: "محمدامین سعیدی راد",
      role: "ADMIN",
      createdAt: "2022-10-18T08:59:58.561Z",
      updatedAt: "2022-10-18T08:59:58.561Z",
      __v: 0,
      profile: "/images/saeedi.png",
      phone: "09921558293"
    },
    createdAt: "2022-10-29T15:39:58.114Z",
    updatedAt: "2022-10-29T15:39:58.114Z",
    __v: 0,
    registers: 2,
    courseAverageScore: 5
  })

  const inputHandler = (e) => {
    const prev = { ...data };
    if (e.target.name === 'video') {
      prev.shortName = e.target.files[0].name.split('.')[0];
    }
    else {
      prev[e.target.name] = e.target.value;
    }
    if (e.target.name == 'cover') {
      prev.cover = `src/assets/courses/` + e.target.files[0].name;
    }
    setData(prev);
  };
  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(data);
    if (data.name && data.shortName && data.price && data.cover) {
      await Swal.fire({
        title: "با موفقیت منو اظافه شد",
        icon: "success"
      }).then(() => {
        dispatch(addCourse(data))
        setData({ name: '', cover: '', shortName: '', support: '', price: '' })
      });
    }
  }
  // console.log(select);
  // const deleteHandler=async(elem,id)=>{
  //  await dispatch(deleteNavMenu({elem,id}))
  //  await Swal.fire({
  //     title: "با موفقیت منو حذف شد",
  //     icon: "success"
  //   })
  // }
  console.log(data);

  scrollToTop()
  return (
    <div className="w-full flex flex-col bg-bg-panel min-h-screen gap-10 md:p-32 p-10" >
      <div className="flex">
        <SideMenu />
        <div className="flex flex-col">
          <h3 className="mx-auto pb-10 text-white font-extrabold">اظافه و حذف دوره</h3>
          <form className="h-fit flex justify-between items-start p-10 bg-bg-primary-dark " onSubmit={submitHandler}>
            <div className="flex flex-col gap-x-10 gap-y-10">
              <div className="flex flex-wrap gap-10 [&>*]:flex [&>*]:gap-10">
                <div>
                  <label className="text-white" htmlFor="name">نام دوره</label>
                  <input type="text" id="name" value={data.name} name="name" onChange={inputHandler} className="rounded-lg" />
                </div>
                <div>
                  <label className="text-white" htmlFor="description">توضیحات</label>
                  <input type="text" id="description" value={data.description} name="description" onChange={inputHandler} className="rounded-lg" />
                </div>
                <div>
                  <label className="text-white" htmlFor="video">ویدیو</label>
                  <input type="file" id="video" name="video" onChange={inputHandler} className="rounded-lg" />
                </div>
                <div>
                  <label className="text-white" htmlFor="cover">عکس کاور</label>
                  <input type="file" id="cover" name="cover" onChange={inputHandler} className="rounded-lg" />
                </div>
                <div>
                  <label className="text-white" htmlFor="support">پشتیبانی</label>
                  <input type="text" id="support" value={data.support} name="support" onChange={inputHandler} className="rounded-lg" />
                </div>
                <div>
                  <label className="text-white" htmlFor="price">قیمت</label>
                  <input type="number" id="price" value={data.price} name="price" onChange={inputHandler} className="rounded-lg" />
                </div>
                <div>
                  <label className="text-white" htmlFor="menu">دسته بندی</label>
                  <select name="menu" id="menu" onChange={inputHandler} className="rounded-lg">
                    <option value="فرانت اند">فرانت اند</option>
                    <option value="بک اند">بک اند</option>
                  </select>
                </div>
              </div>
              <input type="submit" className="text-white p-2 rounded-3xl" value='ایجاد' />
            </div>
          </form>

          {/* <h3 className="mx-auto my-10 pb-10 text-center text-white font-extrabold">حذف منو</h3>
        <div className="flex flex-col gap-10 p-10 w-full bg-bg-primary-dark text-white">
          
           
        </div> */}
        </div>

      </div>
      {/* delete course */}
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 bg-slate-300 rounded-3xl ">
        {
          selectAllCourses.map(item=><div className="flex flex-col"><CourseBox item={item}/><button className="bg-red-400 rounded-2xl" onClick={()=>dispatch(deleteCourse(item))}>delete</button></div>)
        }
      </div>
    </div>
  )
}
