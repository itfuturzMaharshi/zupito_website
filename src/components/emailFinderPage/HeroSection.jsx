import React, { useState } from "react";

const HeroSection = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");

  return (
    <section
      className="relative w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-[90px] xl:py-[100px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/email-finder-bg-img.png)",
      }}
    >
      {/* Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px]">
        <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col items-center">
          {/* Headline Section */}
          <div className="w-full flex flex-col items-center gap-5 mb-[21px]">
            <h1 className="text-center capitalize flex flex-col gap-5 tracking-[-3.2px] align-middle font-bold text-[#132436] font-['Inter'] text-[clamp(36px,5vw,70px)] leading-[clamp(40px,5.5vw,70.4px)]">
              <div>
                <span className="text-[#EB3609]">Find</span>{" "}
                <span>Verified</span>
                <span className="inline-flex items-center mx-1 sm:mx-2">
                  <img
                    src="/images/Success.svg"
                    alt="Success icon"
                    className="shrink-0 w-[clamp(40px,5vw,60px)] h-auto"
                  />
                </span>
                <span>Professional</span>
              </div>
              <span>Emails In Seconds</span>
            </h1>
          </div>

          {/* Subheading Section */}
          <div className="w-full max-w-full mb-[20px]">
            <p className="text-center leading-[100%] tracking-normal align-middle font-semibold text-[#62768B] font-['Manrope'] text-[clamp(18px,2vw,26px)]">
              Reach decision-makers, build connections and grow your business
              with accurate email search
            </p>
          </div>

          {/* Form Container */}
          <div
            className="w-full max-w-full rounded-[24px] border border-solid border-[#ABE0E4] overflow-hidden mt-8 bg-cover bg-center bg-no-repeat min-h-[380px]"
            style={{
              backgroundImage: "url(/images/business-email-bg.png)",
            }}
          >
            <div className="w-full h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center">
              {/* Form Title */}
              <div className="w-full max-w-full mb-[50px]">
                <h2 className="text-center leading-[100%] tracking-normal align-middle font-medium text-[#3A4A5A] font-['Manrope'] text-[clamp(20px,2.5vw,30px)]">
                  Find{" "}
                  <span className="font-semibold text-[#132436]">10 Free</span>{" "}
                  business emails monthly
                </h2>
              </div>

              {/* Input Fields Container */}
              <div className="w-full max-w-full mb-[40px]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[10px]">
                  {/* Full Name Input */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full sm:w-[461px] h-[78px] rounded-[58px] border border-[#C1DDDA] bg-white px-[34px] py-[24px] text-[#132436] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ABE0E4] transition-all font-['Manrope'] text-[clamp(14px,1.5vw,18px)]"
                  />

                  {/* @ Icon Separator */}
                  <div className="shrink-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-[60px] bg-[#D9F5F1] flex items-center justify-center p-[10px]">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#132436]">
                      @
                    </span>
                  </div>

                  {/* Company Name Input */}
                  <input
                    type="text"
                    placeholder="Company Name or Website"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full sm:w-[461px] h-[78px] rounded-[58px] border border-[#C1DDDA] bg-white px-[34px] py-[24px] text-[#132436] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ABE0E4] transition-all font-['Manrope'] text-[clamp(14px,1.5vw,18px)]"
                  />
                </div>
              </div>

              {/* Find Email Button */}
              <div className="w-full max-w-full mb-[16px]">
                <button className="w-full sm:w-[630px] h-[80px] mx-auto rounded-[50px] bg-[#EB3609] flex items-center justify-center pt-4 pb-4 pl-6 pr-6 hover:bg-[#d32f08] transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="text-center leading-[100%] tracking-normal align-middle text-white font-semibold font-['Inter'] text-[clamp(18px,2vw,24px)]">
                    Find Email
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="w-full max-w-[927px] mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-[50px]">
            {/* Feature 1 */}
            <div className="flex items-center gap-[10px]">
              <img
                src="/images/check-orange.svg"
                alt="Check"
                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
              />
              <span className="leading-[100%] tracking-normal align-middle font-medium text-[#3A4A5A] font-['Manrope'] text-[clamp(18px,2vw,22px)]">
                Find Business Emails
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-[10px]">
              <img
                src="/images/check-orange.svg"
                alt="Check"
                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
              />
              <span className="leading-[100%] tracking-normal align-middle font-medium text-[#3A4A5A] font-['Manrope'] text-[clamp(18px,2vw,22px)]">
                Get 300 Credits Free
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-[10px]">
              <img
                src="/images/check-orange.svg"
                alt="Check"
                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
              />
              <span className="leading-[100%] tracking-normal align-middle font-medium text-[#3A4A5A] font-['Manrope'] text-[clamp(18px,2vw,22px)]">
                No credit card Required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
