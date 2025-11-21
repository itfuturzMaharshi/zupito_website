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
import WinningTeams from './WinningTeams'
import Footer from './Footer'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ActionsPage />
      <EmailPrecision />
      <EmailsVerified />
      <EmailFinder />
      <Teams />
      <WinningTeams />
      <Productivity />
      <EmailFinderWorks />
      <FAQsPage />
      <Footer />
    </div>
  )
}

export default HomePage
