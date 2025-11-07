import React from "react";

const Teams = () => {
  return (
    <section className="relative w-full bg-[#FDF9FB] overflow-hidden">
      {/* Outer container spacing mirrors ActionsPage rhythm */}
      <div className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[200px]! py-12! lg:py-16! xl:py-20!">
        <div className="max-w-[full] mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-[#FFE9F2] px-4! py-3 h-[42px] sm:h-[46px] text-center align-middle font-bold text-[#132436] text-[14px] leading-[100%] sm:text-[16px] md:text-[18px]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B7CF5]" />
            <span>Plugin integration</span>
          </div>

          {/* Hero row: heading left, paragraph right on large screens */}
          <div className="mt-5! grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start gap-6 lg:gap-12">
            {/* Heading */}
            <h2 className="font-semibold text-[#132436]">
              <span className="inline-block align-middle text-[34px] leading-[36px] sm:text-[42px] sm:leading-[44px] md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] tracking-[-2.2px]">
                Reach
                <span className="align-middle inline-flex items-center justify-center mx-2! relative top-[-2px]">
                  <img
                    src="/images/sec-4.svg"
                    alt=""
                    className="w-[28px] h-[28px] md:w-[56px] md:h-[56px]"
                  />
                </span>
                <span className="text-[#3A4A5A] opacity-50">Real</span>
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
            <p className="text-[#546779] font-medium text-[16px] leading-[28px] sm:text-[18px] sm:leading-[32px] md:text-[22px] md:leading-[36px] lg:text-[20px] lg:leading-[34px] xl:text-[22px] xl:leading-[36px] 2xl:text-[24px] 2xl:leading-[40px] max-w-[620px] lg:mt-[10px]">
              Zupitu’s fast, intuitive platform empowers teams to verify leads
              quickly with minimal training required.
            </p>
          </div>
          {/* Features grid */}
          <div className="mt-10! sm:mt-12! md:mt-16! lg:mt-25! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]">
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
                className="bg-white rounded-[16px] shadow-[0px_7px_16px_0px_#181D2717] px-4! py-3! min-h-[260px] flex flex-col gap-[20px]"
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
                    className="w-[28px] h-[28px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#132436] font-semibold text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[22px] lg:leading-[28px] capitalize">
                    {item.title}
                  </h3>
                  <p className="text-[#747C9A] font-normal text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[30px]">
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
