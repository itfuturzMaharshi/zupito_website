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
        <div className="w-full flex justify-center px-6! py-6! sm:py-6! md:py-6!">
          {/* Background box with required properties */}
          <div
            className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: "url('/images/email-finder-footer-bg-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            {/* Promotional Banner Section */}
            <div className="w-full flex justify-center px-6 py-6 sm:py-6 md:py-6 mb-6 overflow-visible">
              <div
                className="relative w-full max-w-full mx-auto rounded-[24px] overflow-visible bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/Banner-BG.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 1,
                  minHeight: "clamp(500px, 60vw, 600px)",
                }}
              >
                {/* Yellow Circle Decorative Element */}
                <div
                  className="absolute rounded-full"
                  style={{
                    backgroundColor: "#FFDD47",
                    width: "clamp(40px, 30vw, 80px)",
                    height: "clamp(40px, 30vw, 80px)",
                    top: "clamp(160px, -5vw, -100px)",
                    right: "clamp(130px, -5vw, -100px)",
                    zIndex: 1,
                  }}
                ></div>
                <div
                  className="relative w-full h-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-38 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
                  style={{ zIndex: 2 }}
                >
                  {/* Left Content Section */}
                  <div className="w-full lg:w-auto lg:flex-1 flex flex-col justify-center">
                    {/* Ready Templates Badge */}
                    <div className="w-full max-w-[786px] mb-6 sm:mb-[30px]">
                      <div
                        className="inline-flex items-center gap-[6px] px-4 py-3 rounded-[50px]"
                        style={{
                          background: "#6630B4",
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#FFDD47]"></div>
                        <span
                          className="text-white"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                          }}
                        >
                          Ready Templates
                        </span>
                      </div>
                    </div>

                    {/* Main Content Container */}
                    <div className="w-full max-w-[786px] flex flex-col gap-6 sm:gap-[80px]">
                      {/* Headline Section */}
                      <div className="flex flex-col gap-8 sm:gap-[40px]">
                        <div className="flex flex-col gap-4 sm:gap-[16px]">
                          <h1
                            className="text-white capitalize leading-tight sm:leading-[80px]"
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 600,
                              fontSize: "clamp(32px, 5vw, 50px)",
                              lineHeight: "clamp(40px, 8vw, 80px)",
                              letterSpacing: "-2.4px",
                              verticalAlign: "middle",
                            }}
                          >
                            Supercharge Your Email List with Zupitu, Try It Free
                            -{" "}
                            <span
                              style={{
                                fontFamily: "Inter",
                                fontWeight: 700,
                                color: "#FFDD47",
                              }}
                            >
                              Get 200 Credits
                            </span>{" "}
                            Today!
                          </h1>

                          <p
                            className="text-white"
                            style={{
                              fontFamily: "Manrope",
                              fontWeight: 500,
                              fontSize: "clamp(18px, 2.5vw, 20px)",
                              lineHeight: "30px",
                              letterSpacing: "0px",
                              verticalAlign: "middle",
                            }}
                          >
                            Clean, verify, and discover emails with precision.
                            Experience real-time email verification and lead
                            discovery using our all-in-one credit system. No
                            risks, no limits – just smarter outreach.
                          </p>
                        </div>
                      </div>

                      {/* CTA Buttons Section */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                        <button
                          className="flex items-center justify-center gap-[10px] px-6 py-4 rounded-[50px] w-full sm:w-auto"
                          style={{
                            background: "#EB3609",
                            maxWidth: "248px",
                            minHeight: "62px",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 600,
                              fontSize: "20px",
                              lineHeight: "100%",
                              letterSpacing: "0px",
                              verticalAlign: "middle",
                            }}
                          >
                            Checkout Details
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

                        <a
                          href="#"
                          className="flex items-center gap-[10px] text-white hover:opacity-80 transition-opacity"
                          style={{
                            fontFamily: "Manrope",
                            fontWeight: 600,
                            fontSize: "clamp(18px, 2.5vw, 24px)",
                            lineHeight: "30px",
                            letterSpacing: "0px",
                            verticalAlign: "middle",
                          }}
                        >
                          Claim 300 free credits
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>   
                    </div>
                  </div>

                  {/* Right Image Section */}
                  <div className="w-full lg:w-auto shrink-0 flex items-center justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] flex items-center justify-center overflow-visible">
                      {/* Animated Background Image - Positioned to the left, overlapping */}
                      <div
                        className="absolute z-20"
                        style={{
                          left: "clamp(-720px, -25%, -130px)",
                          top: "35%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <img
                          src="/images/footer-animation-2.png"
                          alt="Animation"
                          className="rotate-animation object-contain"
                          style={{
                            width: "clamp(180px, 28vw, 150px)",
                            height: "clamp(180px, 28vw, 350px)",
                            display: "block",
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
            <div className="flex flex-col gap-4 px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[200px]!">
              <div className="w-full max-w-full mx-auto mt-10! md:mt-14! lg:mt-16! flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-[16px] bg-[#1C2D3E] p-6! md:p-10! flex flex-col gap-4! md:gap-6! min-h-[224px]">
                  <div className="text-white font-extrabold text-[28px] sm:text-[34px] md:text-[40px] leading-[100%]">
                    Zupitu
                  </div>
                  <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] max-w-[722px]">
                    From dynamic visuals to interactive features, our software
                    empowers you to craft a website tailored to every need.
                  </p>
                </div>

                <div className="w-full lg:w-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
                  {[
                    { label: "Facebook", icon: "/images/FB.svg" },
                    { label: "Linked In", icon: "/images/Linkedin.svg" },
                    { label: "Twitter", icon: "/images/Twitter.svg" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[16px] bg-[#1C2D3E]  flex flex-col items-center justify-center gap-4 p-6!"
                    >
                      <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="text-white text-[18px] md:text-[20px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-full mx-auto  rounded-[16px] bg-[#1C2D3E] px-6! md:px-[52px]! py-8! md:py-[50px]!">
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
                      <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[26px] tracking-[-0.32px] capitalize">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-3 md:gap-4 opacity-90">
                        {col.items.map((it) => (
                          <li
                            key={it}
                            className="text-[16px] sm:text-[18px] md:text-[20px] leading-[100%]"
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

            <div className="w-full max-w-full mx-auto text-center text-white text-[14px] sm:text-[16px] md:text-[20px] py-10!">
              © 2025 Zupitu.{" "}
              <span className="text-white/70">All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
