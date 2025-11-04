function HeroSection() {
  return (
    <main className="relative w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Dots/backdrop spacing wrapper to mimic Figma breathing room */}
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[264px]! py-10 lg:py-16 xl:py-20">
          <div className="max-w-[full] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            {/* Copy */}
            <div className="order-2 lg:order-1 ">
              <h1 className="text-[#132436] font-bold tracking-[-0.02em] leading-[1.08] space-y-1 mt-10!">
                {/* Line 1: AI Tool To Connect */}
                <span className="block whitespace-nowrap text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[64px]">
                  <span>AI Tool To </span>
                  <span className="text-[#EB3609]">Connect</span>
                </span>
                {/* Line 2: Emails [badge] Instantly */}
                <span className="block whitespace-nowrap text-[28px]  sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[64px]">
                  <span>Emails </span>
                  <span className="align-middle inline-flex items-center justify-center mx-2 mr-2! relative top-[-2px]">
                    <img
                      src="/images/container.svg"
                      alt=""
                      className="w-[28px] h-[28px] md:w-[64px] md:h-[64px] "
                    />
                  </span>
                  <span>Instantly</span>
                </span>
              </h1>

              <p className="text-[#63778B] max-w-[720px] font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[1.7] mt-6!">
                Simplify outreach with Zupitu’s AI Email Verifier & Finder –
                validate emails, find business contacts, and boost
                deliverability.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-6 flex-wrap mt-9!">
                <button
                  className="rounded-[40px] bg-[#EB3609] hover:bg-[#FF6B35] text-white font-semibold transition-colors flex items-center justify-center shadow-sm min-w-[190px] h-[56px] px-[26px] py-[12px]"
                >
                  Checkout Deals
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <button className="text-[#132436] font-semibold flex items-center gap-2 hover:text-[#EB3609] transition-colors">
                  <span>Claim 300 free credits</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-16! mb-4 w-[565px] h-px bg-linear-to-l from-transparent to-[#666666]/20" />

              {/* Trust bullets */}

              <div className="mt-8! md:mt-16! flex items-center gap-4 md:gap-6! flex-wrap">
                <div className="flex items-center gap-[10px] h-[54px] rounded-[50px] bg-[#FCFCFD] border border-[#EEF0F3] px-4! py-3!">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#132436]">
                    Flexible solution
                  </span>
                </div>

                <div className="flex items-center gap-[10px] h-[54px] rounded-[50px] bg-[#FCFCFD] border border-[#EEF0F3] px-4! py-3!">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#132436]">
                    No credit card required
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative -mt-20!">
              <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[540px] xl:h-[560px] 2xl:h-[520px]  ">
                <img
                  src="/images/hero_img.png"
                  alt="Zupito email automation flow"
                  className="absolute inset-0 w-full h-full  object-contain select-none pointer-events-none [image-rendering:auto]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;


