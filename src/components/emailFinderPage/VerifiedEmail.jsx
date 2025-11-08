import React from "react";

const VerifiedEmail = () => {
  return (
    <section className="w-full">
      {/* Container with responsive padding */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-full mx-auto">
          {/* Main content block */}
          <div className="w-full max-w-full mx-auto">
            {/* Content wrapper with gap spacing */}
            <div className="flex flex-col gap-[120px]">
              {/* Top section with heading and description */}
              <div className="w-full flex flex-col gap-[21px] items-center">
                {/* Heading Section */}
                <div className="w-full max-w-[1289px] flex flex-col gap-[21px]">
                  {/* Main Heading */}
                  <h2
                    className="text-[#132436] flex flex-col gap-5 font-semibold leading-[100%] tracking-[-2.2px] align-middle text-center text-[clamp(36px,5vw,60px)]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
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
                    className="text-[#546779] font-medium leading-[38px] tracking-normal text-center align-middle text-[clamp(18px,2.5vw,24px)]"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    Our simplest pricing plan with no hidden fees let's you
                    Pay-As-You-Go and scale with ease. Our single credit system
                    helps you buy Zupitu credits and use across all products
                    without any complexity.
                  </p>
                </div>
              </div>

              {/* Main Content Section with Background */}
              <div
                className="w-full max-w-full mx-auto rounded-[24px] border border-[#EEF0F3] p-[32px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/verified-bg-img.png')",
                  boxShadow: "0px 14px 20px 0px #A8A8A833",
                }}
              >
                <div className="w-full flex flex-col lg:flex-row gap-10">
                  {/* Left Section - Pricing and Features */}
                  <div className="w-full  flex flex-col gap-[30px] h-full">
                    {/* Introductory Text */}
                    <p
                      className="text-[#4F556C] font-normal leading-[32px] tracking-normal align-middle text-[clamp(18px,2vw,18px)]"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      Whether you're running a one-off search or enriching
                      thousands of contacts, our flexible pricing ensures you
                      get validated, ready-to-use email addresses without
                      overspending.
                    </p>

                    {/* Feature Cards */}
                    <div className="flex flex-col gap-[20px]">
                      {/* Card 1: 1 Email Finder Query = [X] Credits */}
                      <div
                        className="rounded-[12px] bg-white p-4 flex items-center gap-4"
                        style={{
                          boxShadow: "0px 8px 20px 0px #00000012",
                        }}
                      >
                        <div
                          className="w-[50px] h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                          style={{
                            background:
                              "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                          }}
                        >
                          <img
                            src="/images/check-green.svg"
                            alt="Check"
                            className="w-[28px] h-[28px] shrink-0"
                          />
                        </div>
                        <p
                          className="text-[#334252] font-semibold leading-[26px] tracking-normal align-middle capitalize text-[clamp(16px,1.8vw,16px)]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                          }}
                        >
                          1 Email Finder Query = [X] Credits
                        </p>
                      </div>

                      {/* Card 2: Credits Never Expire */}
                      <div
                        className="rounded-[12px] bg-white p-4 flex items-center gap-4"
                        style={{
                          boxShadow: "0px 8px 20px 0px #00000012",
                        }}
                      >
                        <div
                          className="w-[50px] h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                          style={{
                            background:
                              "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                          }}
                        >
                          <img
                            src="/images/check-green.svg"
                            alt="Check"
                            className="w-[28px] h-[28px] shrink-0"
                          />
                        </div>
                        <p
                          className="text-[#334252] font-semibold leading-[26px] tracking-normal align-middle capitalize text-[clamp(16px,1.8vw,16px)]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                          }}
                        >
                          Credits Never Expire.
                        </p>
                      </div>

                      {/* Card 3: 300 Free Credits */}
                      <div
                        className="rounded-[12px] bg-white p-4 flex items-center gap-4"
                        style={{
                          boxShadow: "0px 8px 20px 0px #00000012",
                        }}
                      >
                        <div
                          className="w-[50px] h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                          style={{
                            background:
                              "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                          }}
                        >
                          <img
                            src="/images/check-green.svg"
                            alt="Check"
                            className="w-[28px] h-[28px] shrink-0"
                          />
                        </div>
                        <p
                          className="text-[#334252] font-semibold leading-[26px] tracking-normal align-middle capitalize text-[clamp(16px,1.8vw,16px)]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                          }}
                        >
                          Every new account includes{" "}
                          <span className="text-[#0080FF] font-bold">
                            300 Free Credits
                          </span>{" "}
                          to get started
                        </p>
                      </div>

                      {/* Card 4: Add More Credits Anytime */}
                      <div
                        className="rounded-[12px] bg-white p-4 flex items-center gap-4"
                        style={{
                          boxShadow: "0px 8px 20px 0px #00000012",
                        }}
                      >
                        <div
                          className="w-[50px] h-[50px] rounded-[74px] flex items-center justify-center shrink-0"
                          style={{
                            background:
                              "linear-gradient(180deg, #F4FDFF 0%, #F3FAFC 45.67%, #F8F6FF 100%)",
                          }}
                        >
                          <img
                            src="/images/check-green.svg"
                            alt="Check"
                            className="w-[28px] h-[28px] shrink-0"
                          />
                        </div>
                        <p
                          className="text-[#334252] font-semibold leading-[26px] tracking-normal align-middle capitalize text-[clamp(16px,1.8vw,16px)]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                          }}
                        >
                          Add more credits{" "}
                          <span className="text-[#FF00B3] font-bold">
                            Anytime
                          </span>
                          , instantly, as your prospecting needs grow
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Email Finder Result */}
                  <div className="w-full max-w-full flex">
                    <img
                      src="/images/verified-email-details-img.png"
                      alt="Email Finder Result"
                      className="w-full"
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

export default VerifiedEmail;
