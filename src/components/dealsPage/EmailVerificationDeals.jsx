import React, { useState } from "react";

const EmailVerificationDeals = () => {
  const [activeTab, setActiveTab] = useState("deals");

  const deals = [
    {
      package: "100K",
      originalPrice: 300,
      dealPrice: 225,
    },
    {
      package: "250K",
      originalPrice: 625,
      dealPrice: 435,
    },
    {
      package: "500K",
      originalPrice: 1000,
      dealPrice: 600,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(180deg, #FFE7B1 0%, #FFBEF2 100%)" }}>
      {/* Main Container */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px] py-12 sm:py-16 md:py-20 lg:py-[80px] xl:py-[100px]">
        {/* Header Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
          {/* Banner Container with Border */}
          <div 
            className="w-full max-w-[920px] mx-auto rounded-[16px] sm:rounded-[20px] flex flex-row items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          >
            {/* Icon with Percentage Symbol */}
            <div className="relative shrink-0 flex items-center justify-center">
              <img
                src="/images/setting-orange-9.svg"
                alt="Deals Icon"
                className="w-[50px] h-[40px] sm:w-[60px] sm:h-[48px] md:w-[75px] md:h-[60px] lg:w-[90px] lg:h-[72px] xl:w-[125px] xl:h-[100px]"
              />
            </div>

            {/* Title - Two Lines */}
            <div className="flex-1 flex flex-col items-start justify-center min-w-0">
              <h1 className="font-['Inter'] font-bold leading-[133%] tracking-normal text-[#1C4460] text-[22px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[54px]">
                Exclusive{" "}
                <span
                  style={{
                    fontFamily: '"MADE TOMMY", sans-serif',
                    fontWeight: 900,
                    fontSize: "clamp(20px, 4vw, 60px)",
                    lineHeight: "0%",
                    textTransform: "uppercase",
                    display: "inline-block",
                    verticalAlign: "baseline",
                  }}
                >
                  DEALS
                </span>{" "}
                to Boost
              </h1>
              <h2 className="font-['Inter'] font-bold leading-[133%] tracking-normal text-[#1C4460] text-[22px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[54px] mt-0.5 sm:mt-1">
                Your Outreach
              </h2>
            </div>
          </div>
        </div>

        {/* Pricing Table Container */}
        <div
          className="w-full max-w-full mx-auto rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-[50px]"
          style={{ background: "linear-gradient(90deg, #ECE4FF 0%, #E2F4FF 100%)" }}
        >
          {/* Navigation Tabs Container */}
          <div className="w-full max-w-full mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div
              className="w-full h-[60px] sm:h-[70px] md:h-[75px] lg:h-[88px] rounded-[100px] sm:rounded-[130px] flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12"
              style={{ border: "1px solid #EDF6FB", background: "linear-gradient(90deg, #FFCB5A 0%, #FBB456 100%)" }}
            >
              <button
                onClick={() => setActiveTab("deals")}
                className={`flex items-center gap-1 sm:gap-2 font-['Inter'] leading-[100%] tracking-normal capitalize transition-colors text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] ${
                  activeTab === "deals"
                    ? "font-semibold text-[#1C4460]"
                    : "font-medium text-[#1C4460] opacity-70"
                }`}
              >
                <span>Email Verification</span>
                <span
                  style={{
                    fontFamily: '"MADE TOMMY", sans-serif',
                    fontWeight: 900,
                    fontSize: "clamp(16px, 2.2vw, 26px)",
                    lineHeight: "140%",
                    textTransform: "uppercase",
                  }}
                  className={
                    activeTab === "deals"
                      ? "text-[#1C4460]"
                      : "text-[#1C4460] opacity-70"
                  }
                >
                  DEALS
                </span>
              </button>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`font-['Inter'] leading-[100%] tracking-normal capitalize transition-colors text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] ${
                  activeTab === "pricing"
                    ? "font-semibold text-[#1C4460]"
                    : "font-medium text-[#1C4460] opacity-70"
                }`}
              >
                Features & Pricing
              </button>
            </div>
          </div>

          {/* Pricing Rows */}
          <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-6">
            {deals.map((deal, index) => (
              <div
                key={index}
                className={`w-full rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 ${
                  index === 1 ? "bg-white" : ""
                }`}
              >
                {/* Package Badge - Arrow Shape */}
                <div
                  className="relative shrink-0 w-full sm:w-[130px] md:w-[140px] lg:w-[164px]"
                  style={{ height: "clamp(70px, 10vw, 103px)" }}
                >
                  {/* Arrow shape container */}
                  <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                      background: "#1E8BC2",
                      clipPath:
                        "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
                    }}
                  >
                    {/* Light blue border effect */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
                        border: "2px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "4px 0 0 4px",
                      }}
                    />
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white w-full h-full px-2 sm:px-2 md:px-3 lg:px-4">
                      <span
                        className="font-['Nunito'] font-extrabold leading-[100%] tracking-normal capitalize"
                        style={{
                          color: "#FFFFFF",
                          fontSize: "clamp(32px, 5.5vw, 60px)",
                        }}
                      >
                        {deal.package}
                      </span>
                      <span
                        className="font-['Inter'] font-semibold mt-0.5 sm:mt-1"
                        style={{ fontSize: "clamp(12px, 1.6vw, 22px)" }}
                      >
                        Package
                      </span>
                    </div>
                  </div>
                </div>

                {/* Original Price Section */}
                <div className="flex-1 flex flex-col items-center  justify-center gap-1 sm:gap-1.5 md:gap-2  px-2 sm:px-1 md:px-0">
                  <span
                    className="font-['Inter'] font-semibold leading-[100%] tracking-normal capitalize line-through"
                    style={{
                      color: "#1C4460",
                      opacity: 0.5,
                      fontSize: "clamp(20px, 2.8vw, 30px)",
                    }}
                  >
                    ${deal.originalPrice}
                  </span>
                  <span
                    className="font-['Kanit'] font-normal leading-[100%] tracking-normal text-center sm:text-left"
                    style={{
                      color: "#133750",
                      opacity: 0.5,
                      fontSize: "clamp(14px, 1.8vw, 22px)",
                    }}
                  >
                    Price in USD
                  </span>
                </div>

                {/* Deal Price Section */}
                <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-1 sm:gap-1.5 md:gap-2 min-w-0 px-2 sm:px-1 md:px-0">
                  <span
                    style={{
                      fontFamily: '"MADE TOMMY", sans-serif',
                      fontWeight: 700,
                      lineHeight: "100%",
                      color: "#1C4460",
                      fontSize: "clamp(28px, 4.2vw, 50px)",
                    }}
                  >
                    ${deal.dealPrice}
                  </span>
                  <span
                    className="font-['Kanit'] font-normal leading-[100%] tracking-normal text-center sm:text-left"
                    style={{
                      color: "#133750",
                      fontSize: "clamp(14px, 1.8vw, 22px)",
                    }}
                  >
                    Deal Price
                  </span>
                </div>

                {/* Claim Deal Button */}
                <div className="shrink-0 w-full sm:w-auto">
                  <button
                    className="w-full sm:w-[240px] md:w-[180px] lg:w-[260px] xl:w-[260px] h-[60px] sm:h-[65px] md:h-[64px] lg:h-[70px] xl:h-[72px] rounded-[70px] sm:rounded-[75px] md:rounded-[80px] lg:rounded-[88px] px-3 sm:px-4 md:px-4 lg:px-[18px] xl:px-[20px] py-2 sm:py-[6px] md:py-[8px] lg:py-[10px] flex items-center justify-center transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "#EB3609" }}
                  >
                    <span
                      className="font-['Inter'] font-bold leading-[100%] tracking-normal text-center whitespace-nowrap"
                      style={{
                        color: "#FFFFFF",
                        fontSize: "clamp(20px, 2vw, 24px)",
                      }}
                    >
                      Claim Deal
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerificationDeals;
