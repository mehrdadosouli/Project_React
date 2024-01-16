import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import SectionTitle from '../../Components/sectionTitle/SectionTitle'
import LastedCourse from '../../Components/LastedCourse/LastedCourse'
import Help from '../../Components/Help/Help'
import PopularCourse from '../../Components/PopularCourse/PopularCourse'


export default function MainPage() {
    
  return (
    <>
       <Topbar />
       <Navbar />
       <Landing />
       <SectionTitle title="جدیدترین دوره ها" descrip="ما چه کمکی بهتون میکنیم؟" btn="تمامی دوره ها"/>
       <LastedCourse />
       <SectionTitle title="جدیدترین دوره ها" descrip="از اونجایی که آکادمی آموزشی وب لرن یک آکادمی خصوصی هست" />
       <Help />
       <PopularCourse />
    </>
  )
}
