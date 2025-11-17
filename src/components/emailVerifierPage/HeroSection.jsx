import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5F5FF 0%, #EFEFFF 100%)",
      }}
    >
      {/* Main Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[150px] py-[80px] sm:py-[100px]">
        {/* Top Section - Heading and Description */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-[21px] mb-8 sm:mb-12 md:mb-16">
          {/* Main Heading */}
          <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
            <h1 className="text-center font-['Inter'] font-bold text-[clamp(32px,5vw,60px)] leading-[100%] tracking-[-3.2px] text-[#132436] capitalize flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span>Business & Personal</span>
              <span className="inline-flex items-center justify-center">
                <img
                  src="/images/Success.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-[56px] h-[56px]"
                />
              </span>
              <span>Email Validation</span>
            </h1>
            <h2 className="text-center font-['Inter'] font-bold text-[clamp(32px,5vw,60px)] leading-[100%] tracking-[-3.2px] text-[#EB3609] capitalize">
              High Speed Accuracy
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-4xl text-center font-['Manrope'] font-semibold text-[clamp(18px,2.5vw,26px)] leading-[44px] tracking-normal text-[#737191]">
            Experience the quality and speed of Artificial Intelligence in email
            verification and email finding. Try Zupitu without Sign-Up.
          </p>
        </div>

        {/* Email Verification Form Container with Profile Images */}
        <div className="relative w-full max-w-full mx-auto mb-8 sm:mb-12 md:mb-16">
          {/* Profile Images with Connecting Lines */}
          {/* Top Left Profile */}
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 md:-top-16 md:-left-16 lg:top-0 lg:-left-20 z-10 hidden md:block">
            <div className="relative">
              <img
                src="/images/hero-email-verifier-animation-1.png"
                alt="User profile"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 rounded-full object-cover"
              />

            </div>
          </div>

          {/* Bottom Left Profile */}
          <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 md:-bottom-16 md:-left-16 lg:bottom-20 lg:-left-25 z-10 hidden md:block">
            <div className="relative">
              <img
                src="/images/hero-email-verifier-animation-2.png"
                alt="User profile"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
              />

            </div>
          </div>

          {/* Top Right Profile */}
          <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16 lg:top-20 lg:-right-20 z-10 hidden md:block">
            <div className="relative">
              <img
                src="/images/hero-email-verifier-animation-3.png"
                alt="User profile"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Right Profile */}
          <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 md:-bottom-16 md:-right-16 lg:-bottom-20 lg:-right-20 z-10 hidden md:block">
            <div className="relative">
              <img
                src="/images/hero-email-verifier-animation-4.png"
                alt="User profile"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
              />

            </div>
          </div>

          {/* Form Container */}
          <div
            className="relative w-full max-w-[858px] mx-auto rounded-[24px] p-6 sm:p-8 md:py-[60px] md:px-[90px] z-20"
            style={{
              background: "linear-gradient(360deg, #D8F7FF 0%, #C9C8FF 100%)",
            }}
          >
            {/* Form Content */}
            <div className="w-full max-w-[858px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-[40px]">
              {/* Title */}
              <div className="text-center">
                <p className="font-['Manrope'] font-semibold text-[clamp(20px,2.5vw,28px)] leading-[100%] tracking-normal capitalize text-[#313C58]">
                  Verify{" "}
                  <span className="font-bold text-[#B53F90]">10 Free</span>{" "}
                  business & personal emails monthly
                </p>
              </div>

              {/* Input and Button Container - Single White Pill Container */}
              <div className="w-full rounded-[80px] bg-white p-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  placeholder="Enter an email address..."
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-[80px] border-none outline-none font-['Manrope'] text-base sm:text-lg text-[#3A4A5A] placeholder:text-[#9CA3AF] bg-transparent"
                />
                <button className="w-full sm:w-[220px] sm:shrink-0 rounded-[50px] bg-[#EB3609] pt-4 pb-4 pl-[70px] pr-[70px] font-['Inter'] font-semibold text-[clamp(18px,2vw,24px)] leading-[100%] tracking-normal text-white text-center hover:opacity-90 transition-opacity">
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="w-full max-w-full mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-[40px] flex-wrap mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-[10px]">
            <div className="w-6 h-6 rounded-full bg-[#EB3609] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-['Manrope'] font-medium text-[clamp(18px,2vw,23px)] leading-[100%] text-[#3A4A5A]">
              Verify Business Emails
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-6 h-6 rounded-full bg-[#EB3609] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-['Manrope'] font-medium text-[clamp(18px,2vw,23px)] leading-[100%] text-[#3A4A5A]">
              Get 300 Credits Free
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-6 h-6 rounded-full bg-[#EB3609] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-['Manrope'] font-medium text-[clamp(18px,2vw,23px)] leading-[100%] text-[#3A4A5A]">
              No credit card Required
            </span>
          </div>
        </div>

        {/* Trust Section with Background Image */}
        <div
          className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-verifier-bg-img-2.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[58px] py-12 sm:py-16 md:py-20">
            {/* Trust Title */}
            <div className="w-full max-w-full mx-auto mb-8 flex flex-col items-center gap-4">
              <h2 className="text-center font-['Inter'] font-semibold text-[clamp(28px,3.5vw,40px)] leading-[100%] tracking-[-1.5px] text-[#132436] capitalize">
                Trusted by new generation marketers across
              </h2>
              <h2 className="text-center font-['Inter'] font-semibold text-[clamp(28px,3.5vw,40px)] leading-[100%] tracking-[-1.5px] text-[#132436] capitalize flex items-center gap-2">
                <span>different</span>
                <img
                  src="/images/setting-orange-1.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-[56px] h-[56px]"
                />
                <span>industries</span>
              </h2>
            </div>

            {/* Feature Cards Row 1 */}
            <div className="relative w-full mb-8 sm:mb-12 pt-10 md:pt-12">
              <img
                src="/images/Group-bg.png"
                alt="Connector decoration"
                className="pointer-events-none absolute top-0 left-1/2 hidden md:block -translate-x-1/2 w-[420px] lg:w-[560px]"
              />
              <div className="relative z-10 mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[30px]">
                {/* 98% Accuracy Card */}
                <div className="rounded-[24px] border-2 border-[#EEF0F3] bg-[#F3F5FF] p-[30px]">
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <div className="w-full  flex items-center justify-center">
                      <img
                        src="/images/accuracy-img.png"
                        alt="98% Accuracy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-5">
                      <h3 className="font-['Inter'] font-bold text-[clamp(22px,2.5vw,24px)] leading-[100%] tracking-[-0.32px] text-[#132436] capitalize">
                        98% Accuracy
                      </h3>
                      <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,20px)] leading-[32px] text-[#5F6A97]">
                        Try to free and witness the high accuracy email
                        validation results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* High Speed Card */}
                <div className="rounded-[24px] border-2 border-[#EEF0F3] bg-[#F3F5FF] p-[30px]">
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <div className="w-full flex items-center justify-center">
                      <img
                        src="/images/high-speed-img.png"
                        alt="High Speed"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-5">
                      <h3 className="font-['Inter'] font-bold text-[clamp(22px,2.5vw,24px)] leading-[100%] tracking-[-0.32px] text-[#132436] capitalize">
                        High Speed
                      </h3>
                      <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,20px)] leading-[32px] text-[#5F6A97]">
                        Full coverage for all our precision services.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Affordable Price Card */}
                <div className="rounded-[24px] border-2 border-[#EEF0F3] bg-[#F3F5FF] p-[30px]">
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <div className="w-full  flex items-center justify-center">
                      <img
                        src="/images/affordable-price-img.png"
                        alt="Affordable Price"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-5">
                      <h3 className="font-['Inter'] font-bold text-[clamp(22px,2.5vw,24px)] leading-[100%] tracking-[-0.32px] text-[#132436] capitalize">
                        Affordable Price
                      </h3>
                      <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,20px)] leading-[32px] text-[#5F6A97]">
                        Our cheapest Email Validation tool with
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Reliability and High Accuracy */}
            <div className="w-full rounded-[24px] bg-[#F3F5FF] p-6 sm:p-8 md:p-[30px]">
              <div className="w-full max-w-full mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[30px]">
                  {/* Reliability Role Section */}
                  <div className=" flex flex-col gap-4 sm:gap-5 justify-center">
                    <h3 className="font-['Inter'] font-bold text-[clamp(22px,2.5vw,26px)] leading-[100%] tracking-[-0.32px] text-[#132436] capitalize">
                      Reliability Role
                    </h3>
                    <p className="font-['Manrope'] font-normal text-[clamp(18px,2vw,24px)] leading-[40px] text-[#5F6A97]">
                      Try to free and witness the high accuracy email validation
                      results
                    </p>
                  </div>

                  {/* High Accuracy Email Validation Section */}
                  <div className="w-full h-full flex items-center justify-center min-h-[260px]">
                    <img
                      src="/images/high-accuracy-email-validation-img.png"
                      alt="High Accuracy Email Validation"
                      className="w-full h-full object-contain"
                    />
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

export default HeroSection;
