import React from "react";

const LeadGeneration = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden pt-[50px] pb-[30px]">
      {/* Main Container - Similar to HeroSection */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-0 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[150px]">
        {/* First Image - Main Background Container */}
        <div
          className="relative w-full max-w-full lg:max-w-[1362px] mx-auto rounded-[24px] "
          style={{
            background: "linear-gradient(360deg, #FAFDFF 0%, #F5F5FF 100%)",
          }}
        >
          {/* Second Image - Content Container */}
          <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-[60px] flex flex-col gap-[60px]">
            {/* Third Image - Header Section */}
            <div
              className="w-full max-w-full lg:max-w-[1362px] mx-auto h-[95px] flex items-center justify-center rounded-[16px] relative"
              style={{
                background:
                  "linear-gradient(90deg, rgba(239, 247, 255, 0.5) 0%, rgba(207, 207, 255, 0.5) 100%)",
                transform: "rotate(-180deg)",
              }}
            >
              {/* Lead Generation Title */}
              <h1
                className="text-center font-['Inter'] font-bold text-[30px] lg:text-[40px] leading-[100%] tracking-[0%]"
                style={{
                  fontWeight: 700,
                  color: "#053155",
                  transform: "rotate(180deg)",
                }}
              >
                Lead Generation
              </h1>
            </div>

            {/* Fourth Image - Main Content Container */}
            <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-[40px]">
              {/* Fifth Image - Lead Generation Image */}
              <div className="w-full lg:flex-1 shrink-0 flex items-center justify-center">
                <img
                  src="/images/lead-generation-img.png"
                  alt="Lead Generation"
                  className="w-full h-auto max-w-full object-contain"
                />
              </div>

              {/* Sixth Image - Text Content Container */}
              <div className="w-full lg:max-w-[670px] lg:flex-1 flex flex-col gap-[20px]">
                {/* Seventh Image - Heading Section Container */}
                <div className="w-full flex flex-col gap-[5px]">
                  {/* Eighth Image - Title Container */}
                  <div className="w-full flex flex-col gap-[14px]">
                    <h2
                      className="font-['Inter'] font-semibold text-[28px] leading-[50px] tracking-[-1.5px] capitalize"
                      style={{
                        fontWeight: 600,
                        color: "#132436",
                      }}
                    >
                      Find and connect with the{" "}
                      <span className="inline-flex items-center gap-2">
                        <span>right</span>
                        <span className="inline-flex items-center justify-center w-[38px] h-[38px] shrink-0">
                          <img
                            src="/images/setting-orange3.svg"
                            alt="Check icon"
                            className="w-full h-full object-contain"
                          />
                        </span>
                        <span>prospects</span>
                      </span>
                    </h2>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="w-full flex flex-col gap-[6px]">
                    <p
                      className="font-['Manrope'] font-medium text-[18px] leading-[32px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      With the Email Finder, sales and marketing teams can
                      discover accurate, verified email addresses of
                      decision-makers in their target industries.
                    </p>
                    <p
                      className="font-['Manrope'] font-medium text-[18px] leading-[32px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      No more guessing or wasting time on outdated contact
                      lists. Pair it with the Email Verifier to ensure every new
                      lead you add to your database is valid and ready for
                      outreach.
                    </p>
                  </div>
                </div>

                {/* Ninth Image - Bullet Points Container */}
                <div className="w-full flex flex-col gap-[10px]">
                  {/* Tenth Image - Individual Bullet Container */}
                  <div className="w-full flex items-start gap-[10px]">
                    <span className="inline-flex items-center justify-center w-[16px] h-[16px] shrink-0 mt-1">
                      <img
                        src="/images/Tick-1.svg"
                        alt="Check icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <p
                      className="font-['Manrope'] font-medium text-[18px] leading-[30px] tracking-[0px] flex-1"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      Identify decision-makers in specific companies or
                      industries.
                    </p>
                  </div>

                  {/* Tenth Image - Individual Bullet Container */}
                  <div className="w-full flex items-start gap-[10px]">
                    <span className="inline-flex items-center justify-center w-[16px] h-[16px] shrink-0 mt-1">
                      <img
                        src="/images/Tick-1.svg"
                        alt="Check icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <p
                      className="font-['Manrope'] font-medium text-[18px] leading-[30px] tracking-[0px] flex-1"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      Expand your pipeline with verified, reachable contacts.
                    </p>
                  </div>

                  {/* Tenth Image - Individual Bullet Container */}
                  <div className="w-full flex items-start gap-[10px]">
                    <span className="inline-flex items-center justify-center w-[16px] h-[16px] shrink-0 mt-1">
                      <img
                        src="/images/Tick-1.svg"
                        alt="Check icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <p
                      className="font-['Manrope'] font-medium text-[18px] leading-[30px] tracking-[0px] flex-1"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      Save time and money by avoiding fake or incorrect emails.
                    </p>
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

export default LeadGeneration;
