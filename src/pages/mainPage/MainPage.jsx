import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import SectionTitle from '../../Components/sectionTitle/SectionTitle'
import LastedCourse from '../../Components/LastedCourse/LastedCourse'
import Help from '../../Components/Help/Help'
import PopularCourse from '../../Components/PopularCourse/PopularCourse'
import PreSellCourse from '../../Components/PreSellCourse/PreSellCourse'
import LastArticles from '../../Components/LastArticles/LastArticles'
import Footer from '../../Components/Footer/Footer'


export default function MainPage() {
    
  return (
    <>
       <Topbar />
       <Navbar text="black" />
       <Landing />
       <SectionTitle href="allcourses" title="جدیدترین دوره ها" descrip="سکوی پرتاپ شما به سمت موفقیت" btn="تمامی دوره ها"/>
       <LastedCourse />
       <SectionTitle href="" title="ما چه کمکی بهتون میکنیم؟" descrip="از اونجایی که آکادمی آموزشی وب لرن یک آکادمی خصوصی هست" />
       <Help />
       <SectionTitle href="" title="محبوب ترین دوره ها"  />
       <PopularCourse />
       <SectionTitle href="" title="دوره های در حال پیش فروش" />
       <PreSellCourse />
       <SectionTitle href="allarticles" title="جدیدترین مقاله ها" descrip="پیش به سوی ارتقای دانش" btn="تمامی مقاله ها"/>
       <LastArticles />
       <Footer />
    </>
  )
}
