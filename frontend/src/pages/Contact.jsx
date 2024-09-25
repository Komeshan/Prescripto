import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-6 mb-20 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 md:ml-28 flex flex-col md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center gap-6'>
          <p className='font-semibold text-[18px] text-gray-700'>OUR OFFICE</p>
          <p className='text-gray-500'>498 Galle Road, <br />Colombo 00300</p>
          <p className='text-gray-500'>contact@prescripto.com <br />Tel: +94 112 984 397</p>
          <p className='font-semibold text-[18px] text-gray-700 mt-6'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our job oenings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 max-w-48'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact