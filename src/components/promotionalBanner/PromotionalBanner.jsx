function PromotionalBanner() {
  return (
    <div className="w-full bg-[#FDEBE6] h-[64px] flex items-center justify-center py-4 px-4">
      <div className="max-w-[1920px] w-full flex items-center justify-center">
        <p className="text-[22px] font-['Inter']  md:text-lg text-[#3A4A5A] text-center font-normal">
          Introducing <span className=" text-[#132436]">Zupito <span className="font-extrabold" style={{ fontFamily: '"MADE TOMMY", sans-serif' }}>25,000</span></span> Validation Credits/mo + <span className=" text-[#132436] font-medium" >6</span> Deliverability Tools - Just <span className=" text-[#132436] font-medium">$99</span>/mo
        </p>
      </div>
    </div>
  );
}

export default PromotionalBanner;

