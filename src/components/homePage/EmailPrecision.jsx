import React from "react";

const EmailPrecision = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Outer container mirrors ActionsPage spacing rhythm */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[200px]! pt-10! lg:pt-16! xl:pt-20!">
        <div className="max-w-[full] mx-auto relative">
          {/* Main container - first image */}
          <div className="w-full max-w-[full] mx-auto h-auto lg:h-[229px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-8 lg:gap-0">
            {/* Left section - second image */}
            <div className="w-full lg:w-[550px] h-auto lg:h-[229px] flex flex-col gap-4 md:gap-5 lg:gap-6">
              {/* Plugin integration tag - third image */}
              <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-[#F6F6F6] px-4! py-3 w-auto lg:w-[207px] h-[42px] sm:h-[46px] md:h-[49px]">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-[#132436] font-bold text-[14px] leading-[18px] sm:text-[16px] sm:leading-[18px] md:text-[18px] md:leading-[18px] text-center capitalize">
                  Plugin integration
                </span>
              </div>

              {/* Headline section - fourth image */}
              <div className="w-full lg:w-[full] h-auto lg:h-[164px] flex flex-col gap-4 md:gap-5">
                {/* First line: Lead Generation */}
                <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <span className="text-[#132436] font-semibold text-[28px] leading-[34px] sm:text-[34px] sm:leading-[36px] md:text-[38px] md:leading-[40px] lg:text-[42px] lg:leading-[44px] xl:text-[48px] xl:leading-[50px] tracking-[-2.2px]">
                    Lead
                  </span>
                  {/* Rocket icon */}
                  <div className="relative inline-flex items-center justify-center">
                    <img
                      src="/images/setting-orange2.svg"
                      alt=""
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain"
                    />
                  </div>
                  <span className="text-[#3A4A5A] opacity-50 font-semibold text-[28px] leading-[34px] sm:text-[34px] sm:leading-[36px] md:text-[38px] md:leading-[40px] lg:text-[42px] lg:leading-[44px] xl:text-[48px] xl:leading-[50px] tracking-[-2.2px]">
                    Generation
                  </span>
                </div>

                {/* Second line: With Email Precision */}
                <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <span className="text-[#3A4A5A] opacity-50 font-semibold text-[28px] leading-[34px] sm:text-[34px] sm:leading-[36px] md:text-[38px] md:leading-[40px] lg:text-[42px] lg:leading-[44px] xl:text-[48px] xl:leading-[50px] tracking-[-2.2px]">
                    With
                  </span>
                  <span className="text-[#132436] font-semibold text-[28px] leading-[34px] sm:text-[34px] sm:leading-[36px] md:text-[38px] md:leading-[40px] lg:text-[42px] lg:leading-[44px] xl:text-[48px] xl:leading-[50px] tracking-[-2.2px]">
                    Email Precision
                  </span>
                  {/* Setting icon */}
                  <div className="relative inline-flex items-center justify-center">
                    <img
                      src="/images/rocket-purple.svg"
                      alt=""
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - paragraph */}
            <div className="w-full lg:w-auto lg:flex-1 lg:max-w-[600px]">
              <p className="text-[#546779] font-medium text-[16px] leading-[28px] sm:text-[18px] sm:leading-[32px] md:text-[20px] md:leading-[34px] lg:text-[18px] lg:leading-[42px] tracking-[0px] text-left">
                Your email marketing success depends upon valid and opt-in email
                database. An email verifier helps you maintain a valid list and
                email finder discovers the right business contacts to fill your
                sales pipeline with high-quality leads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailPrecision;
