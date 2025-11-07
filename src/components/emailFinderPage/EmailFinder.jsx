import React from "react";

const EmailFinder = () => {
  return (
    <section className="w-full">
      {/* Container with responsive padding */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-full mx-auto">
          {/* Main content block - responsive container */}
          <div className="w-full max-w-full mx-auto">
            {/* Content wrapper with gap spacing */}
            <div className="flex flex-col gap-[100px]">
              {/* Top section with badge and heading */}
              <div className="w-full flex flex-col gap-[21px]">
                {/* Plugin Integration Badge */}
                <div className="w-fit">
                  <div className="inline-flex items-center gap-2 capitalize w-[187px] h-[42px] rounded-[50px] py-3 px-4 bg-[#F6F6F6] font-semibold text-base leading-[18px] tracking-normal align-middle text-[#132436]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {/* Blue dot icon */}
                    <span className="inline-block rounded-full w-2 h-2 bg-blue-500 shrink-0" />
                    <span>Plugin Integration</span>
                  </div>
                </div>

                {/* Heading and Description Section */}
                <div className="w-full flex flex-col lg:flex-row lg:items-start gap-[42px]">
                  {/* Heading Section */}
                  <div className="w-full lg:w-[551px] shrink-0">
                    <h2
                      className="text-[#132436] font-semibold leading-[clamp(40px,4.2vw,50px)] tracking-[-2.2px] align-middle flex flex-col gap-5 text-[clamp(36px,4vw,60px)]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      <span className="inline-flex items-center flex-wrap gap-2">
                        <span>Why</span>
                        {/* Red circular icon */}
                        <img
                          src="/images/setting-orange.svg"
                          alt=""
                          className="w-[28px] h-[28px] md:w-[75px] md:h-[60px]"
                        />
                        <span>Choose Our</span>
                      </span>
                      <span>Email Finder</span>
                    </h2>
                  </div>

                  {/* Description Paragraph */}
                  <div className="w-full lg:flex-1">
                    <p
                      className="text-[#546779] font-medium leading-[clamp(32px,4.5vw,44px)] tracking-normal align-middle text-[clamp(18px,2.5vw,26px)]"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      When it comes to finding accurate contacts, precision
                      matters. Here's why professionals choose us over
                      competitors:
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Cards Grid Section */}
              <div className="w-full max-w-[1362px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                  {/* Card 1: Empower Solo Users & Large Teams Alike */}
                  <div className="rounded-[24px] border-2 border-[#EEF0F3] p-[40px] bg-[#F6F6FF] flex flex-col gap-[40px]">
                    {/* Profile Section */}
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-2xl">👤</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#132436] font-bold text-lg">Rohan Mehta</h3>
                        <p className="text-gray-600 text-sm">rohanmehta.testing@gmail.com</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">96%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col gap-[20px]">
                      <h3
                        className="text-[#132436] font-bold capitalize leading-[100%] tracking-[-0.32px] align-middle text-[clamp(20px,2vw,26px)]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Empower solo users & large teams alike
                      </h3>
                      <p
                        className="text-[#5F6A97] font-normal leading-[40px] tracking-normal align-middle text-[clamp(18px,2vw,24px)]"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        From individual sales reps to enterprise recruiting teams, our tool handles both one-off lookups and large-scale list enrichment.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: 97% + Accuracy = More Conversions */}
                  <div className="rounded-[24px] border-2 border-[#EEF0F3] p-[40px] bg-[#F6F6FF] flex flex-col gap-[40px]">
                    {/* Success Rate Section */}
                    <div className="flex flex-col gap-4">
                      <div className="bg-green-100 rounded-lg p-4">
                        <h4 className="text-[#132436] font-bold text-lg mb-2">Hit the right inbox every time</h4>
                        <p className="text-gray-600 text-sm mb-3">Zupitu's AI-powered verification ensures accuracy that converts...</p>
                        <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center font-bold">
                          97%+ Success Rate
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col gap-[20px]">
                      <h3
                        className="text-[#132436] font-bold capitalize leading-[100%] tracking-[-0.32px] align-middle text-[clamp(20px,2vw,26px)]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        97% + Accuracy = More Conversions
                      </h3>
                      <p
                        className="text-[#5F6A97] font-normal leading-[40px] tracking-normal align-middle text-[clamp(18px,2vw,24px)]"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        We use a multi-layer process that ensures you reach working inboxes, reducing bounce rates and keeping campaigns effective.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Simple, Transparent Pricing */}
                  <div className="rounded-[24px] border-2 border-[#EEF0F3] p-[40px] bg-[#F6F6FF] flex flex-col gap-[40px]">
                    {/* Pricing Section */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[#132436] font-bold text-lg">Pay only for real results</h4>
                      <div className="flex flex-col gap-3">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-gray-700 font-medium">No Hidden Charges</p>
                        </div>
                        <div className="bg-purple-100 rounded-lg p-3">
                          <p className="text-purple-700 font-medium">Only Verified, Working Emails Count</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col gap-[20px]">
                      <h3
                        className="text-[#132436] font-bold capitalize leading-[100%] tracking-[-0.32px] align-middle text-[clamp(20px,2vw,26px)]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Simple, Transparent Pricing
                      </h3>
                      <p
                        className="text-[#5F6A97] font-normal leading-[40px] tracking-normal align-middle text-[clamp(18px,2vw,24px)]"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        Only pay for successful results. No hidden costs, no wasted credits.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Global Coverage */}
                  <div className="rounded-[24px] border-2 border-[#EEF0F3] p-[40px] bg-[#F6F6FF] flex flex-col gap-[40px]">
                    {/* Profile Images Section */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[#132436] font-bold text-lg">Reach inboxes worldwide</h4>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-lg">👤</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col gap-[20px]">
                      <h3
                        className="text-[#132436] font-bold capitalize leading-[100%] tracking-[-0.32px] align-middle text-[clamp(20px,2vw,26px)]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Global Coverage
                      </h3>
                      <p
                        className="text-[#5F6A97] font-normal leading-[40px] tracking-normal align-middle text-[clamp(18px,2vw,24px)]"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        Sales teams, recruiters, agencies, and startups across industries, rely on our Email Finder daily to drive measurable results.
                      </p>
                    </div>
                  </div>

                  {/* Card 5: Real-Time Verification Built-In */}
                  <div className="rounded-[24px] border-2 border-[#EEF0F3] p-[40px] bg-[#F6F6FF] flex flex-col gap-[40px]">
                    {/* Verification UI Section */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200">
                        <span className="text-gray-700">cafuro@example.com</span>
                        <span className="text-green-500 ml-auto">✓</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Can Email?</span>
                            <span className="text-gray-800 font-medium">No</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Roll Based?</span>
                            <span className="text-gray-800 font-medium">No</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Domain</span>
                            <span className="text-gray-800 font-medium">cafuro@example.com</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Domain Status</span>
                            <span className="text-green-600 font-medium">Valid</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col gap-[20px]">
                      <h3
                        className="text-[#132436] font-bold capitalize leading-[100%] tracking-[-0.32px] align-middle text-[clamp(20px,2vw,26px)]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Real-Time Verification Built-In
                      </h3>
                      <p
                        className="text-[#5F6A97] font-normal leading-[40px] tracking-normal align-middle text-[clamp(18px,2vw,24px)]"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        Unlike tools that only guess patterns, we validate each result instantly so you don't waste credits or risk your sender reputation.
                      </p>
                    </div>
                  </div>

                  {/* Card 6: Simple, Transparent Pricing (Duplicate) */}
                  <div className="rounded-[24px] border-2 border-[#EEF0F3] p-[40px] bg-[#F6F6FF] flex flex-col gap-[40px]">
                    {/* Profile Section (Same as Card 1) */}
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-2xl">👤</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#132436] font-bold text-lg">Rohan Mehta</h3>
                        <p className="text-gray-600 text-sm">rohanmehta.testing@gmail.com</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">96%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex flex-col gap-[20px]">
                      <h3
                        className="text-[#132436] font-bold capitalize leading-[100%] tracking-[-0.32px] align-middle text-[clamp(20px,2vw,26px)]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Simple, Transparent Pricing
                      </h3>
                      <p
                        className="text-[#5F6A97] font-normal leading-[40px] tracking-normal align-middle text-[clamp(18px,2vw,24px)]"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        Only pay for successful results. No hidden costs, no wasted credits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailFinder;
