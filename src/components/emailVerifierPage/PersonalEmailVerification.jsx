import React, { useState } from "react";

const faqItems = [
  {
    title: "Improved deliverability",
    description:
      "Messages get to real people, minimizing bounce backs and low engagement.",
  },
  {
    title: "Better list hygiene and segmentation",
    description:
      "Messages get to real people, minimizing bounce backs and low engagement.",
  },
  {
    title: "Fraud prevention",
    description:
      "Messages get to real people, minimizing bounce backs and low engagement.",
  },
  {
    title: "Enhanced personalization",
    description:
      "Messages get to real people, minimizing bounce backs and low engagement.",
  },
  {
    title: "Cost savings",
    description:
      "Messages get to real people, minimizing bounce backs and low engagement.",
  },
];

const PersonalEmailVerification = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px] py-[80px] sm:py-[100px]">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-[21px]">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-[6px] rounded-[50px] bg-[#F8F7FF] px-4 py-3 sm:px-5 sm:py-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#4A90E2]" />
              <span className="font-['Inter'] text-sm sm:text-base font-semibold capitalize leading-[18px] tracking-normal text-[#132436] align-middle">
                12,000+ Happy Clients
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-4 sm:gap-[16px] text-center">
            <h2 className="flex flex-wrap items-center justify-center gap-3 font-['Inter'] text-[clamp(32px,6vw,60px)] font-semibold leading-[100%] tracking-[-2.2px] text-[#132436]">
              <span>Personal</span>
               <span className="inline-flex items-center justify-center">
                <img
                  src="/images/email-icon-2.svg"
                  alt="Email icon"
                  className="h-[54px] w-[54px]"
                />
              </span>
              <span>Email Verification</span>
            </h2>
            <p className="max-w-full font-['Manrope'] text-[clamp(18px,3vw,26px)] font-medium leading-[clamp(32px,5vw,44px)] text-[#546779] text-center">
              Personal email verification confirms individuals’ personal
              addresses from free providers (e.g., Gmail, Yahoo, Outlook) or any
              non-business domain.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-[60px] sm:mt-[70px] md:mt-[90px]  lg:flex-row gap-[40px] lg:gap-[50px]">
          <div className="w-full max-w-full">
            <div className="w-full rounded-[24px]  px-6 sm:px-8 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8 bg-white">
              {faqItems.map((item, index) => {
                const isActive = activeIndex === index;
                const isLast = index === faqItems.length - 1;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col gap-6 sm:gap-8"
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isActive}
                      className="flex w-full items-center justify-between gap-6 text-left"
                    >
                      <span className="font-['Inter'] text-[clamp(20px,3.5vw,22px)] font-semibold  text-[#132436] capitalize">
                        {item.title}
                      </span>
                      <span
                        className={`flex h-9 w-[54px] items-center justify-center rounded-full transition-colors duration-200 ${
                          isActive ? "bg-[#EB3609]" : "bg-[#F4F7FA]"
                        }`}
                      >
                        <span
                          className={`font-['Inter'] text-lg font-semibold ${
                            isActive ? "text-white" : "text-[#132436]"
                          }`}
                        >
                          {isActive ? "-" : "+"}
                        </span>
                      </span>
                    </button>
                    {isActive && (
                      <p className="font-['Manrope'] text-[clamp(18px,3vw,20px)] font-normal leading-[clamp(32px,4.5vw,40px)] text-[#676E8C]">
                        {item.description}
                      </p>
                    )}
                    {!isLast && <div className="h-px w-full bg-[#EEF0F3]" />}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-full shrink-1 rounded-[24px] bg-linear-to-t from-[#E8FAFF] to-[#E4E4FF] p-6 sm:p-8 md:p-10 lg:p-[50px] flex flex-col gap-8 sm:gap-10 md:gap-[50px]">
            <div className="w-full flex justify-center">
              <img
                src="/images/business-email.png"
                alt="Business email verification illustration"
                className="w-full max-w-[400px] max-h-[448px]"
              />
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              <p className="text-left font-['Manrope'] text-[clamp(18px,3vw,22px)] font-medium leading-[clamp(32px,5vw,36px)] text-[#546779]">
                It checks whether an individual’s email address is real, valid,
                and safe to use.
                <br /> This is essential for both customer acquisition and
                maintaining subscriber integrity for B2C communications.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[30px] sm:mt-[50px]">
        <div className="w-full rounded-[24px] bg-size-[100%_100%] bg-[linear-gradient(270.08deg,_#DEF7FF_-43.6%,_#F3F3FF_99.93%)] px-6 sm:px-10 md:px-14 lg:px-[50px] py-10 sm:py-12 md:py-[50px] flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-[50px]">
            <div className="flex flex-col gap-5 md:gap-[15px] text-center md:text-left max-w-auto">
              <h3 className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-3 font-['Inter'] text-[clamp(28px,4.5vw,36px)] font-semibold leading-[110%] tracking-[-1.5px] text-[#132436] capitalize">
                <span className="flex items-center gap-2 md:gap-3">
                  <span>Our</span>
                  <span className="inline-flex items-center justify-center">
                    <img
                      src="/images/Commitment-2.svg"
                      alt="Business icon"
                      className="h-[clamp(40px,5vw,48px)] w-[clamp(50px,6vw,60px)]"
                    />
                  </span>
                </span>
                <span className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span>Personal</span>
                  <span>Email</span>
                  <span>Verification</span>
                  <span>Process</span>
                </span>
              </h3>
              <p className="font-['Manrope'] text-[clamp(18px,3vw,20px)] font-normal leading-[clamp(30px,4.5vw,32px)] text-[#5A6B7D]">
                Key highlights of our checkpoints are Syntax validation, domain
                verification, disposable email flagging, spam trap detection,
                mailbox existence check.
              </p>
            </div>
             <div className="flex w-full md:w-auto justify-center md:justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 whitespace-nowrap justify-center rounded-[50px] bg-[#EB3609] px-8 sm:px-10 py-4 text-center font-['Inter'] text-[clamp(18px,3vw,20px)] font-semibold leading-[100%] text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                Try It Free
                <img
                  src="/images/right-arrow.svg"
                  alt="Arrow"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalEmailVerification;
