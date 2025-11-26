import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailsVerified = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Outer container mirrors EmailPrecision spacing rhythm */}
      <div className="w-full h-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[170px]! pt-10! lg:pt-16!">
        <div className="max-w-[full] lg:max-w-[1024px] mx-auto relative">
          {/* Main container - first image: width 1362px, height 624px, gap 24px */}
          <div className="w-full max-w-[full] mx-auto max-h-auto lg:h-[full] lg:flex items-stretch gap-6 md:gap-8">
            {/* Left column - second image: width 555px, height 623px, gap 20px, border-radius 24px, padding 24px, background #F0EBFF */}
            <div
              className="w-full lg:w-[510px] h-auto lg:h-full rounded-[24px] p-6! bg-[#F0EBFF] flex flex-col gap-5  mb-4 lg:mb-0"
              data-animate-item
            >
              {/* Title section */}
              <div className="w-full flex flex-col items-center justify-center text-center">
                <h2
                  data-animate-item
                  style={{ transitionDelay: "0.08s" }}
                  className="home-subtitle sm:text-[24px]! sm:leading-[32px]! md:leading-[36px]! lg:leading-[40px]! font-['Inter'] text-center"
                >
                  <span className="text-[#132436]">
                    Lead Generation <span className="text-[#9C93B4]">with</span>{" "}
                  </span>
                  <br />
                  <span className="text-[#132436]">
                    Advantage <span className="text-[#9C93B4]">Of</span>{" "}
                    Verified Emails
                  </span>
                </h2>
              </div>

              {/* Workflow diagram image */}
              <div
                className="w-auto  flex-1 flex items-center justify-center "
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
              >
                <img
                  src="/images/shape-automate.png"
                  alt="Email verification workflow"
                  className="w-full md:max-h-[300px] lg:max-h-[300px] xl:max-h-[380px] rounded-[16px] object-contain"
                />
              </div>
            </div>

            {/* Right column */}
            <div
              className="w-full lg:w-auto justify-between   flex flex-col   bg-white rounded-[24px] border border-solid border-[var(--color-grey-92,#E9EAEB)] overflow-hidden"
              data-animate-item
              style={{ transitionDelay: "0.2s" }}
            >
              {/* Right side image - verified email content */}
              <div
                className="w-full flex items-center justify-center"
                data-animate-item
                style={{ transitionDelay: "0.25s" }}
              >
                <img
                  src="/images/verified-email-img.png"
                  alt="Verified email status"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Bottom section - width 781px, height 240px, padding 30px 32px, border-radius bottom 24px, background #F9F9F8 */}
              <div
                className="w-full max-w-[781px] mx-auto lg:mx-0 h-auto  rounded-b-[24px] bg-[#F9F9F8] px-6 py-4 flex flex-col"
                data-animate-item
                style={{ transitionDelay: "0.3s" }}
              >
                {/* Content wrapper - width 717px, height 180px, gap 30px */}
                <div className="w-full max-w-[717px] h-full flex flex-col gap-2 justify-between">
                  {/* Description text */}
                  <p className="home-description   text-[#546779] font-['Manrope']">
                    Zupitu ensures your emails always reach the right inbox.
                    High email deliverability is achieved through reduced bounce
                    rates, a healthy email list,
                  </p>

                  {/* Call to action */}
                  <div>
                    <button
                      data-hover="lift"
                      className="inline-flex font-['Manrope'] items-center gap-2 text-[#EB3609] font-bold text-[18px] leading-[26px]  sm:leading-[28px] md:leading-[30px] capitalize cursor-pointer"
                    >
                      <span>Explore Email Finder</span>
                      <img
                        src="/images/right-orange-arrow.svg"
                        alt="Right arrow icon"
                        className="w-3 h-3"
                      />
                    </button>
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

export default EmailsVerified;
