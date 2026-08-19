import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();


    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
            <ul className='hidden md:flex items-start gap-4 font-medium'>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"}>

                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 var(--color-wellcare-blue-500) w-3/5 m-auto' />
                </NavLink>

                <NavLink to='/doctors' className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"
                }>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 var(--color-wellcare-blue-500) w-3/5 m-auto' />
                </NavLink>

                <NavLink to='/about' className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"
                }>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 var(--color-wellcare-blue-500) w-3/5 m-auto' />
                </NavLink>

                <NavLink to='/contact' className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"
                }>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 var(--color-wellcare-blue-500) w-3/5 m-auto' />
                </NavLink>
            </ul>

            <div clsassName='flex items-center gap-4'>
                <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-4 py-2 rounded-full font-light hidden md:block hover:bg-blue-600 cursor-pointer'>create account</button>
            </div>
        </div>
    )
}

export default Navbar