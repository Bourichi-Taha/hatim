import React from 'react'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import AdsSection from '../components/AdsSection'

const Home = () => {
  return (
    <div>
        <Banner/>
        <AboutSection/>
        <Services/>
        <AdsSection />
    </div>
  )
}

export default Home