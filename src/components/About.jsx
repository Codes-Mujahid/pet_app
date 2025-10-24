import React from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
  const isAboutPath= useLocation().pathname.includes('about')
  return (
    <div className='flex flex-col gap-8 mt-16 px-4'>
      {isAboutPath? null : ( <h1 className='text-4xl text-center text-primary font-bold mb-4 dynamic-font'>about floffy</h1>)}
      <div className='flex flex-col xl:flex-row gap-16'>
        <div className='w-full xl:w-[50%]'>
          <img className='rounded-4xl shrink-0 mx-auto' src={assets.about} alt="" />
        </div>
        <div className='w-full flex flex-col items-center xl:items-start xl:w-[50%]'>
          <p className='text-xl font-medium text-primary mb-2'>About Veterinars</p>
          <h1 className='text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center xl:text-start'>Complete veterinary <br /> services for every stage of pet’s life</h1>
          <p className='text-md font-light text-gray-400 mt-8 text-center xl:text-start'>Our veterinary team is committed to providing safe effective and <br /> compassionate care for pets of all ages</p>

          <div className='mt-4 lg:mt-8 xl:mt-12'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-lg sm:text-lg md:text-xl '>
              <li className='flex gap-4 items-center'><i className="fa-regular fa-circle-check text-primary"></i>Modern equipment</li>
              <li className='flex gap-4 items-center'><i className="fa-regular fa-circle-check text-primary"></i>Flexible solutions</li>
              <li className='flex gap-4 items-center'><i className="fa-regular fa-circle-check text-primary"></i>Flexible solutions</li>
              <li className='flex gap-4 items-center'><i className="fa-regular fa-circle-check text-primary"></i>Affordable prices</li>
              <li className='flex gap-4 items-center'><i className="fa-regular fa-circle-check text-primary"></i>Top reviews</li>
              <li className='flex gap-4 items-center'><i className="fa-regular fa-circle-check text-primary"></i>Trusted clients</li>
            </ul>
          </div>
          <div className='mt-12 md:mt-12 lg:mt-16 xl:mt-20 flex flex-col sm:flex-row items-center gap-12'>
            {isAboutPath? null : (<Link to='/about' className='cursor-pointer flex items-center rounded-full bg-primary hover:bg-secondary transition-all text-white px-8 py-4 text-sm gap-2'>
            <p className='font-medium text-lg'>Read More</p>
            <img className='w-8' src={assets.paw} alt="" />
            </Link>) }

            <div className='hidden md:flex items-center gap-4'>
              <div className="w-12 h-12 border border-primary rounded-full flex items-center justify-center">
                <i className="fa-solid fa-phone-volume text-primary text-xl"></i>
              </div>
              <div>
                <p className='text-gray-500 font-light'>Emergency Call</p>
                <p>1 500-905 01 99</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About