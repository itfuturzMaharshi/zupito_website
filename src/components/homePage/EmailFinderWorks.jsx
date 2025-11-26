import React from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const EmailFinderWorks = () => {
  const sectionRef = useScrollReveal()

  const steps = [
    {
      number: '01',
      chipLabel: '300 free credits on signup',
      title: 'Signup Credits',
      description:
        '300 free credits at signup with month on month top-up to keep the wallet loaded with 300 credits monthly.',
    },
    {
      number: '02',
      chipLabel: 'Manage credits anytime',
      title: 'Access On The Go',
      description:
        'Access the system on the go on mobile, laptop, and tablet. You can work, manage teams, credits.',
    },
    {
      number: '03',
      chipLabel: 'No hidden costs',
      title: 'Free Platform Features',
      description:
        'Access advanced features like API integration & team management at no additional cost.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-[#FFFDFD]"
      style={{ overflow: 'visible', minHeight: 'auto', paddingBottom: '0' }}
    >
      {/* Outer container spacing mirrors other homepage sections */}
      <div
        className="w-full px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[170px]! py-12! lg:py-14! overflow-visible"
        style={{ overflow: 'visible', minHeight: 'auto' }}
      >
        <div className="max-w-[full] lg:max-w-[1024px] mx-auto relative overflow-visible">
          {/* Header */}
          <div className="text-center">
            <div
              data-animate-item
              className="inline-flex font-['Manrope'] items-center justify-center gap-[6px] rounded-[50px] bg-[#FFE9F2] px-3 py-2 h-[34px] text-[14px] leading-[100%] font-bold text-[#132436]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#7B8DFF]" />
              <span>Type Something</span>
            </div>

            <h2
              data-animate-item
              style={{ transitionDelay: '0.08s' }}
              className="home-title mt-3! text-[#132436] font-['Inter'] font-bold text-center"
            >
              <span className="inline-block align-middle">
                How Our
                <span className="align-middle inline-flex items-center justify-center mx-2! relative -top-[2px]">
                  <img
                    src="/images/setting-orange2.svg"
                    alt=""
                    className="w-[28px] h-[28px] md:w-[62px] md:h-[62px] ml-2"
                    loading="lazy"
                  />
                </span>
                Email Finder Works
              </span>
            </h2>

            <p
              data-animate-item
              style={{ transitionDelay: '0.15s' }}
              className="home-description mt-2! mb-6! lg:px-17 lg:mb-2! text-[#546779] font-['Manrope'] text-center max-w-full mx-auto"
            >
              Most companies follow unique email patterns. Our tool detects these formats automatically, helping you uncover accurate contact details, even for large organizations.
            </p>
          </div>

          {/* Decorative connector graphic */}
          <div className="hidden lg:flex absolute justify-center w-full mt-3! md:mt-4! lg:mt-4!">
            <img
              src="/images/Group-bg.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none w-[350px] sm:w-[100px] md:w-[700px] h-auto"
              loading="lazy"
            />
          </div>

          {/* Three different cards with background image per card */}
          <div className="relative flex justify-center bottom-0 lg:-bottom-40 mb-8! md:mb-12! lg:mb-[140px]!">
            <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[26px] lg:gap-[29px] w-full lg:max-w-[1362px] overflow-visible">
              {steps.map((step, idx) => {
                const baseDelay = 0.1 + idx * 0.08
                return (
                  <div
                    key={step.number}
                    data-animate-item
                    className="email-works-card relative w-full rounded-[24px] border border-[#EEF0F3] shadow-[0px_8px_20px_0px_#6868681A] p-3! md:p-4! flex flex-col gap-[20px] bg-no-repeat bg-cover overflow-visible cursor-pointer"
                    style={{
                      transitionDelay: `${baseDelay}s`,
                      backgroundImage: "url('/images/7.png')",
                      height: 'auto',
                      minHeight: 'auto',
                      overflow: 'visible',
                    }}
                  >
                    <div
                      className="w-full flex justify-center mt-[20px]!"
                      data-animate-item="scale"
                      style={{ transitionDelay: `${baseDelay + 0.05}s` }}
                    >
                      <div className="email-works-number inline-flex items-center justify-center w-[54px] h-[42px] rounded-[6px] bg-white shadow-[0_2px_6px_#00000012]">
                        <span className="text-[#132436] font-['Inter'] font-bold text-[18px] md:text-[22px] tracking-[-0.32px]">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div
                      data-animate-item="scale"
                      data-hover="lift"
                      className="email-works-chip inline-flex items-center gap-3 bg-white rounded-[12px] justify-center shadow-[0px_12px_20px_-8px_#181D270D] px-4! py-3! cursor-pointer"
                      style={{ transitionDelay: `${baseDelay + 0.1}s` }}
                    >
                      <img src="/images/Tick.png" alt="checkmark" className="w-5 h-5" loading="lazy" />
                      <span className="text-[#3A4A5A] font-medium text-[16px] font-['Manrope']">
                        {step.chipLabel}
                      </span>
                    </div>
                    <div
                      className="w-full rounded-[16px] bg-white p-[22px]! md:p-[26px]! mb-0! overflow-visible"
                      style={{
                        overflow: 'visible',
                        height: 'auto',
                        transitionDelay: `${baseDelay + 0.15}s`,
                      }}
                      data-animate-item
                    >
                      <h4 className="text-[18px] sm:text-[20px]  font-bold text-[#132436] font-['Inter'] mb-2!">{step.title}</h4>
                      <p className="home-description text-[#546779] font-['Manrope'] mb-0!">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailFinderWorks

