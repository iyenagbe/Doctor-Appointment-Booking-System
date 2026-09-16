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
        <p>Browse through our list of specialists.</p>
        <div>
          <div>
            <p>General physician</p>
            <p>Gynecologist</p>
            <p>Dermatologist</p>
            <p>Pediatricians</p>
            <p>Neurologistt</p>
            <p>Gastroenterologist</p>
          </div>

          <div>
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