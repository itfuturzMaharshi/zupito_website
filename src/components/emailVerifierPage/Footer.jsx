import React from "react";

const Footer = () => {
  return (
      <section className="relative w-full overflow-hidden bg-transparent">
        {/* Outer layout container (mobile 24px padding) */}
        <div className="w-full flex justify-center px-6 py-6 sm:py-6 md:py-6">
          {/* Background box with required properties */}
          <div className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/email-finder-footer-bg-img.png')]">
            {/* Promotional Banner Section */}
            <div className="w-full flex justify-center px-6 py-6 sm:py-6 md:py-6 mb-6 overflow-visible">
              <div className="relative w-full max-w-full mx-auto rounded-[24px] overflow-visible bg-cover bg-center bg-no-repeat min-h-[clamp(500px,60vw,600px)] bg-[url('/images/Banner-BG.png')]">
                {/* Yellow Circle Decorative Element */}
                <div className="absolute z-10 rounded-full bg-[#FFDD47] w-[clamp(40px,30vw,80px)] h-[clamp(40px,30vw,80px)] top-[clamp(160px,-5vw,-100px)] right-[clamp(130px,-5vw,-100px)]" />
                <div className="relative z-20 w-full h-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  {/* Left Content Section */}
                  <div className="w-full lg:w-auto lg:flex-1 flex flex-col justify-center">
                    {/* Ready Templates Badge */}
                    <div className="w-full max-w-[786px] mb-6 sm:mb-[30px]">
                      <div className="inline-flex items-center gap-[6px] px-4 py-3 rounded-[50px] bg-[#6630B4]">
                        <div className="w-2 h-2 rounded-full bg-[#FFDD47]"></div>
                        <span className="font-['Inter'] text-base font-medium leading-none text-white">
                          Ready Templates
                        </span>
                      </div>
                    </div>

                    {/* Main Content Container */}
                    <div className="w-full max-w-[786px] flex flex-col gap-6 sm:gap-[80px]">
                      {/* Headline Section */}
                      <div className="flex flex-col gap-8 sm:gap-[40px]">
                        <div className="flex flex-col gap-4 sm:gap-[16px]">
                          <h1 className="font-['Inter'] text-white text-[clamp(32px,5vw,50px)] font-semibold capitalize leading-[clamp(40px,8vw,80px)] tracking-[-2.4px]">
                            Supercharge Your Email List with Zupitu, Try It Free
                            -{" "}
                            <span className="font-['Inter'] font-bold text-[#FFDD47]">
                              Get 200 Credits
                            </span>{" "}
                            Today!
                          </h1>

                          <p className="font-['Manrope'] text-white text-[clamp(18px,2.5vw,20px)] font-medium leading-[30px]">
                            Clean, verify, and discover emails with precision.
                            Experience real-time email verification and lead
                            discovery using our all-in-one credit system. No
                            risks, no limits – just smarter outreach.
                          </p>
                        </div>
                      </div>

                      {/* CTA Buttons Section */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                        <button className="flex w-full sm:w-auto max-w-[248px] min-h-[62px] items-center justify-center gap-[10px] rounded-[50px] bg-[#EB3609] px-6 py-4">
                          <span className="font-['Inter'] text-[20px] font-semibold leading-none text-white">
                            Checkout Details
                          </span>
                          <img
                            src="/images/right-arrow.svg"
                            alt="Arrow"
                            className="h-5 w-5"
                          />
                        </button>

                        <a
                          href="#"
                          className="flex items-center gap-[10px] font-['Manrope'] text-[clamp(18px,2.5vw,24px)] font-semibold leading-[30px] text-white transition-opacity hover:opacity-80"
                        >
                          Claim 300 free credits
                          <img
                            src="/images/right-arrow.svg"
                            alt="Arrow"
                            className="h-6 w-6"
                          />
                        </a>
                      </div>   
                    </div>
                  </div>

                  {/* Right Image Section */}
                  <div className="w-full lg:w-auto shrink-0 flex items-center justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] flex items-center justify-center overflow-visible">
                      {/* Animated Background Image - Positioned to the left, overlapping */}
                      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-[-130px] md:left-[-200px] xl:left-[-280px]">
                        <img
                          src="/images/footer-animation-2.png"
                          alt="Animation"
                          className="block h-[clamp(180px,28vw,350px)] w-[clamp(180px,28vw,350px)] object-contain animate-[spin_20s_linear_infinite]"
                        />
                      </div>
                      {/* Main Portrait Image */}
                      <img
                        src="/images/email-finder-footer-vectore.png"
                        alt="Promotional"
                        className="relative z-10 h-auto max-h-[clamp(300px,45vw,464px)] w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =========================== */}
            <div className="flex flex-col gap-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[150px]">
              <div className="w-full max-w-full mx-auto mt-10 md:mt-14 lg:mt-16 flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-[16px] bg-[#191540] p-6 md:p-10 flex flex-col gap-4 md:gap-6 min-h-[224px]">
                  <div className="text-white font-['Inter'] font-extrabold text-[28px] sm:text-[34px] md:text-[40px] leading-[100%]">
                    Zupitu
                  </div>
                  <p className="font-['Manrope'] text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] max-w-[722px]">
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
                      className="rounded-[16px] bg-[#191540] flex flex-col items-center justify-center gap-4 p-6"
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

              <div className="w-full max-w-full mx-auto rounded-[16px] bg-[#191540] px-6 md:px-[52px] py-8 md:py-[50px]">
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

            <div className="w-full max-w-full mx-auto py-10 text-center font-['Manrope'] text-white text-[14px] sm:text-[16px] md:text-[20px]">
              © 2025 Zupitu.{" "}
              <span className="text-[#717680]">All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Footer;
