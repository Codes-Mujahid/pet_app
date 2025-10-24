import React from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Services = () => {
  const isServicePath= useLocation().pathname.includes('services')
  return (
    <div className='mt-30'>
      {isServicePath? null : ( <h1 className='text-4xl text-center font-bold dynamic-font text-primary'>
        explore best services
      </h1>)}

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 mt-8'>
        
        <div className='mt-12'>
          <div className='border-l border-r border-dotted border-primary p-8'>
            <i className="fa-regular fa-comment text-6xl text-primary"></i>
            <h3 className='text-xl text-gray-700 font-medium mb-4 mt-2'>
              24/7 Emergency Help
            </h3>
            <p className='text-gray-500 font-light mb-6'>
              Healthy eating significantly boosts overall health and well-being
            </p>
            {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group'>
              Read More
              <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>)}
          </div>
        </div>


        <div className='mt-12'>
          <div className='border-r border-dotted border-primary p-8'>
            <i className="fa-solid fa-microscope text-6xl text-primary"></i>
            <h3 className='text-xl text-gray-700 font-medium mb-4 mt-2'>
              Modern Equipment
            </h3>
            <p className='text-gray-500 font-light mb-6'>
              A balanced diet includes a variety of foods from all food groups
            </p>
            {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group'>
              Read More
              <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>)}
          </div>
        </div>


        <div className='mt-12'>
          <div className='p-8'>
            <i className="fa-solid fa-user-doctor text-6xl text-primary"></i>
            <h3 className='text-xl text-gray-700 font-medium mb-4 mt-2'>
              Certified Veterinars
            </h3>
            <p className='text-gray-500 font-light mb-6'>
              Complete Maintenance Services for Comfort and Peace of Mind
            </p>
            {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group'>
              Read More
              <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>)}
          </div>
        </div>

        <div className='mt-12'>
          <div className='border-l border-r border-dotted border-primary p-8'>
            <i className="fa-solid fa-dog text-6xl text-primary"></i>
            <h3 className='text-xl text-gray-700 font-medium mb-4 mt-2'>
              Pet-Friendly Atmosphere
            </h3>
            <p className='text-gray-500 font-light mb-6'>
              Trusted Handyman Help for All Those Small but Important Home Tasks
            </p>
            {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group'>
              Read More
              <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>)}
          </div>
        </div>

      </div>

      <div className='pt-16 pb-40 mt-16' style={{backgroundColor:'#F4F1EB'}}>
        <h1 className='text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-medium text-center'>Your trusted source <span className='text-primary'><i className="fa-solid fa-heart"></i></span> for full-service <br className='hidden sm:block' /> veterinary <span className='text-primary'><i className="fa-solid fa-shield-dog"></i></span> care tailored to support <br className='hidden sm:block' /> every pet’s unique <span className='text-primary'><i className="fa-solid fa-paw"></i></span> health
        </h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mt-12'>
            
              <div className='flex bg-primary rounded-4xl items-center shrink-0'>
                <img className='rounded-l-4xl' src={assets.dog_cut} alt="" />
                  <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-white mx-auto shrink-0'>From routine <br /> check-ups <br /> to advanced <br /> treatments</h1>
              </div>

              <div className='bg-white p-12 rounded-4xl flex flex-col gap-4'>
                <img className='w-40 rounded-full' src={assets.categorie_01} alt="" />
                <h3 className='text-3xl font-medium'>Comprehensive General <br />Health Check</h3>
                <p className='text-gray-500 font-light'>Complete assessment ensuring overall pet health and early detection</p>
                {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group mt-8'>
                  Read More
                  <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>)}
              </div>

              <div className='bg-white p-12 rounded-4xl flex flex-col gap-4'>
                <img className='w-40 rounded-full' src={assets.categorie_02} alt="" />
                <h3 className='text-3xl font-medium'>Comprehensive General <br />Health Check</h3>
                <p className='text-gray-500 font-light'>Complete assessment ensuring overall pet health and early detection</p>
                {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group mt-8'>
                  Read More
                  <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>)}
              </div>

              <div className='bg-white p-12 rounded-4xl flex flex-col gap-4'>
                <img className='w-40 rounded-full' src={assets.categorie_03} alt="" />
                <h3 className='text-3xl font-medium'>Comprehensive General <br />Health Check</h3>
                <p className='text-gray-500 font-light'>Complete assessment ensuring overall pet health and early detection</p>
                {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group mt-8'>
                  Read More
                  <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>)}
              </div>

              <div className='bg-white p-12 rounded-4xl flex flex-col gap-4'>
                <img className='w-40 rounded-full' src={assets.categorie_04} alt="" />
                <h3 className='text-3xl font-medium'>Comprehensive General <br />Health Check</h3>
                <p className='text-gray-500 font-light'>Complete assessment ensuring overall pet health and early detection</p>
                {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group mt-8'>
                  Read More
                  <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>)}
              </div>

              <div className='bg-white p-12 rounded-4xl flex flex-col gap-4'>
                <img className='w-40 rounded-full' src={assets.categorie_01} alt="" />
                <h3 className='text-3xl font-medium'>Comprehensive General <br />Health Check</h3>
                <p className='text-gray-500 font-light'>Complete assessment ensuring overall pet health and early detection</p>
                {isServicePath? null : (<Link to='/services' type="button" className='flex items-center cursor-pointer gap-1 group mt-8'>
                  Read More
                  <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>)}
              </div>

          </div>
      </div>
    </div>
  )
}

export default Services
