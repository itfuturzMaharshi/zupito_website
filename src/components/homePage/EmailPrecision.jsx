import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailPrecision = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Outer container mirrors ActionsPage spacing rhythm */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[170px]! pt-10! lg:pt-16!">
        <div className="max-w-[full] lg:max-w-[1024px] mx-auto relative">
          {/* Main container - first image */}
          <div className="w-full max-w-[full] mx-auto h-auto  flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-8 lg:gap-0">
            {/* Left section - second image */}
            <div className="w-full lg:w-[560px] h-auto  flex flex-col gap-4">
              {/* Plugin integration tag - third image */}
              <div className="text-center flex">
                <div
                  data-animate-item
                  className="inline-flex items-center font-['Inter'] justify-center gap-[6px] rounded-[50px] bg-[#F6F6F6] w-[160px] h-[34px] px-2 py-2 text-[14px] leading-[18px] font-semibold text-[#132436] capitalize"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  Plugin Integration
                </div>
              </div>

              {/* Headline section - fourth image */}
              <div className="w-full lg:w-[full] h-auto lg:min-h-[120px] flex flex-col ">
                {/* First line: Lead Generation */}
                <div className="flex items-center flex-wrap gap-2">
                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.05s" }}
                    className="home-title text-[#132436] font-['Inter'] font-bold"
                  >
                    Lead
                  </span>
                  {/* Rocket icon */}
                  <div className="relative inline-flex items-center justify-center">
                    <img
                      src="/images/setting-orange2.svg"
                      alt=""
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain"
                    />
                  </div>
                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.1s" }}
                    className="home-title text-[#a3a5a8] opacity-50  font-['Inter'] font-bold"
                  >
                    Generation
                  </span>
                </div>

                {/* Second line: With Email Precision */}
                <div className="flex items-center flex-wrap gap-2">
                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.15s" }}
                    className="home-title text-[#a3a5a8] font-['Inter'] font-bold opacity-50"
                  >
                    With
                  </span>
                  <span
                    data-animate-item
                    style={{ transitionDelay: "0.2s" }}
                    className="home-title text-[#132436] font-['Inter'] font-bold"
                  >
                    Email Precision
                  </span>
                  {/* Setting icon */}
                  <div className="relative inline-flex items-center justify-center">
                    <img
                      src="/images/rocket-purple.svg"
                      alt=""
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - paragraph */}
            <div className="w-full lg:w-auto lg:flex-1 lg:max-w-[600px]">
              <p
                data-animate-item
                style={{ transitionDelay: "0.25s" }}
                className="home-description   text-[#546779] font-['Manrope'] text-left"
              >
                Your email marketing success depends upon valid and opt-in email
                database.<br /> An email verifier helps you maintain a valid list and
                email finder discovers the right business contacts to fill your
                sales pipeline with high-quality leads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailPrecision;
