import React, { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const FAQsPage = () => {
  const sectionRef = useScrollReveal()
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
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full"
      style={{ background: 'var(--color-white-solid, #FFFFFF)' }}
    >
      {/* Outer container with responsive padding */}
      <div className="w-full flex justify-center px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[170px]! pt-10! pb-4! lg:pt-14!">
        <div className="max-w-full mx-auto relative">
          {/* Header Section - max-width 1362px */}
          <div className="w-full lg:max-w-[1024px] mx-auto">
            {/* FAQ Tag - width: 85px, height: 49px */}
            <div
              data-animate-item
              className="inline-flex items-center justify-center gap-[6px] rounded-[50px] bg-[#F6F6F6] px-3! py-2! h-[34px]"
            >
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-[#132436] font-['Manrope'] font-bold text-[14px] leading-[100%] text-center">FAQ</span>
            </div>

            {/* Title Section - width: 1362px, height: 239px, justify-content: space-between */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-[21px] mt-2! h-auto">
              {/* Left side - Title with icons - width: 568px, height: 239px, gap: 21px */}
              <div className="flex-1 max-w-[568px]">
                <h2
                  data-animate-item
                  style={{ transitionDelay: "0.08s" }}
                  className="home-title text-[#132436] font-['Inter'] font-bold"
                >
                  <span className="inline-flex items-center gap-2">
                    {/* Green Checkmark Icon */}
                    <img src="/images/faq.svg" alt="" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[64px] md:h-[64px] shrink-0" />
                    Frequently
                  </span>
                  <br className="hidden sm:block" />
                  <span className="inline-flex items-center gap-2">
                    Asked Questions
                    {/* Purple Question Mark Icon */}
                    <img src="/images/faq2.svg" alt="" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] shrink-0" />
                  </span>
                </h2>
              </div>

              {/* Right side - Description */}
              <div className="flex-1 max-w-[568px] lg:max-w-none">
                <p
                  data-animate-item
                  style={{ transitionDelay: "0.15s" }}
                  className="home-description sm:text-[20px]! md:text-[20px]! text-[#546779] font-['Manrope'] lg:px-8!"
                >
                  If you're new or looking for answers to your questions, this guide will help you learn more about our services and their features.
                </p>
              </div>
            </div>

            {/* FAQ Items Section - width: 1362px, height: 655px, padding-top: 50px */}
            <div className="mt-8! lg:mt-[40px]! max-w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full"
                  style={index > 0 ? { borderTop: '1px solid var(--color-grey-85, #D5D7DA)' } : undefined}
                >
                  {/* FAQ Item - width: 1362px, height: 132px, padding: 48px 30px */}
                  <div 
                    data-animate-item
                    style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                    className="w-full py-8! lg:py-[20px]! flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50/50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex-1 pr-4!">
                      <h3 className="text-[18px] font-semibold text-[#132436] font-['Manrope'] capitalize">
                        {index + 1}. {faq.question}
                      </h3>
                    </div>
                    
                    {/* Toggle Button - width: 60px, height: 40px, border-radius: 50px */}
                    <button
                      data-hover="lift"
                      className={`shrink-0 w-[50px] h-[34px] rounded-[50px] flex items-center justify-center transition-all duration-300 cursor-pointer ${
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
                    <div className="px-6! lg:px-[40px]! pb-8! lg:pb-12!">
                      <p className="text-[16px] sm:text-[18px] font-normal text-[#747C9A] font-['Manrope'] max-w-[full]">
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
