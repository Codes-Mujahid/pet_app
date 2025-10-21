import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import {assets} from '../assets/assets.js'
import { AppContext } from '../context/AppContext.jsx'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
    const {menu, setMenu}= useContext(AppContext)
  return (
    <div id='home'  className='flex flex-col'>
        <div className='flex justify-center sm:justify-between items-center bg-secondary text-white py-2 text-sm px-4'>
            <div className='hidden sm:flex gap-8'>
                <Link className='hover:underline hover:text-primary cursor-pointer'>Payments</Link>
                <Link className='hover:underline hover:text-primary cursor-pointer'>Delevery</Link>
                <Link className='hover:underline hover:text-primary cursor-pointer'>Terms & Conditions</Link>
                <Link className='hover:underline hover:text-primary cursor-pointer'>Working Hours</Link>
            </div>
            <div className='flex gap-8'>
                <Link className='hover:underline hover:text-primary cursor-pointer'>Register</Link>
                <Link className='hover:underline hover:text-primary cursor-pointer'>Login</Link>
            </div>
        </div>

        <div className='flex justify-between items-center px-8 py-4'>
            <Link>
                <img className='w-20 md:w-20 lg:w-24 shrink-0' src={assets.logo} alt="" />
            </Link>
            <div className='hidden md:flex gap-8'>
                <Link to='home' smooth={true} duration={500} className='hover:text-primary cursor-pointer '>Home</Link>
                <Link to='about' smooth={true} duration={500} className='hover:text-primary cursor-pointer '>About</Link>
                <Link to='services' smooth={true} duration={500} className='hover:text-primary cursor-pointer '>Services</Link>
                <Link to='blogs' smooth={true} duration={500} className='hover:text-primary cursor-pointer '>Blogs</Link>
                <Link to='contact' smooth={true} duration={500} className='hover:text-primary cursor-pointer '>Contact</Link>
            </div>
            <div className='hidden sm:flex gap-8 '>
                <div className='hidden lg:flex items-center gap-4'><i className="fa-solid fa-phone-volume text-primary text-2xl"></i> <p className='font-medium text-xl'>01303 749 086</p></div>
                <NavLink to='tel:01303749086' className='hidden md:flex items-center cursor-pointer rounded-full bg-primary hover:bg-secondary transition-all text-white px-6 py-3 text-sm gap-2'>
                <p>Call the vet</p>
                <img className='w-4' src={assets.paw} alt="" />
                </NavLink>
            </div>

            {/* mobile menu */}
            <img onClick={()=>setMenu(!menu)} className='md:hidden w-6' src={assets.menu_icon} alt="" />
        </div>


        {/* toogle menu option */}
        <div className={`absolute overflow-hidden top-0 right-0 bottom-0 transition-all bg-white z-[999] ${menu? 'w-full': 'w-0'}`}>
            <div onClick={()=> setMenu(false)} className="flex items-center gap-2 px-5 py-3">
                <i className="fa-solid fa-arrow-left text-primary"></i>
                <p className="font-bold text-primary">Back</p>
            </div>
            <div className="flex flex-col">
                <Link onClick={()=>setMenu(false)} to='/' className=' pl-5 py-3'>HOME</Link>
                <Link onClick={()=>setMenu(false)} to='/collection'className=' pl-5 py-3' >ABOUT</Link>
                <Link onClick={()=>setMenu(false)} to='/about' className=' pl-5 py-3'>SERVICES</Link>
                <Link onClick={()=>setMenu(false)} to='/contact' className=' pl-5 py-3'>CONTACT</Link>
            </div>
            <div className='flex gap-8 justify-center mt-4'>
                <Link className='flex items-center rounded-full bg-primary text-white px-6 py-3 text-sm gap-2'>
                <p>Call the vet</p>
                <img className='w-4' src={assets.paw} alt="" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar