import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-greyBg py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="flex-1 min-w-0">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-[#F4F8FD] mb-6 text-center">
              <span className="text-xs font-semi_bold_24pt tracking-widest text-blueText uppercase">
                Categories we offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semi_bold_24pt text-darkBlueText leading-[1.2] tracking-tight max-w-3xl">
              Structured learning paths across the specialties dentists ask for most.
            </h2>
          </div>
          <div className="md:w-1/3 min-w-0 text-gray-500 text-[15px] font-regular_18pt leading-relaxed pb-2">
            Every course follows peer-reviewed standards and proven surgical protocols.
          </div>
        </div>

        {/* Cards Area */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Card: Endodontics Foundation */}
          <Link
            href="/courses/endodontics-remote"
            className="relative h-[320px] sm:h-[400px] lg:h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden group shadow-[12px_12px_24px_rgba(0,0,0,0.1)] w-full min-w-0 lg:flex-[3]"
          >
            <Image
              src="/main-page-categories/endodontics.jpg"
              alt="Endodontics Foundation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141517]/90 via-[#141517]/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-greenBg rounded-xl flex items-center justify-center text-white mb-4 sm:mb-5 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24">
                  <path d="M7 3C4 3 2 5 2 8C2 11 4.5 12 5 17C5 19 6 21 8 21C9 21 10 19 10 17V14C10 14 12 14 12 14V17C12 19 13 21 14 21C16 21 17 19 17 17C17.5 12 20 11 20 8C20 5 18 3 15 3C13 3 12 5 11 5C10 5 9 3 7 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[24px] sm:text-[32px] font-semi_bold_24pt text-white mb-2 leading-tight">Endodontics Foundation</h3>
              <p className="text-gray-300 font-regular_18pt text-sm sm:text-base">48 Specialized Courses</p>
            </div>
          </Link>

          {/* Right Cards Stack */}
          <div className="flex flex-col gap-6 w-full min-w-0 lg:flex-[2]">
            <Link
              href="/courses/endodontics-residency"
              className="flex-1 min-w-0 bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-center border border-gray-100 shadow-[12px_12px_24px_rgba(0,0,0,0.06)] hover:shadow-[16px_16px_32px_rgba(0,0,0,0.1)] transition-shadow min-h-[160px]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F8FAFC] border border-gray-100 rounded-xl flex items-center justify-center text-blueText mb-5 sm:mb-6 shadow-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-[22px] sm:text-[28px] font-semi_bold_24pt text-blueText mb-2 leading-tight">Hybrid Residency</h3>
              <p className="text-gray-500 font-regular_18pt text-sm sm:text-base">124 General Courses</p>
            </Link>

            <Link
              href="/workshops"
              className="flex-1 min-w-0 bg-blueBg rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-center shadow-[12px_12px_24px_rgba(0,0,0,0.15)] hover:shadow-[16px_16px_32px_rgba(0,0,0,0.25)] transition-shadow min-h-[160px]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-greenBg rounded-xl flex items-center justify-center text-white mb-5 sm:mb-6 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-[22px] sm:text-[28px] font-semi_bold_24pt text-white mb-2 leading-tight">Clinical Case Workshop</h3>
              <p className="text-gray-300 font-regular_18pt text-sm sm:text-base">32 Clinical Modules</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
