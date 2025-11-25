function PromotionalBanner() {
  return (
    <div
      className="hidden lg:flex sticky top-0 w-full bg-[#FDEBE6] h-[54px] items-center justify-center border-b border-[#F5D2C9]"
      style={{ zIndex: 70 }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-['Inter'] text-[#2E3E50] text-center font-medium leading-tight">
          Introducing <span className="text-[#132436] font-medium">Zupito <span className="font-extrabold" style={{ fontFamily: '"MADE TOMMY", sans-serif' }}>25,000</span></span> Validation Credits/mo + <span className="text-[#132436] font-extrabold">6</span> Deliverability Tools - Just <span className="text-[#132436] font-extrabold">$99</span>/mo
        </p>
      </div>
    </div>
  );
}

export default PromotionalBanner;

