import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='flex justify-center items-center'
      style={{
        backgroundImage: `url(${assets.blog_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
        backgroundAttachment: 'fixed'
      }}>
      <div className=''>
        <p className='dynamic-font text-primary text-5xl text-center mb-4 text-shadow-lg'>latest blogs</p>
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-center text-shadow-lg'>Explore Our Latest Blogs & <br /> Learn More</h1>
        <Link to='/blogs' className='cursor-pointer w-max mx-auto mt-4 flex items-center rounded-full bg-primary hover:bg-secondary transition-all text-white px-8 py-4 text-sm gap-2'>
        <p className='font-medium text-lg'>Read More</p>
        <img className='w-8' src={assets.paw} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Blog
