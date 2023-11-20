import React from 'react'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import AdsSection from '../components/AdsSection'
import Testemonials from '../components/Testemonials'
import MyClients from '../components/MyClients'
import Thecnologies from '../components/Thecnologies'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Banner/>
        <AboutSection/>
        <Services/>
        <AdsSection />
        <Testemonials />
        <MyClients/>
        <Thecnologies/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home