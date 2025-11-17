import React from 'react'

const SingleAndBulkEmail = () => {
  return (
    <section className="relative w-full  overflow-hidden">
      {/* Full background overlay - covers entire section */}
      <div className="absolute inset-0 bg-[#FFECEA] opacity-60 z-0 pointer-events-none" />
      
      {/* Container */}
      <div className="relative z-10 w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-[150px] py-[100px]">
        
        {/* Header Section - Second Image */}
        <div className="w-full max-w-full mx-auto mb-16 lg:mb-24 flex flex-col items-center gap-[21px]">
          {/* Plugin Integration Badge - Third Image */}
          <div className="flex justify-center mb-5">
            <div className="flex items-center w-[187px] h-[42px] rounded-[50px] pt-3 pr-4 pb-3 pl-4 gap-1.5 bg-white">
              <div className="w-2 h-2 rounded-full shrink-0 bg-[#659DF8]" />
              <span className="font-['Inter'] font-semibold text-base leading-[18px] tracking-normal capitalize align-middle text-[#132436]">
                Plugin Integration
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-center flex flex-wrap items-center justify-center gap-3 mb-5 font-['Inter'] font-semibold text-[clamp(32px,4vw,60px)] leading-[50px] tracking-[-2.2px] align-middle text-[#132436]">
            <span>Single</span>
            <span className="inline-flex items-center justify-center ">
              <img
                src="/images/email-icon-3.svg"
                alt="Email icon"
                className="h-[56px] w-[56px]"
              />
            </span>
            <span>& Bulk Mail Verification</span>
          </h1>

          {/* Description Text */}
          <p className="text-center max-w-5xl mx-auto font-['Manrope'] font-medium text-[clamp(18px,2.5vw,26px)] leading-[44px] tracking-normal align-middle text-[#475768]">
            Your email marketing success depends upon valid and opt-in email database. <br />
            An email verifier helps you maintain a valid list and email finder discovers the right business contacts to fill your sales pipeline with high-quality leads.
          </p>
        </div>

        {/* First Card - Instant Single Email Verification - Fourth Image */}
        <div className="w-full max-w-full mx-auto mb-12 lg:mb-24 rounded-[20px] bg-white relative shadow-[0px_10px_30px_0px_#0000001A] p-[clamp(30px,4vw,60px)]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              {/* Badge - Seventh Image */}
              <div className="flex items-center w-full max-w-[336px] min-h-[46px] rounded-[50px] pt-3 pr-4 pb-3 pl-4 gap-1.5 bg-[#F4FDF9]">
                <div className="w-2 h-2 rounded-full shrink-0 bg-[#132436]" />
                <span className="font-['Manrope'] font-bold text-lg leading-[100%] tracking-normal text-center align-middle text-[#132436]">
                  Best Fit for all size B2B, B2C firms
                </span>
              </div>

              {/* Title Section - Ninth Image */}
              <div className="flex flex-col gap-[14px]">
                <h2 className="flex flex-wrap items-center gap-2 mb-6 font-['Inter'] font-semibold text-[clamp(32px,3vw,32px)] leading-[100%] tracking-[-1.5px] align-middle text-[#132436]">
                  <span>Instant Single Email Verification –</span>
                  <br className="lg:hidden" />
                  <span>Simple,</span>
                  <span className="inline-flex items-center justify-center ">
                    <img
                      src="/images/setting-orange-7.svg"
                      alt="Setting icon"
                      className="h-[56px] w-[56px]"
                    />
                  </span>
                  <span>Fast, Accurate</span>
                </h2>

                {/* Description - Eighth Image */}
                <div className="flex flex-col">
                  <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,20px)] leading-[36px] tracking-normal align-middle text-[#485563] mb-2.5">
                    Quickly verify a single email with Zupitu's real-time verification tool. Whether it's a business or personal email, get instant feedback on its validity and risk status.
                  </p>
                  <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,20px)] leading-[36px] tracking-normal align-middle text-[#485563]">
                    Detect spam traps, disposable emails, and invalid addresses on the spot. With 98% accuracy, ensure every contact you collect is clean, safe, and ready for outreach.
                  </p>
                </div>
              </div>

              {/* Buy Now Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-['Manrope'] font-bold text-[22px] leading-[30px] tracking-normal align-middle capitalize text-[#EB3609]"
                >
                  <span>Buy Now</span>
                  <img
                    src="/images/right-orange-arrow.svg"
                    alt="Arrow icon"
                    className="h-4 w-4"
                  />
                </a>
              </div>
            </div>

            {/* Right Column - Image - Tenth Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/16.png"
                alt="Instant Single Email Verification"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Center Divider Line */}
          <div className="absolute hidden lg:block pointer-events-none top-[49px] bottom-[49px] left-1/2 -translate-x-1/2 w-0 opacity-10 border-l border-[#132436]" />
        </div>

        {/* Second Card - Effortless Bulk Email Verification - Eleventh Image */}
        <div className="w-full max-w-full mx-auto rounded-[20px] bg-white relative shadow-[0px_10px_30px_0px_#0000001A] p-[clamp(30px,4vw,60px)]">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
            {/* Right Column - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              {/* Badge - Fiftin Image */}
              <div className="flex items-center w-full max-w-[336px] min-h-[46px] rounded-[50px] pt-3 pr-4 pb-3 pl-4 gap-1.5 bg-[#F4FDF9]">
                <div className="w-2 h-2 rounded-full shrink-0 bg-[#132436]" />
                <span className="font-['Manrope'] font-bold text-lg leading-[100%] tracking-normal text-center align-middle text-[#132436]">
                  Best Fit for all size B2B, B2C firms
                </span>
              </div>

              {/* Title Section - Seventin Image */}
              <div className="flex flex-col gap-[14px]">
                <h2 className="flex flex-wrap items-center gap-2 mb-6 font-['Inter'] font-semibold text-[clamp(32px,3vw,32px)] leading-[100%] tracking-[-1.5px] align-middle text-[#132436]">
                  <span>Effortless</span>
                  <span className="inline-flex items-center justify-center">
                    <img
                      src="/images/setting-orange-8.svg"
                      alt="Setting icon"
                      className="h-[56px] w-[56px]"
                    />
                  </span>
                  <span>Bulk Email</span>
                  <br className="lg:hidden" />
                  <span>Verification</span>
                </h2>

                {/* Description - Sixthin Image */}
                <div className="flex flex-col">
                  <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,20px)] leading-[36px] tracking-normal align-middle text-[#485563] mb-2.5">
                    Quickly verify a single email with Zupitu's real-time verification tool. Whether it's a business or personal email, get instant feedback on its validity and risk status.
                  </p>
                  <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,20px)] leading-[36px] tracking-normal align-middle text-[#485563]">
                    Detect spam traps, disposable emails, and invalid addresses on the spot. With 98% accuracy, ensure every contact you collect is clean, safe, and ready for outreach.
                  </p>
                </div>
              </div>

              {/* Buy Now Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-['Manrope'] font-bold text-[22px] leading-[30px] tracking-normal align-middle capitalize text-[#EB3609]"
                >
                  <span>Buy Now</span>
                  <img
                    src="/images/right-orange-arrow.svg"
                    alt="Arrow icon"
                    className="h-4 w-4"
                  />
                </a>
              </div>
            </div>

            {/* Left Column - Image - Tawail Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/17.png"
                alt="Effortless Bulk Email Verification"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Decorative Border Line - Eightin Image */}
          <div className="absolute hidden lg:block pointer-events-none top-[49px] bottom-[49px] left-1/2 -translate-x-1/2 w-0 opacity-10 border-l border-[#132436]" />
        </div>
    </div>
    </section>
  )
}

export default SingleAndBulkEmail
