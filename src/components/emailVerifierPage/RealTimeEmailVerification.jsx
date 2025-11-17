import React from "react";

const RealTimeEmailVerification = () => {
  const coreCapabilities = [
    {
      title: "Dual-Purpose Credit System",
      icon: "/images/credit-system.svg",
      description:
        "Use the same credits for both email verification and email discovery, giving you complete flexibility and value for money.",
    },
    {
      title: "AI-Powered Precision",
      icon: "/images/AI-Powered.svg",
      description:
        "Leverage smart AI algorithms to detect and eliminate invalid, disposable, and spam-prone emails in real time.",
    },
    {
      title: "Real-Time Email Verification",
      icon: "/images/Real-Time-Email.svg",
      description:
        "Instantly verify email addresses as users enter them on sign-up forms, checkout pages, and lead capture forms.",
    },
    {
      title: "Comprehensive Email Discovery",
      icon: "/images/Email-Discovery.svg",
      description:
        "Discover and collect accurate business email addresses for your outreach and lead generation campaigns.",
    },
    {
      title: "Domain & MX Validation",
      icon: "/images/Domain.svg",
      description:
        "Validate domain authenticity with MX record checks, ensuring the email domain exists and is ready to receive messages.",
    },
    {
      title: "Spam Trap & Abuse Detection",
      icon: "/images/Detection.svg",
      description:
        "Identify spam traps and abuse-prone email addresses to protect your sender reputation and maintain strong inbox placement.",
    },
  ];

  const advancedBenefits = [
    {
      title: "Bulk Email Verification",
      description:
        "Verify large lists of email addresses in one go, saving time and effort for your sales and marketing teams.",
    },
    {
      title: "Error-Free Email Typo Correction",
      description:
        "Detect and correct common typos in email addresses to prevent lost leads and improve data quality.",
    },
    {
      title: "Catch-All Domain Detection",
      description:
        'Identify "catch-all" email domains so you can better understand deliverability risks and segment your email strategy.',
    },
    {
      title: "Seamless API Integration",
      description:
        "Easily integrate Zupitu's verification and discovery tools into your CRM, lead forms, and custom applications via API.",
    },
    {
      title: "Data Privacy & Compliance",
      description:
        "Stay compliant with global privacy standards like GDPR and CCPA, ensuring your data stays secure.",
    },
    {
      title: "High-Speed Processing",
      description:
        "Experience fast, accurate processing of bulk email lists to keep up with the speed of modern sales workflows.",
    },
    {
      title: "User-Friendly Dashboard",
      description:
        "Enjoy an intuitive, simple-to-use platform that makes list uploads, API integrations, and credit tracking effortless.",
    },
    {
      title: "Email Gender Detection",
      description:
        "Identify gender information based on email addresses to help with segmentation and personalization of campaigns.",
    },
    {
      title: "Detailed Reporting & Insights",
      description:
        "Get detailed reports on email validity, risk factors, and overall data quality, enabling better decision-making for outreach.",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-[150px] py-[80px] md:py-[120px]">
        {/* Decorative background animation - right side */}
        <img
          src="/images/footer-animation-1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none hidden md:block absolute right-[-60px] md:right-[-80px] lg:right-[-120px] top-[12px] md:top-[10%] lg:top-1/8 w-[220px] h-[220px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] -translate-y-1/2 z-0"
          style={{
            animation: 'spinClockwise 20s linear infinite',
            transformOrigin: '50% 50%'
          }}
        />
        <style>{`
          @keyframes spinClockwise {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
        <div className="w-full flex flex-col items-center gap-[60px] md:gap-[80px] relative z-10">
          <div className="relative flex flex-col items-center gap-[40px] md:gap-[60px]">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-[6px] rounded-[50px] bg-[#F8F7FF] px-4 py-3 shadow-sm">
                <span className="h-[12px] w-[12px] rounded-full bg-[#4A90E2]"></span>
                <span className="font-['Inter'] text-[16px] font-semibold leading-[18px] text-[#132436] capitalize">
                  Type Something
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[21px] text-center">
              <h2 className="flex flex-wrap items-center justify-center gap-[18px] font-['Inter'] text-[clamp(32px,5.5vw,60px)] font-semibold leading-[100%] tracking-[-2.2px] text-[#132436]">
                <span>Real-Time</span>
                <span className="inline-flex items-center justify-center">
                    <img
                      src="/images/setting-green.svg"
                      alt="Setting icon"
                      className="h-[56px] w-[56px]"
                    />
                  </span>
                <span>Email Verification-</span>

                <span className="flex items-center gap-1">
                  Smarter, Safer,
                  <span className="inline-flex items-center justify-center">
                    <img
                      src="/images/rocket-purple.svg"
                      alt="Rocket icon"
                      className="h-[56px] w-[56px]"
                    />
                  </span>
                  Stronger
                </span>
              </h2>

              <p className="max-w-[1100px] font-['Manrope'] text-[clamp(18px,3vw,26px)] font-medium leading-[44px] text-[#546779]">
                Zupitu's real-time email verification ensures that only valid,
                safe, and accurate emails enter your contact list.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[60px] md:gap-[80px]">
            <div className="w-full rounded-[24px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] md:gap-[50px]">
                {coreCapabilities.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center text-center gap-[20px]"
                  >
                    <div className="flex items-center justify-center">
                       <img
                         src={feature.icon}
                         alt={`${feature.title} icon`}
                         className="h-[48px] w-[48px]"
                       />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <h3 className="font-['Inter'] text-[24px] font-semibold leading-[30px] text-[#132436] capitalize">
                        {feature.title}
                      </h3>
                      <p className="font-['Manrope'] text-[18px] md:text-[20px] font-normal leading-[32px] text-[#52576D]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative w-full max-w-full h-full mx-auto overflow-hidden rounded-[24px] border border-[#EEF0F3] px-[50px] py-[50px] shadow-[0px_14px_20px_rgba(168,168,168,0.12)]"
              style={{ background: 'linear-gradient(358.59deg, #FFFFFF -1.68%, #FFFFFF 101.6%)' }}
            >
              {/* Decorative images to match reference */}
              <img
                src="/images/real-time-img-1.png"
                alt="decoration"
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 top-0 h-[110px] w-auto md:h-[140px] lg:h-[160px]"
              />
              <img
                src="/images/real-time-img-2.png"
                alt="decoration"
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 h-[220px] w-auto md:h-[260px] lg:h-[250px]"
              />
              <div className="relative flex flex-col gap-4  text-center">
                <p className="font-['Manrope'] text-[28px] font-semibold leading-[46px] tracking-[0px] text-center text-[#223446]">
                  Powered by AI, it automatically detects bounces,
                  <span className="text-[#879AAD]">
                    {" "}
                    spam traps, disposable <br /> emails, and toxic domains at the
                    moment of entry.
                  </span>
                </p>
                <p className="font-['Manrope'] text-[28px] font-semibold leading-[46px] tracking-[0px] text-center text-[#223446]">
                  Protect your sender{" "}
                  <span className="text-[#879AAD]">
                    {" "}
                    reputation, reduce bounces, and maintain a clean,
                  </span>{" "}
                  high- <br />converting email list with Zupitu's comprehensive
                  verification suite.
                </p>
              </div>
            </div>

            <div className="w-full">
              {/* Flat two-column rows with dividers (reference style) */}
              <div className="w-full flex flex-col gap-0">
                {Array.from({
                  length: Math.ceil(advancedBenefits.length / 2),
                }).map((_, rowIndex) => {
                  const left = advancedBenefits[rowIndex * 2];
                  const right = advancedBenefits[rowIndex * 2 + 1];
                  const isLastRow =
                    rowIndex === Math.floor((advancedBenefits.length - 1) / 2);
                  const isFirstRow = rowIndex === 0;

                  let paddingClass = "";
                  if (isFirstRow && isLastRow) {
                    paddingClass = "";
                  } else if (isFirstRow) {
                    paddingClass = "pb-[40px] md:pb-[50px]";
                  } else if (isLastRow) {
                    paddingClass = "pt-[40px] md:pt-[50px]";
                  } else {
                    paddingClass = "py-[40px] md:py-[50px]";
                  }

                  return (
                    <div key={rowIndex}>
                      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-0">
                        {left && (
                          <div
                            className={`flex items-start gap-4 ${paddingClass}`}
                          >
                            <div className="shrink-0 mt-1">
                              <img
                                src="/images/check-green.svg"
                                alt="Checked feature"
                                className="h-8 w-8"
                              />
                            </div>
                            <div className="flex-1 flex flex-col gap-[10px]">
                              <h4 className="font-['Inter'] text-[clamp(20px,2vw,26px)] font-semibold leading-[38px] text-[#132436] capitalize">
                                {left.title}
                              </h4>
                              <p className="font-['Manrope'] text-[clamp(18px,2vw,22px)] font-normal leading-[36px] text-[#565F81]">
                                {left.description}
                              </p>
                            </div>
                          </div>
                        )}
                        {right && (
                          <div
                            className={`flex items-start gap-4 ${paddingClass}`}
                          >
                            <div className="shrink-0 mt-1">
                              <img
                                src="/images/check-green.svg"
                                alt="Checked feature"
                                className="h-8 w-8"
                              />
                            </div>
                            <div className="flex-1 flex flex-col gap-[10px]">
                              <h4 className="font-['Inter'] text-[clamp(20px,2vw,26px)] font-semibold leading-[38px] text-[#132436] capitalize">
                                {right.title}
                              </h4>
                              <p className="font-['Manrope'] text-[clamp(18px,2vw,22px)] font-normal leading-[36px] text-[#565F81]">
                                {right.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      {!isLastRow && (
                        <div className="w-full h-px bg-black/10"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeEmailVerification;
