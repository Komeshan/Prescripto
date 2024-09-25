import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const year = new Date();

    const navigate = useNavigate();

  return (
    <div className='md:mx-10 lg:mx-4 xl:mx-3.5'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ------- Left Side ------- */}

            <div>
                <img onClick={() => {navigate(`/`); scrollTo(0,0)}} className='mb-5 w-40 cursor-pointer' src={assets.logo} alt="" />
                <p className='w=full md:w-2/3 text-gray-600 leading-6 text-[15px]'>Book appointments with experienced doctors and get the care you need, right when you need it. 
                    We're committed to providing a hassle-free healthcare experience for you and your family. Stay connected, stay healthy!</p>
            </div>



            {/* ------- Center Side ------- */}

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li onClick={() => {navigate(`/`); scrollTo(0,0)}} className='cursor-pointer hover:text-black'>Home</li>
                    <li onClick={() => {navigate(`/about`); scrollTo(0,0)}} className='cursor-pointer hover:text-black'>About us</li>
                    <li onClick={() => {navigate(`/contact`); scrollTo(0,0)}} className='cursor-pointer hover:text-black'>Contact us</li>
                    <li onClick={() => {navigate(`/doctors`); scrollTo(0,0)}} className='cursor-pointer hover:text-black'>Our doctors</li>
                </ul>
            </div>



            {/* ------- Right Side ------- */}

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+94 112 984 397</li>
                    <li>contact@prescripto.com</li>
                </ul>
            </div>

        </div>


        {/* ------- Copyright text ------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>&copy; {year.getFullYear()} Prescripto. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer