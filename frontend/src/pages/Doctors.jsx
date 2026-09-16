import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { specialist } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (specialist) {
      setFilterDoc(doctors.filter(doc => doc.Specialist === specialist))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, specialist])

  return (
    <div>
        <p className='text-gray-600 text-2xl'>Browse through our list of specialists.</p>
        <div className='flex flex-col gap-4 sm:flex-row items-start mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={() => specialist === '' ? navigate('/doctors') : navigate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General physician</p>
            <p onClick={() => specialist === 'Gynecologist' ? navigate('/doctors/Gynecologist') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
            <p onClick={() => specialist === 'Dermatologist' ? navigate('/doctors/Dermatologist') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
            <p onClick={() => specialist === 'Pediatricians' ? navigate('/doctors/Pediatricians') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
            <p onClick={() => specialist === 'Neurologist' ? navigate('/doctors/Neurologist') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
            <p onClick={() => specialist === 'Gastroenterologist' ? navigate('/doctors/Gastroenterologist') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            { filterDoc.map((item, index) => (
           <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'>
            <img className='bg-blue-500' src={item.image} alt="" />
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.Specialist}</p>
            </div>
           </div>
        ))}
          </div>
        </div>

    </div>
  )
}

export default Doctors