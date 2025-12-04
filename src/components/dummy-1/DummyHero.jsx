import React from "react";

const DummyHero = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-[100px] pt-8 md:pt-12 lg:pt-0 pb-8 md:pb-12 lg:pb-16">
        <div className="w-full max-w-full mx-auto">
          {/* Navigation Container */}
          <div
            className="w-full"
            style={{
              maxWidth: "1140px",
              margin: "0 auto",
            }}
          >
            {/* Main Container: Two-column layout - Image starts below header, text centered to image */}
            <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-12 xl:gap-16 lg:items-stretch">
              {/* Left Section: Text Content - Vertically centered relative to image */}
              <div className="w-full lg:w-auto lg:flex-1 flex flex-col lg:mt-20 lg:justify-center">
                {/* Heading: AI Tool To Connect Emails Instantly */}
                <h1
                  className="font-['Inter'] flex flex-col gap-2 font-bold text-[#132436] leading-[52.8px] tracking-[-2.4px] capitalize mb-[46.5px] sm:mb-[46.5px]"
                  style={{
                    fontSize: "clamp(32px, 5vw, 58.5px)",
                    lineHeight: "52.8px",
                    letterSpacing: "-2.4px",
                  }}
                >
                  <span className="block">
                    <span>AI Tool To </span>
                    <span className="text-[#EB3609]">Connect</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span>Emails</span>
                    <span className="inline-flex items-center justify-center">
                      <img
                        src="/images/container.svg"
                        alt=""
                        className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[64px] md:h-[64px]"
                      />
                    </span>
                    <span>Instantly</span>
                  </span>
                </h1>

                {/* Description Paragraph */}
                <p
                  className="font-['Manrope'] font-semibold text-[#63778B] mb-[45px] sm:mb-[45px]"
                  style={{
                    fontSize: "clamp(16px, 2vw, 19.5px)",
                    lineHeight: "34.5px",
                    letterSpacing: "0px",
                  }}
                >
                  Simplify outreach with Zupitu's AI Email Verifier & Finder -
                  validate emails, find business contacts, and boost
                  deliverability.
                </p>

                {/* CTA Buttons Container */}
                <div className="flex flex-wrap items-center gap-[15px] mb-[25.5px] sm:mb-[46.5px]">
                  {/* Checkout Deals Button */}
                  <button
                    className="rounded-[37.5px] bg-[#EB3609] text-white font-['Inter'] font-semibold flex items-center justify-center gap-[7.5px] px-[18px] py-[12px] hover:bg-[#FF6B35] transition-colors"
                    style={{
                      fontSize: "15px",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                      minWidth: "176.5px",
                      height: "47px",
                    }}
                  >
                    Checkout Deals
                    <img
                      src="/images/right-arrow.svg"
                      alt="Right arrow"
                      className="w-4 h-4"
                    />
                  </button>

                  {/* Claim 300 free credits Link */}
                  <button
                    className="text-[#3A4A5A] font-['Manrope'] font-semibold flex items-center gap-[7.5px] hover:text-[#EB3609] transition-colors"
                    style={{
                      fontSize: "18px",
                      lineHeight: "22.5px",
                      letterSpacing: "0px",
                    }}
                  >
                    Claim 300 free credits
                    <img
                      src="/images/right-arrow-dark.svg"
                      alt="Right arrow"
                      className="w-4 h-4"
                    />
                  </button>
                </div>

                {/* Divider Line */}
                <div
                  className="w-full max-w-[423.75px] h-[0.75px] mb-[22.5px] sm:mb-[46.5px] opacity-20"
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #666666 100%)",
                  }}
                />

                {/* Feature Badges Container */}
                <div className="flex flex-wrap items-center gap-[7.5px]">
                  {/* Flexible solution Badge */}
                  <div
                    className="rounded-[37.5px] bg-[#FCFCFD] border border-[#EEF0F3] flex items-center gap-[7.5px] px-[12px] py-[9px]"
                    style={{
                      height: "41px",
                    }}
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5">
                      <img
                        src="/images/check-orange.svg"
                        alt="Checkmark"
                        className="w-full h-full"
                      />
                    </span>
                    <span
                      className="font-['Manrope'] font-medium text-[#3A4A5A] text-center"
                      style={{
                        fontSize: "16.5px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                      }}
                    >
                      Flexible solution
                    </span>
                  </div>

                  {/* No credit card required Badge */}
                  <div
                    className="rounded-[37.5px] bg-[#FCFCFD] border border-[#EEF0F3] flex items-center gap-[7.5px] px-[12px] py-[9px]"
                    style={{
                      height: "41px",
                    }}
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5">
                      <img
                        src="/images/check-orange.svg"
                        alt="Checkmark"
                        className="w-full h-full"
                      />
                    </span>
                    <span
                      className="font-['Manrope'] font-medium text-[#3A4A5A] text-center"
                      style={{
                        fontSize: "16.5px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                      }}
                    >
                      No credit card required
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section: Image - Starts right below header on desktop */}
              <div className="w-full lg:w-auto lg:flex-1 flex">
                <div className="relative w-full max-w-[400.75px]">
                  <img
                    src="/images/hero_img.png"
                    alt="Zupito AI Email Verifier & Finder"
                    className="w-full h-auto object-contain min-w-[300.75px] md:min-w-[600.75px]"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DummyHero;
