import React from 'react'

const EmailFinderWorks = () => {
  return (
    <section className="relative w-full bg-[#FFFDFD]" style={{ overflow: "visible", minHeight: "auto", paddingBottom: "0" }}>
      {/* Outer container spacing mirrors other homepage sections */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[150px]! py-12! lg:py-16! xl:py-20! overflow-visible" style={{ overflow: "visible", minHeight: "auto" }}>
        <div className="max-w-[full] lg:max-w-[1362px] mx-auto relative overflow-visible">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex font-['Manrope'] items-center justify-center gap-[6px] rounded-[50px] bg-[#FFE9F2] px-4 py-3 h-[49px] min-w-[192px] text-[16px] md:text-[18px] leading-[100%] font-bold text-[#132436]">
              <span className="w-3.5 h-3.5 rounded-full bg-[#7B8DFF]" />
              <span>Type Something</span>
            </div>

            <h2 className="mt-5! text-[#132436] font-['Inter'] font-semibold text-center">
              <span className="inline-block align-middle text-[34px] leading-[36px] sm:text-[42px] sm:leading-[44px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[50px] tracking-[-2.2px]">
                How Our
                <span className="align-middle inline-flex items-center justify-center mx-2! relative -top-[2px]">
                  <img
                    src="/images/setting-orange2.svg"
                    alt=""
                    className="w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
                  />
                </span>
                Email Finder Works
              </span>
            </h2>

            <p className="mt-5! mb-8! md:mb-12! lg:mb-5! text-[#546779] font-['Manrope']s font-medium text-[16px] leading-[28px] sm:text-[18px] sm:leading-[32px] md:text-[22px] md:leading-[38px] tracking-[0px] text-center max-w-full mx-auto">
              Most companies follow unique email patterns. Our tool detects these formats automatically, helping you uncover accurate contact details, even for large organizations.
            </p>
          </div>

          {/* Decorative connector graphic */}
          <div className="hidden lg:flex absolute justify-center w-full mt-3! md:mt-4! lg:mt-4!">
            <img src="/images/Group-bg.png" alt="" aria-hidden="true" className="pointer-events-none select-none w-[350px] sm:w-[100px] md:w-[700px] h-auto" />
          </div>

          {/* Three different cards with background image per card */}
          <div className="relative flex justify-center bottom-0 lg:-bottom-40 mb-8! md:mb-12! lg:mb-[140px]!">
            <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[26px] lg:gap-[29px] w-full lg:max-w-[1362px]  overflow-visible">
              {/* Card 1 */}
              <div
                className="relative w-full lg:w-full rounded-[24px] border border-[#EEF0F3] shadow-[0px_8px_20px_0px_#6868681A] p-3! md:p-4!  flex flex-col gap-[20px] bg-no-repeat bg-cover overflow-visible"
                style={{ backgroundImage: "url('/images/7.png')", height: "auto", minHeight: "auto", overflow: "visible" }}
              >
                <div className="w-full flex justify-center mt-[28px]!">
                  <div className="inline-flex items-center justify-center w-[64px] h-[40px] md:w-[79px] md:h-[52px] rounded-[6px]  bg-white shadow-[0_2px_6px_#00000012]">
                    <span className="text-[#132436] font-['Inter'] font-bold text-[18px] md:text-[22px] lg:text-[26px] tracking-[-0.32px]">01</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 bg-white rounded-[12px] justify-center shadow-[0px_12px_20px_-8px_#181D270D] px-4! py-3!">
                  <img src="/images/Tick.png" alt="checkmark" className="w-5 h-5" />
                  <span className="text-[#3A4A5A] font-medium text-[16px] font-['Manrope'] md:text-[18px] lg:text-[18px]">300 free credits on signup</span>
                </div>
                <div className="w-full rounded-[16px] bg-white p-[22px]! md:p-[26px]! lg:p-[30px]! pb-[50px]! md:pb-[54px]! lg:pb-[58px]! mb-0! overflow-visible" style={{ overflow: "visible", height: "auto" }}>
                  <h4 className="text-[#132436] font-bold text-[18px] font-['Inter'] md:text-[20px] lg:text-[21px] tracking-[-0.32px] mb-3!">Signup Credits</h4>
                  <p className="text-[#747C9A] font-['Manrope'] font-normal text-[16px] leading-[28px] md:text-[16px] md:leading-[28px] mb-0! " style={{ overflow: "visible" }}>
                    300 free credits at signup with month on month top-up to keep the wallet loaded with 300 credits monthly.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="relative w-full lg:w-full rounded-[24px] border border-[#EEF0F3] shadow-[0px_8px_20px_0px_#6868681A] p-3! md:p-4!  flex flex-col gap-[20px] bg-no-repeat bg-cover overflow-visible"
                style={{ backgroundImage: "url('/images/7.png')", height: "auto", minHeight: "auto", overflow: "visible" }}
              >
                <div className="w-full flex justify-center mt-[28px]!">
                  <div className="inline-flex items-center justify-center w-[64px] h-[40px] md:w-[79px] md:h-[52px] rounded-[6px] bg-white shadow-[0_2px_6px_#00000012]">
                    <span className="text-[#132436] font-bold text-[18px] font-['Inter'] md:text-[22px] lg:text-[26px] tracking-[-0.32px]">02</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 bg-white rounded-[12px] justify-center shadow-[0px_12px_20px_-8px_#181D270D] px-4! py-3!">
                  <img src="/images/Tick.png" alt="checkmark" className="w-5 h-5" />
                  <span className="text-[#3A4A5A] font-medium font-['Manrope'] text-[16px] md:text-[18px] lg:text-[18px]">Manage credits anytime</span>
                </div>
                <div className="w-full rounded-[16px] bg-white p-[22px]! md:p-[26px]! lg:p-[30px]! pb-[50px]! md:pb-[54px]! lg:pb-[58px]! mb-0! overflow-visible" style={{ overflow: "visible", height: "auto" }}>
                  <h4 className="text-[#132436] font-bold text-[18px] md:text-[20px] font-['Inter'] lg:text-[21px] tracking-[-0.32px] mb-3!">Access On The Go</h4>
                  <p className="text-[#747C9A] font-['Manrope'] font-normal text-[16px] leading-[28px] md:text-[16px] md:leading-[28px] mb-0! " style={{ overflow: "visible" }}>
                    Access the system on the go on mobile, laptop, and tablet. You can work, manage teams, credits.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="relative w-full lg:w-full rounded-[24px] border border-[#EEF0F3] shadow-[0px_8px_20px_0px_#6868681A] p-3! md:p-4!  flex flex-col gap-[20px] bg-no-repeat bg-cover overflow-visible"
                style={{ backgroundImage: "url('/images/7.png')", height: "auto", minHeight: "auto", overflow: "visible" }}
              >
                <div className="w-full flex justify-center mt-[28px]!">
                  <div className="inline-flex items-center justify-center w-[64px] h-[40px] md:w-[79px] md:h-[52px] rounded-[6px] bg-white shadow-[0_2px_6px_#00000012]">
                    <span className="text-[#132436] font-bold text-[18px] font-['Inter'] md:text-[22px] lg:text-[26px] tracking-[-0.32px]">03</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 bg-white rounded-[12px] justify-center shadow-[0px_12px_20px_-8px_#181D270D] px-4! py-3!">
                  <img src="/images/Tick.png" alt="checkmark" className="w-5 h-5" />
                  <span className="text-[#3A4A5A] font-medium text-[16px] font-['Manrope'] md:text-[18px] lg:text-[18px]">No hidden costs</span>
                </div>
                <div className="w-full rounded-[16px] bg-white p-[22px]! md:p-[26px]! lg:p-[30px]! pb-[50px]! md:pb-[54px]! lg:pb-[58px]! mb-0! overflow-visible" style={{ overflow: "visible", height: "auto" }}>
                  <h4 className="text-[#132436] font-bold text-[18px] font-['Inter'] md:text-[20px] lg:text-[21px] tracking-[-0.32px] mb-3!">Free Platform Features</h4>
                  <p className="text-[#747C9A] font-['Manrope'] font-normal text-[16px] leading-[28px] md:text-[16px] md:leading-[28px] mb-0! " style={{ overflow: "visible" }}>
                    Access advanced features like API integration & team management at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default EmailFinderWorks
