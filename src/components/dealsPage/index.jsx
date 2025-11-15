import React from 'react'
import EmailFinderDeals from './EmailFinderDeals'
import EmailVerificationDeals from './EmailVerificationDeals'
import HeroSection from './HeroSection'
import Footer from './Footer'

const DealsPage = () => {
  return (
    <div>
      <EmailVerificationDeals />
      <EmailFinderDeals />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default DealsPage
