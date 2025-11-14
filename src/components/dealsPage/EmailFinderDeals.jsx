import React, { useState } from 'react'

const EmailFinderDeals = () => {
  const [activeTab, setActiveTab] = useState('deals')

  const deals = [
    {
      package: '100K',
      originalPrice: 300,
      dealPrice: 225
    },
    {
      package: '250K',
      originalPrice: 625,
      dealPrice: 435
    },
    {
      package: '500K',
      originalPrice: 1000,
      dealPrice: 600
    }
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Main Container */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[200px] py-[80px] sm:py-[100px]">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {/* Icon with Percentage Symbol */}
          <div className="relative inline-flex items-center justify-center">
            {/* Shadow circle */}
            <div 
              className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full opacity-50"
              style={{ 
                background: '#EB3609',
                transform: 'translate(-8px, 8px)',
                zIndex: 0
              }}
            />
            {/* Main circle */}
            <div 
              className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center z-10"
              style={{ background: '#EB3609' }}
            >
              {/* Percentage symbol */}
              <span className="text-white text-[40px] sm:text-[50px] font-bold">%</span>
              {/* Flame-like decoration */}
              <div 
                className="absolute -top-2 -right-2 w-4 h-4"
                style={{
                  background: 'radial-gradient(circle, #FF6B35 0%, #EB3609 100%)',
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(-45deg)'
                }}
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center font-['Inter'] font-bold text-[clamp(32px,4vw,54px)] leading-[133%] tracking-normal text-[#1C4460]">
            Exclusive{' '}
            <span 
              style={{ 
                fontFamily: '"MADE TOMMY", sans-serif', 
                fontWeight: 900, 
                fontSize: 'clamp(40px,5vw,70px)', 
                lineHeight: '1', 
                textTransform: 'uppercase',
                display: 'inline-block',
                verticalAlign: 'baseline'
              }}
            >
              DEALS
            </span>
            {' '}to Boost Your Outreach
          </h1>
        </div>

        {/* Navigation Tabs Container */}
        <div className="w-full max-w- mx-auto mb-8 sm:mb-12">
          <div 
            className="w-full h-[88px] rounded-[130px] bg-white flex items-center justify-between px-6 sm:px-8 md:px-12"
            style={{ border: '1px solid #EDF6FB' }}
          >
            <button
              onClick={() => setActiveTab('deals')}
              className={`flex items-center gap-2 font-['Inter'] text-[clamp(20px,2vw,26px)] leading-[100%] tracking-normal capitalize transition-colors ${
                activeTab === 'deals' 
                  ? 'font-semibold text-[#1C4460]' 
                  : 'font-medium text-[#1C4460] opacity-70'
              }`}
            >
              <span>Email Finder</span>
              <span 
                style={{ 
                  fontFamily: '"MADE TOMMY", sans-serif', 
                  fontWeight: 900, 
                  fontSize: 'clamp(24px,2.5vw,30px)', 
                  lineHeight: '140%',
                  textTransform: 'uppercase'
                }}
                className={activeTab === 'deals' ? 'text-[#1C4460]' : 'text-[#1C4460] opacity-70'}
              >
                DEALS
              </span>
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`font-['Inter'] text-[clamp(20px,2vw,26px)] leading-[100%] tracking-normal capitalize transition-colors ${
                activeTab === 'pricing' 
                  ? 'font-semibold text-[#1C4460]' 
                  : 'font-medium text-[#1C4460] opacity-70'
              }`}
            >
              Features & Pricing
            </button>
          </div>
        </div>

        {/* Pricing Table Container */}
        <div 
          className="w-full max-w-full mx-auto rounded-[24px] p-6 sm:p-8 md:p-10 lg:p-[50px]"
          style={{ background: '#EDF6FB' }}
        >
          {/* Pricing Rows */}
          <div className="w-full flex flex-col">
            {deals.map((deal, index) => (
              <div
                key={index}
                className={`w-full rounded-[16px] p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center gap-[10px] sm:gap-4 md:gap-6 lg:gap-8 ${
                  index === 1 ? 'bg-white' : ''
                }`}
                style={{ minHeight: 'clamp(200px, 25vw, 266px)' }}
              >
                {/* Package Badge - Arrow Shape */}
                <div 
                  className="relative shrink-0 w-full sm:w-[164px]"
                  style={{ height: 'clamp(80px, 12vw, 103px)' }}
                >
                  {/* Arrow shape container */}
                  <div 
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ 
                      background: '#1E8BC2',
                      clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)'
                    }}
                  >
                    {/* Light blue border effect */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '4px 0 0 4px'
                      }}
                    />
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white w-full h-full px-2 sm:px-4">
                      <span 
                        className="font-['Nunito'] font-extrabold leading-[100%] tracking-normal capitalize"
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: 'clamp(40px, 8vw, 90px)'
                        }}
                      >
                        {deal.package}
                      </span>
                      <span 
                        className="font-['Inter'] font-semibold mt-1"
                        style={{ fontSize: 'clamp(14px, 2vw, 26px)' }}
                      >
                        Package
                      </span>
                    </div>
                  </div>
                </div>

                {/* Original Price Section */}
                <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-2 min-w-0 px-2 sm:px-0">
                  <span 
                    className="font-['Inter'] font-semibold leading-[100%] tracking-normal capitalize line-through"
                    style={{ 
                      color: '#1C4460', 
                      opacity: 0.5,
                      fontSize: 'clamp(24px, 3.5vw, 30px)'
                    }}
                  >
                    ${deal.originalPrice}
                  </span>
                  <span 
                    className="font-['Kanit'] font-normal leading-[100%] tracking-normal text-center sm:text-left"
                    style={{ 
                      color: '#133750', 
                      opacity: 0.5,
                      fontSize: 'clamp(18px, 2.5vw, 20px)'
                    }}
                  >
                    Price in USD
                  </span>
                </div>

                {/* Deal Price Section */}
                <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-2 min-w-0 px-2 sm:px-0">
                  <span 
                    style={{ 
                      fontFamily: '"MADE TOMMY", sans-serif', 
                      fontWeight: 700, 
                      lineHeight: '100%',
                      color: '#1C4460',
                      fontSize: 'clamp(32px, 5vw, 40px)'
                    }}
                  >
                    ${deal.dealPrice}
                  </span>
                  <span 
                    className="font-['Kanit'] font-normal leading-[100%] tracking-normal text-center sm:text-left"
                    style={{ 
                      color: '#133750',
                      fontSize: 'clamp(18px, 2.5vw, 20px)'
                    }}
                  >
                    Deal Price
                  </span>
                </div>

                {/* Claim Deal Button */}
                <div className="shrink-0 w-full sm:w-auto">
                  <button
                    className="w-full sm:w-[302px] h-[80px] rounded-[88px] px-5 sm:px-[20px] py-[10px] flex items-center justify-center transition-all hover:opacity-90 active:scale-95"
                    style={{ background: '#EB3609' }}
                  >
                    <span 
                      className="font-['Inter'] font-bold leading-[100%] tracking-normal text-center"
                      style={{ 
                        color: '#FFFFFF',
                        fontSize: 'clamp(18px, 2.5vw, 26px)'
                      }}
                    >
                      Claim Deal
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </section>
  )
}

export default EmailFinderDeals
