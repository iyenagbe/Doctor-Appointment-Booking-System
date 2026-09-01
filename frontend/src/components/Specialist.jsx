import React from 'react'
import {specialistData} from '../assets/assets'
import { Link } from 'react-router-dom'


const Specialist = () => {

  return (

    <div id='specialist' className=''>
        <h1>Find the best specialist</h1>
        <p>Get access to a network of top-rated specialists in your area.</p>
        <div>
            {specialistData.map((item, ) => (
              <Link>

              </Link>
            ))}
        </div>

    </div>
  )
}

export default Specialist