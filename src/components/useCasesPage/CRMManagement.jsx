import React from "react";

const CRMManagement = () => {
  const bulletPoints = [
    "Maintain a clean, accurate CRM.",
    "Reduce wasted effort on dead leads.",
    "Enable teams to act on reliable data.",
  ];

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-0 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[150px] py-[70px]">
        <div className="relative w-full max-w-full lg:max-w-[1362px] mx-auto rounded-[24px]">
          <div className="w-full max-w-full lg:max-w-[1362px] mx-auto  flex flex-col gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12">
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
                Database & CRM Management
              </h1>
            </div>

            <div className="w-full max-w-full lg:max-w-[1362px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-[50px]">
              <div className="w-full lg:max-w-[629px] lg:flex-1 flex flex-col gap-[21px]">
                <div className="w-full flex flex-col gap-[8px]">
                  <div className="w-full flex flex-col gap-[14px]">
                    <h2
                      className="font-['Inter'] font-semibold text-[28px] capitalize flex flex-wrap items-center justify-center sm:justify-start text-center sm:text-left"
                      style={{
                        fontWeight: 600,
                        color: "#132436",
                      }}
                    >
                      <span>Keep your database </span>
                      <div className="inline-flex items-center justify-center">
                      <span> clean & </span>
                      <span className="inline-flex items-center justify-center w-[38px] h-[38px] shrink-0 mx-2">
                        <img
                          src="/images/setting-orange-6.svg"
                          alt="Check icon"
                          className="w-full h-full object-contain"
                        />
                      </span>
                      <span>actionable</span>
                      </div>
                    </h2>
                  </div>
                  <div className="w-full flex flex-col gap-[10px]">
                    <p
                      className="font-['Manrope'] font-medium text-[18px] leading-[32px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#3C4E60",
                      }}
                    >
                      An outdated or messy database can slow down both marketing
                      and sales. The Email Verifier regularly cleans your lists
                      to remove invalid or inactive emails, while the Finder
                      fills your CRM with fresh contacts.
                    </p>
                    <p
                      className="font-['Manrope'] font-medium text-[18px] leading-[32px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#3C4E60",
                      }}
                    >
                      The result? A healthy database that keeps your pipeline
                      flowing.
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-[18px]">
                  {bulletPoints.map((point) => (
                    <div
                      key={point}
                      className="w-full flex items-start gap-[16px]"
                    >
                      <span
                        className="inline-flex items-center justify-center w-[32px] h-[32px] shrink-0 rounded-full"
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
                      <p className="font-['Manrope'] font-medium text-[clamp(18px,3vw,20px)] leading-[30px] text-[#3C4E60] flex-1">
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
                      src="/images/crm-management-img.png"
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

export default CRMManagement;
