import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailFinder = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Outer container - follow ActionsPage spacing rhythm */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[150px]! pt-10! sm:pt-12! md:pt-14! lg:pt-16! xl:pt-20! pb-10! lg:pb-16! xl:pb-20!">
        <div className="max-w-[full] lg:max-w-[1362px] mx-auto">
          {/* First image: overall card container */}
          <div className="relative w-full bg-white  overflow-hidden">
            {/* Two column responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 md:gap-5 lg:gap-5">
              {/* LEFT: second + fourth + fifth images combined */}
              <div className="flex flex-col border-[#EEF0F3] border-solid border rounded-[24px]" data-animate-item>
                {/* Second image area (feature chips panel) */}
                <div className="relative w-full bg-[#F5F5F5] rounded-t-[24px] pt-10! sm:pt-10! md:pt-[40px] px-4 sm:px-6 pb-6! ">
                  {/* Use provided image as-is (no manual chips) */}
                  <div className="w-full flex items-center justify-center">
                    <img
                      src="/images/container.png"
                      alt="CRM features"
                      className="w-full h-auto max-w-[800px] object-contain rounded-[16px]"
                    />
                  </div>
                </div>

                {/* Fourth image (bottom description panel) */}
                <div className="w-full bg-[#FCFCFD] rounded-b-[24px] p-6 h-full">
                  <div className="max-w-[750px] gap-10 mx-auto flex flex-col justify-between h-full">
                    {/* Fifth image text */}
                    <div>
                      <p className="home-description text-[16px]! sm:text-[18px]! md:text-[20px]! lg:text-[20px]! xl:text-[24px]! font-normal! text-[#4A4E5C] font-['Manrope']">
                        Beyond Opt-In mail list, email finder is a one of the
                        most reliable sources of building a deliverable list.
                        Zupitu helps you uncover the most accurate.
                      </p>
                    </div>
                    <div>
                      <button
                        data-hover="lift"
                        className="inline-flex font-['Manrope'] items-center gap-2 text-[#EB3609] font-bold text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px] md:text-[22px] md:leading-[30px] capitalize cursor-pointer"
                      >
                        <span>Explore Email Finder</span>
                        <img
                          src="/images/right-orange-arrow.svg"
                          alt="Right arrow icon"
                          className="w-5 h-5 mt-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: sixth image background with list */}
              <div
                className="relative min-h-auto lg:min-h-auto p-4! sm:p-5! md:p-6! rounded-[24px] border-[#EEF0F3] border-solid border"
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
              >
                <img
                  src="/images/7.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover rounded-[24px]"
                />

                <div className="relative z-1 w-full h-full flex flex-col items-center gap-5 sm:gap-6 md:gap-6 p-3 sm:p-4">
                  {/* Title */}
                <h3
                  data-animate-item
                  style={{ transitionDelay: "0.2s" }}
                  className="home-subtitle px-3 sm:text-[24px]! md:text-[28px]! lg:text-[32px]! text-center font-['Inter'] text-[#132436] capitalize"
                >
                    List Building With Reliable <br /> Email Finder
                  </h3>

                  {/* Cards */}
                  <div className="w-full max-w-[700px] mx-auto flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    {[
                      "Check domain status",
                      "Verified business emails",
                      "Upload lists without template restriction",
                      "Find complex emails",
                    ].map((label, idx) => (
                      <div
                        key={label}
                        data-animate-item
                        style={{
                          transitionDelay: `${0.15 + idx * 0.08}s`,
                        }}
                        className="w-full xs:w-full sm:w-full md:w-full lg:w-full h-[58px] md:h-[62px] lg:h-[72px] bg-white rounded-[10px] shadow-[0_8px_20px_0_#00000012] py-[10px] px-4! sm:px-5! md:px-6! flex items-center gap-4 cursor-pointer"
                      >
                        <span className="inline-flex items-center justify-center w-[38px] h-[38px] md:w-[48px] md:h-[42px] lg:w-[56px] lg:h-[46px] rounded-[10px] bg-[#F6F6F7]">
                          <img
                            src="/images/Bullet.svg"
                            alt=""
                            className="w-4! h-4 md:w-5 md:h-5 object-contain"
                          />
                        </span>
                        <span
                          className="home-description leading-5!  md:leading-6! lg:leading-8! text-[#3A4A5A] font-['Manrope'] email-finder-label"
                          style={{
                            animationDelay: `${0.28 + idx * 0.18}s`,
                            animationDuration: "0.9s",
                          }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
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

export default EmailFinder;
