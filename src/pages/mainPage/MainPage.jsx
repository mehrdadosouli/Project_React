import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import SectionTitle from '../../Components/sectionTitle/SectionTitle'
import LastedCourse from '../../Components/LastedCourse/LastedCourse'

export default function MainPage() {
    
  return (
    <>
       <Topbar />
       <Navbar />
       <Landing />
       <SectionTitle title="جدیدترین دوره ها" descrip="سکوی پرتاپ شما به سمت موفقیت" btn="تمامی دوره ها"/>
       <LastedCourse />
    </>
  )
}
