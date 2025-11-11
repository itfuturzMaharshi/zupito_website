import React from 'react'
import EmailVerification from './EmailVerification'
import SingleAndBulkEmail from './SingleAndBulkEmail'
import AccountFeature from './AccountFeature'
import NonTechFeature from './NonTechFeature'
import RealTimeEmailVerification from './RealTimeEmailVerification'
import BusinessEmailVerification from './BusinessEmailVerification'
import PersonalEmailVerification from './PersonalEmailVerification'

const EmailVerifierPage = () => {
  return (
    <div>
      <EmailVerification />
      <SingleAndBulkEmail />
      <AccountFeature />
      <NonTechFeature />
      <RealTimeEmailVerification />
      <BusinessEmailVerification />
      <PersonalEmailVerification />
    </div>
  )
}

export default EmailVerifierPage
