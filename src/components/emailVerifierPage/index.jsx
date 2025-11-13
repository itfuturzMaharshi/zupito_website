import React from 'react'
import EmailVerification from './EmailVerification'
import SingleAndBulkEmail from './SingleAndBulkEmail'
import AccountFeature from './AccountFeature'
import NonTechFeature from './NonTechFeature'
import RealTimeEmailVerification from './RealTimeEmailVerification'
import BusinessEmailVerification from './BusinessEmailVerification'
import PersonalEmailVerification from './PersonalEmailVerification'
import PlanPage from './PlanPage'
import HeroSection from './HeroSection'
import Footer from './Footer'
import FAQsPage from './FAQsPage'

const EmailVerifierPage = () => {
  return (
    <div>
      <HeroSection />
      <EmailVerification />
      <BusinessEmailVerification />
      <PersonalEmailVerification />
      <RealTimeEmailVerification />
      <SingleAndBulkEmail />
      <NonTechFeature />
      <PlanPage />
      <AccountFeature />
      <FAQsPage />
      <Footer />
    </div>
  )
}

export default EmailVerifierPage
