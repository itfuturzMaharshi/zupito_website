import React from 'react'
import HeroSection from './HeroSection'
import ActionsPage from './ActionsPage'
import EmailPrecision from './EmailPrecision'
import EmailsVerified from './EmailsVerified'
import EmailFinder from './EmailFinder'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ActionsPage />
      <EmailPrecision />
      <EmailsVerified />
      <EmailFinder />
    </div>
  )
}

export default HomePage
