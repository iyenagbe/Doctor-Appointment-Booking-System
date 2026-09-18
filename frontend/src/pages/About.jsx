import React from 'react'
import { assets } from '../assets/assets'

const About = () => {


  return (


    <div>
      <div className='text-center text-2xl font-bold text-gray-900 pt-10'>
        <p> About <span className='text-gray-900 font-medium'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10'>
        <img className='w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-2 justify-center md:w-1/2 text-sm text-gray-900'>
          <p> Welcome to Welcare doctors booking appointment.
            <br />
            Booking a doctor shouldn't be harder than the illness itself. We connect patients to verified, available specialists General Physicians, Gynecologists, Dermatologists, Pediatricians, Neurologists, Gastroenterologists, and more in just a few taps.
          </p>
          <br />

          <p> <span className='text-gray-800 text-2xl font-medium'>Our Vision</span>
            <br />
            To become the most trusted digital front door to healthcare in every community we serve.
            <br />
            Access to a doctor shouldn't depend on who you know or how long you can wait on hold. We're focused on three things: accessibility more specialists, wider reach; trust verified doctors.
          </p>

          <br />
          <p> <span className='text-gray-800 text-2xl font-medium'>Privacy Policy</span>
            <br />
            We collect only what's needed: your name, contact details, and booking information (doctor, specialty, appointment time). We never collect or store your card details directly payments run through secure third-party gateways.
            <br />
            You can request your data, correct it, or ask for deletion at any time. Everything is encrypted in transit and at rest. Questions? Contact: info@wellcare.com
          </p>
        </div>
      </div>

      <div className='text-2xl my-4 text-gray-900'>
        <p>WHY CHOOSE US?</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border-none px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-900 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits your busy style.</p>
        </div>

        <div className='border-none px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-900 cursor-pointer'>
          <b>Convenience:</b>
          <p>Acces to the network of trusted wellcare professionals in your area.</p>

        </div>

        <div className='border-none px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-900 cursor-pointer'>
          <b>Personlization:</b>
          <p>Tailored recommendtions and reminders to help stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About