import React from 'react'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import AdsSection from '../components/AdsSection'
import Testemonials from '../components/Testemonials'
import MyClients from '../components/MyClients'

const Home = () => {
  return (
    <div>
        <Banner/>
        <AboutSection/>
        <Services/>
        <AdsSection />
        <Testemonials />
        <MyClients/>
    </div>
  )
}

export default Home