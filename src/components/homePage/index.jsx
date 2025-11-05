import React from 'react'
import HeroSection from './HeroSection'
import ActionsPage from './ActionsPage'
import EmailPrecision from './EmailPrecision'
import EmailsVerified from './EmailsVerified'
import EmailFinder from './EmailFinder'
import Teams from './Teams'
import Productivity from './Productivity'


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
    </div>
  )
}

export default HomePage
