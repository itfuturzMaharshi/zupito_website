import React, { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const HeroSection = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full flex items-center justify-center py-12 sm:py-16 md:py-18 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/email-finder-bg-img.png)",
      }}
    >
      {/* Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px]">
        <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col items-center">
          {/* Headline Section */}
          <div className="w-full flex flex-col items-center gap-5 mb-[12px]">
            <h1
              data-animate-item
              className="home-title text-center text-[#132436] font-['Inter'] font-extrabold capitalize flex flex-col gap-1 tracking-tight"
            >
              <div>
                <span className="text-[#EB3609]">Find</span>{" "}
                <span>Verified</span>
                <span className="inline-flex items-center mx-1 sm:mx-2">
                  <img
                    src="/images/Success.svg"
                    alt="Success icon"
                    className="shrink-0 w-[40px] h-auto"
                  />
                </span>
                <span>Professional</span>
              </div>
              <span>Emails In Seconds</span>
            </h1>
          </div>

          {/* Subheading Section */}
          <div className="w-full max-w-full mb-[20px]">
            <p
              data-animate-item
              style={{ transitionDelay: "0.08s" }}
              className="home-description max-w-[610px] mx-auto text-center text-[#62768B] font-['Manrope']"
            >
              Reach decision-makers, build connections and grow your business
              with accurate email search
            </p>
          </div>

          {/* Form Container */}
          <div
            className="w-full max-w-full rounded-[24px] border border-solid border-[#ABE0E4] overflow-hidden mt-8 bg-cover bg-center bg-no-repeat min-h-[350px]"
            style={{
              backgroundImage: "url(/images/business-email-bg.png)",
            }}
          >
            <div className="w-full h-full px-6 pt-7 sm:px-8 md:px-10 lg:px-12 flex flex-col items-center">
              {/* Form Title */}
              <div className="w-full max-w-full mb-[40px]">
                <h2
                  data-animate-item
                  className="home-subtitle text-center text-[#3A4A5A] font-['Inter']"
                >
                  Find{" "}
                  <span className="text-[#132436]">10 Free</span>{" "}
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
                    className="w-full sm:w-[420px] h-[60px] rounded-[58px] border border-[#C1DDDA] bg-white px-[34px] py-[24px] text-[#132436] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ABE0E4] transition-all font-['Manrope'] home-description"
                  />

                  {/* @ Icon Separator */}
                  <div className="shrink-0 w-[60px] h-[60px] rounded-[60px] bg-[#D9F5F1] flex items-center justify-center p-[10px]">
                    <span className="text-[40px] font-bold text-[#132436]">
                      @
                    </span>
                  </div>

                  {/* Company Name Input */}
                  <input
                    type="text"
                    placeholder="Company Name or Website"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full sm:w-[420px] h-[60px] rounded-[58px] border border-[#C1DDDA] bg-white px-[34px] py-[24px] text-[#132436] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ABE0E4] transition-all font-['Manrope'] home-description"
                  />
                </div>
              </div>

              {/* Find Email Button */}
              <div className="w-full max-w-full">
                <button
                  data-hover="lift"
                  className="w-full sm:w-[580px] h-[60px] mx-auto rounded-[50px] bg-[#EB3609] flex items-center justify-center pt-4 pb-4 pl-6 pr-6 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <span className="home-subtitle text-[22px]! text-center font-['Inter'] text-white">
                    Find Email
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="w-full max-w-[927px] mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-[50px]">
            {/* Feature 1 */}
            <div className="flex items-center gap-[10px]" data-animate-item style={{ transitionDelay: "0.1s" }}>
              <img
                src="/images/check-orange.svg"
                alt="Check"
                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
              />
              <span className="home-description text-[#3A4A5A] font-medium font-['Manrope']">
                Find Business Emails
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-[10px]" data-animate-item style={{ transitionDelay: "0.15s" }}>
              <img
                src="/images/check-orange.svg"
                alt="Check"
                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
              />
              <span className="home-description text-[#3A4A5A] font-medium font-['Manrope']">
                Get 300 Credits Free
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-[10px]" data-animate-item style={{ transitionDelay: "0.2s" }}>
              <img
                src="/images/check-orange.svg"
                alt="Check"
                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
              />
              <span className="home-description text-[#3A4A5A] font-medium font-['Manrope']">
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
