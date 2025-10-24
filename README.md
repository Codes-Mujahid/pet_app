import React, { useContext } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { AppContext } from '../context/AppContext.jsx'

const Navbar = () => {
const { menu, setMenu } = useContext(AppContext)
const location = useLocation()
const navigate = useNavigate()

// scroll function
const handleScroll = (id) => {
if (location.pathname !== '/') {
navigate('/')
setTimeout(() => {
document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
},100)
} else {
document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
}

return (
<div id='home' className='flex flex-col'>
{/_ Top Bar _/}
<div className='flex justify-center sm:justify-between items-center bg-secondary text-white py-2 text-sm px-4'>
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

      {/* Main Navbar */}
      <div className='flex justify-between items-center px-8 py-4'>
        <Link to='/'>
          <img className='w-20 md:w-20 lg:w-24 shrink-0 cursor-pointer' src={assets.logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 items-center'>
          <button onClick={() => handleScroll('home')} className='hover:text-primary cursor-pointer'>Home</button>
          <button onClick={() => handleScroll('about')} className='hover:text-primary cursor-pointer'>About</button>
          <button onClick={() => handleScroll('services')} className='hover:text-primary cursor-pointer'>Services</button>
          <button onClick={() => handleScroll('blogs')} className='hover:text-primary cursor-pointer'>Blogs</button>
          <button onClick={() => handleScroll('contact')} className='hover:text-primary cursor-pointer'>Contact</button>
        </div>

        {/* Right side contact */}
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

        {/* Mobile Menu Toggle */}
        <img onClick={() => setMenu(!menu)} className='md:hidden w-6 cursor-pointer' src={assets.menu_icon} alt="menu" />
      </div>

      {/* Mobile Menu */}
      <div className={`absolute overflow-hidden top-0 right-0 bottom-0 transition-all bg-white z-[999] ${menu ? 'w-full' : 'w-0'}`}>
        <div onClick={() => setMenu(false)} className="flex items-center gap-2 px-5 py-3">
          <i className="fa-solid fa-arrow-left text-primary"></i>
          <p className="font-bold text-primary">Back</p>
        </div>

        <div className="flex flex-col">
          <button onClick={() => { setMenu(false); handleScroll('home') }} className='pl-5 py-3 text-left'>HOME</button>
          <button onClick={() => { setMenu(false); handleScroll('about') }} className='pl-5 py-3 text-left'>ABOUT</button>
          <button onClick={() => { setMenu(false); handleScroll('services') }} className='pl-5 py-3 text-left'>SERVICES</button>
          <button onClick={() => { setMenu(false); handleScroll('blogs') }} className='pl-5 py-3 text-left'>BLOGS</button>
          <button onClick={() => { setMenu(false); handleScroll('contact') }} className='pl-5 py-3 text-left'>CONTACT</button>
        </div>

        <div className='flex gap-8 justify-center mt-4'>
          <NavLink to='tel:01303749086' className='flex items-center rounded-full bg-primary text-white px-6 py-3 text-sm gap-2'>
            <p>Call the vet</p>
            <img className='w-4' src={assets.paw} alt="" />
          </NavLink>
        </div>
      </div>
    </div>

)
}

export default Navbar
