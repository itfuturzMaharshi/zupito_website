import { useEffect, useRef, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const ROTATING_WORDS = ["Find", "Verify", "Connect"];
const ROTATION_INTERVAL = 2600;
const FADE_DURATION = 260;

function HeroSection() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeoutRef = useRef(null);
  const rotateIntervalRef = useRef(null);
  const sectionRef = useScrollReveal({ rootMargin: "0px 0px -10% 0px" });

  useEffect(() => {
    rotateIntervalRef.current = setInterval(() => {
      setIsFading(true);
      fadeTimeoutRef.current = setTimeout(() => {
        setActiveWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsFading(false);
      }, FADE_DURATION);
    }, ROTATION_INTERVAL);

    return () => {
      clearInterval(rotateIntervalRef.current);
      clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  return (
    <main className="relative w-full bg-white">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        data-animate="fade-up"
        className="relative w-full overflow-hidden mt-0 sm:-mt-[8px] lg:-mt-[20px]"
      >
        {/* Dots/backdrop spacing wrapper to mimic Figma breathing room */}
        <div className="w-full px-4! sm:px-6! md:px-8! lg:px-10! xl:px-12! pt-[6px]! sm:pt-[12px]! md:pt-[18px]! lg:pt-[24px]! pb-10!">
          <div className="max-w-[1024px] mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-y-0 [@media(min-width:1024px)_and_(max-width:1279px)]:min-h-[calc(100vh-120px)]">
            {/* Copy */}
            <div className="order-2 lg:order-1 [@media(min-width:1024px)_and_(max-width:1279px)]:self-center pt-4 lg:pt-0">
              <h1
                data-animate-item
                style={{ transitionDelay: "0.05s" }}
                className="home-main-title text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] xl:text-[57px] leading-[108%] text-[#132436] font-bold font-['Inter'] space-y-2"
              >
                {/* Line 1: AI Tool To Connect */}
                <span className="block whitespace-nowrap">
                  <span>AI Tool To </span>
                  <span
                    aria-live="polite"
                    className={`inline-block text-[#EB3609] font-extrabold transition-all duration-300 ease-in-out transform ${
                      isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                    }`}
                  >
                    {ROTATING_WORDS[activeWordIndex]}
                  </span>
                </span>
                {/* Line 2: Emails [badge] Instantly */}
                <span className="block whitespace-nowrap">
                  <span>Emails </span>
                  <span className="align-middle inline-flex items-center justify-center mx-2 mr-2! relative top-[-2px]">
                    <img
                      src="/images/container.svg"
                      alt=""
                      className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[68px] xl:h-[68px]"
                    />
                  </span>
                  <span>Instantly</span>
                </span>
              </h1>

              <p
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
                className="home-description text-[#546779] text-[16px] leading-[165%] font-['Manrope'] max-w-[full] sm:max-w-[470px] mt-6! sm:mt-7!"
              >
                Simplify outreach with Zupitu's AI Email Verifier & Finder –
                validate emails, find business contacts, and boost
                deliverability.
              </p>

              {/* CTAs */}
              <div
                data-animate-item
                style={{ transitionDelay: "0.25s" }}
                className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 mt-9! sm:mt-10!"
              >
                <button
                  data-hover="lift"
                  className="rounded-[44px] whitespace-nowrap font-['Inter'] bg-[#EB3609] hover:bg-[#FF6B35] text-white font-semibold transition-colors flex items-center gap-2 justify-center shadow-sm min-w-[170px] h-[52px] px-5! py-2! text-[16px] cursor-pointer"
                >
                  Checkout Deals
                  <img
                    src="/images/right-arrow.svg"
                    alt="Right arrow icon"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>

                <button
                   data-hover="lift"
                  className="text-[#3A4A5A] whitespace-nowrap font-['Manrope'] font-semibold flex items-center gap-2 hover:text-[#EB3609] transition-colors text-[16px] cursor-pointer"
                >
                  <span>Claim 300 free credits</span>
                  <img
                    src="/images/right-arrow.svg"
                    alt="Right arrow icon"
                    className="w-5 h-5"
                    style={{
                      filter:
                        "invert(29%) sepia(8%) saturate(576%) hue-rotate(178deg) brightness(10%) contrast(87%)",
                    }}
                  />
                </button>
              </div>

              <div className="mt-12! sm:mt-14! md:mt-16! lg:mt-14! mb-4 w-full max-w-[620px] h-px bg-linear-to-l from-transparent to-[#666666]/20" />

              {/* Trust bullets */}
              <div className="mt-6! sm:mt-8! md:mt-10! lg:mt-10! flex items-center gap-3 flex-wrap">
                <div
                  data-animate-item
                  style={{ transitionDelay: "0.35s" }}
                  className="flex items-center gap-[10px] h-[44px] rounded-[50px] bg-[#FCFCFD] border border-[#EEF0F3] px-3! py-2! cursor-pointer"
                  data-hover="lift"
                >
                  <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full  text-white">
                    <img
                      src="/images/check-orange.svg"
                      alt="Checkmark icon"
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    />
                  </span>
                  <span className="text-[16px] whitespace-nowrap  font-['Manrope'] font-semibold leading-[120%] tracking-[0px] text-[#2E3E50]">
                    Flexible solution
                  </span>
                </div>

                <div
                  data-animate-item
                  style={{ transitionDelay: "0.4s" }}
                  className="flex items-center gap-[10px] h-[44px] rounded-[50px] bg-[#FCFCFD] border border-[#EEF0F3] px-3! py-2! cursor-pointer"
                  data-hover="lift"
                >
                  <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full text-white">
                    <img
                      src="/images/check-orange.svg"
                      alt="Checkmark icon"
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    />
                  </span>
                  <span className="text-[16px]  whitespace-nowrap  font-['Manrope'] font-semibold leading-[120%] tracking-[0px] text-[#2E3E50]">
                    No credit card required
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              data-animate-item="scale"
              style={{ transitionDelay: "0.35s" }}
              className="order-1 lg:order-2 relative -mt-12! sm:-mt-16! md:-mt-20! lg:-mt-24! xl:-mt-28! [@media(min-width:1024px)_and_(max-width:1279px)]:mt-0"
            >
              <div className="relative w-full h-[450px] md:h-[580px] lg:h-[500px] xl:h-[740px] 2xl:h-[780px]">
                <img
                  src="/public/images/hero/Frame 1321317896.jpg"
                  alt="Zupito email automation flow"
                  className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none [image-rendering:auto]"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
