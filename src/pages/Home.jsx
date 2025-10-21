import React from 'react'
import SliderConfig from '../components/SliderConfig'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <SliderConfig/>
      <About/>
      <Services/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home