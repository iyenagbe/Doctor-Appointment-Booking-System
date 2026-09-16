import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {



  return (
    <div>
        <div>
            {/* Footer Left content */}
            <div>
                <img src={assets.logo} alt="wellcare" />
                <p>Your Health is Our Priority</p>
            </div>

            {/* Footer center content */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Our Policy & Privacy</li>
                </ul>
            </div>

            {/* Footer right content */}
            <div>
                <p>Get in Touch</p>
                <ul>
                    <li>Email: info@wellcare.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                </ul>
            </div>

        </div>

             {/* Copyright content */}
        <div>
            <hr />
            <p>© 2026 WellCare. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer