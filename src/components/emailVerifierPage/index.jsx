import React from 'react'
import EmailVerification from './EmailVerification'
import SingleAndBulkEmail from './SingleAndBulkEmail'
import AccountFeature from './AccountFeature'
import NonTechFeature from './NonTechFeature'
import RealTimeEmailVerification from './RealTimeEmailVerification'

const EmailVerifierPage = () => {
  return (
    <div>
      <EmailVerification />
      <SingleAndBulkEmail />
      <AccountFeature />
      <NonTechFeature />
      <RealTimeEmailVerification />
    </div>
  )
}

export default EmailVerifierPage
