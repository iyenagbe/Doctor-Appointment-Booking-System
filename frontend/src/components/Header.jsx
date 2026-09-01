import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div>
        {/*---- left section-----*/}
        <div>
            <p>
                Book an appointment with the <br /> best doctors in your city.
            </p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Simplify your healthcare experience</p>
            </div>
            <a href=''>
                Book an appointment <img src={assets.arrow_icon} alt="" />

            </a>
        </div>



        {/*---- right section-----*/}
        <div>
            <img src={assets.header_img} alt="" />

        </div>
    </div>
  )
}

export default Header