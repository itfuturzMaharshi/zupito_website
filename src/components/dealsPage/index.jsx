import React from 'react'
import EmailFinderDeals from './EmailFinderDeals'
import EmailVerificationDeals from './EmailVerificationDeals'
import HeroSection from './HeroSection'
import Footer from './Footer'

const DealsPage = () => {
  return (
    <div>
      <HeroSection />
      <EmailVerificationDeals />
      <EmailFinderDeals />
      <Footer />
    </div>
  )
}

export default DealsPage
