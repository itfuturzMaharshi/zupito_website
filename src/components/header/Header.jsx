import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductDropdownOpen(false);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const toggleMobileProductDropdown = () => {
    setIsMobileProductDropdownOpen(!isMobileProductDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductDropdownOpen(false);
      }
    };

    if (isProductDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductDropdownOpen]);

  return (
    <header className="sticky top-0 w-full h-[84px] bg-white border-b border-[#EEF0F3] z-50">
      {/* Container with responsive padding */}
      <div className="w-full h-full px-6! sm:px-8! md:px-12! lg:px-10! xl:px-24! 2xl:px-[150px]!">
        {/* Content wrapper with max-width 1520px and space-between layout */}
        <div className="max-w-full lg:max-w-[1362px] h-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <img src="/images/zupito_logo.png" alt="Zupito" className="h-7 sm:h-9 md:h-10 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-8 relative">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleProductDropdown}
                className="flex items-center gap-1 text-[#132436] hover:text-[#FF6B35] transition-colors header-nav-link"
                style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
              >
                Product
                <svg 
                  className={`w-4 h-4 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Product Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#EEF0F3] py-2 z-50">
                  <Link
                    to="/"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#FF6B35] transition-colors text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/email-finder"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#FF6B35] transition-colors text-sm font-medium"
                  >
                    Email Finder Page
                  </Link>
                  <Link
                    to="/email-verifier"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#FF6B35] transition-colors text-sm font-medium"
                  >
                    Email Verifier Page
                  </Link>
                  <Link
                    to="/help-desk"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#FF6B35] transition-colors text-sm font-medium"
                  >
                    Help Desk Page
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/use-cases" 
              className="text-[#132436] hover:text-[#FF6B35] transition-colors header-nav-link"
              style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
            >
              Use Cases
            </Link>
            
            <Link 
              to="/pricing" 
              className="text-[#132436] hover:text-[#FF6B35] transition-colors header-nav-link"
              style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
            >
              Pricing
            </Link>
            
            <button 
              className="flex items-center gap-1 text-[#132436] hover:text-[#FF6B35] transition-colors header-nav-link"
              style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
            >
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
            
            <a 
              href="#blog" 
              className="text-[#132436] hover:text-[#FF6B35] transition-colors header-nav-link"
              style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
            >
              Blog
            </a>
            
            <Link 
              to="/deals" 
              className="text-[#132436] hover:text-[#FF6B35] transition-colors header-nav-link"
              style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
            >
              Deals
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center shrink-0 gap-4 md:gap-5">
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
              <img 
                src="/images/user-rounded.svg" 
                alt="User icon" 
                className="w-5 h-5"
              />
              <span 
                className="text-[#132436] whitespace-nowrap header-button-text"
                style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: '18px', lineHeight: '100%' }}
              >
                Start for Free
              </span>
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
              <span 
                className="text-white whitespace-nowrap header-button-text"
                style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: '18px', lineHeight: '100%' }}
              >
                Log In
              </span>
              <img 
                src="/images/right-arrow.svg" 
                alt="Right arrow" 
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Hamburger Menu Button - Mobile/Tablet */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-800 hover:text-[#FF6B35] transition-colors"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          {/* Modal Header with Logo and Close Button */}
          <div className="sticky top-0 bg-white border-b border-[#EEF0F3] px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between z-10">
            {/* Logo */}
            <div className="shrink-0">
              <img src="/images/zupito_logo.png" alt="Zupito" className="h-8 md:h-9 w-auto" />
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-10 h-10 text-gray-800 hover:text-[#FF6B35] transition-colors"
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div className="px-4 sm:px-6 md:px-8 py-8">
            <nav className="flex flex-col space-y-6">
              {/* Mobile Navigation Links */}
              <div>
                <button 
                  onClick={toggleMobileProductDropdown}
                  className="flex items-center justify-between w-full text-[#132436] hover:text-[#FF6B35] transition-colors py-2"
                  style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
                >
                  <span>Product</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${isMobileProductDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Product Dropdown */}
                {isMobileProductDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-[#FF6B35] transition-colors text-[20px] font-medium py-2"
                    >
                      Home
                    </Link>
                    <Link
                      to="/email-finder"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-[#FF6B35] transition-colors text-base font-medium py-2"
                    >
                      Email Finder Page
                    </Link>
                    <Link
                      to="/email-verifier"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-[#FF6B35] transition-colors text-base font-medium py-2"
                    >
                      Email Verifier Page
                    </Link>
                    <Link
                      to="/help-desk"
                      onClick={closeMobileMenu}
                      className="block text-gray-800 hover:text-[#FF6B35] transition-colors text-base font-medium py-2"
                    >
                      Help Desk Page
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/use-cases" 
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#FF6B35] transition-colors py-2"
                style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
              >
                Use Cases
              </Link>
              
              <Link 
                to="/pricing" 
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#FF6B35] transition-colors py-2"
                style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
              >
                Pricing
              </Link>
              
              <button 
                onClick={closeMobileMenu}
                className="flex items-center justify-between text-[#132436] hover:text-[#FF6B35] transition-colors py-2"
                style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
              >
                <span>Resources</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <a 
                href="#blog" 
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#FF6B35] transition-colors py-2"
                style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
              >
                Blog
              </a>
              
              <Link 
                to="/deals" 
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#FF6B35] transition-colors py-2"
                style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: '20px', lineHeight: '100%' }}
              >
                Deals
              </Link>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-[#EEF0F3]">
                {/* Start for Free Button */}
                <button 
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center transition-colors rounded-[40px] bg-[#F6F6F6] hover:bg-[#EEEEEE] w-full"
                  style={{ 
                    height: '48px', 
                    padding: '12px 20px',
                    gap: '10px'
                  }}
                >
                  <img 
                    src="/images/user-rounded.svg" 
                    alt="User icon" 
                    className="w-5 h-5"
                  />
                  <span 
                    className="text-[#132436] whitespace-nowrap"
                    style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: '18px', lineHeight: '100%' }}
                  >
                    Start for Free
                  </span>
                </button>

                {/* Log In Button */}
                <button 
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center transition-colors rounded-[50px] bg-[#EB3609] hover:bg-[#FF6B35] w-full"
                  style={{ 
                    height: '48px', 
                    padding: '12px 28px',
                    gap: '10px'
                  }}
                >
                  <span 
                    className="text-white whitespace-nowrap"
                    style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: '18px', lineHeight: '100%' }}
                  >
                    Log In
                  </span>
                  <img 
                    src="/images/right-arrow.svg" 
                    alt="Right arrow" 
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
