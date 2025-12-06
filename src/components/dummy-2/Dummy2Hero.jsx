import { useEffect, useState, useRef } from "react";

const ROTATING_WORDS = ["Find", "Verify", "Connect"];
const ROTATION_INTERVAL = 2600;
const FADE_DURATION = 260;

const Dummy2Hero = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Create refs to store interval and timeout IDs
  const rotateIntervalRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    // Start the rotation cycle
    const startRotation = () => {
      rotateIntervalRef.current = setInterval(() => {
        setIsFading(true);

        fadeTimeoutRef.current = setTimeout(() => {
          setActiveWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
          setIsFading(false);
        }, FADE_DURATION);
      }, ROTATION_INTERVAL);
    };

    startRotation();

    // Cleanup on unmount
    return () => {
      if (rotateIntervalRef.current) {
        clearInterval(rotateIntervalRef.current);
      }
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []); // Empty dependency array – run once on mount

  return (
    <section className="relative w-full bg-white">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-[200px] pt-8 md:pt-12 lg:pt-0 pb-8 md:pb-12 lg:pb-16">
        <div className="w-full max-w-full mx-auto">
          {/* Navigation Container */}
          <div
            className="w-full"
            style={{
              maxWidth: "1520px",
              margin: "0 auto",
            }}
          >
            {/* Main Container: Two-column layout */}
            <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-12 xl:gap-24 lg:items-stretch">
              {/* Left Section: Text Content */}
              <div className="w-full lg:w-auto lg:flex-1 flex flex-col lg:mt-20 lg:justify-center">
                {/* Heading */}
                <h1
                  className="font-['Inter'] flex flex-col gap-2 font-bold text-[#132436] leading-[52.8px] tracking-[-2.4px] capitalize mb-[46.5px] sm:mb-[46.5px]"
                  style={{
                    fontSize: "clamp(32px, 5vw, 58px)",
                    lineHeight: 1.21,
                    letterSpacing: "-1.16px",
                  }}
                >
                  <span className="block">
                    <span>AI Tool To </span>
                    <span
                      aria-live="polite"
                      className={`inline-block text-[#EB3609] font-bold transition-all duration-300 ease-in-out transform ${
                        isFading
                          ? "opacity-0 translate-y-4"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      {ROTATING_WORDS[activeWordIndex]}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span>Emails</span>
                    <span className="inline-flex items-center justify-center">
                      <img
                        src="/images/container.svg"
                        alt=""
                        className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[82px] md:h-[58px]"
                      />
                    </span>
                    <span>Instantly</span>
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="font-['Manrope'] max-w-[581px] font-semibold text-[#63778B] mb-[45px] xl:mb-[60px]"
                  style={{
                    fontSize: "clamp(16px, 2vw, 22px)",
                    lineHeight: 1.5,
                    letterSpacing: "0px",
                  }}
                >
                  Simplify outreach with Zupitu's AI Email Verifier & Finder -
                  validate emails, find business contacts, and boost
                  deliverability.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-[20px] mb-[25.5px] sm:mb-[46.5px]">
                  <button
                    className="rounded-[50px] bg-[#EB3609] text-white font-['Inter'] font-semibold flex items-center justify-center gap-[7.5px] px-[18px] py-[12px] hover:bg-[#FF6B35] transition-colors"
                    style={{
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                      minWidth: "220px",
                      height: "58px",
                    }}
                  >
                    Checkout Deals
                    <img
                      src="/images/right-arrow.svg"
                      alt="Right arrow"
                      className="w-5 h-5"
                    />
                  </button>

                  <button
                    className="text-[#3A4A5A] font-['Manrope'] px-[24px] py-[16px] font-semibold flex items-center gap-[7.5px] hover:text-[#EB3609] transition-colors"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      letterSpacing: "0px",
                    }}
                  >
                    Claim 300 free credits
                    <img
                      src="/images/right-arrow-dark.svg"
                      alt="Right arrow"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                {/* Divider */}
                <div
                  className="w-full max-w-[423.75px] h-[0.75px] mb-[22.5px] sm:mb-[46.5px] opacity-20"
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #666666 100%)",
                  }}
                />

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-[10px]">
                  <div
                    className="rounded-[50px] bg-[#FCFCFD] border border-[#EEF0F3] flex items-center gap-[7.5px] px-[14px] py-[10px]"
                    style={{ height: "54px" }}
                  >
                    <span className="inline-flex items-center justify-center w-[18px] h-[18px]">
                      <img
                        src="/images/check-orange.svg"
                        alt="Checkmark"
                        className="w-full h-full"
                      />
                    </span>
                    <span
                      className="font-['Manrope'] font-medium text-[#3A4A5A]"
                      style={{
                        fontSize: "18px",
                        lineHeight: "100%",
                      }}
                    >
                      Flexible solution
                    </span>
                  </div>

                  <div
                    className="rounded-[50px] bg-[#FCFCFD] border border-[#EEF0F3] flex items-center gap-[7.5px] px-[14px] py-[10px]"
                    style={{ height: "54px" }}
                  >
                    <span className="inline-flex items-center justify-center w-[18px] h-[18px]">
                      <img
                        src="/images/check-orange.svg"
                        alt="Checkmark"
                        className="w-full h-full"
                      />
                    </span>
                    <span
                      className="font-['Manrope'] font-medium text-[#3A4A5A]"
                      style={{
                        fontSize: "18px",
                        lineHeight: "100%",
                      }}
                    >
                      No credit card required
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section: Hero Image */}
              <div className="w-full lg:w-auto lg:flex-1 flex">
                <div className="relative w-full max-w-[400.75px]">
                  <img
                    src="/images/hero_img.png"
                    alt="Zupito AI Email Verifier & Finder"
                    className="w-full h-auto object-contain min-w-[300.75px] lg:min-w-[400px] xl:min-w-[610.75px]"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dummy2Hero;
