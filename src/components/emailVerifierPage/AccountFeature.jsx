import React from 'react'

const AccountFeature = () => {
  // Features data
  const features = [
    {
      title: "Lifetime Credit Validity",
      description: "Use your credits whenever you want. They never expire.",
      iconType: "gear"
    },
    {
      title: "Free \"Unknown\" Results",
      description: "You're only charged for verified results, not unknowns.",
      iconType: "gear"
    },
    {
      title: "Comprehensive Status Codes",
      description: "Get clear insights into the status of every email.",
      iconType: "gear"
    },
    {
      title: "Bulk Email Testing",
      description: "Check deliverability for entire email lists at once.",
      iconType: "gear"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprise costs.",
      iconType: "check"
    },
    {
      title: "Email Server Check",
      description: "Validate the authenticity of email servers.",
      iconType: "check"
    },
    {
      title: "Free Monthly Credits",
      description: "Enjoy 200 free email verifications every month.",
      iconType: "check"
    },
    {
      title: "High-Volume Discounts",
      description: "Get better pricing as you usage increases.",
      iconType: "check"
    },
    {
      title: "Real-Time Email Detection",
      description: "Instantly detect invalid, disposable, or spam-prone emails.",
      iconType: "check"
    },
    {
      title: "Detailed Reports",
      description: "Access comprehensive validation reports for better insights.",
      iconType: "check"
    },
    {
      title: "Email Hygiene Check",
      description: "Spot and remove risky or spam-prone contacts from your list.",
      iconType: "check"
    }
  ]

  // Gear Icon Component (for first 4 features)
  const GearIcon = () => (
    <img
      src="/images/Layer_1.svg"
      alt="Feature icon"
      className="w-full h-full object-contain"
    />
  )

  // Checkmark Icon Component (for remaining features)
  const CheckIcon = () => (
    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#0088FF] p-[6px] shadow-[0px_4px_4px_0px_#0000001A]">
      <img
        src="/images/Tick-2.svg"
        alt="Check icon"
        className="w-full h-full object-contain"
      />
    </span>
  )

  return (
    <section className="relative w-full bg-[#FAFDFF] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-[104px]">
      {/* Main Container */}
      <div className="w-full max-w-full lg:max-w-[1362px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[150px]">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-[30px] mb-12 sm:mb-16 md:mb-20 lg:mb-[70px]">
          {/* Plugin Integration Badge */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-[6px] rounded-[50px] bg-white px-4 py-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#4A90E2]"></div>
              <span className="font-['Inter'] text-sm sm:text-base font-semibold capitalize leading-[18px] tracking-normal text-[#132436] align-middle">
                Plugin Integration
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="w-full flex flex-col items-center gap-4 sm:gap-[16px]">
            <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center font-['Inter'] text-[clamp(32px,5vw,60px)] font-semibold leading-[100%] tracking-[-2.2px] text-[#132436]">
              <span>Zupitu</span>
              <span className="inline-flex items-center justify-center">
                <img
                  src="/images/email-icon-4.svg"
                  alt="Email icon"
                  className="h-[56px] w-[56px]"
                />
              </span>
              <span>Account Features</span>
            </h1>

            {/* Description */}
            <p className="max-w-full text-center font-['Manrope'] text-[clamp(16px,2.5vw,26px)] font-medium leading-[clamp(28px,4vw,44px)] tracking-normal text-[#546779] px-4">
              These features ensure that Zupitu delivers the ultimate in precision, security, and scalability for all your email verification needs.
            </p>

            {/* Claim Deals Button */}
            <a
              href="#"
              className="inline-flex items-center gap-[6px] rounded-[50px] bg-white px-4 py-3 font-['Manrope'] text-[clamp(18px,2vw,22px)] font-bold capitalize leading-[30px] tracking-normal text-[#EB3609] transition-opacity hover:opacity-80"
            >
              <span>Claim Deals</span>
              <span className="inline-flex items-center justify-center">
                <img
                  src="/images/right-orange-arrow.svg"
                  alt="Arrow icon"
                  className="h-4 w-4"
                />
              </span>
            </a>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="w-full">
          {/* White Card Container */}
          <div className="w-full rounded-[20px] bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-[50px] shadow-[0px_10px_20px_0px_rgba(39,80,107,0.05)]">
            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-[20px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-[10px]"
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8">
                      {feature.iconType === "gear" ? <GearIcon /> : <CheckIcon />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="font-['Inter'] text-[clamp(18px,2vw,20px)] font-semibold leading-[100%] tracking-normal text-[#132436] capitalize">
                      {feature.title}
                    </h3>
                    <p className="font-['Manrope'] text-[clamp(14px,1.8vw,16px)] font-medium leading-[clamp(22px,2.5vw,30px)] tracking-normal text-[#737B9C]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountFeature
