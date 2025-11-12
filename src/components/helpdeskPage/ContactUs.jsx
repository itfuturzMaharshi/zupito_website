import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Main Container */}
      <div className="w-full max-w-full mx-auto  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[200px] py-[80px] sm:py-[100px]">
        {/* Header Section - First Image */}
        <div className="w-full flex flex-col items-center gap-[26px] mb-12 sm:mb-16 md:mb-20">
          {/* Contact Us Title with Icon */}
          <h1 className="flex items-center justify-center gap-3 sm:gap-4 text-center font-['Inter'] text-[clamp(40px,5vw,74px)] font-bold leading-[70px] tracking-[-3.2px] text-[#132436] capitalize">
            <span>Contact</span>
            {/* Headset Icon - Purple Circle with White Headset and Speech Bubble */}
            <span className="inline-flex items-center justify-center w-[clamp(50px,6vw,80px)] h-[clamp(50px,6vw,80px)] shrink-0">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#8B5CF6" />
                {/* Headset */}
                <g transform="translate(18, 22)">
                  {/* Left Earcup */}
                  <ellipse cx="8" cy="18" rx="6" ry="8" fill="white" />
                  {/* Right Earcup */}
                  <ellipse cx="24" cy="18" rx="6" ry="8" fill="white" />
                  {/* Headband Arc */}
                  <path
                    d="M8 10C8 10 10 6 16 6C22 6 24 10 24 10"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Microphone Boom */}
                  <path
                    d="M16 26L16 30C16 31.1046 16.8954 32 18 32C19.1046 32 20 31.1046 20 30L20 26"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>
                {/* Speech Bubble - overlapping the earpiece */}
                <g transform="translate(52, 20)">
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M8 18C11.3137 18 14 15.3137 14 12C14 8.68629 11.3137 6 8 6C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <span>Us</span>
          </h1>

          {/* Description Text */}
          <p className="max-w-full text-center font-['Manrope'] text-[clamp(18px,2.5vw,26px)] font-medium leading-[100%] tracking-normal text-[#62768B]">
            Get in touch and let us know how we can help. Fill out the form and we'll be in touch as soon as possible.
          </p>
        </div>

        {/* Form Container - Second Image */}
        <div className="w-full max-w-full mx-auto">
          <div
            className="w-full  p-6 sm:p-8 md:p-10 lg:p-[50px]"
            style={{
              background: 'linear-gradient(180deg, #F4FFF8 0%, #F8F7FF 100%)',
              minHeight: '489px'
            }}
          >
            {/* Form Content Container - Third Image */}
            <form onSubmit={handleSubmit} className="w-full max-w-full mx-auto flex flex-col gap-[40px]">
              {/* Input Fields Row - Fourth Image */}
              <div className="w-full flex flex-col sm:flex-row gap-[24px]">
                {/* Full Name Input - Sixth Image */}
                <div className="flex-1 w-full sm:w-auto">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full h-[74px] rounded-[80px] px-[34px] py-[24px] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] border-none outline-none font-['Manrope'] text-[clamp(16px,2vw,18px)] font-medium text-[#132436] placeholder:text-[#9CA3AF] focus:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                    required
                  />
                </div>

                {/* Email Address Input - Sixth Image */}
                <div className="flex-1 w-full sm:w-auto">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full h-[74px] rounded-[80px] px-[34px] py-[24px] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] border-none outline-none font-['Manrope'] text-[clamp(16px,2vw,18px)] font-medium text-[#132436] placeholder:text-[#9CA3AF] focus:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                    required
                  />
                </div>
              </div>

              {/* Description Textarea - Seventh Image */}
              <div className="w-full">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  rows="6"
                  className="w-full min-h-[161px] rounded-[16px] px-[34px] pt-[24px] pb-[110px] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] border-none outline-none resize-none font-['Manrope'] text-[clamp(16px,2vw,18px)] font-medium text-[#132436] placeholder:text-[#9CA3AF] focus:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                  required
                />
              </div>

              {/* Submit Button - Eighth Image */}
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-[217px] h-[80px] rounded-[50px] px-[24px] py-[16px] bg-[#EB3609] hover:bg-[#D32F08] active:bg-[#C22907] transition-colors duration-300 shadow-[0px_4px_16px_0px_rgba(235,54,9,0.3)] hover:shadow-[0px_6px_20px_0px_rgba(235,54,9,0.4)] flex items-center justify-center gap-[13px]"
                >
                  <span className="font-['Inter'] text-[20px] font-semibold leading-[100%] tracking-normal text-center text-white">
                    Submit Request
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
