import React from 'react'
import NavbarComponent from '../component/NavbarComponent'
import HeroComponent from '../component/HeroComponent'
import ServicesComponent from '../component/ServicesComponent'
import PortfolioComponent from '../component/PortfolioComponent'
import AboutUsComponent from '../component/AboutUsComponent'
import CTAComponent from '../component/CTAComponent'
import TestimonialsComponent from '../component/TestimonialsComponent'
import FooterComponent from '../component/FooterComponent'

const HomePage = () => {
  return (
    <>
      <div className="w-full absolute z-100 ">
        <NavbarComponent />
      </div>
      <HeroComponent />
      <ServicesComponent />
      <AboutUsComponent />
      <PortfolioComponent />
      <CTAComponent />
      <TestimonialsComponent />
      <FooterComponent />
    </>

  )
}

export default HomePage