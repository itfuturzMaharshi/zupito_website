import React from 'react'
import HeroSection from './HeroSection'
import ActionsPage from './ActionsPage'
import EmailPrecision from './EmailPrecision'
import EmailsVerified from './EmailsVerified'
import EmailFinder from './EmailFinder'
import Teams from './Teams'
import Productivity from './Productivity'
import EmailFinderWorks from './EmailFinderWorks'
import FAQsPage from './FAQsPage'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ActionsPage />
      <EmailPrecision />
      <EmailsVerified />
      <EmailFinder />
      <Teams />
      <Productivity />
      <EmailFinderWorks />
      <FAQsPage />
    </div>
  )
}

export default HomePage
