import React, { useState } from 'react'

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState(3) // Start with 4th question open

  const faqs = [
    {
      question: "Is it legal to use an email finder?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "Can I find emails in bulk?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "What happens if no email is found?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    },
    {
      question: "How accurate are the emails you find?",
      answer: "Zupitu delivers one of the highest accuracy rates in the industry. Every email is verified in real time using multiple validation checks such as syntax, domain, MX records, and disposable email detection."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative w-full" style={{ background: 'var(--color-white-solid, #FFFFFF)' }}>
      {/* Outer container with responsive padding */}
      <div className="w-full flex justify-center px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[150px]! py-10! lg:py-16! xl:py-20!">
        <div className="max-w-full lg:max-w-[1362px] mx-auto relative">
          {/* Header Section - max-width 1362px */}
          <div className="w-full max-w-full lg:max-w-[1362px] mx-auto">
            {/* FAQ Tag - width: 85px, height: 49px */}
            <div className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-[#F6F6F6] px-4! py-3! h-[49px] mb-4!">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-[#132436] font-bold text-[18px] leading-[100%] text-center">FAQ</span>
            </div>

            {/* Title Section - width: 1362px, height: 239px, justify-content: space-between */}
            <div className="flex flex-col md:flex-row lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-[21px] mt-4! h-auto"  style={{alignItems: 'end'}}>
              {/* Left side - Title with icons - width: 568px, height: 239px, gap: 21px */}
              <div className="flex-1 max-w-[568px]">
                <h2 className="text-[#132436] font-semibold">
                  <span className="inline-flex items-center gap-2 text-[34px] leading-[100%] sm:text-[42px] md:text-[50px] lg:text-[50px] tracking-[-2.2px]">
                    {/* Green Checkmark Icon */}
                    <img src="/images/faq.svg" alt="" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] shrink-0" />
                    Frequently
                  </span>
                  <br className="hidden sm:block" />
                  <span className="inline-flex items-center gap-2 text-[34px] leading-[100%] sm:text-[42px] md:text-[50px] lg:text-[50px] tracking-[-2.2px]">
                    Asked Questions
                    {/* Purple Question Mark Icon */}
                    <img src="/images/faq2.svg" alt="" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] shrink-0" />
                  </span>
                </h2>
              </div>

              {/* Right side - Description */}
              <div className="flex-1 max-w-[568px] lg:max-w-none">
                <p className="text-[#546779] font-medium text-[18px] leading-[32px] sm:text-[20px] md:text-[22px] lg:text-[22px] tracking-[0px]">
                  If you're new or looking for answers to your questions, this guide will help you learn more about our services and their features.
                </p>
              </div>
            </div>

            {/* FAQ Items Section - width: 1362px, height: 655px, padding-top: 50px */}
            <div className="mt-12! lg:mt-[50px]! max-w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full"
                  style={index > 0 ? { borderTop: '1px solid var(--color-grey-85, #D5D7DA)' } : undefined}
                >
                  {/* FAQ Item - width: 1362px, height: 132px, padding: 48px 30px */}
                  <div 
                    className="w-full py-12! lg:py-[32px]! flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50/50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex-1 pr-4!">
                      <h3 className="text-[#132436] font-semibold text-[20px] leading-[100%] sm:text-[22px] md:text-[24px] lg:text-[26px] tracking-[-0.32px] capitalize">
                        {index + 1}. {faq.question}
                      </h3>
                    </div>
                    
                    {/* Toggle Button - width: 60px, height: 40px, border-radius: 50px */}
                    <button
                      className={`shrink-0 w-[50px] h-[35px] sm:w-[55px] sm:h-[38px] md:w-[60px] md:h-[40px] rounded-[50px] flex items-center justify-center transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-[#132436]' 
                          : 'bg-[#F6F6F6]'
                      }`}
                      aria-label={openIndex === index ? 'Collapse answer' : 'Expand answer'}
                      type="button"
                    >
                      {openIndex === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                          <path d="M19 13H5v-2h14v2z" fill="white"/>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#132436"/>
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Answer Section with smooth animation */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6! lg:px-[30px]! pb-8! lg:pb-12!">
                      <p className="text-[#747C9A] font-normal text-[18px] leading-[40px] sm:text-[20px] md:text-[22px] lg:text-[24px] tracking-[0px] max-w-[full]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Divider line removed in favor of top border on item wrapper */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQsPage
