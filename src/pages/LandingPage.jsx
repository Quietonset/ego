import React from 'react'
import Nav from '../components/extra/Nav'
import Hero from '../components/landing/Hero'
import SpendWisely from '../components/landing/SpendWisely'
import FAQ from '../components/landing/FAQ'
import AboutUs from '../components/landing/AboutUs'
import Footer from '../components/extra/Footer'

const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <SpendWisely/>
      <FAQ/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default LandingPage
