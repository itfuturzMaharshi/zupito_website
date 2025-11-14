import React from "react";

const ActionsPage = () => {
  return (
    <section className="relative w-full bg-[#FAFBFF] overflow-hidden mt-4!">
      {/* Outer container mirrors HeroSection spacing rhythm */}
      <div className="w-full  px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[150px]! py-10! lg:py-16! xl:py-20!">
        <div className="max-w-[full] mx-auto relative">
          {/* Header copy */}
          <div className="text-center">
            <div className="inline-flex items-center font-['Inter'] justify-center gap-[6px] rounded-[50px] bg-white w-[187px] h-[42px] px-4 py-3 text-[16px] leading-[18px] font-semibold text-[#132436] capitalize">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              Plugin Integration
            </div>

            <h2 className="mt-5! text-[#132436] font-semibold">
              <span className="inline-block font-['Inter'] align-middle text-[34px] leading-[36px] sm:text-[42px] sm:leading-[44px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[50px] tracking-[-2.2px]">
                See
                <span className="align-middle inline-flex items-center justify-center mx-2! relative top-[-2px]">
                  <img
                    src="/images/setting-orange.svg"
                    alt=""
                    className="w-[28px] h-[28px] md:w-[75px] md:h-[60px]"
                  />
                </span>
                Zupitu In Action
              </span>
            </h2>

            <p className="mt-5! text-[#546779] font-['Manrope'] font-medium text-[16px] leading-[28px] sm:text-[18px] sm:leading-[32px] md:text-[20px] md:leading-[34px] lg:text-[22px] lg:leading-[38px] tracking-[0px] text-center max-w-[full] mx-auto">
              Experience the quality and speed of Artificial Intelligence in
              email verification and email finding. Try Zupitu without Sign-Up.
              We welcome FREE trials and offer 10 Credits daily forever.
            </p>
          </div>

          {/* Connector dot and subtle divider (decorative) */}
          <div className="absolute flex w-full justify-center mt-4">
            <img
              src="/images/element-img.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none w-full max-w-[300px] sm:max-w-[400px] md:max-w-[506px] h-auto"
            />
          </div>

          {/* Decorative background animation image (outside the card) */}
          <img
            src="/images/action-bg-animation.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-12 left-[-20px] w-[100px] sm:top-14 sm:left-[-50px] sm:w-[180px] md:top-[26%] md:left-[-80px] md:w-[220px] lg:left-[-140px] lg:w-[260px] opacity-80 z-0 hidden sm:block"
          />

          {/* Card container (desktop exact sizing as provided) */}
          <div className="relative z-1 top-12 sm:top-16 md:top-20 lg:top-24 bg-white rounded-[20px] shadow-[0px_10px_30px_0px_#0000001A] max-w-[full] mx-auto lg:h-[513px] overflow-hidden mb-12 sm:mb-16 md:mb-20 lg:mb-[100px]">
            {/* Desktop divider line at x=681, 492px tall */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 inset-y-12 w-0 border-l lg:px-10! border-[#132436] opacity-10 pointer-events-none"
            />

            <div className="relative z-1 grid grid-cols-1 p-6! md:p-8! lg:p-12! lg:grid-cols-2 gap-6 md:gap-8 lg:gap-0 items-stretch">
              {/* Left panel (copy) sized 561x451 at 60px offset */}
              <div className="relative rounded-[16px]  flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-5 lg:pr-18!">
                <div className="inline-flex items-center font-['Manrope'] justify-center gap-[6px] rounded-[50px] bg-[#F0F3FF] px-4! py-2 w-[180px] h-[38px] text-[14px] leading-[100%] font-bold text-[#132436] sm:w-[200px] sm:h-[46px] sm:text-[16px] md:text-[18px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
                  <span>Let's get in touch</span>
                </div>

                <div className="flex gap-5 flex-col">
                  <h3 className="text-[#132436] font-['Inter'] font-semibold text-[22px] leading-[34px] sm:text-[26px] sm:leading-[40px] md:text-[28px] md:leading-[44px] lg:text-[30px] lg:leading-[50px] tracking-[-1.5px]">
                    Comprehensive Personal &{" "}
                    <br className="hidden sm:block" />
                    Business
                    <span className="align-middle inline-flex items-center justify-center mx-2 relative -top-px">
                      <img
                        src="/images/setting-orange-1.svg"
                        alt=""
                        className="mx-2! w-[38px] h-[42px]"
                      />
                    </span>
                    Email Validation
                  </h3>

                  <p className="text-[#76838F] font-normal font-['Manrope'] text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[17px] md:leading-[30px] lg:text-[18px] lg:leading-[32px] max-w-[640px]">
                    Verify up to 10 emails instantly without sign-up just
                    enter an email, click Verify, and repeat. Explore bulk
                    validation, verification history, and all platform features
                    with unlimited access and no credits required.
                  </p>
                </div>
                </div>

                <button className="inline-flex items-center font-['Manrope'] gap-3 text-[#EB3609] font-bold text-[18px] leading-[28px] sm:text-[20px] sm:leading-[28px] md:text-[22px] md:leading-[30px] capitalize">
                  <span>Checkout Our Deals</span>
                  <span className="flex items-center justify-center ">
                   <img
                   src="/images/right-orange-arrow.svg"
                   alt="Right arrow icon"
                   className="w-5 h-5 mt-1"
                 />
                  </span>
                </button>
              </div>

              {/* Right panel (widget) sized 600x490 at 724/42 */}
              <div className="relative mx-auto lg:mx-0 w-full max-w-full bg-[#132436] rounded-[24px] p-4! sm:p-5! md:p-6! flex flex-col items-center gap-4 sm:gap-5 md:gap-[20px]">
                {/* Top icon */}
                <div className="mt-2 sm:mt-3 relative w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full bg-white shadow-sm">
                  <img src="/images/email-icon.svg" alt="Email" className="absolute left-[55%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] object-contain" />
                </div>

                {/* Title */}
                <h4 className="text-white text-center font-['Inter'] font-semibold text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[22px] md:leading-[36px] lg:text-[24px] lg:leading-[40px] xl:text-[26px] xl:leading-[42px] tracking-[-0.56px] px-2 sm:px-4">
                  Verify Personal & Business
                  <br className="hidden sm:block" />
                  Emails Instantly
                </h4>

                {/* Subtitle */}
                <p className="text-[#546779] text-center font-['Manrope'] font-medium text-[13px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[28px] lg:text-[17px] lg:leading-[30px] xl:text-[18px] xl:leading-[32px] tracking-[0px] max-w-[420px] px-2 sm:px-4">
                  Check up to 10 emails for free — no sign-up required.
                </p>

                {/* Input group */}
                <div className="w-full px-2!">
                  <div className="mx-auto w-full max-w-[520px] bg-white rounded-[40px] h-[48px] sm:h-[50px] md:h-[52px] lg:h-[56px] flex items-center shadow-[0_2px_0_0_#0000000A] border border-[#E6E8EB] overflow-hidden">
                    <input
                      type="email"
                      placeholder="Email Address..."
                      className="flex-1 h-full px-3! sm:px-4! md:px-5! text-[14px] sm:text-[15px] md:text-[16px] placeholder:text-[#9AA6B2] text-[#132436] outline-none bg-transparent"
                      aria-label="Email address"
                    />
                    <button
                      className="shrink-0 mr-1! sm:mr-2! font-['Manrope'] inline-flex items-center justify-center rounded-[40px] bg-[#EB3609] hover:bg-[#FF6B35] text-white font-semibold h-[40px] sm:h-[42px] md:h-[44px] lg:h-[46px] px-3! sm:px-4! md:px-5! min-w-[90px] sm:min-w-[110px] md:min-w-[120px] lg:min-w-[130px] text-[12px] sm:text-[14px] md:text-base transition-colors"
                      type="button"
                    >
                      <span className="hidden sm:inline">Verify Now</span>
                      <span className="sm:hidden">Verify</span>
                    </button>
                  </div>
                </div>

                {/* bottom spacing */}
                <div className="mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsPage;
