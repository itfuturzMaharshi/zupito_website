function Header() {
  return (
    <header className="sticky top-0 w-full h-[84px] bg-white border-b border-[#EEF0F3] z-50">
      {/* Container with responsive padding */}
      <div className="w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]!">
        {/* Content wrapper with max-width 1520px and space-between layout */}
        <div className="max-w-[full] h-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <img src="/images/zupito_logo.png" alt="Zupito" className="h-8 md:h-9 w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-11">
            <button className="flex items-center gap-1 text-gray-800 hover:text-[#FF6B35] transition-colors text-sm md:text-base font-medium">
              Product
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <a href="#use-cases" className="text-gray-800 hover:text-[#FF6B35] transition-colors text-sm md:text-base font-medium">
              Use Cases
            </a>
            
            <a href="#pricing" className="text-gray-800 hover:text-[#FF6B35] transition-colors text-sm md:text-base font-medium">
              Pricing
            </a>
            
            <button className="flex items-center gap-1 text-gray-800 hover:text-[#FF6B35] transition-colors text-sm md:text-base font-medium">
              Resources
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <a href="#blog" className="text-gray-800 hover:text-[#FF6B35] transition-colors text-sm md:text-base font-medium">
              Blog
            </a>
            
            <a href="#deals" className="text-gray-800 hover:text-[#FF6B35] transition-colors text-sm md:text-base font-medium">
              Deals
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center shrink-0 gap-4 md:gap-5">
            {/* Start for Free Button */}
            <button 
              className="flex items-center justify-center transition-colors rounded-[40px] bg-[#F6F6F6] hover:bg-[#EEEEEE]"
              style={{ 
                minWidth: '160px', 
                height: '52px', 
                padding: '14px 20px',
                gap: '10px'
              }}
            >
              <svg 
                className="w-5 h-5 text-[#132436]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[#132436] font-semibold text-sm md:text-base whitespace-nowrap">Start for Free</span>
            </button>

            {/* Log In Button */}
            <button 
              className="flex items-center justify-center transition-colors rounded-[50px] bg-[#EB3609] hover:bg-[#FF6B35]"
              style={{ 
                minWidth: '130px', 
                height: '52px', 
                padding: '14px 28px',
                gap: '10px'
              }}
            >
              <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Log In</span>
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
