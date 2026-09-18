import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {


  return (


    <div>
        <div className='text-center text-2xl font-semibold text-gray-900 pt-10'>
          <p>CONTACT US</p>
        </div>

        <div className='flex flex-col md:flex-row my-10 justify-center gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

          <div className='flex flex-col gap-5 text-gray-900 justify-center items-start'> 
            <p className='text-2xl text-gray-900'>OUR CONTACT INFORMATION</p>
            <p className='text-gray-900 font-medium'>Wellcare Medical Center</p>
            <p className='text-gray-900 font-medium'>123 Healthcare Avenue,<br /> Lagos, Nigeria</p>
            <p className='text-gray-900 font-medium'>Phone: +234 8121264900 <br />Email: info@wellcare.com</p>
            <p className='text-gray-900 font-medium text-xl'>Careers at Wellcare Medical Center</p>
            <p className='text-gray-900 font-medium'>Learn more about opportunities at <br />Wellcare Medical Center</p>

            <button className='bordered hover:bg-blue-600 hover:text-white text-bold bg-blue-400 px-8 py-4 text-sm text-white'>Explore Careers</button>
          </div>
        </div>
    </div>
  )
}

export default Contact