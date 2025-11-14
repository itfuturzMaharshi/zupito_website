import React, { useState } from "react";

const EmailFinderDeals = () => {
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
    <section className="relative w-full bg-white overflow-hidden">
      {/* Main Container */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[200px] py-12 sm:py-16 md:py-20 lg:py-[80px] xl:py-[100px]">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Icon with Percentage Symbol */}
          <div className="relative inline-flex items-center justify-center">
            {/* Shadow circle */}
            <div
              className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full opacity-50"
              style={{
                background: "#EB3609",
                transform: "translate(-6px, 6px)",
                zIndex: 0,
              }}
            />
            {/* Main circle */}
            <div
              className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full flex items-center justify-center z-10"
              style={{ background: "#EB3609" }}
            >
              {/* Percentage symbol */}
              <span className="text-white text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-bold">
                %
              </span>
              {/* Flame-like decoration */}
              <div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4"
                style={{
                  background:
                    "radial-gradient(circle, #FF6B35 0%, #EB3609 100%)",
                  borderRadius: "50% 50% 50% 0",
                  transform: "rotate(-45deg)",
                }}
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center font-['Inter'] font-bold leading-[133%] tracking-normal text-[#1C4460] px-4 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]">
            Exclusive{" "}
            <span
              style={{
                fontFamily: '"MADE TOMMY", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(32px, 4.5vw, 70px)",
                lineHeight: "1",
                textTransform: "uppercase",
                display: "inline-block",
                verticalAlign: "baseline",
              }}
            >
              DEALS
            </span>{" "}
            to Boost Your Outreach
          </h1>
        </div>

        {/* Pricing Table Container */}
        <div
          className="w-full max-w-[1362px] mx-auto rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-[50px]"
          style={{ background: "#EDF6FB" }}
        >
          {/* Navigation Tabs Container */}
          <div className="w-full max-w-full mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div
              className="w-full h-[60px] sm:h-[70px] md:h-[75px] lg:h-[88px] rounded-[100px] sm:rounded-[130px] bg-white flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12"
              style={{ border: "1px solid #EDF6FB" }}
            >
              <button
                onClick={() => setActiveTab("deals")}
                className={`flex items-center gap-1 sm:gap-2 font-['Inter'] leading-[100%] tracking-normal capitalize transition-colors text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] ${
                  activeTab === "deals"
                    ? "font-semibold text-[#1C4460]"
                    : "font-medium text-[#1C4460] opacity-70"
                }`}
              >
                <span>Email Finder</span>
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
                className={`w-full rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-4 sm:p-5 md:p-5 lg:p-8 xl:p-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 ${
                  index === 1 ? "bg-white" : ""
                }`}
                style={{ minHeight: "clamp(180px, 22vw, 266px)" }}
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
                    className="w-full sm:w-[240px] md:w-[220px] lg:w-[260px] xl:w-[302px] h-[60px] sm:h-[65px] md:h-[70px] lg:h-[75px] xl:h-[80px] rounded-[70px] sm:rounded-[75px] md:rounded-[80px] lg:rounded-[88px] px-3 sm:px-4 md:px-4 lg:px-[18px] xl:px-[20px] py-2 sm:py-[6px] md:py-[8px] lg:py-[10px] flex items-center justify-center transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "#EB3609" }}
                  >
                    <span
                      className="font-['Inter'] font-bold leading-[100%] tracking-normal text-center whitespace-nowrap"
                      style={{
                        color: "#FFFFFF",
                        fontSize: "clamp(20px, 2vw, 26px)",
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

export default EmailFinderDeals;
