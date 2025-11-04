import React from "react";

const ActionsPage = () => {
  return (
    <section className="relative w-full bg-[#FAFBFF] overflow-hidden">
      {/* Outer container mirrors HeroSection spacing rhythm */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[264px]! py-10! lg:py-16! xl:py-20! mt-4!">
        <div className="max-w-[full] mx-auto relative">
          {/* Header copy */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-white w-[187px] h-[42px] px-4 py-3 text-[16px] leading-[18px] font-semibold text-[#132436] capitalize">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              Plugin Integration
            </div>

            <h2 className="mt-5! text-[#132436] font-semibold">
              <span className="inline-block align-middle text-[34px] leading-[36px] sm:text-[42px] sm:leading-[44px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[50px] tracking-[-2.2px]">
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

            <p className="mt-5! text-[#546779] font-medium text-[16px] leading-[28px] sm:text-[18px] sm:leading-[32px] md:text-[20px] md:leading-[34px] lg:text-[22px] lg:leading-[38px] tracking-[0px] text-center max-w-[full] mx-auto">
              Experience the quality and speed of Artificial Intelligence in
              email verification and email finding. Try Zupitu without Sign-Up.
              We welcome FREE trials and offer 10 Credits daily forever.
            </p>
          </div>

          {/* Connector dot and subtle divider (decorative) */}
          <div className="flex justify-center mt-10 sm:mt-14 md:mt-20 lg:mt-[200px] mb-6 md:mb-8">
            <img
              src="/images/element-img.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none w-[56px] md:w-[72px] lg:w-[86px] h-auto"
            />
          </div>

          {/* Decorative background animation image (outside the card) */}
          <img
            src="/images/action-bg-animation.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-12 left-[-30px] w-[140px] sm:top-14 sm:left-[-50px] sm:w-[180px] md:top-[17%] md:left-[-80px] md:w-[220px] lg:left-[-120px] lg:w-[260px] opacity-80 z-0"
          />

          {/* Card container (desktop exact sizing as provided) */}
          <div className="relative z-1 bg-white rounded-[20px] shadow-[0px_10px_30px_0px_#0000001A]  max-w-[full] mx-auto lg:h-[513px] overflow-hidden">
            {/* Desktop divider line at x=681, 492px tall */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 inset-y-12 w-0 border-l lg:px-10! border-[#132436] opacity-10 pointer-events-none"
            />

            <div className="relative z-1 grid grid-cols-1 p-6! md:p-8! lg:p-12! lg:grid-cols-2 gap-6 md:gap-8 lg:gap-0 items-stretch">
              {/* Left panel (copy) sized 561x451 at 60px offset */}
              <div className="relative rounded-[16px]  flex flex-col gap-[32px] md:gap-[36px] lg:gap-[41px]">
                <div className="flex flex-col gap-5 lg:pr-18!">
                <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-[#F0F3FF] px-4! py-2 w-[180px] h-[38px] text-[14px] leading-[100%] font-bold text-[#132436] sm:w-[200px] sm:h-[46px] sm:text-[16px] md:text-[18px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
                  <span>Let's get in touch</span>
                </div>

                <div className="flex gap-5 flex-col">
                  <h3 className="text-[#132436] font-semibold text-[22px] leading-[34px] sm:text-[26px] sm:leading-[40px] md:text-[28px] md:leading-[44px] lg:text-[30px] lg:leading-[50px] tracking-[-1.5px]">
                    Comprehensive Personal &
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

                  <p className="text-[#76838F] font-normal text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[17px] md:leading-[30px] lg:text-[18px] lg:leading-[32px] max-w-[640px]">
                    Verify up to 10 emails instantly without sign-up just
                    enter an email, click Verify, and repeat. Explore bulk
                    validation, verification history, and all platform features
                    with unlimited access and no credits required.
                  </p>
                </div>
                </div>

                <button className="inline-flex items-center gap-2 text-[#EB3609] font-bold text-[18px] leading-[28px] sm:text-[20px] sm:leading-[28px] md:text-[22px] md:leading-[30px] capitalize">
                  <span>Checkout Our Deals</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Right panel (widget) sized 600x490 at 724/42 */}
              <div className="relative mx-auto lg:mx-0 w-full   bg-[#132436] rounded-[24px] p-4! sm:p-5! md:p-6! flex flex-col items-center gap-[20px]">
                {/* Top icon */}
                <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-[42px] relative w-[56px] h-[56px] rounded-full bg-white shadow-sm">
                  <img src="/images/email-icon.svg" alt="Email" className="absolute left-[55%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-[36px] h-[36px] object-contain" />
                </div>

                {/* Title */}
                <h4 className="text-white text-center font-semibold text-[20px] leading-[32px] sm:text-[22px] sm:leading-[36px] md:text-[24px] md:leading-[40px] lg:text-[26px] lg:leading-[47px] tracking-[-0.56px] px-4">
                  Verify Personal & Business
                  <br className="hidden sm:block" />
                  Emails Instantly
                </h4>

                {/* Subtitle */}
                <p className="text-[#546779] text-center font-medium text-[14px] leading-[24px] sm:text-[16px] sm:leading-[28px] md:text-[17px] md:leading-[32px] lg:text-[18px] lg:leading-[37px] tracking-[0px] max-w-[420px] px-4">
                  Check up to 10 emails for free — no sign-up required.
                </p>

                {/* Input group */}
                <div className="w-full px-2!">
                  <div className="mx-auto w-full max-w-[520px] bg-white rounded-[40px] h-[50px] sm:h-[54px] md:h-[56px] lg:h-[60px] flex items-center shadow-[0_2px_0_0_#0000000A] border border-[#E6E8EB] overflow-hidden">
                    <input
                      type="email"
                      placeholder="Email Address..."
                      className="flex-1 h-full px-5! text-[16px] placeholder:text-[#9AA6B2] text-[#132436] outline-none bg-transparent"
                      aria-label="Email address"
                    />
                    <button
                      className="shrink-0 mr-2! inline-flex items-center justify-center rounded-[40px] bg-[#EB3609] hover:bg-[#FF6B35] text-white font-semibold h-[42px] sm:h-[44px] md:h-[46px] px-4 sm:px-5 min-w-[110px] sm:min-w-[120px] md:min-w-[130px] transition-colors"
                      type="button"
                    >
                      Verify Now
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
