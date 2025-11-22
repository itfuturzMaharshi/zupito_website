import React from 'react'

const HeroSection = () => {
  return (
    <section 
      className="relative w-full  flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/use-cases-hero-section-bg-img.png)",
      }}
    >
      {/* Main Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[150px] py-[80px]">
        <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col items-center">
          
          {/* Profile Avatars Row - Second Image: width 1362, height 406, gap 30px */}
          <div className="w-full max-w-full lg:max-w-[1362px] h-auto mb-[10px] flex items-center justify-center">
            <div className="w-full max-w-full lg:max-w-[1362px] h-auto  flex items-center justify-center">
              <img 
                src="/images/use-case-hero-section-img.png" 
                alt="Profile avatars" 
                className="w-full h-auto max-h-[80px] object-contain"
              />
            </div>
          </div>

          {/* Main Headline Section - Third Image: width 400, height 84 */}
          <div className="w-full max-w-full lg:max-w-[1362px] mb-[21px] flex flex-col items-center justify-center">
            <h1 className="text-center capitalize flex flex-col items-center justify-center gap-2 sm:gap-3 lg:tracking-[-3.2px] align-middle font-bold font-['Inter'] text-[30px] sm:text-[40px] lg:text-[50px] leading-[100%]" style={{ fontWeight: 700 }}>
              {/* First Line */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="text-[#EB3609]">Close Deals</span>
                {/* Success Icon */}
                <span className="inline-flex items-center justify-center w-[clamp(45px,5.5vw,70px)] h-[clamp(45px,5.5vw,70px)] shrink-0">
                  <img 
                    src="/images/Success-1.svg" 
                    alt="Success icon" 
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="text-[#132436]">Faster With Accurate,</span>
              </div>
              {/* Second Line */}
              <div className="text-[#132436]">
                Verified Contacts
              </div>
            </h1>
          </div>

          {/* Description Paragraph - Fourth Image: width 1362, height 292, gap 21px */}
          <div className="w-full max-w-full lg:max-w-[730px] h-auto mb-[16px] flex items-center justify-center">
            <p className="text-center font-['Manrope'] text-[18px] font-semibold leading-[25px] lg:leading-[40px] tracking-[0px] text-[#737191] max-w-full px-4" style={{ fontWeight: 600 }}>
              Build pipelines you can rely on with verified data that keeps bounce rates low and response rates high.
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}

export default HeroSection
