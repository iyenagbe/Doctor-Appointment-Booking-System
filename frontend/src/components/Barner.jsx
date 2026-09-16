import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Barner = () => {

    const navigate = useNavigate()



  return (
    <div className='flex bg-blue-500 rounded-lg px-5 sm:px-14 lg:px-12 my-20 md:mx-10'>
        {/* Barner Lift Side Content */}
        <div className='flex-1 py-7 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-x1 sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>
                <p className=''>Book Appointment</p>
                <p className='mt-4'>With Over 100+ Trusted Doctors</p>
            </div>
            <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
        </div>

        {/* Barner Right Side Content */}
        <div className='hidden md:block md:w-1/3 lg:w-\[379px\] relative '>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
        </div>


    </div>


  )
}

export default Barner