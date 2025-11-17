import React from 'react'

const HeroSection = () => {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F4FFF8 0%, #F8F7FF 100%)' }}
    >
      {/* Main Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[150px] py-[80px] sm:py-[100px]">
        {/* Header Section - Second Image */}
        <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col items-center gap-[21px] mb-[21px]">
          {/* Title Section - Third Image */}
          <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col items-center gap-[21px]">
            {/* Main Title with Icons */}
            <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center font-['Inter'] text-[clamp(36px,4vw,60px)] font-semibold leading-[100%] tracking-[-2.2px] text-[#132436]">
              <span>Answers</span>
              {/* Red Circle with Lightbulb/Question Mark Icon */}
              <span className="inline-flex items-center justify-center w-[clamp(40px,5vw,60px)] h-[clamp(40px,5vw,60px)] shrink-0">
                <img 
                  src="/images/setting-orange-5.svg" 
                  alt="Icon" 
                  className="w-full h-full"
                />
              </span>
              <span>To The Most Common</span>
              <br />
              <span>Things</span>
              {/* Purple Circle with Envelope Icon */}
              <span className="inline-flex items-center justify-center w-[clamp(40px,5vw,60px)] h-[clamp(40px,5vw,60px)] shrink-0">
                <img 
                  src="/images/rocket-purple.svg" 
                  alt="Icon" 
                  className="w-full h-full"
                />
              </span>
              <span>We're Asked</span>
            </h1>

            {/* Description Text */}
            <div className="w-full max-w-full flex flex-col items-center gap-0">
              <p className="text-center font-['Manrope'] text-[clamp(20px,2.5vw,20px)] font-medium leading-[44px] tracking-normal text-[#546779]">
                We've put together quick answers to the most common questions about our{' '}
                <span className="text-[#132436] font-bold">Email Finder, credits, and support.</span> 
              </p>
              <p className="text-center font-['Manrope'] text-[clamp(20px,2.5vw,20px)] font-medium leading-[44px] tracking-normal text-[#546779] ">
                If you don't see what you're looking for, our team is just a message away.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards Section with Connector */}
        <div className="relative w-full max-w-full lg:max-w-[1362px] mx-auto mt-[40px] sm:mt-[80px] md:mt-[100px] lg:mt-[150px]">
          {/* Connector Element - Group-bg.png */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[30%] sm:-translate-y-[30%] md:-translate-y-[30%] lg:-translate-y-[28%] z-0 w-full flex items-center justify-center pointer-events-none">
            <img 
              src="/images/Group-bg.png" 
              alt="Connector" 
              className="w-full max-w-[clamp(500px,75vw,1400px)] h-auto object-contain"
            />
          </div>
          
          {/* Contact Cards Section */}
          <div className="relative z-10 w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col lg:flex-row gap-[30px] lg:gap-[21px] justify-center">
          {/* Technical Support Card - Fourth Image */}
          <div 
            className="w-full lg:w-[659px] lg:h-[358px] rounded-[24px] p-6 sm:p-[24px] flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(180deg, #C2CEFF 0%, #96AAFB 100%)',
              minHeight: '358px'
            }}
          >
            {/* Inner White Card - Fifth Image */}
            <div className="w-full max-w-[611px] rounded-[12px] bg-white pt-[30px] pr-5 sm:pr-[20px] pb-[30px] pl-5 sm:pl-[20px] flex flex-col items-center gap-[30px]">
              {/* Content Container - Sixth Image */}
              <div className="w-full max-w-[571px] flex flex-col items-center justify-between gap-4">
                {/* Title */}
                <h2 className="font-['Inter'] text-[clamp(24px,2.5vw,32px)] font-semibold leading-[50px] tracking-[-1.2px] text-center text-[#132436]">
                  Technical Support
                </h2>

                {/* Description */}
                <p className="font-['Manrope'] text-[clamp(18px,2vw,24px)] font-medium leading-[40px] tracking-normal text-center text-[#585D71]">
                  For Product integration or technical support, please write at
                </p>
              </div>

              {/* Email Button - Seventh Image */}
              <div className="relative w-full max-w-[446px]">
                {/* Background with opacity */}
                <div 
                  className="absolute inset-0 rounded-[74px]"
                  style={{
                    background: 'linear-gradient(180deg, #C2CEFF 0%, #96AAFB 100%)',
                    opacity: 0.2
                  }}
                />
                {/* Email Text */}
                <div className="relative flex items-center justify-center h-[70px]">
                  <a 
                    href="mailto:support@zupitu.com"
                    className="font-['Manrope'] text-[clamp(18px,2vw,24px)] font-bold leading-[100%] tracking-normal text-center text-[#000000] hover:opacity-80 transition-opacity"
                  >
                    support@zupitu.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sales Card - Eighth Image */}
          <div 
            className="w-full lg:w-[671px] lg:h-[358px] rounded-[24px] p-6 sm:p-[24px] flex flex-col items-center justify-center gap-5"
            style={{
              background: 'linear-gradient(180deg, #EEE9FF 0%, #CABCFF 100%)',
              minHeight: '358px'
            }}
          >
            {/* Title */}
            <h2 className="font-['Inter'] text-[clamp(24px,2.5vw,32px)] font-semibold leading-[50px] tracking-[-1.2px] text-center text-[#132436]">
              Contact Sales
            </h2>

            {/* Inner White Card - Ninth Image */}
            <div className="w-full max-w-[623px] rounded-[16px] bg-white p-6 sm:p-8 flex flex-col items-center gap-5">
              {/* Description */}
              <div className="w-full flex flex-col items-center gap-2">
                <p className="font-['Manrope'] text-[clamp(18px,2vw,24px)] font-medium leading-[40px] tracking-normal text-center text-[#585D71]">
                  Looking for a custom quote?
                </p>
                <p className="font-['Manrope'] text-[clamp(18px,2vw,24px)] font-medium leading-[40px] tracking-normal text-center text-[#585D71]">
                  Drop us a line at client-
                </p>
              </div>

              {/* Email Button - Eleven Image */}
              <div className="relative w-full max-w-[446px]">
                {/* Background with opacity */}
                <div 
                  className="absolute inset-0 rounded-[64px]"
                  style={{
                    background: 'linear-gradient(180deg, #E9EBFF 0%, #CABCFF 100%)',
                    opacity: 0.3
                  }}
                />
                {/* Email Text */}
                <div className="relative flex items-center justify-center h-[70px]">
                  <a 
                    href="mailto:success@zupitu.com"
                    className="font-['Manrope'] text-[clamp(18px,2vw,24px)] font-bold leading-[100%] tracking-normal text-center text-[#132436] hover:opacity-80 transition-opacity"
                  >
                    success@zupitu.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default HeroSection
