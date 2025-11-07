import React from 'react'

const EmailFinder = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Outer container - follow ActionsPage spacing rhythm */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[200px]! pt-10! sm:pt-12! md:pt-14! lg:pt-16! xl:pt-20! pb-10! lg:pb-16! xl:pb-20!">
        <div className="max-w-[full] mx-auto">
          {/* First image: overall card container */}
          <div className="relative w-full bg-white  overflow-hidden">
            {/* Two column responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 md:gap-5 lg:gap-5">
              {/* LEFT: second + fourth + fifth images combined */}
              <div className="flex flex-col border-[#EEF0F3] border-solid border rounded-[24px]">
                {/* Second image area (feature chips panel) */}
                <div className="relative w-full bg-[#F5F5F5] rounded-t-[24px] pt-10! sm:pt-10! md:pt-[40px] px-4 sm:px-6 pb-6! ">
                  {/* Use provided image as-is (no manual chips) */}
                  <div className="w-full flex items-center justify-center">
                    <img
                      src="/images/container.png"
                      alt="CRM features"
                      className="w-full h-auto max-w-[800px] object-contain rounded-[16px]"
                    />
                  </div>
                </div>

                {/* Fourth image (bottom description panel) */}
                <div className="w-full bg-[#FCFCFD] rounded-b-[24px] pt-4! pr-4! pb-4! pl-4!">
                  <div className="max-w-[750px] mx-auto flex flex-col gap-5">
                    {/* Fifth image text */}
                    <p className="text-[#4A4E5C] font-normal text-[18px] leading-[30px] sm:text-[20px] sm:leading-[34px] md:text-[24px] md:leading-[40px]">
                      Beyond Opt-In mail list, email finder is a one of the most reliable sources of building a deliverable list. Zupitu helps you uncover the most accurate.
                    </p>

                    <button className="inline-flex items-center gap-2 text-[#EB3609] font-bold text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px] md:text-[22px] md:leading-[30px] capitalize">
                      <span>Explore Email Finder</span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT: sixth image background with list */}
              <div className="relative min-h-auto lg:min-h-auto p-4! sm:p-5! md:p-6! rounded-[24px] border-[#EEF0F3] border-solid border">
                <img
                  src="/images/7.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover rounded-[24px]"
                />

                <div className="relative z-1 w-full h-full flex flex-col items-center gap-5 sm:gap-6 md:gap-6 p-3 sm:p-4">
                  {/* Title */}
                  <h3 className="px-3 text-center text-[#132436] font-semibold text-[24px] leading-[38px] sm:text-[28px] sm:leading-[44px] md:text-[32px] md:leading-[42px] tracking-[-1px] capitalize">
                    List Building With Reliable <br /> Email Finder
                  </h3>

                  {/* Cards */}
                  <div className="w-full max-w-[700px] mx-auto flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    {[
                      'Check domain status',
                      'Verified business emails',
                      'Upload lists without template restriction',
                      'Find complex emails',
                    ].map((label) => (
                      <div
                        key={label}
                        className="w-full xs:w-full sm:w-full md:w-full lg:w-full h-[58px] md:h-[62px] lg:h-[64px] bg-white rounded-[10px] shadow-[0_8px_20px_0_#00000012] px-4! sm:px-5! md:px-6! flex items-center gap-4"
                      >
                        <span className="inline-flex items-center justify-center w-[38px] h-[38px] md:w-[48px] md:h-[42px] lg:w-[56px] lg:h-[46px] rounded-[10px] bg-[#F6F6F7]">
                          <img src="/images/Bullet.svg" alt="" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                        </span>
                        <span className="text-[#3A4A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] leading-[100%]">
                          {label}
                        </span>
                      </div>
                    ))}
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

export default EmailFinder
