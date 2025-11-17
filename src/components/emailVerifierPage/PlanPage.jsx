import React from 'react'

const PlanPage = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFAED]">
      {/* Container aligned to NonTechFeature.jsx */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px] py-[80px] sm:py-[100px]">
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
          {/* Badge */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-[6px] rounded-[50px] bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-[0_3px_20px_0_rgba(0,0,0,0.06)]">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#4A90E2]"></div>
              <span className="font-['Inter'] text-[14px] sm:text-[16px] font-semibold capitalize leading-[18px] text-[#132436] align-middle">
                Flexible Pricing
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center font-['Inter'] font-semibold text-[clamp(28px,4.8vw,56px)] leading-[110%] md:leading-[100%] tracking-[-1.5px] md:tracking-[-2.2px] text-[#132436]">
            <span>Get Started.</span>
            <span className="inline-flex items-center justify-center">
              <img
                src="/images/email-icon-5.svg"
                alt="Email icon"
                className="h-[clamp(40px,5vw,70px)] w-[clamp(40px,5vw,70px)]"
              />
            </span>
            <span>Pick a Plan That</span>
            <br className="w-full" />
            <span>Suits Your Needs</span>
          </h2>

          {/* Sub text */}
          <p className="max-w-[1100px] text-center font-['Manrope'] text-[clamp(15px,2.2vw,22px)] font-medium leading-[clamp(26px,3.6vw,36px)] text-[#434D76]">
            Use a single credit for both email verification and discovery. No hidden fees, credits never expire, and volume discounts offer better value as you grow. Start with 200 free credits and see the impact instantly. Simple, cost-effective, and built for growth.
          </p>
        </div>

        {/* Pricing Panel */}
        <div className="relative mt-12 md:mt-14 w-full pt-2 sm:pt-24">
          <img
            src="/images/Group-bg.png"
            alt="Decorative background"
            className="pointer-events-none absolute -top-10 left-1/2 h-auto w-[140%] lg:max-w-[980px] -translate-x-1/2 opacity-90"
          />
          <div className="relative z-10 w-full rounded-[24px] bg-white shadow-[0_10px_39px_0_rgba(71,87,104,0.10)] p-4 sm:p-6 md:p-8 lg:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              <h3 className="font-['Inter'] text-[clamp(22px,3.5vw,32px)] font-semibold leading-[100%] tracking-[-1.2px] text-[#053155]">
                Pay-as-You-Go Credits
              </h3>

              {/* input row */}
              <div className="w-full">
                <div className="flex items-center w-full rounded-[60px] bg-white shadow-[0_3px_20px_0_rgba(0,0,0,0.06)] px-4 py-3">
                  <input
                    type="number"
                    min={0}
                    placeholder="Enter Your Credit"
                    className="flex-1 bg-transparent outline-none text-[#6B7280] placeholder:text-[#6B7280] text-[15px] sm:text-[16px] md:text-[18px]"
                  />
                  <button className="ml-3 rounded-[56px] bg-[#EB3609] text-white px-5 sm:px-6 h-[40px] sm:h-[42px] md:h-[46px] text-[15px] sm:text-[16px] md:text-[16px] lg:text-[18px] font-['Inter'] font-semibold whitespace-nowrap">
                    Calculate Price
                  </button>
                </div>
                <p className="mt-4 text-center font-['Manrope'] text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[#2A3138]">Our minimum purchase size is </span>
                  <span className="text-[#FF978A] whitespace-nowrap">2,000&nbsp;credits</span>
                </p>
              </div>

              {/* credit grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {[
                  '1K','2K','5K','10K','25K','50K','75K','100K','250K','500K','1M','5M'
                ].map((label) => (
                  <div
                    key={label}
                    className="h-[58px] sm:h-[64px] md:h-[67px] rounded-[6px] border border-[#EEF0F3] bg-white gap-1 px-4 sm:px-5 py-[16px] sm:py-[18px] flex items-center justify-center"
                  >
                    <span className="font-['Inter'] text-[16px] sm:text-[18px] md:text-[18px] font-semibold leading-[100%] text-[#FF7376]">
                      {label}
                    </span>
                    <span className="font-['Inter'] text-[12px] sm:text-[14px] md:text-[16px] text-[#3A4A5A] opacity-70">Credits</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - card */}
            <div className="w-full h-full flex justify-center items-center">
              <div className="mx-auto w-full max-w-[420px] rounded-[24px] bg-white shadow-[0_4px_20px_0_rgba(38,92,83,0.10)] p-5 sm:p-6 ">
                <div className="flex flex-col items-center gap-4 sm:gap-5">
                  {/* price */}
                  <div className="flex items-end gap-2">
                    <span className="font-['Inter'] text-[clamp(32px,7vw,64px)] font-semibold leading-[100%] tracking-[-1.2px] md:tracking-[-2.2px] text-[#EB3609]">
                      $5.5
                    </span>
                    <span className="pb-1 md:pb-2 font-['Inter'] text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#7C8792]">
                      USD
                    </span>
                  </div>

                  <p className="text-center font-['Manrope'] text-[16px] sm:text-[18px] md:text-[22px] font-medium leading-[28px] sm:leading-[32px] md:leading-[36px] text-[#515258]">
                    1000 credits will be added after purchase.
                  </p>

                  <button className="w-full rounded-[56px] bg-[#EB3609] text-white h-[46px] sm:h-[50px] md:h-[60px] px-5 font-['Inter'] text-[15px] sm:text-[16px] md:text-[18px] font-semibold">
                    Purchase
                  </button>

                  <p className="font-['Manrope'] text-[14px] sm:text-[16px] md:text-[18px] font-medium capitalize text-[#6E6D67]">
                    Credits never expire
                  </p>
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

export default PlanPage
