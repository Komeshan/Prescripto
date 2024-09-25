import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='mt-10 mb-14 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At Prescripto, we believe in transforming healthcare by making it accessible and straightforward for everyone. Our platform is designed to simplify the process of finding the right
            healthcare provider and booking appointments, empowering users to manage their health effortlessly. With Prescripto, you have access to a network of skilled professionals, all at your
            fingertips.
          </p>
          <p>We are committed to revolutionizing the way patients interact with healthcare systems. By integrating the latest technology, we ensure that our platform provides a smooth,
            user-friendly experience. Our mission is to create a trusted space where users can easily manage their appointments, medical records, and communicate with healthcare providers—all in one place.
          </p>
          <b className='text-gray-800'>OUR VISION</b>
          <p>Our mission at Prescripto is to provide a cutting-edge solution for healthcare management. We aim to simplify access to healthcare services, giving you the power to control your
            appointments and manage your healthcare journey with ease.
          </p>
        </div>
      </div>


      <div className='text-xl mb-6'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-4'>
        <div className='flex-1 border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-xl hover:bg-primary hover:text-white transition-all duration-300
          text-gray-600 cursor-pointer hover:shadow-2xl'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='flex-1 border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-xl hover:bg-primary hover:text-white transition-all duration-300
          text-gray-600 cursor-pointer hover:shadow-2xl'>
          <b>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='flex-1 border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-xl hover:bg-primary hover:text-white transition-all duration-300
          text-gray-600 cursor-pointer hover:shadow-2xl'>
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About