import React from 'react'
import { assets, serviceSecondary } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import ServiceCard from './ServiceSecondary'
import { dummyService } from '../assets/assets'
const Services = () => {
  const isServicePath= useLocation().pathname.includes('services')
  return (
    <div className='mt-30'>
      {isServicePath? null : ( <h1 className='text-4xl text-center font-bold dynamic-font text-primary'>
        explore best services
      </h1>)}

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 mt-8'>
        
        {dummyService.map((el, idx)=> (
          <div key={idx} className='border-l border-r border-dotted border-primary px-8 mt-8 flex flex-col items-center'>
            <img className='w-12' src={el.icon} alt="" />
            <h3 className='text-xl text-gray-700 font-medium mb-4 mt-2'> {el.title}</h3>
            <p className='text-gray-500 font-light mb-6 text-center'>{el.subTitle}</p>
          </div>
        ))}

      </div>

      <div className='pt-16 pb-40 mt-16' style={{backgroundColor:'#F4F1EB'}}>
        <h1 className='text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-medium text-center'>Your trusted source <span className='text-primary'><i className="fa-solid fa-heart"></i></span> for full-service <br className='hidden sm:block' /> veterinary <span className='text-primary'><i className="fa-solid fa-shield-dog"></i></span> care tailored to support <br className='hidden sm:block' /> every pet’s unique <span className='text-primary'><i className="fa-solid fa-paw"></i></span> health
        </h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mt-12'>
            
              <div className='flex bg-primary rounded-4xl items-center shrink-0'>
                <img className='rounded-l-4xl' src={assets.dog_cut} alt="" />
                  <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-white mx-auto shrink-0'>From routine <br /> check-ups <br /> to advanced <br /> treatments</h1>
              </div>

              {serviceSecondary.map((el, idx)=> (
                <div key={idx} className='bg-white p-12 rounded-4xl flex flex-col gap-4'>
                  <img className='w-40 rounded-full' src={el.image} alt="" />
                  <h3 className='text-3xl font-medium'>{el.title}</h3>
                  <p className='text-gray-500 font-light'>{el.subTitle}</p>
                  <Link to={`/services/${el.id}`} type="button" className='flex items-center cursor-pointer gap-1 group mt-8'>
                    {el.btn}
                    <i className="fa-solid fa-arrow-right text-primary transform transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </div>
              ))}

          </div>
      </div>
    </div>
  )
}

export default Services
