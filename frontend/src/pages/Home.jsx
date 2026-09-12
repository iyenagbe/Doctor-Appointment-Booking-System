import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Specialist'
import RankingDoctor from '../components/RankingDoctor'
import Barner from '../components/Barner'

const Home = () => {
  return (
    <div>
       <Header />
       <Speciality />
       <RankingDoctor />
       <Barner />
    </div>
  )
}

export default Home