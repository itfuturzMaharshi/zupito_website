import React from "react";

const SalesProspecting = () => {
  const bulletPoints = [
    "Increase response rates with verified addresses.",
    "Minimize bounce rates that hurt your sender reputation.",
    "Give sales teams confidence in every email they send.",
  ];

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-0 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[150px] pb-[60px]">
        <div className="relative w-full max-w-full lg:max-w-[1362px] mx-auto rounded-[24px]">
          <div className="w-full max-w-full lg:max-w-[1362px] mx-auto  flex flex-col gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12 ">
            <div
              className="w-full max-w-full lg:max-w-[1362px] mx-auto h-[95px] flex items-center justify-center rounded-[16px] relative"
              style={{
                background:
                  "linear-gradient(90deg, rgba(241, 244, 247, 0.5) 0%, rgba(221, 238, 255, 0.5) 100%)",
                transform: "rotate(-180deg)",
              }}
            >
              <h1
                className="text-center font-['Inter'] font-bold text-[30px] lg:text-[40px] leading-[100%] tracking-[0%]"
                style={{
                  color: "#053155",
                  transform: "rotate(180deg)",
                }}
              >
                Cold Outreach & Sales Prospecting
              </h1>
            </div>

            <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-[50px]">
              <div className="w-full lg:max-w-[629px] lg:flex-1 flex flex-col gap-[20px]">
                <div className="w-full flex flex-col gap-[10px]">
                  <div className="w-full flex flex-col gap-[14px]">
                    <h2
                      className="font-['Inter'] font-semibold text-[28px]  capitalize flex flex-wrap items-center justify-center sm:justify-start text-center sm:text-left"
                      style={{
                        fontWeight: 600,
                        color: "#132436",
                      }}
                    >
                      <span>Reach The Right</span>
                      <span className="inline-flex items-center justify-center w-[38px] h-[38px] shrink-0 mx-2">
                        <img
                          src="/images/setting-orange-6.svg"
                          alt="Check icon"
                          className="w-full h-full object-contain"
                        />
                      </span>
                      <span>People </span>
                      <span>With Confidence</span>
                    </h2>
                  </div>
                  <div className="w-full flex flex-col gap-[10px]">
                    <p
                      className="font-['Manrope'] font-medium text-[18px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#3C4E60",
                      }}
                    >
                      Cold outreach is only effective if your emails actually
                      land in inboxes. Our Email Finder helps you uncover the
                      right email addresses for your prospects, while the Email
                      Verifier ensures those emails are accurate and
                      deliverable.
                    </p>
                    <p
                      className="font-['Manrope'] font-medium text-[18px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#3C4E60",
                      }}
                    >
                      Together, they maximize your chances of starting real
                      conversations and closing deals.
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-[12px]">
                  {bulletPoints.map((point) => (
                    <div
                      key={point}
                      className="w-full flex items-start gap-[16px]"
                    >
                      <span
                        className="inline-flex items-center justify-center w-[36px] h-[36px] shrink-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(180deg, #EEF6FF 0%, #DFEEFF 100%)",
                        }}
                      >
                        <img
                          src="/images/Tick-1.svg"
                          alt="Check icon"
                          className="w-[16px] h-[16px] object-contain"
                        />
                      </span>
                      <p className="font-['Manrope'] font-medium text-[18px] leading-[30px] text-[#3C4E60] flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:flex-1 flex items-center justify-center">
                <div className="w-full  rounded-[32px] flex flex-col shadow-[0px_20px_70px_rgba(7,24,65,0.18)]">
                  <div className="w-full flex items-center justify-center">
                    <img
                      src="/images/sales-prospecting-img.png"
                      alt="Sales Prospecting Illustration"
                      className="w-full h-auto max-w-full object-contain"
                    />
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

export default SalesProspecting;
