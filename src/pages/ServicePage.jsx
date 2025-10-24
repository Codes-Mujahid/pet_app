import React from 'react'
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Testimonial from '../components/Testimonial'
const ServicePage = () => {
  return (
    <div>
        <div
        className="flex justify-center relative"
        style={{
          backgroundImage: `url(${assets.service_img})`,
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
            Services
          </h1>
          <div className="text-white font-medium flex gap-4 mt-8">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span>|</span> <span>Services</span>
          </div>
        </div>
        
        </div>
        <Services/>

        <Testimonial/>
    </div>
  )
}

export default ServicePage