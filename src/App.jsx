import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import Login from './pages/Login/Login'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} /> 
        <Route path='/login' element={<Login />} /> 
      </Routes>      
    </>
  )
}

export default App
