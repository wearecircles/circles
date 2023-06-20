import React, { useState } from 'react'
import NavbarComponent from '../component/NavbarComponent'
import HeroComponent from '../component/HeroComponent'
import ServicesComponent from '../component/ServicesComponent'
import PortfolioComponent from '../component/PortfolioComponent'
import AboutUsComponent from '../component/AboutUsComponent'
import CTAComponent from '../component/CTAComponent'
import TestimonialsComponent from '../component/TestimonialsComponent'
import FooterComponent from '../component/FooterComponent'
import FilledButtonComponent from '../component/generic/FilledButtonComponent'

const HomePage = () => {

  return (
    <>
     
      <div className="w-full absolute z-100 scroll-smooth">
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