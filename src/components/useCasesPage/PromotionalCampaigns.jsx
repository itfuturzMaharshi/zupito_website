import React from "react";

const PromotionalCampaigns = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F4FFF8 0%, #F8F7FF 100%)",
      }}
    >
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-0 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[150px] py-[70px]">
        <div className="relative w-full max-w-full lg:max-w-[1362px] mx-auto rounded-[24px]">
          <div className="w-full  flex flex-col gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12">
            <div
              className="w-full h-[95px] flex items-center justify-center rounded-[16px] relative"
              style={{
                background:
                  "linear-gradient(90deg, rgba(241,244,247,0.5) 0%, rgba(201,229,219,0.5) 100%)",
                transform: "rotate(-180deg)",
              }}
            >
              <h1
                className="text-center font-['Inter'] text-[26px] sm:text-[30px] lg:text-[40px] leading-[100%] tracking-[0%]"
                style={{
                  fontWeight: 700,
                  color: "#053155",
                  transform: "rotate(180deg)",
                }}
              >
                Marketing & Promotional Campaigns
              </h1>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-[12px]">
              <div className="w-full lg:max-w-[688px] flex items-center justify-center">
                <div
                  className="w-full rounded-[24px] border border-[#EEF0F3] shadow-[0px_15px_18px_0px_rgba(0,0,0,0.08)] overflow-hidden"
                >
                  <img
                    src="/images/promotional-campaigns-img.png"
                    alt="Marketing and promotional campaigns illustration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div
                className="w-full lg:max-w-[579px] flex flex-col gap-[20px] rounded-[24px] border border-[#EEF0F3] bg-white shadow-[0px_15px_18px_0px_rgba(0,0,0,0.08)] p-6 sm:p-8 lg:px-[32px] lg:py-[24px]"
                style={{
                  boxShadow: "0px 15px 18px 0px #00000014",
                }}
              >
                <div className="w-full flex flex-col gap-[5px]">
                  <p
                    className="font-['Manrope'] text-[18px]"
                    style={{
                      fontWeight: 500,
                      color: "#3C4E60",
                    }}
                  >
                    Invalid emails drain marketing budgets and damage
                    deliverability. By verifying your email lists before sending
                    promotional campaigns, you ensure your message reaches real
                    people.
                  </p>
                  <p
                    className="font-['Manrope'] text-[18px]"
                    style={{
                      fontWeight: 500,
                      color: "#3C4E60",
                    }}
                  >
                    And with the Finder, you can continuously add new, valid
                    prospects to your campaigns.
                  </p>
                </div>

                <div className="w-full flex flex-col gap-[10px]">
                  {[
                    "Improve inbox placement and campaign performance.",
                    "Protect your marketing ROI by avoiding wasted sends.",
                    "Grow your reach with fresh, accurate contacts.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="w-full flex items-start gap-[8px]"
                    >
                      <span
                        className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-full"
                        style={{
                          background: "#FAFBFF",
                          padding: "10px",
                        }}
                      >
                        <span className="w-[16px] h-[16px] inline-flex items-center justify-center">
                          <img
                            src="/images/Tick-1.svg"
                            alt="Check icon"
                            className="w-full h-full object-contain"
                          />
                        </span>
                      </span>
                      <p
                        className="flex-1 font-['Manrope'] text-[18px]"
                        style={{
                          fontWeight: 500,
                          color: "#3C4E60",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalCampaigns;
