const Banner = () => {
  return (
    <div className="dummy-1-banner w-full bg-[#FDEBE6] min-h-[60px] h-auto md:h-[80px] flex items-center justify-center px-4 sm:px-6 md:px-0 py-2 md:py-0">
      <div className="max-w-full w-full flex items-center justify-center" style={{ maxWidth: "100vw" }}>
        <p
          className="text-center leading-[100%]"
          style={{ lineHeight: "100%" }}
        >
          {/* Introducing */}
          <span
            className="font-['Inter'] font-medium text-[12px] sm:text-[13px] md:text-[20px] text-[#3A4A5A]"
            style={{ lineHeight: "100%", letterSpacing: "0px" }}
          >
            Introducing{" "}
          </span>

          {/* Zupito */}
          <span
            className="font-['Inter'] font-semibold text-[12px] sm:text-[13px] md:text-[20px] text-[#132436]"
            style={{ lineHeight: "100%", letterSpacing: "0px" }}
          >
            Zupito{" "}
          </span>

          {/* 25,000 */}
          <span
            className="text-[13px] sm:text-[14.5px] md:text-[22px] text-[#132436]"
            style={{
              fontFamily: '"MADE TOMMY", sans-serif',
              fontWeight: 800,
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            25,000{" "}
          </span>

          {/* Validation Credits/mo + */}
          <span
            className="font-['Inter'] font-medium text-[12px] sm:text-[13px] md:text-[20px] text-[#3A4A5A]"
            style={{ lineHeight: "100%", letterSpacing: "0px" }}
          >
            Validation Credits/mo +{" "}
          </span>

          {/* 6 */}
          <span
            className="text-[12px] sm:text-[13px] md:text-[20px] text-[#132436]"
            style={{
              fontFamily: '"MADE TOMMY", sans-serif',
              fontWeight: 700,
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            6{" "}
          </span>

          {/* Deliverability Tools - Just */}
          <span
            className="font-['Inter'] font-medium text-[12px] sm:text-[13px] md:text-[20px] text-[#3A4A5A]"
            style={{ lineHeight: "100%", letterSpacing: "0px" }}
          >
            Deliverability Tools - Just{" "}
          </span>

          {/* $99/mo */}
          <span
            className="text-[13px] sm:text-[14.5px] md:text-[20px] text-[#3A4A5A]"
            style={{
              fontFamily: '"MADE TOMMY", sans-serif',
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            <span className="text-[#132436] font-bold">$99</span>/mo
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
