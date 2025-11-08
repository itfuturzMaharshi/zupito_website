import React from "react";

const BulkEmailFinder = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/bulk-email-finder-bg-img.png)",
      }}
    >
      {/* Outer container with responsive padding */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="max-w-full mx-auto">
          {/* Main container - max-width 1362px */}
          <div className="w-full max-w-full mx-auto flex flex-col gap-[100px]">
            {/* Header Section - width: 1362px, height: 270px, gap: 100px */}
            <div className="w-full flex flex-col lg:flex-row gap-[30px] lg:gap-[70px]">
              {/* Left Column - width: 631px, height: 270px, gap: 20px */}
              <div className="w-full lg:max-w-[631px] flex flex-col gap-5">
                {/* Title: Bulk Email Finder */}
                <h1
                  className="text-[40px] sm:text-[50px] lg:text-[58px] font-semibold leading-[50px] tracking-[-2.2px] text-[#132436]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Bulk{" "}
                  <img
                    src="/images/setting-orange-4.svg"
                    alt="icon"
                    className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 "
                  />{" "}
                  Email Finder
                </h1>

                {/* Description text */}
                <p
                  className="text-[20px] sm:text-[22px] lg:text-[26px] font-medium leading-[34px] sm:leading-[38px] lg:leading-[42px] text-[#546779]"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  For larger teams, speed and accuracy are non-negotiable. Our{" "}
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Bulk Email Finder
                  </span>{" "}
                  is built to process thousands of contacts in minutes -
                </p>
              </div>

              {/* Right Column - width: 631px, height: 270px, gap: 20px */}
              <div className="w-full lg:max-w-[631px] flex flex-col gap-5 justify-center">
                {/* Benefits text */}
                <p
                  className="text-[20px] sm:text-[22px] lg:text-[26px] font-medium leading-[34px] sm:leading-[38px] lg:leading-[42px] text-[#546779]"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Giving your teams an instant access to verified email lists
                  they can trust.
                  <br />
                  With the Bulk Email Finder, your team moves faster, avoids
                  wasted effort, and scales outreach confidently.
                </p>

                {/* Discover More link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#EB3609] font-bold text-[18px] sm:text-[20px] lg:text-[22px] leading-[30px] capitalize hover:opacity-80 transition-opacity w-fit"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Discover More
                  <img
                    src="/images/right-orange-arrow.svg"
                    alt="arrow"
                    className="w-[18px] h-[14px]"
                  />
                </a>
              </div>
            </div>

            {/* Feature Cards Section - width: 1362px, height: 547px, gap: 36px */}
            <div className="w-full flex flex-col gap-9 lg:gap-[70px]">
              {/* First Row - 3 cards */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[36px]">
                {/* Card 1: Upload At Scale */}
                <div className="w-full flex flex-col gap-[50px]">
                  {/* Image card with background */}
                  <div
                    className="w-full rounded-[24px] border border-[#EEF0F3] p-[30px] h-full sm:p-[40px_30px]"
                    style={{
                      boxShadow: "0px 24px 40px -10px #AEB8DF66",
                      backgroundImage: "url(/images/7.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="w-full h-full flex flex-col gap-10">
                      <img
                        src="/images/upload-csv-img.png"
                        alt="Upload CSV"
                        className="w-full h-auto object-contain"
                        style={{
                          boxShadow: "0px 10px 20px 0px #0000000F",
                          borderRadius: "12px",
                        }}
                      />

                      {/* Text content */}
                      <div className="w-full flex flex-col gap-4">
                        <h3
                          className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold leading-[100%] text-[#132436] capitalize"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          Upload At Scale
                        </h3>
                        <p
                          className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal leading-[34px] sm:leading-[38px] lg:leading-[40px] text-[#747C9A]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Simply drop in a CSV or Excel file containing names
                          and company domains.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: High-Speed Processing */}
                <div className="w-full flex flex-col gap-[50px]">
                  {/* Image card */}
                  <div
                    className="w-full rounded-[24px] border border-[#EEF0F3] p-[30px] sm:p-[40px_30px] h-full"
                    style={{
                      boxShadow: "0px 24px 40px -10px #AEB8DF66",
                      backgroundImage: "url(/images/7.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="w-full h-full flex flex-col gap-10">
                      <img
                        src="/images/progress-large-data.png"
                        alt="High-Speed Processing"
                        className="w-full h-auto object-contain"
                        style={{
                          boxShadow: "0px 10px 20px 0px #0000000F",
                          borderRadius: "12px",
                        }}
                      />

                      {/* Text content */}
                      <div className="w-full flex flex-col gap-4">
                        <h3
                          className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold leading-[100%] text-[#132436] capitalize"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          High-Speed Processing
                        </h3>
                        <p
                          className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal leading-[34px] sm:leading-[38px] lg:leading-[40px] text-[#747C9A]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Our system handles large datasets quickly, ensuring
                          your team never waits on slow manual lookups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Highest Accuracy */}
                <div className="w-full flex flex-col gap-[50px]">
                  {/* Image card */}
                  <div
                    className="w-full rounded-[24px] border border-[#EEF0F3] h-full p-[30px] sm:p-[40px_30px]"
                    style={{
                      boxShadow: "0px 24px 40px -10px #AEB8DF66",
                      backgroundImage: "url(/images/7.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="w-full h-full flex flex-col gap-10">
                      <img
                        src="/images/every-email-auto-verified.png"
                        alt="Highest Accuracy"
                        className="w-full h-auto object-contain"
                        style={{
                          boxShadow: "0px 10px 20px 0px #0000000F",
                          borderRadius: "12px",
                        }}
                      />

                      {/* Text content */}
                      <div className="w-full flex flex-col gap-4">
                        <h3
                          className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold leading-[100%] text-[#132436] capitalize"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          Highest Accuracy
                        </h3>
                        <p
                          className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal leading-[34px] sm:leading-[34px] lg:leading-[34px] text-[#747C9A]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Every email is validated before delivery, so your
                          campaigns stay clean and your sender reputation
                          remains strong.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row - 2 cards */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[50px]">
                {/* Card 4: Team-Friendly Outputs */}
                <div className="w-full flex flex-col gap-[50px]">
                  {/* Image card */}
                  <div
                    className="w-full rounded-[24px] border border-[#EEF0F3] h-full max-h-auto p-[30px] bg-white"
                    style={{
                      boxShadow: "0px 24px 40px -10px #AEB8DF66",
                    }}
                  >
                    <div className="w-full h-full flex flex-col gap-10">
                      <img
                        src="/images/export-ready-file-img.png"
                        alt="Team-Friendly Outputs"
                        className="w-full h-auto object-contain"
                        style={{
                          boxShadow: "0px 10px 20px 0px #0000001A",
                          borderRadius: "12px",
                        }}
                      />

                      {/* Text content */}
                      <div className="w-full flex flex-col gap-4">
                        <h3
                          className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold leading-[100%] text-[#132436] capitalize"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          Team-Friendly Outputs
                        </h3>
                        <p
                          className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal leading-[34px] sm:leading-[38px] lg:leading-[40px] text-[#747C9A]"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          Download structured, export-ready files that integrate
                          seamlessly into your CRM, ATS, or outreach platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5: Consistency Across Teams */}
                <div className="w-full flex flex-col gap-[50px]">
                  {/* Image card */}
                  <div
                    className="w-full rounded-[24px] border border-[#EEF0F3] h-full p-[30px] bg-white"
                    style={{
                      boxShadow: "0px 24px 40px -10px #AEB8DF66",
                    }}
                  >
                    <div className="w-full h-full flex flex-col gap-10">
                      <img
                        src="/images/unifine-data-img.png"
                        alt="Consistency Across Teams"
                        className="w-full h-auto object-contain"
                        style={{
                          boxShadow: "0px 10px 20px 0px #0000001A",
                          borderRadius: "12px",
                        }}
                      />
                              {/* Text content */}
                  <div className="w-full flex flex-col gap-4">
                    <h3
                      className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold leading-[100%] text-[#132436] capitalize"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Consistency Across Teams
                    </h3>
                    <p
                      className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal leading-[34px] sm:leading-[38px] lg:leading-[40px] text-[#747C9A]"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Ensure every representative, recruiter, or marketer works
                      from the same accurate, up-to-date contact data.
                    </p>
                  </div>
                    </div>
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

export default BulkEmailFinder;
