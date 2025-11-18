import React, { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailFinderDeals = () => {
  const [activeTab, setActiveTab] = useState("deals");
  const sectionRef = useScrollReveal();

  const deals = [
    { package: "100K", originalPrice: 300, dealPrice: 225 },
    { package: "250K", originalPrice: 625, dealPrice: 435 },
    { package: "500K", originalPrice: 1000, dealPrice: 600 },
  ];

  return (
    <section ref={sectionRef} data-animate="fade-up" className="relative w-full bg-white overflow-hidden">
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px] py-12 sm:py-16 md:py-20 lg:py-[80px] xl:py-[100px]">
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
          <div className="w-full max-w-[920px] mx-auto rounded-[16px] sm:rounded-[20px] flex flex-row items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div data-animate-item className="relative shrink-0 flex items-center justify-center">
              <img
                src="/images/setting-orange-9.svg"
                alt="Deals Icon"
                className="w-[50px] h-[40px] sm:w-[60px] sm:h-[48px] md:w-[75px] md:h-[60px] lg:w-[90px] lg:h-[72px] xl:w-[125px] xl:h-[100px]"
              />
            </div>

            <div className="flex-1 flex flex-col items-start justify-center min-w-0 gap-1">
              <h1 data-animate-item className="home-title text-[#1C4460] font-['Inter'] font-bold text-center sm:text-left">
                Exclusive <span className="home-title text-[#EB3609] uppercase">Deals</span> to Boost
              </h1>
              <h2
                data-animate-item
                style={{ transitionDelay: "0.08s" }}
                className="home-title text-[#1C4460] font-['Inter'] font-bold text-center sm:text-left"
              >
                Your Outreach
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full lg:max-w-[1362px] mx-auto rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-[50px]" style={{ background: "#EDF6FB" }}>
          <div className="w-full max-w-full mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div
              data-animate-item
              className="w-full h-[60px] sm:h-[70px] md:h-[75px] lg:h-[88px] rounded-[100px] sm:rounded-[130px] bg-white flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12"
              style={{ border: "1px solid #EDF6FB" }}
            >
              <button
                onClick={() => setActiveTab("deals")}
                className={`flex items-center gap-1 sm:gap-2 home-description font-['Inter'] uppercase transition-colors text-[#1C4460] ${
                  activeTab === "deals" ? "font-semibold" : "opacity-70"
                }`}
              >
                <span className="font-semibold">Email Finder</span>
                <span className="home-title text-[#1C4460] uppercase">Deals</span>
              </button>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`home-description font-['Inter'] transition-colors text-[#1C4460] ${
                  activeTab === "pricing" ? "font-semibold" : "opacity-70"
                }`}
              >
                Features & Pricing
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-6">
            {deals.map((deal, index) => (
              <div
                key={deal.package}
                data-animate-item
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                className={`w-full rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 ${
                  index === 1 ? "bg-white" : ""
                }`}
              >
                <div
                  className="relative shrink-0 w-full sm:w-[130px] md:w-[140px] lg:w-[164px]"
                  style={{ height: "clamp(70px, 10vw, 103px)" }}
                >
                  <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                      background: "#1E8BC2",
                      clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
                        border: "2px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "4px 0 0 4px",
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center text-white w-full h-full px-2 sm:px-2 md:px-3 lg:px-4">
                      <span className="home-title text-white font-['Inter'] uppercase">{deal.package}</span>
                      <span className="home-description text-white/90 font-['Inter'] uppercase">Package</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-1 md:px-0">
                  <span className="home-subtitle font-['Inter'] line-through text-[#1C4460]/60">
                    ${deal.originalPrice}
                  </span>
                  <span className="home-description text-[#133750] opacity-70 text-center sm:text-left">
                    Price in USD
                  </span>
                </div>

                <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-1 sm:gap-1.5 md:gap-2 min-w-0 px-2 sm:px-1 md:px-0">
                  <span className="home-title text-[#1C4460] font-['Inter']">${deal.dealPrice}</span>
                  <span className="home-description text-[#133750] text-center sm:text-left">Deal Price</span>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <button
                    data-hover="lift"
                    className="w-full sm:w-[240px] md:w-[180px] lg:w-[260px] xl:w-[260px] h-[60px] sm:h-[65px] md:h-[64px] lg:h-[70px] xl:h-[72px] rounded-[70px] sm:rounded-[75px] md:rounded-[80px] lg:rounded-[88px] px-3 sm:px-4 md:px-4 lg:px-[18px] xl:px-[20px] py-2 sm:py-[6px] md:py-[8px] lg:py-[10px] flex items-center justify-center bg-[#EB3609] hover:bg-[#FF6B35] text-white transition-all"
                  >
                    <span className="home-subtitle text-white font-['Inter'] font-semibold whitespace-nowrap">
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


