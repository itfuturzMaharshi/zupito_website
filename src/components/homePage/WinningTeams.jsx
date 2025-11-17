import React from 'react'

const WinningTeams = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* Outer layout container (mobile 24px padding) */}
      <div className="w-full flex justify-center px-6! py-6! sm:py-6! md:py-6!">
        {/* Background box with required properties */}
        <div
          className="w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center py-[50px]! xl:px-24! 2xl:px-[150px]!"
          style={{
            backgroundImage: "url('/images/winning-teams-bg.png')",
            opacity: 1,
          }}
        >
          {/* Top copy block */}
          <div className="text-center flex flex-col items-center gap-[21px]">
            {/* Pill */}
            <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] px-4! py-3! h-[49px] bg-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6EA8FF]" />
              <span className="text-white font-bold text-[16px] sm:text-[18px] font-['Manrope'] leading-[100%]">Commitment</span>
            </div>

            {/* Heading */}
            <h2 className="home-title font-bold text-center font-['Inter'] text-white">
              <span className="inline-flex flex-col items-center gap-[14px] align-middle max-w-[830px] mx-auto">
                <span>
                  <span className="text-white">Winning </span>
                  <span className="text-[#717680]">Teams </span>
                  <span className="text-white">Trust Zupitu </span>
                  <span className="text-[#717680]">to </span>
                </span>
                <span className="inline-flex items-center">
                  <span className="text-white">Crush </span>
                  <span className=" inline-flex items-center justify-center  relative ">
                    <img
                      src="/images/Commitment.svg"
                      alt=""
                      className="w-[28px] h-[28px] md:w-[60px] md:h-[60px] mx-2!"
                    />
                  </span>
                  <span className="text-[#717680]">Their Targets</span>
                </span>
              </span>
            </h2>

            {/* Subtext */}
            <p className="home-description text-white/90 font-['Manrope'] opacity-70 max-w-[980px] mx-auto px-2!">
              Zupitu's user-friendly interface simplifies prospecting with intuitive tools for high-quality
              data generation. It supports seamless team collaboration, easily handles large data volumes,
            </p>
          </div>

          {/* Cards area */}
          <div className="mt-10! sm:mt-12! md:mt-16! lg:mt-42! lg:px-4! grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-4 xl:gap-8 justify-items-center">
            {[
              { title: '15+', desc: 'Reduce bounces and protect sender reputation' },
              { title: '300%', desc: 'Lower Cost Per Lead-\nCut costs with verified leads' },
              { title: '250+', desc: 'Lower Cost Per Lead-\nCut costs with verified leads' },
              { title: '450%', desc: 'Boost Team Performance\nSave time, skip manual work.' },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`w-full max-w-[300px] h-[280px] rounded-[20px] bg-[#FAFBFF] shadow-[0px_4px_7px_0px_#53587B12] px-[22px]! lg:py-[50px]! xl:py-[80px]! flex flex-col items-center justify-center text-center gap-5${
                  idx === 1 || idx === 2 ? ' lg:mt-[56px]!' : ''
                }`}
              >
                <div className="text-[#132436] font-['Inter'] font-bold text-[28px]  md:text-[32px]  lg:text-[38px] xl:text-[40px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[40px] xl:leading-[40px] tracking-[-1.2px]">
                  {card.title}
                </div>
                {idx === 1 || idx === 2 ? (
                  <p className="home-description text-[#3A4A5A] font-['Manrope']">
                    <span className="block">Lower Cost Per Lead-</span>
                    <span className="block">Cut costs with verified leads</span>
                  </p>
                ) : (
                  <p className="home-description whitespace-pre-line font-['Manrope'] text-[#3A4A5A]">
                    {card.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WinningTeams
