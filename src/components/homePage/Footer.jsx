import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const Footer = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* Outer layout container (mobile 24px padding) */}
      <div className="w-full flex justify-center px-6! py-6! sm:py-6! md:py-6!">
        {/* Background box with required properties */}
        <div
          className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center py-12! sm:py-16! md:py-20! px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[170px]!"
          style={{
            backgroundImage: "url('/images/footer-bg-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        >
          <img
            src="/images/home-footer-vector.png"
            alt=""
            className="hidden lg:flex pointer-events-none select-none absolute w-[120px] z-[1] sm:w-[160px] md:w-[190px]"
            style={{
              right: 'clamp(50px, 2.5vw, 15px)',
              top: 'clamp(150px, 4.5vh, 45px)',
            }}
          />
          <div 
            className="hidden lg:flex absolute pointer-events-none z-[1] w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52"
            style={{
              left: '35px',
              bottom: '67%',
            }}
          >
            <img
              src="/images/footer-animation-1.png"
              alt="footer decorative 1"
              className="w-full h-full object-contain animate-[spin_20s_linear_infinite]"
            />
          </div>
          <img
            src="/images/orange-circle.png"
            alt=""
            className="hidden lg:flex pointer-events-none select-none absolute w-[40px] sm:w-[45px] md:w-[50px]"
            style={{
              top: 'clamp(135px, 15vh, 170px)',
              right: 'clamp(15px, 3vw, 30px)',
            }}
          />
          <img
            src="/images/yellow-circle.png"
            alt=""
            className="pointer-events-none select-none absolute w-[40px] sm:w-[45px] md:w-[50px] motion-safe:animate-[bounce_4s_ease-in-out_infinite]"
            style={{
              left: 'clamp(78%, 95vw, 1200px)',
              bottom: 'clamp(960px, 50vh, 875px)',
            }}
          />
          <div className="relative z-2 w-full max-w-full mx-auto flex flex-col items-center gap-4 sm:gap-5 md:gap-[16px]">
            <h2
              data-animate-item
              className="home-title md:text-[40px]! font-bold text-center font-['Inter'] tracking-[-2.4px] mt-4! sm:mt-6! md:mt-8! text-white capitalize px-2!"
            >
              <span className="text-white">Sign Up </span>
              <span className="text-[#717680]">For </span>
              <span className="text-[#EDFF67]">300 Free Credits </span>
              <br className="hidden sm:block" />
              <span className="text-[#717680]">With </span>
              <span className="text-white">Unlimited Validity</span>
            </h2>

            <p
              data-animate-item
              style={{ transitionDelay: "0.1s" }}
              className="home-description text-center font-['Manrope'] text-white md:opacity-100 opacity-90 max-w-[980px] px-4!"
            >
              Use your free credits for both finding and verifying emails.
            </p>

            <div
              data-animate-item
              style={{ transitionDelay: "0.2s" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[800px] pt-4! sm:pt-6! pb-4! px-4!"
            >
              <button
                data-hover="lift"
                className="w-full sm:w-auto h-[46px] font-['Inter'] px-4! rounded-[50px] bg-[#EB3609] hover:bg-[#FF6B35] text-white text-[14px] font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Checkout Details</span>
                <img
                    src="/images/right-arrow.svg"
                    alt="Right arrow icon"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
              </button>
              <button
                data-hover="lift"
                className="text-white font-['Manrope'] text-[14px] font-semibold flex items-center gap-2 hover:text-[#EDFF67] transition-colors cursor-pointer"
              >
                <span>Claim 300 free credits</span>
               <img
                    src="/images/right-arrow.svg"
                    alt="Right arrow icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
                  />
              </button>
            </div>

            <div className="w-full flex justify-center pt-2!">
              <div
                className="w-full max-w-[730px] opacity-20"
                style={{
                  borderTop: "1px solid",
                  borderImageSource:
                    "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%, #FFFFFF 100%)",
                  borderImageSlice: 1,
                }}
              />
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-4! ! px-4!">
              {["Free Monthly Credits", "No Hidden Costs"].map((label) => (
                <div key={label} className="flex items-center gap-2 sm:gap-3">
                  <img
                    src="/images/check-icon-white.png"
                    alt="tick"
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"
                  />
                  <span className="text-white font-['Manrope'] text-[14px] sm:text-[16px] leading-[100%] text-center sm:text-left">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full max-w-full mx-auto mt-8! sm:mt-10! md:mt-14! lg:mt-16! flex flex-col lg:flex-row gap-4">
              <div className="flex-1 rounded-[16px] bg-[#1C2D3E] p-5! sm:p-6! md:p-8! flex flex-col gap-3! sm:gap-4! md:gap-6! min-h-[190px]">
                <div className="">
                  <img src="/public/images/hero/colored-logo.png" alt="" className="h-8"/>
                </div>
                <p className="home-description font-normal! text-white font-['Manrope'] max-w-[722px]">
                  From dynamic visuals to interactive features, our software
                  empowers you to craft a website tailored to every need.
                </p>
              </div>

              <div className="w-full lg:w-auto grid grid-cols-3 gap-3">
                {[ 
                  { label: "Facebook", icon: "/images/FB.svg" },
                  { label: "Linked In", icon: "/images/Linkedin.svg" },
                  { label: "Twitter", icon: "/images/Twitter.svg" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[16px] bg-[#1C2D3E] flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 p-4! sm:p-5! md:p-6! cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                      <img
                        src={s.icon}
                        alt={s.label}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="text-white font-['Manrope'] text-[12px] sm:text-[14px] md:text-[16px]  text-center">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full max-w-full mx-auto rounded-[16px] bg-[#1C2D3E] px-4! sm:px-8! py-6! sm:py-8!">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-[60px] text-white">
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
                  { title: "Use Cases", items: ["Lead Generation", "Offers"] },
                  { title: "Company", items: ["Terms", "Contact Us"] },
                ].map((col) => (
                  <div key={col.title} className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="text-[18px] font-bold font-['Inter'] text-white capitalize">
                      {col.title}
                    </h3>
                    <ul className="flex flex-col gap-2 sm:gap-3 opacity-90">
                      {col.items.map((it) => (
                        <li
                          key={it}
                          className="sm:text-[17px] text-white font-['Manrope'] cursor-pointer hover:text-[#EDFF67] transition-colors"
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

          <div className="text-[17px] w-full font-['Manrope'] max-w-full mx-auto text-center text-white pt-6! sm:pt-8! md:pt-10! px-4!">
            © 2025 Zupitu.{" "}
            <span className="text-white/70">All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
