import React from "react";

const EmailsVerified = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Outer container mirrors EmailPrecision spacing rhythm */}
      <div className="w-full h-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[150px]! pt-10! lg:pt-16! xl:pt-20!">
        <div className="max-w-[full] mx-auto relative">
          {/* Main container - first image: width 1362px, height 624px, gap 24px */}
          <div className="w-full max-w-[full] mx-auto max-h-auto lg:h-[full] grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 md:gap-8">
            {/* Left column - second image: width 555px, height 623px, gap 20px, border-radius 24px, padding 24px, background #F0EBFF */}
            <div className="w-full lg:w-[full] h-auto lg:h-full rounded-[24px] p-6! bg-[#F0EBFF] flex flex-col gap-5">
              {/* Title section */}
              <div className="w-full flex flex-col items-center justify-center text-center">
                <h2 className="font-semibold text-[24px] font-['Inter'] leading-[38px] sm:text-[28px] sm:leading-[42px] md:text-[32px] md:leading-[50px] tracking-[-1.2px]">
                  <span className="text-[#132436]">
                    Lead Generation <span className="text-[#9C93B4]">with</span>{" "}
                  </span>
                  <br />
                  <span className="text-[#132436]">
                    Advantage <span className="text-[#9C93B4]">Of</span>{" "}
                    Verified Emails
                  </span>
                </h2>
              </div>

              {/* Workflow diagram image */}
              <div className="w-auto  flex-1 flex items-center justify-center ">
                <img
                  src="/images/shape-automate.png"
                  alt="Email verification workflow"
                  className="w-full max-w-auto sm:max-w-auto  md:max-w-auto lg:max-w-auto rounded-[16px] object-contain"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-auto justify-between  flex flex-col gap-6 md:gap-14 lg:gap-16  bg-white rounded-[24px] border border-solid border-[var(--color-grey-92,#E9EAEB)] overflow-hidden">
              {/* Right side image - verified email content */}
              <div className="w-full flex items-center justify-center">
                <img
                  src="/images/verified-email-img.png"
                  alt="Verified email status"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Bottom section - width 781px, height 240px, padding 30px 32px, border-radius bottom 24px, background #F9F9F8 */}
              <div className="w-full max-w-[781px] mx-auto lg:mx-0 h-auto lg:h-[240px] rounded-b-[24px] bg-[#F9F9F8] p-6 flex flex-col">
                {/* Content wrapper - width 717px, height 180px, gap 30px */}
                <div className="w-full max-w-[717px] h-full flex flex-col gap-3 justify-between">
                  {/* Description text */}
                  <p className="text-[#4A4E5C] font-['Manrope'] font-normal text-[18px] leading-[30px] sm:text-[20px] sm:leading-[34px] md:text-[22px] md:leading-[38px] tracking-[0px]">
                    Zupitu ensures your emails always reach the right inbox.
                    High email deliverability is achieved through reduced bounce
                    rates, a healthy email list,
                  </p>

                  {/* Call to action */}
                  <div className="w-full">
                    <a
                      href="#"
                      className="inline-flex font-['Manrope'] items-center gap-2 text-[#EB3609] font-bold text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px] md:text-[22px] md:leading-[30px] tracking-[0px] capitalize hover:opacity-80 transition-opacity"
                    >
                      Explore Email Finder
                      <img
                        src="/images/right-orange-arrow.svg"
                        alt="Right arrow icon"
                        className="w-5 h-5 mt-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailsVerified;
