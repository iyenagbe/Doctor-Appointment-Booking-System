import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {



  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-13 my-10 mt-40 text-sm'>

            {/* Footer Left content */}
            <div>
                <img className='mb-5 w-60' src={assets.logo} alt="wellcare" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Your Health is Our Priority</p>
            </div>

            {/* Footer center content */}
            <div>
                <p className='text-xl font-medium mb:5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Our Policy & Privacy</li>
                </ul>
            </div>

            {/* Footer right content */}
            <div>
                <p className='text-xl font-medium mb:5'>Get in Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Email: info@wellcare.com</li>
                    <li>Phone: +234 8121264733</li>
                </ul>
            </div>

        </div>

             {/* Copyright content */}
        <div>
            <hr className='border-blue-500' />
            <p className='py-5 text-sm text-center'>© 2026 WellCare. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer