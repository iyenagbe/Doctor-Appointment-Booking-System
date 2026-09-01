import React from 'react'
import {specialistData} from '../assets/assets'
import { Link } from 'react-router-dom'


const Specialist = () => {

  return (

    <div id='specialist' className='flex flex-col items-center py-16 gap-4 text-gray-700'>
        <h1 className='text-3xl font-bold'>Find the best specialist</h1>
        <p className='text-center sm:w-1/3 text-sm'>Get access to a network of top-rated specialists in your area.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialistData.map((item, index) => (

              <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.Specialist}`} >
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt='' />
                <p>{item.Specialist}</p>
              </Link>
            ))}
        </div>

    </div>
  )
}

export default Specialist