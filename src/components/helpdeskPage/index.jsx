import React from 'react'
import FAQsPage from './FAQsPage'
import Footer from './Footer'
import ContactUs from './ContactUs'
import HeroSection from './HeroSection'
import DocumentationPage from './DocumentationPage'

const HelpDeskPage = () => {
  return (
    <div>
      <HeroSection />
      <ContactUs />
      <DocumentationPage />
      <FAQsPage />
      <Footer />
    </div>
  )
}

export default HelpDeskPage
