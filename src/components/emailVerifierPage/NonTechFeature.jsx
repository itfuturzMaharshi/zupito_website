import React from 'react'

const NonTechFeature = () => {
  // Features data
  const features = [
    {
      title: "Dual-Purpose Credit System",
      description: "Use the same credits for both email verification and email discovery, giving you complete flexibility and value for money."
    },
    {
      title: "Real-Time Email Verification",
      description: "Instantly verify email addresses as users enter them on sign-up forms, checkout pages, and lead capture forms."
    },
    {
      title: "Comprehensive Email Discovery",
      description: "Discover and collect accurate business email addresses for your outreach and lead generation campaigns."
    },
    {
      title: "Domain & MX Validation",
      description: "Validate domain authenticity with MX record checks, ensuring the email domain exists and is ready to receive messages."
    },
    {
      title: "Spam Trap & Abuse Detection",
      description: "Identify spam traps and abuse-prone email addresses to protect your sender reputation and maintain strong inbox placement."
    },
    {
      title: "Bulk Email Verification",
      description: "Verify large lists of email addresses in one go, saving time and effort for your sales and marketing teams."
    },
    {
      title: "Error-Free Email Typo Correction",
      description: "Detect and correct common typos in email addresses to prevent lost leads and improve data quality."
    },
    {
      title: "Catch-All Domain Detection",
      description: "Identify \"catch-all\" email domains so you can better understand deliverability risks and segment your email strategy."
    },
    {
      title: "Seamless API Integration",
      description: "Easily integrate Zupitu's verification and discovery tools into your CRM, lead forms, and custom applications via API."
    },
    {
      title: "Data Privacy & Compliance",
      description: "Stay compliant with global privacy standards like GDPR and CCPA, ensuring your data stays secure."
    },
    {
      title: "High-Speed Processing",
      description: "Experience fast, accurate processing of bulk email lists to keep up with the speed of modern sales workflows."
    },
    {
      title: "User-Friendly Dashboard",
      description: "Enjoy an intuitive, simple-to-use platform that makes list uploads, API integrations, and credit tracking effortless."
    },
    {
      title: "Email Gender Detection",
      description: "Identify gender information based on email addresses to help with segmentation and personalization of campaigns."
    },
    {
      title: "Detailed Reporting & Insights",
      description: "Get detailed reports on email validity, risk factors, and overall data quality, enabling better decision-making for outreach."
    }
  ]


  return (
    <section className="relative w-full bg-white overflow-hidden">
      <img
        src="/images/vector-img-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute left-0 top-1/2  -translate-x-[10%] -translate-y-1/2"
      />
      <img
        src="/images/vector-img-2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute right-0 top-1/4  translate-x-[10%] -translate-y-1/2"
      />
      {/* Main Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-[150px] py-[100px]">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-[21px] mb-12 sm:mb-16 md:mb-20 lg:mb-[70px]">
          {/* Articles Badge */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-[6px] rounded-[50px] bg-[#F8F6FF] px-4 py-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#4A90E2]"></div>
              <span className="font-['Inter'] text-sm sm:text-base font-semibold capitalize leading-[18px] tracking-normal text-[#132436] align-middle">
                Articles, Stories And More
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="w-full flex flex-col items-center gap-4 sm:gap-[16px]">
            <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center font-['Inter'] text-[clamp(32px,5vw,60px)] font-semibold leading-[100%] tracking-[-2.2px] text-[#132436]">
              <span>Zupitu</span>
              <span className="inline-flex  items-center justify-center ">
                <img
                  src="/images/email-icon-4.svg"
                  alt="Email icon"
                  className="h-[56px] w-[56px]"
                />
              </span>
              <span>Non-Tech Features</span>
            </h1>

            {/* Description */}
            <p className="max-w-full text-center font-['Manrope'] text-[clamp(18px,2.5vw,26px)] font-medium leading-[clamp(32px,4vw,44px)] tracking-normal text-[#546779]">
              Explore insightful content that keeps you ahead of the curve and connected to the pulse of what's happening.
            </p>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="w-full">
          {/* Gradient Card Container */}
          <div className="w-full rounded-[24px] bg-gradient-to-b from-[#FFFFFF] to-[#F6F6FF] p-6 sm:p-8 md:p-10 lg:p-[50px]">
            {/* Features Grid Container */}
            <div className="w-full flex flex-col gap-0">
              {/* Group features into rows */}
              {Array.from({ length: Math.ceil(features.length / 2) }).map((_, rowIndex) => {
                const leftFeature = features[rowIndex * 2];
                const rightFeature = features[rowIndex * 2 + 1];
                const isLastRow = rowIndex === Math.floor((features.length - 1) / 2);
                const isFirstRow = rowIndex === 0;
                
                // Determine padding class based on row position
                let paddingClass = '';
                if (isFirstRow && isLastRow) {
                  // Only one row - no padding
                  paddingClass = '';
                } else if (isFirstRow) {
                  // First row - only bottom padding
                  paddingClass = 'pb-[40px] md:pb-[50px]';
                } else if (isLastRow) {
                  // Last row - only top padding
                  paddingClass = 'pt-[40px] md:pt-[50px]';
                } else {
                  // Middle rows - both top and bottom padding
                  paddingClass = 'py-[40px] md:py-[50px]';
                }
                
                return (
                  <div key={rowIndex}>
                    {/* Row Container */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-[60px] gap-0">
                      {/* Left Column Feature */}
                      {leftFeature && (
                        <div className={`flex items-start gap-4 ${paddingClass}`}>
                          {/* Icon */}
                          <div className="shrink-0 mt-1">
                            <img 
                              src="/images/FeatureIcon.svg" 
                              alt="Feature icon" 
                              className="w-8 h-8 sm:w-10 sm:h-10"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 flex flex-col gap-[10px]">
                            <h3 className="font-['Inter'] text-[clamp(20px,2vw,26px)] font-semibold leading-[38px] tracking-normal text-[#132436] capitalize">
                              {leftFeature.title}
                            </h3>
                            <p className="font-['Manrope'] text-[clamp(18px,2vw,22px)] font-normal leading-[36px] tracking-normal text-[#747C9A]">
                              {leftFeature.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Right Column Feature */}
                      {rightFeature && (
                        <div className={`flex items-start gap-4 ${paddingClass}`}>
                          {/* Icon */}
                          <div className="shrink-0 mt-1">
                            <img 
                              src="/images/FeatureIcon.svg" 
                              alt="Feature icon" 
                              className="w-8 h-8 sm:w-10 sm:h-10"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 flex flex-col gap-[10px]">
                            <h3 className="font-['Inter'] text-[clamp(20px,2vw,26px)] font-semibold leading-[38px] tracking-normal text-[#132436] capitalize">
                              {rightFeature.title}
                            </h3>
                            <p className="font-['Manrope'] text-[clamp(18px,2vw,22px)] font-normal leading-[36px] tracking-normal text-[#747C9A]">
                              {rightFeature.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Horizontal Divider - Show between rows, not after last row */}
                    {!isLastRow && (
                      <div className="hidden md:block w-full">
                        <div className="h-px bg-black opacity-10"></div>
                      </div>
                    )}
                    
                    {/* Mobile Divider - Show between all rows */}
                    {!isLastRow && (
                      <div className="block md:hidden w-full">
                        <div className="h-px bg-black opacity-10"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NonTechFeature
