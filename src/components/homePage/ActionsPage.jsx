import React from "react";

const ActionsPage = () => {
  return (
    <section className="relative w-full bg-[#FAFBFF]">
      {/* Outer container mirrors HeroSection spacing rhythm */}
      <div className="w-full px-4! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[264px]! py-10! lg:py-16! xl:py-20! mt-4!">
        <div className="max-w-[full] mx-auto relative">
          {/* Header copy */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-white w-[187px] h-[42px] px-4 py-3 text-[16px] leading-[18px] font-semibold text-[#132436] capitalize">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              Plugin Integration
            </div>

            <h2 className="mt-5! text-[#132436] font-semibold">
              <span className="inline-block align-middle text-[60px] leading-[50px] tracking-[-2.2px]">
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

            <p className="mt-5! text-[#546779] font-medium text-[22px] leading-[38px] tracking-[0px] text-center max-w-[full] mx-auto">
              Experience the quality and speed of Artificial Intelligence in
              email verification and email finding. Try Zupitu without Sign-Up.
              We welcome FREE trials and offer 10 Credits daily forever.
            </p>
          </div>

          {/* Connector dot and subtle divider (decorative) */}
          <div className="flex justify-center mt-[200px] mb-8">
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
            className="pointer-events-none select-none absolute top-[14%] -left-[15%] w-[260px] opacity-80 z-0"
          />

          {/* Card container (desktop exact sizing as provided) */}
          <div className="relative z-[1] bg-white rounded-[20px] shadow-[0px_10px_30px_0px_#0000001A]  max-w-[full] mx-auto lg:h-[513px] overflow-hidden">
            {/* Desktop divider line at x=681, 492px tall */}

            <div className="relative z-[1] grid grid-cols-1 p-12! lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-stretch lg:gap-0">
              {/* Left panel (copy) sized 561x451 at 60px offset */}
              <div className="relative rounded-[16px]   flex flex-col gap-[41px]">
                <div className="flex flex-col gap-5">
                <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-[#F0F3FF] px-4! py-3 w-[200px] h-[46px] text-[18px] leading-[100%] font-bold text-[#132436]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
                  <span>Let's get in touch</span>
                </div>

                <div className="flex gap-5 flex-col">
                  <h3 className="text-[#132436] font-semibold text-[30px] leading-[50px] tracking-[-1.5px]">
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

                  <p className="text-[#76838F] font-normal text-[18px] leading-[32px] max-w-[640px]">
                    Verify up to 10 emails instantly without sign-up just
                    enter an email, click Verify, and repeat. Explore bulk
                    validation, verification history, and all platform features
                    with unlimited access and no credits required.
                  </p>
                </div>
                </div>

                <button className="inline-flex items-center gap-2 text-[#EB3609] font-bold text-[22px] leading-[30px] capitalize">
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
              <div className="relative mx-auto lg:mx-0 w-full   bg-[#132436] rounded-[24px] p-4! flex flex-col items-center gap-[20px]">
                {/* Top icon */}
                <div className="mt-[42px] relative w-[56px] h-[56px] rounded-full bg-white shadow-sm">
                  <img src="/images/email-icon.svg" alt="Email" className="absolute left-[55%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-[36px] h-[36px] object-contain" />
                </div>

                {/* Title */}
                <h4 className="text-white text-center font-semibold text-[26px] leading-[47px] tracking-[-0.56px] px-4">
                  Verify Personal & Business
                  <br className="hidden sm:block" />
                  Emails Instantly
                </h4>

                {/* Subtitle */}
                <p className="text-[#546779] text-center font-medium text-[18px] leading-[37px] tracking-[0px] max-w-[420px] px-4">
                  Check up to 10 emails for free — no sign-up required.
                </p>

                {/* Input group */}
                <div className="w-full px-2!">
                  <div className="mx-auto w-full max-w-[520px] bg-white rounded-[40px] h-[60px] flex items-center shadow-[0_2px_0_0_#0000000A] border border-[#E6E8EB] overflow-hidden">
                    <input
                      type="email"
                      placeholder="Email Address..."
                      className="flex-1 h-full px-5! text-[16px] placeholder:text-[#9AA6B2] text-[#132436] outline-none bg-transparent"
                      aria-label="Email address"
                    />
                    <button
                      className="shrink-0 mr-2! inline-flex items-center justify-center rounded-[40px] bg-[#EB3609] hover:bg-[#FF6B35] text-white font-semibold h-[46px] px-5 min-w-[130px] transition-colors"
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
