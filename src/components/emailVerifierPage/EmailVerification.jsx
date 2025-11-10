import React from "react";

const EmailVerification = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #FAFDFF 0%, #EFEFFF 100%)",
      }}
    >
      {/* Container with 200px left/right padding on large screens */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[200px] 2xl:px-[200px]">
        <div className="w-full max-w-full mx-auto flex flex-col items-center">
          {/* Top Section - Badge and Heading */}
          <div className="w-full flex flex-col items-center gap-[21px] mb-[21px]">
            {/* Grow Your Business Badge */}
            <div className="flex items-center justify-center">
              <div
                className="flex items-center gap-[6px] px-4 py-3 rounded-[50px] bg-white"
                style={{
                  paddingTop: "12px",
                  paddingRight: "16px",
                  paddingBottom: "12px",
                  paddingLeft: "16px",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[#4A90E2] shrink-0"></div>
                <span
                  className="font-['Inter'] font-semibold text-base leading-[18px] tracking-normal capitalize text-[#132436] align-middle"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "18px",
                    letterSpacing: "0px",
                    textTransform: "capitalize",
                    color: "#132436",
                  }}
                >
                  Grow Your Business
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="w-full flex flex-col items-center gap-[21px]">
              <h1
                className="text-center flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 5vw, 60px)",
                  lineHeight: "100%",
                  letterSpacing: "-2.2px",
                  color: "#132436",
                }}
              >
                <span>Email</span>
                <span className="inline-flex items-center justify-center w-[clamp(50px, 6vw, 70px)] h-[clamp(50px, 6vw, 70px)] rounded-full bg-[#EB3609] shrink-0 shadow-lg">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="2.5" fill="white" />
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.5"
                    />
                  </svg>
                </span>
                <span>Verification Solution for</span>
                <span className="text-[#3A4A5A]">Both</span>
              </h1>
              <h1
                className="text-center flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 5vw, 60px)",
                  lineHeight: "100%",
                  letterSpacing: "-2.2px",
                  color: "#132436",
                }}
              >
                <span>B2B & B2C</span>
                <span className="inline-flex items-center justify-center w-[clamp(50px, 6vw, 70px)] h-[clamp(50px, 6vw, 70px)] rounded-lg bg-[#8B7FD9] shrink-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M3 7l9 6 9-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Businesses</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-center max-w-4xl mx-auto"
              style={{
                fontFamily: "Manrope",
                fontWeight: 500,
                fontSize: "clamp(18px, 2.5vw, 26px)",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#546779",
                marginTop: "21px",
              }}
            >
              Get your list validated without worrying about business or
              personal emails.
            </p>
          </div>

          {/* Main Content Section - Image and Card */}
          <div className="w-full flex flex-col gap-8 lg:gap-12 mt-12 lg:mt-16 lg:flex-row lg:items-stretch">
            {/* Left Section - B2B-B2C Image */}
            <div className="w-full h-full lg:flex-1 flex justify-center">
              <div
                className="w-full h-full  rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0px 4px 20px 0px #00000026",
                  maxWidth: "100%",
                  minHeight: "100%",
                }}
              >
                <img
                  src="/images/B2B-B2C-img.png"
                  alt="B2B B2C Email Verification"
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
            </div>

            {/* Right Section - White Card with Text */}
            <div className="w-full lg:flex-1 flex">
              <div
                className="w-full h-full bg-white rounded-[24px] flex flex-col"
                style={{
                  boxShadow: "0px 15px 60px 0px #5757571F",
                  paddingTop: "26px",
                  paddingLeft: "27px",
                  paddingRight: "27px",
                  paddingBottom: "27px",
                }}
              >
                <div className="flex flex-col" style={{ gap: "40px" }}>
                  <p
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 600,
                      fontSize: "clamp(18px, 2vw, 24px)",
                      lineHeight: "42px",
                      letterSpacing: "0px",
                      color: "#7F878E",
                    }}
                  >
                    Our System lets you validate business emails list, personal
                    emails list and a mix of both. Choose your preference of
                    emails to validate and let Zupitu do the rest for you. <br />
                    Pay only for what you opted for with no extra charges for
                    different email list types. Experience our accurate, high
                    speed and equal pricing validation tool with ease of use.
                  </p>

                  <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      lineHeight: "30px",
                      letterSpacing: "0px",
                      textTransform: "capitalize",
                      color: "#EB3609",
                    }}
                  >
                    <span>Checkout Our Deals</span>
                    <span className="text-[#EB3609]">→</span>
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

export default EmailVerification;
