import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointments = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)

    console.log(docInfo);
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  return docInfo && (
    <div>
        {/*---Doctors Info---*/}
        <div className='flex flex-col sm:flex-row gap-4'>
           <div>
            <img className='bg-blue-500 w-full sm:mx-w-72 rounded-lg' src={docInfo.image} alt="" />
           </div>

            {/*---Doctors Info, name etc---*/}
           <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx:2 sm:mx-0 mt-\[-80px\] sm:mt-0  '>
              <p className='flex items-center gap-2 text-2xl font-medium text-gray-800'>{docInfo.name} <img className='w-4' src={assets.verified_icon} alt="" /></p>

              <div className='flex items-center gap-2 text-gray-600 text-sm mt-1'>
                <p>{docInfo.degree} - {docInfo.specialist}</p>
                <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
              </div>

              {/*---About Doctors---*/}
              <div>
                <p className='flex items-center gap-1 text-sm font-medium text-gray-800 mt-3'>About <img src={assets.info_icon} alt="" /></p>
                <p className='text-sm text-gray-600 max-w-\[700px\] mt-1'>{docInfo.about}</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Appointments