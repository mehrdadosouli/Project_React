import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AuthContext from './context/AuthContext'
import MyPanel from './pages/myPanel/MyPanel'
import MyCourse from './Components/MyPanel/MyCourse/MyCourse'
import Courses from './pages/Courses/Courses'
import Episode from './pages/Episode/Episode'
import AllCategory from './pages/AllCoursesCategory/AllCoursesCategory'


function App() {
  return (
    <>
     <AuthContext>
      <Routes>
        <Route path='/' element={<MainPage />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} /> 
        <Route path='/mypanel' element={<MyPanel />} /> 
        <Route path='/mycourses' element={<MyCourse />} /> 
        <Route path='/courses' element={<Courses />} /> 
        <Route path='/episode' element={<Episode />} />
        <Route path='/category-info/:allcourses' element={<AllCategory />} />
      </Routes>      
      </AuthContext>
    </>
  )
}
export default App
