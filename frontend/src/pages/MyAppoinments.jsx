import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const MyAppoinments = () => {

  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div>
      
      <div className='text-center text-2xl pt-6 mb-10 text-gray-500'>
        <p>MY <span className='text-gray-700 font-medium'>APPOINTMENTS</span></p>
      </div>

      <div>
        {doctors.slice(0,3).map((item, index) => (
          <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
            
            <div>
              <img onClick={() => navigate(`/appointment/${item._id}`)} className='w-32 bg-indigo-50 cursor-pointer hover:shadow-md' src={item.image} alt="" />
            </div>

            <div className='flex-1 text-sm text-zinc-600'>
              <p onClick={() => navigate(`/appointment/${item._id}`)} className='text-neutral-800 font-semibold cursor-pointer hover:font-bold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-xinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>25, July, 2024 |  8:30 PM</p>
            </div>

            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-stone-500 text-center sm:min-w-40 rounded-md py-2 border hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
              <button className='text-sm text-stone-500 text-center sm:min-w-40 rounded-md py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default MyAppoinments