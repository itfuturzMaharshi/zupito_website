import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const featureCards = [
  {
    title: "Empower solo users & large teams alike",
    description:
      "From individual sales reps to enterprise recruiting teams, our tool handles both one-off lookups and large-scale list enrichment.",
    image: "/images/shape-automate-1.jpg",
  },
  {
    title: "97% + Accuracy = More Conversions",
    description:
      "We use a multi-layer process that ensures you reach working inboxes, reducing bounce rates and keeping campaigns effective.",
    image: "/images/shape-automate-2.jpg",
  },
  {
    title: "Simple, Transparent Pricing",
    description:
      "Only pay for successful results. No hidden costs, no wasted credits.",
    image: "/images/shape-automate-3.jpg",
  },
  {
    title: "Global Coverage",
    description:
      "Sales teams, recruiters, agencies, and startups across industries rely on our Email Finder daily to drive measurable results.",
    image: "/images/shape-automate-4.jpg",
  },
  {
    title: "Real-Time Verification Built-In",
    description:
      "Unlike tools that only guess patterns, we validate each result instantly so you don't waste credits or risk your sender reputation.",
    image: "/images/shape-automate-5.jpg",
  },
  {
    title: "Simple, Transparent Pricing",
    description:
      "Only pay for successful results. No hidden costs, no wasted credits.",
    image: "/images/shape-automate-6.jpg",
  },
];

const EmailFinder = () => {
  const sectionRef = useScrollReveal();
  return (
    <section ref={sectionRef} data-animate="fade-up" className="w-full">
      {/* Container with responsive padding */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[150px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-full lg:max-w-[1362px] mx-auto">
          {/* Main content block - responsive container */}
          <div className="w-full max-w-full lg:max-w-[1362px] mx-auto">
            {/* Content wrapper with gap spacing */}
            <div className="flex flex-col gap-[100px]">
              {/* Top section with badge and heading */}
            <div className="w-full flex flex-col gap-[21px]">
                {/* Plugin Integration Badge */}
                <div className="w-fit">
                  <div className="inline-flex items-center gap-2 capitalize w-[187px] h-[42px] rounded-[50px] py-3 px-4 bg-[#F6F6F6] font-semibold text-base leading-[18px] tracking-normal align-middle text-[#132436]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {/* Blue dot icon */}
                    <span className="inline-block rounded-full w-2 h-2 bg-blue-500 shrink-0" />
                    <span>Plugin Integration</span>
                  </div>
                </div>

                {/* Heading and Description Section */}
                <div className="w-full grid-cols-2 lg:items-start gap-[42px] grid ">
                  {/* Heading Section */}
                  <div className="w-full lg:w-auto shrink-0">
                  <h2
                    data-animate-item
                    className="home-title text-[#132436] font-['Inter'] flex flex-col gap-3"
                  >
                    <span className="inline-flex items-center flex-wrap gap-2">
                      <span>Why</span>
                      <img
                        src="/images/setting-orange.svg"
                        alt=""
                        className="w-[28px] h-[28px] md:w-[75px] md:h-[60px]"
                      />
                      <span>Choose Our</span>
                    </span>
                    <span>Email Finder</span>
                  </h2>
                  </div>

                  {/* Description Paragraph */}
                  <div className="w-full lg:flex-1">
                  <p
                    data-animate-item
                    style={{ transitionDelay: "0.08s" }}
                    className="home-description text-[#546779] font-['Manrope']"
                  >
                    When it comes to finding accurate contacts, precision
                    matters. Here's why professionals choose us over
                    competitors:
                  </p>
                  </div>
                </div>
              </div>

              {/* Feature Cards Grid Section */}
            <div className="w-full max-w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                {featureCards.map((card, idx) => (
                  <div
                    key={`${card.title}-${idx}`}
                    data-animate-item
                    style={{ transitionDelay: `${0.05 * (idx + 1)}s` }}
                    className="rounded-[24px] border-2 border-[#EEF0F3] p-[40px] bg-[#F6F6FF] flex flex-col gap-[40px]"
                  >
                    <div className="w-full">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-[20px]">
                      <h3 className="home-subtitle text-[#132436] font-['Inter'] capitalize">
                        {card.title}
                      </h3>
                      <p className="home-description text-[#5F6A97] font-['Manrope']">
                        {card.description}
                      </p>
                    </div>
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

export default EmailFinder;
