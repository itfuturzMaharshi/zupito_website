import { useState, useEffect, useRef } from "react";

const Dummy2Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] =
    useState(false);
  const [isMobileResourcesDropdownOpen, setIsMobileResourcesDropdownOpen] =
    useState(false);
  const productDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductDropdownOpen(false);
    setIsMobileResourcesDropdownOpen(false);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  const toggleMobileProductDropdown = () => {
    setIsMobileProductDropdownOpen(!isMobileProductDropdownOpen);
  };

  const toggleMobileResourcesDropdown = () => {
    setIsMobileResourcesDropdownOpen(!isMobileResourcesDropdownOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target)
      ) {
        setIsProductDropdownOpen(false);
      }
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target)
      ) {
        setIsResourcesDropdownOpen(false);
      }
    };

    if (isProductDropdownOpen || isResourcesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProductDropdownOpen, isResourcesDropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="w-full bg-white border-b border-[#EEF0F3] sticky top-0 z-40"
      style={{
        height: "124px",
        borderBottomWidth: "0.75px",
      }}
    >
      {/* Main Container */}
      <div className="w-full h-full max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-[340px] flex items-center">
        {/* Navigation Container */}
        <div
          className="w-full flex items-center justify-between"
          style={{
            maxWidth: "1920px",
            margin: "0 auto",
            height: "48.75px",
          }}
        >
          {/* Logo */}
          <div className="shrink-0">
            <a href="/">
              <img
                src="/images/zupito_logo.svg"
                alt="Zupito"
                className="h-40 w-[140px]"
                style={{ height: "auto" }}
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 relative">
            {/* Product Dropdown */}
            <div className="relative" ref={productDropdownRef}>
              <button
                onClick={toggleProductDropdown}
                className="flex items-center gap-1 text-[#132436] hover:text-[#EB3609] transition-colors"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Product
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isProductDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Product Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#EEF0F3] py-2 z-50">
                  <a
                    href="/"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#EB3609] transition-colors text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/email-finder"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#EB3609] transition-colors text-sm font-medium"
                  >
                    Email Finder
                  </a>
                  <a
                    href="/email-verifier"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#EB3609] transition-colors text-sm font-medium"
                  >
                    Email Verifier
                  </a>
                </div>
              )}
            </div>

            <a
              href="/use-cases"
              className="text-[#132436] hover:text-[#EB3609] transition-colors"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              Use Cases
            </a>

            <a
              href="/pricing"
              className="text-[#132436] hover:text-[#EB3609] transition-colors"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              Pricing
            </a>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesDropdownRef}>
              <button
                onClick={toggleResourcesDropdown}
                className="flex items-center gap-1 text-[#132436] hover:text-[#EB3609] transition-colors"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isResourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Resources Dropdown Menu */}
              {isResourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#EEF0F3] py-2 z-50">
                  <a
                    href="/help-desk"
                    onClick={() => setIsResourcesDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#EB3609] transition-colors text-sm font-medium"
                  >
                    Help Desk
                  </a>
                  <a
                    href="#documentation"
                    onClick={() => setIsResourcesDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F6F6F6] hover:text-[#EB3609] transition-colors text-sm font-medium"
                  >
                    Documentation
                  </a>
                </div>
              )}
            </div>

            <a
              href="#blog"
              className="text-[#132436] hover:text-[#EB3609] transition-colors"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              Blog
            </a>

            <a
              href="/deals"
              className="text-[#132436] hover:text-[#EB3609] transition-colors"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              Deals
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center shrink-0 gap-5">
            {/* Start for Free Button */}
            <button
              className="flex items-center justify-center transition-colors bg-[#F6F6F6] hover:bg-[#EEEEEE]"
              style={{
                // width: "213px",
                // height: "65px",
                gap: "7.5px",
                borderRadius: "40px",
                padding: "16px 20px",
              }}
            >
              <img
                src="/images/user-rounded.svg"
                alt="User icon"
                className="w-5 h-5"
                style={{ width: "20px", height: "20px" }}
              />
              <span
                className="text-[#132436] whitespace-nowrap"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Start for Free
              </span>
            </button>

            {/* Log In Button */}
            <button
              className="flex items-center justify-center transition-colors bg-[#EB3609] hover:bg-[#D32F08]"
              style={{
                // width: "178px",
                // height: "62px",
                borderRadius: "50px",
                padding: "12px 20px",
              }}
            >
              <span
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Log In
              </span>
              <img
                src="/images/right-arrow.svg"
                alt="Right arrow"
                className="w-5 h-5 mx-1"
              />
            </button>
          </div>

          {/* Hamburger Menu Button - Mobile/Tablet */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-[#132436] hover:text-[#EB3609] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          {/* Modal Header with Logo and Close Button */}
          <div className="sticky top-0 bg-white border-b border-[#EEF0F3] px-4 sm:px-6 py-4 flex items-center justify-between z-10">
            {/* Logo */}
            <div className="shrink-0">
              <a href="/" onClick={closeMobileMenu}>
                <img
                  src="/images/zupito_logo.svg"
                  alt="Zupito"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-10 h-10 text-[#132436] hover:text-[#EB3609] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div className="px-4 sm:px-6 py-8">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Navigation Links */}
              <div>
                <button
                  onClick={toggleMobileProductDropdown}
                  className="flex items-center justify-between w-full text-[#132436] hover:text-[#EB3609] transition-colors py-3"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                  }}
                >
                  <span>Product</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isMobileProductDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile Product Dropdown */}
                {isMobileProductDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a
                      href="/"
                      onClick={closeMobileMenu}
                      className="block text-[#132436] hover:text-[#EB3609] transition-colors py-2"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Home
                    </a>
                    <a
                      href="/email-finder"
                      onClick={closeMobileMenu}
                      className="block text-[#132436] hover:text-[#EB3609] transition-colors py-2"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Email Finder
                    </a>
                    <a
                      href="/email-verifier"
                      onClick={closeMobileMenu}
                      className="block text-[#132436] hover:text-[#EB3609] transition-colors py-2"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Email Verifier
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/use-cases"
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#EB3609] transition-colors py-3"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Use Cases
              </a>

              <a
                href="/pricing"
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#EB3609] transition-colors py-3"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Pricing
              </a>

              <div>
                <button
                  onClick={toggleMobileResourcesDropdown}
                  className="flex items-center justify-between w-full text-[#132436] hover:text-[#EB3609] transition-colors py-3"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                  }}
                >
                  <span>Resources</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isMobileResourcesDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile Resources Dropdown */}
                {isMobileResourcesDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a
                      href="/help-desk"
                      onClick={closeMobileMenu}
                      className="block text-[#132436] hover:text-[#EB3609] transition-colors py-2"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Help Desk
                    </a>
                    <a
                      href="#documentation"
                      onClick={closeMobileMenu}
                      className="block text-[#132436] hover:text-[#EB3609] transition-colors py-2"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Documentation
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#blog"
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#EB3609] transition-colors py-3"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Blog
              </a>

              <a
                href="/deals"
                onClick={closeMobileMenu}
                className="text-[#132436] hover:text-[#EB3609] transition-colors py-3"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Deals
              </a>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-[#EEF0F3] mt-4">
                {/* Start for Free Button */}
                <button
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center transition-colors bg-[#F6F6F6] hover:bg-[#EEEEEE] w-full"
                  style={{
                    height: "48px",
                    gap: "7.5px",
                    borderRadius: "30px",
                    padding: "12px 15px",
                  }}
                >
                  <img
                    src="/images/user-rounded.svg"
                    alt="User icon"
                    className="w-5 h-5"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span
                    className="text-[#132436] whitespace-nowrap"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                    }}
                  >
                    Start for Free
                  </span>
                </button>

                {/* Log In Button */}
                <button
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center transition-colors bg-[#EB3609] hover:bg-[#D32F08] w-full"
                  style={{
                    height: "47px",
                    borderRadius: "37.5px",
                    padding: "12px 32.25px",
                  }}
                >
                  <span
                    className="text-white whitespace-nowrap"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 600,
                      fontSize: "16.5px",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                    }}
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
};

export default Dummy2Header;
