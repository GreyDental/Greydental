'use client'

export default function Newsletter() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#F4F7F8] py-16 sm:py-20 md:py-24 border-t border-gray-50 flex flex-col overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 xl:gap-24">
        
        {/* Left Side: Heading */}
        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="text-[36px] sm:text-[40px] md:text-5xl lg:text-[56px] font-semi_bold_24pt tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-blueBg to-blueGradient3 bg-clip-text text-transparent">The APEX</span> <br />
            <span className="bg-gradient-to-r from-blueGradient1 via-blueGradient2 to-greenGradient1 to-[80%] bg-clip-text text-transparent">
              Newsletter
            </span>
          </h2>
        </div>

        {/* Right Side: Content and Form */}
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-gray-500 font-regular_18pt text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-6 sm:mb-8 max-w-lg">
            Clinical insights, case studies, and new course announcements delivered bi-weekly to your inbox. No fluff, just science.
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row sm:items-center w-full max-w-[480px] bg-white border border-gray-200 rounded-[8px] shadow-sm overflow-hidden p-1.5 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200 transition-all gap-2 sm:gap-0"
          >
            <input 
              type="email" 
              placeholder="apex@academy.com" 
              className="flex-grow px-4 py-3 outline-none text-darkBlueText font-regular_18pt text-[15px] placeholder:text-gray-400 bg-transparent w-full min-w-0"
              required
            />
            <button 
              type="submit" 
              className="bg-blueBg hover:bg-blueBtnBg group inline-flex items-center justify-center h-[46px] px-6 sm:px-8 rounded-[6px] text-[15px] font-inter-medium_18pt overflow-hidden transition-colors duration-200 flex-shrink-0 w-full sm:w-auto"
            >
              <span className="text-white">Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
