import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const Teams = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FDF9FB] overflow-hidden"
    >
      {/* Outer container spacing mirrors ActionsPage rhythm */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[170px]! py-12! lg:py-16!">
        <div className="max-w-[full] lg:max-w-[1024px] mx-auto">
          {/* Top badge */}
          <div
            data-animate-item
            className="inline-flex font-['Manrope'] items-center justify-center gap-[6px] rounded-[50px] bg-[#FFE9F2] px-2! py-2 h-[34px] text-center align-middle font-bold text-[#132436] text-[14px] leading-[100%]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
            <span>Plugin integration</span>
          </div>

          {/* Hero row: heading left, paragraph right on large screens */}
          <div className="mt-5! grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start gap-6 lg:gap-16">
            {/* Heading */}
            <h2
              data-animate-item
              style={{ transitionDelay: "0.08s" }}
              className="home-title xl:w-[560px] font-['Inter'] font-bold text-[#132436]"
            >
              <span className="inline-block align-middle">
                Reach
                <span className="align-middle inline-flex items-center justify-center mx-2! relative top-[-2px]">
                  <img
                    src="/images/sec-4.svg"
                    alt=""
                    className="w-[28px] h-[28px] md:w-[56px] md:h-[56px]"
                  />
                </span>
                <span className="text-[#3A4A5A] opacity-50">Real </span>
                <br className="hidden sm:block" />
                Prospects Faster
                <span className="align-middle inline-flex items-center justify-center ml-2! relative top-[-2px]">
                  <img
                    src="/images/section-4.svg"
                    alt=""
                    className="w-[28px] h-[28px] md:w-[56px] md:h-[56px]"
                  />
                </span>
              </span>
            </h2>

            {/* Sub copy */}
            <div>
              <p
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
                className="home-description text-[#546779] font-['Manrope'] max-w-[620px]"
              >
                Zupitu’s fast, intuitive platform empowers teams to verify leads
                quickly with minimal training required.
              </p>
            </div>
          </div>
          {/* Features grid */}
          <div className="mt-10! sm:mt-12! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[20px]">
            {[
              {
                title: "Streamlined Efficiency",
                desc: "Combining verification & email - finding features in one platform, save seamless lead generation.",
              },
              {
                title: "Automate Workflows",
                desc: "Streamline processes, save time, and ensure consistent image quality across your platforms.",
              },
              {
                title: "Customer Support",
                desc: "Boost support efficiency, elevate customer satisfaction, and deliver a seamless user experience.",
              },
              {
                title: "Quick Results, Zero Complexity",
                desc: "Zupitu's intuitive platform. Get your team verifying and finding contacts in minutes, not days.",
              },
              {
                title: "Cost-Effective Solutions",
                desc: "Zupitu’s affordable plans unlock premium features -perfect for businesses of all sizes.",
              },
              {
                title: "Campaign With Confidence",
                desc: "Run your campaigns with confidence -Zupitu is built and trusted by customers like you.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-animate-item
                style={{ transitionDelay: `${0.1 * idx}s` }}
                data-hover="lift"
                className="bg-white rounded-[16px] shadow-[0px_7px_16px_0px_#181D2717] px-5! pt-8 pb-10 min-h-[260px] flex flex-col gap-[16px] cursor-pointer"
              >
                <div className="w-[56px] h-[56px] rounded-full bg-[#FAFAFF] flex items-center justify-center">
                  <img
                    src={
                      idx === 0
                        ? "/images/streamlined-efficiency.svg"
                        : idx === 1
                        ? "/images/automate-workflows.svg"
                        : idx === 2
                        ? "/images/customer-support.svg"
                        : idx === 3
                        ? "/images/quick-results.svg"
                        : idx === 4
                        ? "/images/costEffective-solutions.svg"
                        : "/images/campaign-confidence.svg"
                    }
                    alt=""
                    className="w-[32px] h-[32px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[20px]! font-semibold leading-7 text-[#132436] font-['Inter'] capitalize">
                    {item.title}
                  </h3>
                  <p className="home-description text-[#546779] font-['Manrope']">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
