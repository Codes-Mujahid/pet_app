import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { AppContext } from '../context/AppContext.jsx'

const Navbar = () => {

  const { menu, setMenu } = useContext(AppContext)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col">

      {/* mini navbar */}
      <div
        className={`bg-secondary text-white text-sm px-4 transition-all duration-200 ease-out
        ${scrolled ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'}`}
      >
        <div className='flex justify-center sm:justify-between items-center py-2'>
          <div className='hidden sm:flex gap-8'>
            <Link className='hover:underline hover:text-primary cursor-pointer'>Payments</Link>
            <Link className='hover:underline hover:text-primary cursor-pointer'>Delivery</Link>
            <Link className='hover:underline hover:text-primary cursor-pointer'>Terms & Conditions</Link>
            <Link className='hover:underline hover:text-primary cursor-pointer'>Working Hours</Link>
          </div>
          <div className='flex gap-8'>
            <Link className='hover:underline hover:text-primary cursor-pointer'>Register</Link>
            <Link className='hover:underline hover:text-primary cursor-pointer'>Login</Link>
          </div>
        </div>
      </div>

      {/*  main navbar */}
      <div
        className={`flex justify-between items-center px-8 py-4 transition-all duration-200 ease-out
        ${scrolled
          ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50'
          : 'relative bg-transparent shadow-none'
        }`}
      >
        <Link to='/'>
          <img className='w-20 md:w-20 lg:w-24 shrink-0 cursor-pointer' src={assets.logo} alt="Logo" />
        </Link>

        <div className='hidden md:flex gap-8'>
          <NavLink to='/' className='flex flex-col items-center'>
            <p>Home</p>
            <hr className="w-3/4 border-none bg-primary h-[1.6px] hidden" />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center'>
            <p>About</p>
            <hr className="w-3/4 border-none bg-primary h-[1.6px] hidden" />
          </NavLink>
          <NavLink to='/services' className='flex flex-col items-center'>
            <p>Services</p>
            <hr className="w-3/4 border-none bg-primary h-[1.6px] hidden" />
          </NavLink>
          <NavLink to='/blogs' className='flex flex-col items-center'>
            <p>Blogs</p>
            <hr className="w-3/4 border-none bg-primary h-[1.6px] hidden" />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center'>
            <p>Contact</p>
            <hr className="w-3/4 border-none bg-primary h-[1.6px] hidden" />
          </NavLink>
        </div>

        <div className='hidden sm:flex gap-8'>
          <div className='hidden lg:flex items-center gap-4'>
            <i className="fa-solid fa-phone-volume text-primary text-2xl"></i>
            <p className='font-medium text-xl'>01303 749 086</p>
          </div>
          <NavLink to='tel:01303749086' className='hidden md:flex items-center cursor-pointer rounded-full bg-primary hover:bg-secondary transition-all text-white px-6 py-3 text-sm gap-2'>
            <p>Call the vet</p>
            <img className='w-4' src={assets.paw} alt="" />
          </NavLink>
        </div>

        {/* mobile menu icon */}
        <img onClick={() => setMenu(!menu)} className='md:hidden w-6 cursor-pointer' src={assets.menu_icon} alt="Menu" />
      </div>

      <div className={`${scrolled ? 'pt-[110px]' : 'pt-0'}`}></div>

      {/* mobile menu nav */}
      <div className={`absolute overflow-hidden top-0 right-0 bottom-0 transition-all bg-white z-[999] ${menu ? 'w-full' : 'w-0'}`}>
        <div onClick={() => setMenu(false)} className="flex items-center gap-2 px-5 py-3">
          <i className="fa-solid fa-arrow-left text-primary"></i>
          <p className="font-bold text-primary">Back</p>
        </div>

        <div className="flex flex-col">
          <NavLink onClick={() => setMenu(false)} to='/' className='pl-5 py-3'>HOME</NavLink>
          <NavLink onClick={() => setMenu(false)} to='/about' className='pl-5 py-3'>ABOUT</NavLink>
          <NavLink onClick={() => setMenu(false)} to='/services' className='pl-5 py-3'>SERVICES</NavLink>
          <NavLink onClick={() => setMenu(false)} to='/blogs' className='pl-5 py-3'>BLOGS</NavLink>
          <NavLink onClick={() => setMenu(false)} to='/contact' className='pl-5 py-3'>CONTACT</NavLink>
        </div>

        <div className='flex gap-8 justify-center mt-4'>
          <a href='tel:01303749086' className='flex items-center rounded-full bg-primary text-white px-6 py-3 text-sm gap-2'>
            <p>Call the vet</p>
            <img className='w-4' src={assets.paw} alt="" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Navbar
