import React from 'react'
import About from '../components/About'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const AboutPage = () => {
  return (
    <div>
      <div
        className="flex justify-center relative"
        style={{
          backgroundImage: `url(${assets.about_page})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vh',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-shadow-lg">
            About us
          </h1>
          <div className="text-white font-medium flex gap-4 mt-8">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span>|</span> <span>About us</span>
          </div>
        </div>
        
      </div>
      <About/>
      <div className='py-16 mt-16 flex flex-col items-center' style={{backgroundColor:'#ffffff'}}>
              <h1 className='text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-medium text-center'>Adopt a shelter animal <span className='text-primary'><i className="fa-solid fa-heart"></i></span> and transform <br className='hidden sm:block' /> their lonley <span className='text-primary'><i className="fa-solid fa-shield-dog"></i></span> world into one filled with <br className='hidden sm:block' /> endless love <span className='text-primary'><i className="fa-solid fa-paw"></i></span>
              </h1>

              <img src={assets.shleter_big} alt="" />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6'>
        <img src={assets.logo_1} alt="" />
        <img src={assets.logo_2} alt="" />
        <img src={assets.logo_3} alt="" />
        <img src={assets.logo_4} alt="" />
        <img src={assets.logo_5} alt="" />
        <img src={assets.logo_6} alt="" />
      </div>

    </div>
  )
}

export default AboutPage