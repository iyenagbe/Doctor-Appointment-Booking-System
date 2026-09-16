import React from 'react'
import { assets } from '../assets/assets'

const Barner = () => {
  return (
    <div>
        {/* Barner Lift Side Content */}
        <div>
            <div>
                <p>Book Appointment</p>
                <p>With Over 100+ Trusted Doctors</p>
            </div>
            <button>Create Account</button>
        </div>

        {/* Barner Right Side Content */}
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>


    </div>


  )
}

export default Barner