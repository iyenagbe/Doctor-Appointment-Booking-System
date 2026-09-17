import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'


const Appointments = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current date
    let today = new Date()

    for (let a = 0; a < 7; a++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + a)

      // setting end time, date and index
      let endTime = new Date()
      endTime.setDate(today.getDate() + a)
      endTime.setHours(21, 0, 0, 0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        /// slots to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // increment current time
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])


  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);

  }, [docSlots])

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

          <p className='text-lg font-medium text-gray-800 mt-4'>Appointment fee: <span className='font-bold text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>

      {/*---Available Slots---*/}
      <div className='sm:ml sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='text-gray-700 font-semibold text-2xl'>Booking Slots</p>
        <div className='flex gap-3  items-centerw-full overflow-xscroll mt-4'>

          {docSlots.length && docSlots.map((item, index) => (
            <div key={index} onClick={() => setSlotIndex(index)} className={`text-center cursor-pointer py-5 min-w-15 rounded-full ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-300 '}`}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
          <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
            {docSlots.length && docSlots[slotIndex].map((item, index) => {
              return <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-500 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>{item.time.toLowerCase() }</p>
            })}
          </div>

          <button className='bg-blue-500 text-white text-sm font-light py-3 px-12 my-6 rounded-full cursor-pointer mt-5 hover:bg-blue-600'>
            Book Appointment
          </button>
      </div>


      {/*---Related Doctors---*/}
      <RelatedDoctors docId={docId} specialist={docInfo.Specialist} />
    </div>
  )
}

export default Appointments