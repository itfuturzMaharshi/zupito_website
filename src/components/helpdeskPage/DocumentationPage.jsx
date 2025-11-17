import React from 'react'

const DocumentationPage = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Container - First Image */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-6 2xl:px-[24px]">
        {/* Background Container with Gradient */}
        <div 
          className="w-full rounded-[24px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[150px] py-[60px] sm:py-[80px] md:py-[100px]"
          style={{
            background: 'linear-gradient(180deg, #F4F7FA 0%, #E5F2FF 100%)',
          }}
        >
          {/* Inner Flex Container - Second Image */}
          <div className="w-full flex flex-col lg:flex-row items-center  justify-between gap-6 lg:gap-8">
            {/* Left Content Section - Third Image */}
            <div className="w-full lg:w-auto flex flex-col gap-[14px] sm:gap-[21px]">
              {/* Fourth Image - Text Container */}
              <div className="flex flex-col gap-[21px]">
                {/* Main Heading with Icon */}
                <h2 className="flex flex-wrap items-center gap-2 sm:gap-3 font-['Inter'] font-semibold text-[clamp(32px,4vw,60px)] leading-[100%] tracking-[-2.2px] text-[#132436]">
                  <span>Can't</span>
                  {/* Orange Speech Bubble Icon */}
                  <span className="inline-flex items-center justify-center shrink-0 relative">
                    <img 
                      src="/images/Commitment-1.svg" 
                      alt="Icon" 
                      className="w-[clamp(40px,5vw,60px)] h-[clamp(40px,5vw,60px)] relative z-10"
                    />
                  </span>
                  <span>Find What You're</span>
                  <span className="w-full lg:w-auto">looking for?</span>
                </h2>
                
                {/* Sub-text */}
                <p className="font-['Manrope'] font-medium text-[clamp(18px,2.5vw,26px)] leading-[100%] tracking-[0px] text-[#546779]">
                  Check out our full documentation.
                </p>
              </div>
            </div>

            {/* Right Button Section - Fifth Image */}
            <div className="w-full lg:w-auto shrink-0">
              <button
                className="w-full lg:w-[280px] h-[62px] flex items-center justify-center gap-[10px] rounded-[50px] bg-[#EB3609] hover:bg-[#D32F08] transition-colors duration-200"
                style={{
                  paddingTop: '16px',
                  paddingRight: '24px',
                  paddingBottom: '16px',
                  paddingLeft: '24px',
                }}
              >
                <span className="font-['Inter'] font-semibold text-[20px] leading-[100%] tracking-[0px] text-white">
                  Visit Documentation
                </span>
                <img
                  src="/images/right-arrow.svg"
                  alt="Right arrow icon"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DocumentationPage
