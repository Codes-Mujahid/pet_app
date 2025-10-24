import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import About from './pages/AboutPage'
import Services from './pages/ServicePage'
import Blogs from './pages/Blogs'
import Contact from './pages/ContactPage'

const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blogs' element={<Blogs/> } />
        <Route path='/contact' element={<Contact/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App