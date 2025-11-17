import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full  flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F3FFDD 0%, #BCACFF 100%)",
      }}
    >
      {/* Main Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[150px] py-12 sm:py-16 md:py-20 lg:py-[80px] xl:py-[100px]">
        <div className="w-full max-w-full lg:max-w-[1362px] mx-auto">
          {/* Two Column Layout - 50/50 split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
            {/* Left Side - Profile Images with Connecting Lines */}
            <div className="w-full flex flex-col items-center lg:items-start justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full flex items-center justify-center lg:justify-start">
                {/* Profile Images Container with 24px gap and connecting lines */}
                {/* hello */}
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full flex flex-col items-center lg:items-start justify-center order-1 lg:order-2">
              <div className="w-full max-w-full">
                {/* Main Heading with Running Icon */}
                <div className="w-full mb-6 sm:mb-8">
                  <h1
                    className="flex flex-col gap-2 "
                    style={{
                      fontFamily: '"MADE TOMMY", sans-serif',
                      fontWeight: 900,
                      fontStyle: "normal",
                      fontSize: "clamp(40px, 6vw, 56px)",
                      lineHeight: "50px",
                      letterSpacing: "0px",
                      textAlign: "center",
                      verticalAlign: "middle",
                      textTransform: "uppercase",
                      color: "#132436",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <span className="inline-flex gap-2 items-center">
                        SAVE BIG
                        <span
                          className="inline-flex items-center justify-center rounded-full"
                          style={{
                            width: "clamp(50px, 6vw, 70px)",
                            height: "clamp(50px, 6vw, 70px)",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src="/images/Success-1.svg"
                            alt="Success icon"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </span>
                        ON
                      </span>
                    </div>
                    <div>
                      <span>VERIFIED LEADS</span>
                    </div>
                  </h1>
                </div>

                {/* Description Text */}
                <div className="w-full mb-8 sm:mb-10 md:mb-12">
                  <p
                    className="text-left"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 600,
                      fontStyle: "normal",
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      lineHeight: "40px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                      color: "#133750",
                    }}
                  >
                    Grab limited-time{" "}
                    <span
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 800,
                        fontStyle: "normal",
                        fontSize: "clamp(24px, 2.5vw, 30px)",
                        lineHeight: "30px",
                        letterSpacing: "0px",
                        verticalAlign: "middle",
                        textTransform: "uppercase",
                        color: "#F967F6",
                      }}
                    >
                      DEALS
                    </span>{" "}
                    to get more leads, clean your lists, and accelerate outreach
                    - all at unmatched value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Button Container */}
          <div className="w-full flex items-center justify-center mt-10">
            {/* Outer Container - white background panel */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "clamp(300px, 90%, 879px)",
                minHeight: "clamp(100px, 15vw, 142px)",
                borderRadius: "280px",
                background: "rgba(255, 255, 255, 0.1)",
                position: "relative",
                padding: "20px",
                gap: "21px",
                boxShadow: "0px 4px 20px rgba(188, 172, 255, 0.2)",
              }}
            >
              {/* Email Verification Deals Button */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: "clamp(300px, 48%, 400px)",
                  height: "102px",
                  background:
                    "linear-gradient(0deg, rgba(255, 243, 243, 0.3) 0%, #FFFFFF 100%)",
                  borderRadius: "280px",
                  padding: "10px",
                  opacity: 1,
                }}
              >
                <button
                  className="flex items-center justify-center transition-all hover:opacity-90 active:scale-95 relative z-10"
                  style={{
                    width: "100%",
                    height: "82px",
                    borderRadius: "280px",
                    background:
                      "linear-gradient(0deg, #BB215B 0%, #D35B30 100%)",
                    padding: "0 clamp(10px, 2vw, 20px)",
                    flexShrink: 0,
                    outlineOffset: "3px",
                    boxShadow: "0px 0px 6px rgba(188, 172, 255, 0.3)",
                  }}
                >
                  <span
                    className="whitespace-nowrap"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSize: "clamp(14px, 2vw, 30px)",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Email Verification Deals
                  </span>
                </button>
              </div>

              {/* Email Finder Deals Button */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: "clamp(300px, 48%, 400px)",
                  height: "102px",
                  background:
                    "linear-gradient(0deg, rgba(255, 243, 243, 0.3) 0%, #FFFFFF 100%)",
                  borderRadius: "280px",
                  padding: "10px",
                  opacity: 1,
                }}
              >
                <button
                  className="flex items-center justify-center transition-all hover:opacity-90 active:scale-95 relative z-10"
                  style={{
                    width: "100%",
                    height: "82px",
                    borderRadius: "280px",
                    background:
                      "linear-gradient(0deg, #BB215B 0%, #D35B30 100%)",
                    padding: "0 clamp(10px, 2vw, 20px)",
                    flexShrink: 0,
                    outlineOffset: "3px",
                    boxShadow: "0px 0px 6px rgba(188, 172, 255, 0.3)",
                  }}
                >
                  <span
                    className="whitespace-nowrap"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSize: "clamp(14px, 2vw, 30px)",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Email Finder Deals
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
