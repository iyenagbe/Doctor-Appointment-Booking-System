import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const MyAppointments = () => {

  const { doctors } = useContext(AppContext)

  return (

    <div>
      <p>My Appointments</p>
      <div>
        {
          doctors.slice(0, 2).map((item, index) => (
            <div key={index}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.specialist}</p>
                <p>Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p><span>Date & Time:</span>  19, November, 2026  |  8:40  PM</p>
              </div>

              <div>

              </div>

              <div>
                <button>Pay Online</button>
                <button>Cancel appointment</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments