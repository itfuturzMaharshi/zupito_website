import React from "react";

const EmailVerification = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-linear-to-b from-[#FAFDFF] to-[#EFEFFF] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Container with 200px left/right padding on large screens */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px]">
        <div className="w-full max-w-full mx-auto flex flex-col items-center">
          {/* Top Section - Badge and Heading */}
          <div className="mb-[21px] flex w-full flex-col items-center gap-[21px]">
            {/* Grow Your Business Badge */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-[6px] rounded-[50px] bg-white px-4 py-3">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#4A90E2]"></div>
                <span className="align-middle font-['Inter'] text-base font-semibold capitalize leading-[18px] tracking-normal text-[#132436]">
                  Grow Your Business
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="w-full flex flex-col items-center gap-2 md:gap-[21px]">
              <h1 className="flex flex-wrap items-center justify-center gap-2 text-center font-['Inter'] text-[clamp(32px,5vw,60px)] font-semibold leading-[100%] tracking-[-2.2px] text-[#132436] sm:gap-3">
                <span>Email</span>
                <img
                  src="/images/setting-orange.svg"
                  alt="Target icon"
                  className="h-[clamp(50px,6vw,70px)] w-[clamp(50px,6vw,70px)] shrink-0 "
                />
                <span>
                  Verification Solution{" "}
                  <span className="text-[#3A4A5A] opacity-50">for</span>
                </span>
                <span>Both</span>
              </h1>
              <h1 className="flex flex-wrap items-center justify-center gap-2 text-center font-['Inter'] text-[clamp(32px,5vw,60px)] font-semibold leading-[100%] tracking-[-2.2px] text-[#132436] sm:gap-3">
                <span>B2B & B2C</span>
                <img
                  src="/images/rocket-purple.svg"
                  alt="Rocket icon"
                  className="h-[clamp(50px,6vw,70px)] w-[clamp(50px,6vw,70px)] shrink-0"
                />
                <span>Businesses</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mx-auto mt-[21px] max-w-4xl text-center font-['Manrope'] text-[clamp(18px,2.5vw,26px)] font-medium leading-[100%] tracking-normal text-[#546779]">
              Get your list validated without worrying about business or
              personal emails.
            </p>
          </div>

          {/* Main Content Section - Image and Card */}
          <div className="w-full flex flex-col gap-8 lg:gap-12 mt-12 lg:mt-16 lg:flex-row lg:items-stretch">
            {/* Left Section - B2B-B2C Image */}
            <div className="flex h-full w-full justify-center lg:flex-1">
              <div className="h-full min-h-full w-full max-w-full overflow-hidden rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.15)]">
                <img
                  src="/images/B2B-B2C-img.png"
                  alt="B2B B2C Email Verification"
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
            </div>

            {/* Right Section - White Card with Text */}
            <div className="flex w-full lg:flex-1">
              <div className="flex h-full w-full flex-col rounded-[24px] bg-white p-[27px] pt-[26px] shadow-[0px_15px_60px_rgba(87,87,87,0.12)]">
                <div className="flex flex-col gap-[40px]">
                  <p className="font-['Manrope'] text-[clamp(18px,2vw,24px)] font-semibold leading-[42px] tracking-normal text-[#7F878E]">
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
                      className="inline-flex items-center gap-2 font-['Manrope'] text-[clamp(18px,2vw,22px)] font-bold capitalize leading-[30px] tracking-normal text-[#EB3609] transition-opacity hover:opacity-80"
                    >
                      <span>Checkout Our Deals</span>
                      <img
                        src="/images/right-orange-arrow.svg"
                        alt="Arrow icon"
                        className="h-5 w-5"
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

export default EmailVerification;
