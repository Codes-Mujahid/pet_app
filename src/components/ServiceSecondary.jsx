import React from 'react'
import { serviceSecondary } from '../assets/assets'
import { useParams } from 'react-router-dom'

const ServiceSecondary = () => {
  const {id}= useParams();
  const service= serviceSecondary.find((el)=> el.id === Number(id))
  return (
    <div className='flex flex-col md:flex-row py-20 gap-8 px-4'>
      <img className='w-[40%] rounded-lg' src={service.image} alt="" />
      <div className='flex flex-col gap-8 justify-center'>
        <h1 className='text-5xl'>{service.title}</h1>
        <p className='text-gray-500'>{service.subTitle} Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam eius facilis facere inventore adipisci, minima ipsa recusandae provident officiis magni ut, ad molestias debitis labore sapiente nemo veniam. Pariatur, quidem repellat vitae sint quod fugiat accusamus dolore asperiores ipsum distinctio delectus saepe odit velit fuga necessitatibus repellendus a earum!</p>
      </div>
    </div>
  )
}

export default ServiceSecondary