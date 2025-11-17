import React from 'react'

const FindTheRightConnections = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/find-right-connection-bg-img.png)'
      }}
    >
      {/* Container with consistent padding */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[150px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-full lg:max-w-[1362px] mx-auto">
          {/* Main content block - responsive sizing based on reference images */}
          <div className="w-full max-w-[610px] sm:max-w-[700px] md:max-w-[764px] mx-auto">
            {/* Content wrapper with gap spacing */}
            <div className="flex flex-col gap-6 sm:gap-[20px] md:gap-[30px]">
              {/* Heading section - responsive based on fourth image (610x152) */}
              <div className="w-full mt-30">
                <h2 
                  className="text-center capitalize text-[#132436] font-semibold leading-[100%] tracking-[-2.2px] align-middle"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(32px, 5vw, 60px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <span className="inline-flex items-center justify-center gap-2!">
                    <span>Find The</span>
                    <span className="inline-flex items-center justify-center">
                      <img
                        src="/images/setting-orange3.svg"
                        alt=""
                        className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]"
                      />
                    </span>
                    <span>Right</span>
                  </span>
                  {/* <br /> */}
                  <span>Connections, Instantly</span>
                </h2>
              </div>

              {/* Paragraphs section - responsive based on third image (764x544) */}
              <div className="flex flex-col">
                <p 
                  className="text-center text-[#546779] font-medium leading-[44px] tracking-normal align-middle"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    lineHeight: 'clamp(32px, 5.5vw, 44px)'
                  }}
                >
                  Our Email Finder makes it simple to discover and verify professional email addresses in just a few seconds.
                </p>
                
                <p 
                  className="text-center text-[#546779] font-medium leading-[44px] tracking-normal align-middle"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    lineHeight: 'clamp(32px, 5.5vw, 44px)'
                  }}
                >
                  Whether you're building a sales pipeline, connecting with decision-makers, or expanding your network, our tool gives you accurate results instantly—so you can focus on making meaningful connections, not chasing invalid leads.
                </p>
                
                <p 
                  className="text-center text-[#546779] font-medium leading-[44px] tracking-normal align-middle"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    lineHeight: 'clamp(32px, 5.5vw, 44px)'
                  }}
                >
                  Grow smarter, connect faster, and unlock new opportunities with a reliable email lookup solution built for modern businesses.
                </p>
              </div>

              {/* CTA Button */}
              <div className="w-full flex justify-center">
                <button 
                  className="inline-flex items-center gap-2 capitalize transition-colors hover:opacity-90 text-[#EB3609] font-bold leading-[30px] tracking-normal align-middle"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'clamp(18px, 2.2vw, 22px)'
                  }}
                >
                  <span>Discover More</span>
                  <img
                    src="/images/right-orange-arrow.svg"
                    alt=""
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindTheRightConnections
