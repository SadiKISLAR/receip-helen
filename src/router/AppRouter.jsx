import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from '../components/globalStyles/GlobalStyles'
import Navbar from "./../components/nav/Navbar"
import Home from "../pages/home/Home"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" elemnet={<Home/>} />
      </Routes>


    </BrowserRouter>
  )
}

export default AppRouter
