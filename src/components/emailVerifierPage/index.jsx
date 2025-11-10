import React from 'react'
import EmailVerification from './EmailVerification'
import SingleAndBulkEmail from './SingleAndBulkEmail'
import AccountFeature from './AccountFeature'

const EmailVerifierPage = () => {
  return (
    <div>
      <EmailVerification />
      <SingleAndBulkEmail />
      <AccountFeature />
    </div>
  )
}

export default EmailVerifierPage
