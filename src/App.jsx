import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AuthContext from './context/AuthContext'
import MyPanel from './pages/myPanel/MyPanel'




function App() {
  return (
    <>
     <AuthContext>
      <Routes>
        <Route path='/' element={<MainPage />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} /> 
        <Route path='/mypanel' element={<MyPanel />} /> 
        <Route path='/mypanel' element={<MyPanel />} /> 
      </Routes>      
      </AuthContext>
    </>
  )
}

export default App
