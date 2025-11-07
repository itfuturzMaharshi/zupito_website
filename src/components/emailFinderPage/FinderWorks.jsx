import React from 'react'

const FinderWorks = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/how-it-work-bg.png)'
      }}
    >
      {/* Container with padding: top/bottom 100px, left/right 200px */}
      <div className="w-full mx-auto pt-[100px] pb-[62px] px-[clamp(24px,10vw,200px)]">
        <div className="max-w-full mx-auto">
          {/* Heading Section */}
          <div className="w-full mb-[21px]">
            <h2 className="text-center text-[#132436] font-semibold leading-[50px] tracking-[-2.2px] align-middle font-['Inter',sans-serif] text-[clamp(32px,5vw,60px)] flex items-center justify-center gap-3 flex-wrap">
              <span>How Our</span>
              {/* Purple envelope icon */}
              <img
                src="/images/email-icon-1.svg"
                alt="Email icon"
                className="w-[clamp(40px,5vw,60px)] h-auto"
              />
              <span>Email Finder Works</span>
            </h2>
          </div>

          {/* Paragraph Section */}
          <div className="w-full mb-8 sm:mb-12">
            <p className="text-center text-[#546779] font-medium leading-[44px] tracking-normal align-middle font-['Manrope',sans-serif] text-[clamp(18px,2.5vw,26px)] max-w-[1200px] mx-auto">
              Most companies follow unique email patterns. Our tool detects these formats automatically, helping you uncover accurate contact details, even for large organizations.
            </p>
          </div>

          {/* Flowchart Image Section */}
          <div className="w-full flex justify-center">
            <img
              src="/images/find-works-details.png"
              alt="How Our Email Finder Works - Process Flow"
              className="w-full max-w-[1362px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinderWorks
