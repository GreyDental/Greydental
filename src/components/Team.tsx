import Image from "next/image";

export default function Team() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-blueBg py-14 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-8 items-stretch">
        {/* Left Column: Text Card */}
        <div className="w-full min-w-0 lg:flex-[3] bg-white rounded-[24px] sm:rounded-[32px] p-7 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl flex flex-col justify-center">
          

          <div className="relative z-10 flex flex-col">
            <h2 className="text-[26px] sm:text-3xl lg:text-[38px] font-semi_bold_24pt bg-gradient-to-r from-blueGradient1 via-blueGradient2 to-greenGradient1 to-[80%] bg-clip-text text-transparent mb-6 sm:mb-8 tracking-tight leading-tight">
              Meet the mind behind Grey Dental
            </h2>
            
            <p className="text-gray-500 font-regular_18pt text-[15px] sm:text-[17px] leading-relaxed mb-8 sm:mb-10">
              Grey Dental was founded by a practicing endodontist with 15 years of clinical experience, 
              frustrated by CE programs that never quite matched real caseloads - so he built the one 
              he wished existed: grounded in real cases, taught by specialists still in practice, 
              made for dentists who don&apos;t have time to waste.
            </p>

            <blockquote className="text-blueText font-inter-medium_18pt text-[14px] sm:text-[15px] leading-relaxed border-l-2 border-transparent">
              &quot;I built Grey Dental to be the CE program I wished I&apos;d had - 
              grounded in real cases, taught by people still doing the work&quot;.
            </blockquote>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full min-w-0 lg:flex-[2] relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] max-w-md mx-auto lg:max-w-none px-2 sm:px-4 lg:px-0">
          {/* Green backdrop */}
          <div className="absolute inset-0 bg-greenBg rounded-[24px] sm:rounded-[32px] -rotate-3 scale-[0.98] shadow-lg"></div>
          
          {/* Actual image wrapper */}
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
            <Image 
              src="/home-page-team/team-1.jpg" 
              fill 
              className="object-cover" 
              alt="Dr. James Arrington" 
            />
          </div>
          
          {/* Floating overlay card */}
          <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[240px] sm:max-w-[280px]">
            <h4 className="font-semi_bold_24pt text-[15px] sm:text-[16px] text-blueText mb-1">Dr. James Arrington, DDS</h4>
            <p className="font-regular_18pt text-[12px] sm:text-[13px] text-gray-500">Private Practice Owner, London</p>
          </div>
        </div>
      </div>
    </section>
  );
}
