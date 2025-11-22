import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        @keyframes rotateClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-animation {
          animation: rotateClockwise 20s linear infinite;
          transform-origin: center center;
        }
      `}</style>
      <section className="relative w-full overflow-hidden bg-transparent">
        {/* Outer layout container (mobile 24px padding) */}
        <div className="w-full flex justify-center sm:px-6 sm:py-6 md:py-6">
          {/* Background box with required properties */}
          <div
            className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center opacity-100"
            style={{
              backgroundImage: "url('/images/email-finder-footer-bg-img.png')",
            }}
          >
            {/* Promotional Banner Section */}
            <div className="w-full flex justify-center px-6 py-6 sm:py-6 md:py-6 mb-6 overflow-visible">
              <div
                className="relative w-full max-w-full mx-auto rounded-[24px] overflow-visible bg-no-repeat bg-cover bg-center opacity-100"
                style={{
                  backgroundImage: "url('/images/Banner-BG.png')",
                  minHeight: "540px",
                }}
              >
                {/* Yellow Circle Decorative Element */}
                <div
                  className="absolute rounded-full bg-[#FFDD47] z-[1] hidden lg:block"
                  style={{
                    width: "clamp(40px, 30vw, 80px)",
                    height: "clamp(40px, 30vw, 80px)",
                    top: "clamp(100px, -5vw, -100px)",
                    right: "clamp(130px, -5vw, -100px)",
                  }}
                ></div>
                <div className="relative w-full h-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-38 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-[2]">
                  {/* Left Content Section */}
                  <div className="w-full lg:w-auto lg:flex-1 flex flex-col justify-center">
                    {/* Ready Templates Badge */}
                    <div className="w-full max-w-[786px] mb-6 sm:mb-[18px]">
                      <div className="inline-flex items-center gap-[6px] px-4 py-3 rounded-[50px] bg-[#2E6D7E]">
                        <div className="w-2 h-2 rounded-full bg-[#FFDD47]"></div>
                        <span className="text-white font-['Inter'] font-medium text-base leading-[100%] align-middle">
                          Ready Templates
                        </span>
                      </div>
                    </div>

                    {/* Main Content Container */}
                    <div className="w-full max-w-[626px] flex flex-col gap-6 sm:gap-[40px]">
                      {/* Headline Section */}
                      <div className="flex flex-col gap-8 sm:gap-[40px]">
                        <div className="flex flex-col gap-4 sm:gap-[10px]">
                          <h1 className="text-white capitalize font-['Inter'] font-semibold text-[30px] sm:text-[40px] tracking-[-2.4px] align-middle">
                            Start Building Better{" "}
                            <span className="font-['Inter'] font-bold text-[#FFDD47]">
                              Campaigns
                            </span>{" "}
                            Today
                          </h1>

                          <p className="text-white font-['Manrope'] font-medium text-[19px] leading-[30px] tracking-[0px] align-middle">
                            Sign up free and get complimentary monthly credits
                            to try both the Email Finder and Verifier. Generate
                            new leads, clean your lists, and drive real results
                            with confidence.
                          </p>
                        </div>
                      </div>

                      {/* CTA Buttons Section */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                        <button className="flex items-center justify-center gap-[10px] px-5 py-3 rounded-[50px] w-full sm:w-auto bg-[#EB3609] max-w-[180px] min-h-[50px]">
                          <span className="text-white font-['Inter'] font-semibold text-lg leading-[100%] tracking-[0px] align-middle">
                            Contact Us
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 15L12.5 10L7.5 5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Image Section */}
                  <div className="w-full lg:w-auto shrink-0 flex items-center justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] flex items-center justify-center overflow-visible">
                      {/* Animated Background Image - Positioned to the left, overlapping */}
                      <div
                        className="absolute z-20 top-[35%] -translate-y-1/2"
                        style={{
                          left: "clamp(-720px, -25%, -130px)",
                        }}
                      >
                        <img
                          src="/images/footer-animation-2.png"
                          alt="Animation"
                          className="rotate-animation object-contain block"
                          style={{
                            width: "clamp(180px, 28vw, 150px)",
                            height: "clamp(180px, 28vw, 350px)",
                          }}
                        />
                      </div>
                      {/* Main Portrait Image */}
                      <img
                        src="/images/email-finder-footer-vectore.png"
                        alt="Promotional"
                        className="w-full h-auto object-contain relative z-10"
                        style={{
                          maxHeight: "clamp(300px, 45vw, 464px)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =========================== */}
            <div className="flex flex-col gap-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[150px]">
              <div className="w-full max-w-full mx-auto mt-8 flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-[16px] bg-[#1F2C2C] p-6 md:p-10 flex flex-col gap-4 md:gap-6 min-h-[210px]">
                  <div className="text-white font-extrabold text-[28px] sm:text-[34px] md:text-[36px] leading-[100%]">
                    Zupitu
                  </div>
                  <p className="text-white text-[16px] sm:text-[18px] leading-[28px] md:leading-[34px] max-w-[540px]">
                    From dynamic visuals to interactive features, our software
                    empowers you to craft a website tailored to every need.
                  </p>
                </div>

                <div className="w-full lg:w-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3">
                  {[
                    { label: "Facebook", icon: "/images/FB.svg" },
                    { label: "Linked In", icon: "/images/Linkedin.svg" },
                    { label: "Twitter", icon: "/images/Twitter.svg" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[16px] bg-[#1F2C2C] flex flex-col items-center justify-center gap-4 p-6"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="text-white text-[18px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-full mx-auto rounded-[16px] bg-[#1F2C2C] px-6 md:px-[52px] py-8 md:py-[50px]">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[60px] text-white">
                  {[
                    {
                      title: "Product",
                      items: [
                        "Email Verifier",
                        "Email Finder",
                        "Phone Verification",
                        "Pricing",
                      ],
                    },
                    {
                      title: "Resources",
                      items: ["Documentation", "Helpdesk & FAQ", "Blog"],
                    },
                    {
                      title: "Use Cases",
                      items: ["Lead Generation", "Offers"],
                    },
                    { title: "Company", items: ["Terms", "Contact Us"] },
                  ].map((col) => (
                    <div key={col.title} className="flex flex-col gap-4">
                      <h3 className="font-bold text-[18px] sm:text-[20px] tracking-[-0.32px] capitalize">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-3 md:gap-4 opacity-90">
                        {col.items.map((it) => (
                          <li
                            key={it}
                            className="text-[16px] sm:text-[17px] leading-[100%]"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full max-w-full mx-auto text-center text-white text-[14px] sm:text-[18px] py-8">
              © 2025 Zupitu.{" "}
              <span className="text-[#717680]">All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
