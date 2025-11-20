import React, { useState } from "react";

const DummyAction = () => {
  const [email, setEmail] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    // Handle email verification logic here
    console.log("Verifying email:", email);
  };

  return (
    <section className="relative w-full" style={{ background: "#FAFBFF" }}>
      {/* Main Container */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-full mx-auto">
          {/* Content Container */}
          <div
            className="w-full"
            style={{
              maxWidth: "1140px",
              margin: "0 auto",
            }}
          >
            {/* Top Section: Plugin Integration Label, Heading, and Description */}
            <div className="w-full mb-8 sm:mb-10 md:mb-12 lg:mb-[15.75px]">
              <div className="flex flex-col items-center gap-[15.75px]">
                {/* Plugin Integration Label */}
                <div className="flex items-center justify-center">
                  <span
                    className="inline-flex items-center gap-[4.5px] rounded-[37.5px] font-['Inter'] font-semibold text-[12px] leading-[13.5px] capitalize text-[#132436] bg-white px-3 py-[9px] min-w-[140.5px] h-[32px]"
                  >
                    <span className="w-[9px] h-[9px] rounded-full bg-[#659DF8]" />
                    Plugin Integration
                  </span>
                </div>

                {/* Main Heading: See Zupitu In Action */}
                <h2
                  className="font-['Inter'] font-semibold text-center"
                  style={{
                    fontSize: "clamp(28px, 4vw, 45px)",
                    lineHeight: "37.5px",
                    letterSpacing: "-1.65px",
                    color: "#132436",
                  }}
                >
                  See{" "}
                  <span className="align-middle inline-flex items-center justify-center  relative top-[-2px]">
                    <img
                      src="/images/setting-orange.svg"
                      alt=""
                      className="w-[28px] h-[28px] md:w-[60px] md:h-[60px]"
                    />
                  </span>{" "}
                  Zupitu In Action
                </h2>

                {/* Description Text */}
                <p
                  className="font-['Manrope'] font-medium text-center max-w-full"
                  style={{
                    fontSize: "clamp(16px, 2vw, 19.5px)",
                    lineHeight: "34.5px",
                    letterSpacing: "0px",
                    color: "#546779",
                  }}
                >
                  Experience the quality and speed of Artificial Intelligence in
                  email verification and email finding. Try Zupitu without
                  Sign-Up. We welcome FREE trials and offer 10 Credits daily
                  forever.
                </p>
              </div>
            </div>

            {/* Main Card Container: Two-column layout */}
            <div className="relative mt-12 sm:mt-16">
              <div
                className="pointer-events-none select-none hidden sm:block absolute -top-30 left-[-20px] sm:left-[-60px] md:left-[-100px] lg:left-[-140px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[260px] opacity-80 z-0"
                aria-hidden="true"
              >
                <img
                  src="/images/action-bg-animation.png"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-[85px] w-[42px] sm:w-[54px] md:w-[62px] lg:w-[500px] z-10 mt-8"
                aria-hidden="true"
              >
                <img
                  src="/images/Group-bg.png"
                  alt="Connector illustration"
                  className="w-full h-auto select-none pointer-events-none"
                />
              </div>
              <div
                className="relative w-full rounded-[15px] bg-white z-10 lg:min-h-[429px]"
                style={{
                  boxShadow: "0px 7.5px 22.5px 0px #0000001A",
                }}
              >
                <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                  {/* Left Section: Comprehensive Email Validation Info */}
                  <div className="w-full lg:w-auto lg:flex-1 flex flex-col gap-[30.75px]">
                    {/* Top Container with Button */}
                    <div className="flex flex-col gap-[15px]">
                      {/* Let's get in touch Button */}
                      <div className="flex items-start">
                        <button
                          className="inline-flex items-center gap-[4.5px] rounded-[37.5px] bg-[#F0F3FF] px-3 py-[9px] min-w-[150.5px] h-[34.5px]"
                          style={{
                            width: "fit-content",
                          }}
                        >
                          <span className="w-[9px] h-[9px] rounded-full bg-[#659DF8]" />
                          <span
                            className="font-['Manrope'] font-bold text-center"
                            style={{
                              fontSize: "13.5px",
                              lineHeight: "100%",
                              letterSpacing: "0px",
                              color: "#132436",
                            }}
                          >
                            Let's get in touch
                          </span>
                        </button>
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-col gap-[30px]">
                        {/* Heading and Description Container */}
                        <div className="flex flex-col gap-[10.5px] text-center md:text-left">
                          {/* Comprehensive Personal & Business Email Validation Heading */}
                          <h3
                            className="font-['Inter'] font-semibold text-[#132436] text-center md:text-left"
                            style={{
                              fontSize: "clamp(24px, 3.5vw, 30px)",
                              lineHeight: "37.5px",
                              letterSpacing: "-1.13px",
                            }}
                          >
                            <span className="block">Comprehensive Personal &</span>
                            <span className="inline-flex flex-wrap items-center gap-2">
                              <span>Business</span>
                              <span className="align-middle inline-flex items-center justify-center relative -top-px">
                                <img
                                  src="/images/setting-orange-1.svg"
                                  alt=""
                                  className="w-[32px] h-[32px] sm:w-[46px] sm:h-[46px]"
                                />
                              </span>
                              <span>Email Validation</span>
                            </span>
                          </h3>

                          {/* Description Text */}
                          <p
                            className="font-['Manrope'] font-normal"
                            style={{
                              fontSize: "clamp(16px, 1.8vw, 18px)",
                              lineHeight: "33px",
                              letterSpacing: "0px",
                              color: "#76838F",
                            }}
                          >
                            Verify up to 10 emails instantly without sign-up
                            just enter an email, click Verify, & repeat. Explore
                            bulk validation, verification history, all platform
                            features with unlimited access and no credits
                            required.
                          </p>
                        </div>

                        {/* Checkout our Deals Link */}
                        <div className="flex items-start">
                          <a
                            href="#"
                            className="font-['Manrope'] font-bold inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                            style={{
                              fontSize: "16.5px",
                              lineHeight: "22.5px",
                              letterSpacing: "0px",
                              color: "#EB3609",
                              textTransform: "capitalize",
                            }}
                          >
                            Checkout our Deals
                            <img
                              src="/images/right-orange-arrow.svg"
                              alt="Right arrow"
                              className="w-3 h-3"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Divider - Hidden on mobile, visible on desktop */}
                  <div
                    className="hidden lg:block self-stretch"
                    style={{
                      width: "0.75px",
                      minHeight: "369px",
                      background: "#132436",
                      opacity: 0.1,
                    }}
                  />

                  {/* Right Section: Email Verification Form */}
                  <div className="w-full lg:w-auto lg:flex-1 flex flex-col items-center lg:items-start gap-[22.5px]">
                    <div className="w-full max-w-[420px] rounded-[18px] bg-[#132436] flex flex-col items-center gap-[15px] p-6 sm:p-8 lg:p-[30px] mx-auto lg:mx-0">
                      {/* Icon */}
                      <div className="flex items-center justify-center mb-2">
                        <div className="relative w-16 h-16">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-sm">
                            <img
                              src="/images/email-icon.svg"
                              alt="Email icon"
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Title and Description Container */}
                      <div
                        className="w-full flex flex-col items-center text-center"
                        style={{
                          gap: "15px",
                        }}
                      >
                        {/* Verify Personal & Business Emails Instantly Heading */}
                        <h4
                          className="font-['Inter'] font-semibold text-white"
                          style={{
                            fontSize: "clamp(20px, 2.5vw, 24px)",
                            lineHeight: "35.25px",
                            letterSpacing: "-0.42px",
                            color: "#FFFFFF",
                          }}
                        >
                          Verify Personal & Business <br /> Emails Instantly
                        </h4>

                        {/* Description Text */}
                        <p
                          className="font-['Manrope'] pb-2 font-medium text-white"
                          style={{
                            fontSize: "clamp(16px, 1.8vw, 18px)",
                            lineHeight: "27.75px",
                            letterSpacing: "0px",
                            color: "#FFFFFF",
                            opacity: 0.7,
                          }}
                        >
                          Check up to 10 emails for free – no sign-up required.
                        </p>
                      </div>

                      {/* Email Input and Verify Button - Combined rounded container */}
                      <form
                        onSubmit={handleVerify}
                        className="w-full rounded-[82.5px] bg-white flex items-center gap-[4.5px] pl-4 sm:pl-[23.25px] pr-[4.5px] py-[4.5px] overflow-hidden"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address..."
                          className="flex-1 min-w-0 outline-none border-none bg-transparent font-['Manrope'] text-[#132436] placeholder:text-gray-400"
                          style={{
                            fontSize: "clamp(14px, 1.5vw, 16px)",
                          }}
                        />
                        <button
                          type="submit"
                          className="rounded-[37.5px] bg-[#EB3609] text-white font-['Manrope'] font-semibold flex items-center justify-center hover:bg-[#FF6B35] transition-colors shrink-0 px-[20px] sm:px-[24.75px] py-[13.5px]"
                          style={{
                            minWidth: "123.5px",
                            height: "47px",
                            fontSize: "15px",
                            lineHeight: "100%",
                            letterSpacing: "-0.24px",
                          }}
                        >
                          <span className="sm:hidden">Verify</span>
                          <span className="hidden sm:inline">Verify Now</span>
                        </button>
                      </form>
                    </div>
                  </div>
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

export default DummyAction;
