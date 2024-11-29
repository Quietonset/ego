import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Hero from '../components/landing/Hero'
import SpendWisely from '../components/landing/SpendWisely'
import FAQ from '../components/landing/FAQ'
import AboutUs from '../components/landing/AboutUs'

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
