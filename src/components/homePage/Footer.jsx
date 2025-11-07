import React from "react";

const Footer = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      {/* Outer layout container (mobile 24px padding) */}
      <div className="w-full flex justify-center px-6! py-6! sm:py-6! md:py-6!">
        {/* Background box with required properties */}
        <div
          className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center py-[100px]! xl:px-24! 2xl:px-[200px]!"
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
            className="pointer-events-none select-none absolute right-15 top-45 w-[120px] z-[1] sm:w-[160px] md:w-[220px] lg:w-[260px]"
          />
          <div className="absolute pointer-events-none z-[1] bottom-228! left-9! -translate-x-1/2 w-40 h-40 sm:left-6 sm:bottom-6 sm:translate-x-0 md:w-52 md:h-52 lg:w-60 lg:h-60">
            <img
              src="/images/footer-animation-1.png"
              alt="footer decorative 1"
              className="w-full h-full object-contain animate-[spin_20s_linear_infinite]"
            />
          </div>
          <img
            src="/images/orange-circle.png"
            alt=""
            className="pointer-events-none select-none absolute w-[50px] "
            style={{ top: 170, right: 40 }}
          />
          <img
            src="/images/yellow-circle.png"
            alt=""
            className="pointer-events-none select-none absolute  w-[50px] motion-safe:animate-[bounce_4s_ease-in-out_infinite]"
            style={{ left: 1145, bottom: 875 }}
          />
          <div className="relative z-2 w-full max-w-full mx-auto flex flex-col items-center gap-[20px] md:gap-[24px]">
            <h2 className="font-bold text-center tracking-[-2.4px] mt-8! text-white leading-[40px] text-[28px] sm:text-[36px] sm:leading-[48px] md:text-[46px] md:leading-[62px] lg:text-[54px] lg:leading-[72px] xl:text-[56px] xl:leading-[80px] capitalize">
              <span className="text-white">Sign Up </span>
              <span className="text-[#717680]">For </span>
              <span className="text-[#EDFF67]">300 Free Credits </span>
              <br />
              <span className="text-[#717680]">With </span>
              <span className="text-white">Unlimited Validity</span>
            </h2>

            <p className="text-center text-white md:opacity-100 opacity-90 font-medium text-[14px] leading-[24px] sm:text-[18px] sm:leading-[30px] md:text-[22px] md:leading-[38px] max-w-[980px]">
              Use your free credits for both finding and verifying emails.
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap w-full max-w-[800px] pt-6! pb-6!">
              <button className="h-[54px] sm:h-[58px] md:h-[62px] px-6! sm:px-8! md:px-10! rounded-[50px] bg-[#EB3609] text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold whitespace-nowrap">
                Checkout Details
              </button>
              <button className="text-white text-[16px] sm:text-[18px] md:text-[24px] font-semibold flex items-center gap-2! md:gap-3!">
                <span>Claim 300 free credits</span>
                <span className="inline-block translate-y-px">→</span>
              </button>
            </div>

            <div className="w-full flex justify-center pt-4!">
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

            <div className="w-full flex items-center justify-center gap-8 md:gap-10 flex-wrap pt-6!">
              {["Free Monthly Credits", "No Hidden Costs"].map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <img
                    src="/images/check-icon-white.png"
                    alt="tick"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[100%]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
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
                  { title: "Use Cases", items: ["Lead Generation", "Offers"] },
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

          <div className="w-full max-w-full mx-auto text-center text-white text-[14px] sm:text-[16px] md:text-[20px] pt-10!">
            © 2025 Zupitu.{" "}
            <span className="text-white/70">All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
