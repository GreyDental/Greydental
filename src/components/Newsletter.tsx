'use client'
export default function Newsletter() {
  return (
    <section className="w-full bg-white py-24 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Heading */}
        <div className="flex flex-col">
          <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-semi_bold_24pt tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-blueBg to-blueGradient3 bg-clip-text text-transparent">The APEX</span> <br />
            <span className="bg-gradient-to-r from-blueGradient1 via-blueGradient2 to-greenGradient1 to-[80%] bg-clip-text text-transparent">
              Newsletter
            </span>
          </h2>
        </div>

        {/* Right Side: Content and Form */}
        <div className="flex flex-col">
          <p className="text-gray-500 font-regular_18pt text-[16px] lg:text-[17px] leading-relaxed mb-8 max-w-lg">
            Clinical insights, case studies, and new course announcements delivered bi-weekly to your inbox. No fluff, just science.
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full max-w-[480px] bg-white border border-gray-200 rounded-[8px] shadow-sm overflow-hidden p-1.5 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200 transition-all"
          >
            <input 
              type="email" 
              placeholder="apex@academy.com" 
              className="flex-grow px-4 py-3 outline-none text-darkBlueText font-regular_18pt text-[15px] placeholder:text-gray-400 bg-transparent w-full"
              required
            />
            <button 
              type="submit" 
              className="bg-blueBg hover:bg-blueBtnBg group inline-flex items-start justify-center h-[46px] px-8 rounded-[6px] text-[15px] font-inter-medium_18pt overflow-hidden transition-colors duration-200 flex-shrink-0"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="h-[46px] flex items-center text-white">Subscribe</span>
                <span className="h-[46px] flex items-center text-white">Subscribe</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
