import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const VerifiedEmail = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef} data-animate="fade-up" className="w-full relative">
      {/* Container with responsive padding */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[150px] py-12 sm:py-16 md:py-20 lg:py-24 h-full lg:max-h-[1216px] xl:max-h-[1116px]">
        <div className="max-w-full lg:max-w-[1362px] mx-auto">
          {/* Main content block */}
          <div className="w-full max-w-full lg:max-w-[1362px] mx-auto">
            {/* Content wrapper with gap spacing */}
            <div className="flex flex-col gap-4 sm:gap-16 md:gap-4 lg:gap-4 ">
              {/* Top section with heading and description */}
              <div className="w-full flex flex-col gap-[21px] items-center">
                {/* Heading Section */}
                <div className="w-full max-w-[1289px] flex flex-col gap-[21px]">
                  {/* Main Heading */}
                  <h2
                    data-animate-item
                    className="home-title text-[#132436] flex flex-col gap-5 text-center font-['Inter']"
                  >
                    <span className="inline-flex items-center flex-wrap justify-center gap-2">
                      <span>Verified Email</span>
                      {/* Orange Email icon */}
                      <span className="align-middle inline-flex items-center justify-center mx-2! relative -top-[2px]">
                        <img
                          src="/images/setting-orange2.svg"
                          alt=""
                          className="w-[28px] h-[28px] md:w-[60px] md:h-[60px]"
                        />
                      </span>
                      <span>Finder Results at</span>
                    </span>
                    <span>Unbeatable Value</span>
                  </h2>

                  {/* Description Paragraph */}
                  <p
                    data-animate-item
                    style={{ transitionDelay: "0.08s" }}
                    className="home-description text-[#546779] text-center font-['Manrope']"
                  >
                    Our simplest pricing plan with no hidden fees let's you
                    Pay-As-You-Go and scale with ease. Our single credit system
                    helps you buy Zupitu credits and use across all products
                    without any complexity.
                  </p>
                </div>
              </div>
              <div>
                {/* Decorative connector element - Green dot with line and branching structure */}
                <div className="relative w-full flex justify-center items-center">
                  <div className="relative flex flex-col items-center">
                    {/* Green dot */}

                    {/* Vertical line and branching structure using Group-bg.png */}
                    <div className="relative -mt-1 flex justify-center">
                      <img
                        src="/images/Group-bg.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none select-none w-[250px] sm:w-[80px] md:w-[500px] lg:w-[920px] h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Main Content Section with Light Blue-Gray Background */}
                <div className="relative w-full max-w-full mx-auto -top-17 md:-top-35 lg:-top-65">
                  <div
                    className="w-full max-w-full mx-auto rounded-[24px] border border-[#EEF0F3] p-6 sm:p-8 md:p-[32px] lg:p-[40px] bg-[#E8EDF0]"
                    style={{
                      boxShadow: "0px 14px 20px 0px #A8A8A833",
                    }}
                  >
                    <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                      {/* Left Section - Pricing and Features */}
                      <div className="w-full lg:flex-1 flex flex-col gap-6 sm:gap-[30px] h-full">
                        {/* Introductory Text */}
                        <p
                          data-animate-item
                          className="home-description text-[#4F556C] font-['Manrope']"
                        >
                          Whether you're running a one-off search or enriching
                          thousands of contacts, our flexible pricing ensures
                          you get validated, ready-to-use email addresses
                          without overspending.
                        </p>

                        {/* Feature Cards */}
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-[20px]">
                          {/* Card 1: 1 Email Finder Query = [X] Credits */}
                          <div
                            data-animate-item
                            className="rounded-[12px] bg-white p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0px_8px_20px_0px_#00000012]"
                          >
                            <div
                              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                              style={{
                                background:
                                  "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                              }}
                            >
                              <img
                                src="/images/check-green.svg"
                                alt="Check"
                                className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] shrink-0"
                              />
                            </div>
                            <p className="home-description text-[#334252] font-semibold capitalize">
                              1 Email Finder Query = [X] Credits
                            </p>
                          </div>

                          {/* Card 2: Credits Never Expire */}
                          <div
                            data-animate-item
                            style={{ transitionDelay: "0.05s" }}
                            className="rounded-[12px] bg-white p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0px_8px_20px_0px_#00000012]"
                          >
                            <div
                              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                              style={{
                                background:
                                  "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                              }}
                            >
                              <img
                                src="/images/check-green.svg"
                                alt="Check"
                                className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] shrink-0"
                              />
                            </div>
                            <p className="home-description text-[#334252] font-semibold capitalize">
                              Credits Never Expire.
                            </p>
                          </div>

                          {/* Card 3: 300 Free Credits */}
                          <div
                            data-animate-item
                            style={{ transitionDelay: "0.1s" }}
                            className="rounded-[12px] bg-white p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0px_8px_20px_0px_#00000012]"
                          >
                            <div
                              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                              style={{
                                background:
                                  "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                              }}
                            >
                              <img
                                src="/images/check-green.svg"
                                alt="Check"
                                className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] shrink-0"
                              />
                            </div>
                            <p className="home-description text-[#334252] font-semibold capitalize">
                              Every new account includes{" "}
                              <span className="text-[#0080FF] font-bold">
                                300 Free Credits
                              </span>{" "}
                              to get started
                            </p>
                          </div>

                          {/* Card 4: Add More Credits Anytime */}
                          <div
                            data-animate-item
                            style={{ transitionDelay: "0.15s" }}
                            className="rounded-[12px] bg-white p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0px_8px_20px_0px_#00000012]"
                          >
                            <div
                              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                              style={{
                                background:
                                  "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                              }}
                            >
                              <img
                                src="/images/check-green.svg"
                                alt="Check"
                                className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] shrink-0"
                              />
                            </div>
                            <p className="home-description text-[#334252] font-semibold capitalize">
                              Add more credits{" "}
                              <span className="text-[#FF00B3] font-bold">
                                Anytime
                              </span>
                              , instantly, as your prospecting needs grow
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Section - Email Finder Result with Avatar */}
                      <div
                        className="w-full lg:w-auto lg:shrink-0 flex items-center justify-center lg:justify-end"
                        data-animate-item
                        style={{ transitionDelay: "0.2s" }}
                      >
                        <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[450px]">
                          <img
                            src="/images/verified-email-details-img.png"
                            alt="Email Finder Result"
                            className="w-full h-auto object-contain"
                          />
                        </div>
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

export default VerifiedEmail;
