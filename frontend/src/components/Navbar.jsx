import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [ token, setToken ] = useState(true);


    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <NavLink to='/home'>
                <img className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
            </NavLink>
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
                {
                    token ? <dvi className='flex items-center gap-2 cursor-pointer group relative' onClick={() => setShowMenu(!showMenu)}>
                        <img src={assets.profile_pic} className='w-8 rounded-full'/>
                        <img src={assets.dropdown_icon} className='w-2\.5' />
                        
                        <div className='absolute top-10 right-0 pt-13 text-base font-medium text-gray-600 z-20 h bg-white shadow-md rounded-md p-2 hidden group-hover:block'>
                            <div className='min-w-48 rounded flex flex-col gap-2 p-2'>
                                <p onClick={() => navigate('/profile')} className='hover:text-blue-500 p-2 rounded cursor-pointer'>Profile</p>

                                <p onClick={() => navigate('/appointments')} className='hover:text-blue-500 p-2 rounded cursor-pointer'>My Appointments</p>
                                <p onClick={() => setToken(false)} className='hover:text-blue-500 p-2 rounded cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </dvi> : <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-4 py-2 rounded-full font-light hidden md:block hover:bg-blue-600 cursor-pointer'>create account</button>
                }
            </div>
        </div>
    )
}

export default Navbar